const pool = require('../../config/db.js')
const {toJS} = require("mobx");

const getTechProcess = async (req, res) => {
	const dataTechProcess = await pool.query(`SELECT * FROM sptd.tech;`)
	res.json(dataTechProcess.rows)
}

const getOperation = async (req, res) => {

	const tech_id = req.params.id

	let dataOperations = await pool.query(
		'SELECT * FROM sptd.oper where tech_id = $1 order by "numberOperation" asc;',
		[tech_id]
	)

	const dataTransition = await pool.query(`SELECT * FROM sptd.transition;`)
	const dataExecutor = await pool.query(`SELECT * FROM sptd.executor;`)

	for (const operation of dataOperations["rows"]) {

		operation["transition"] = []
		operation["equipment"] = []
		operation["adaptation"] = []
		operation["tool"] = []
		operation["clicked"] = false

		dataTransition["rows"].forEach(transition => {
			transition["executor"] = []
			if (transition["oper_id"] === operation["oper_id"]) {
				operation["transition"].push(transition)
			}
		})
		try {
			const nameEquipment = await pool.query(
				'select o_e.equipment_id, e."nameEquipment", n_e."inventoryNumber", n_e."codeEquipment", o_e.oper_id, o_e.number_id\n' +
				'from sptd.oper_equipment as o_e left join sptd.equipment as e\n' +
				'on o_e.equipment_id = e.equipment_id\n' +
				'left join sptd.number_equipment as n_e\n' +
				'on o_e.number_id = n_e.number_id \n' +
				'where oper_id = $1;',
				[operation["oper_id"]]
			)
			operation["equipment"] = nameEquipment["rows"]

			const nameAdaptation = await pool.query(
				'select o_a.adaptation_id, a."nameAdaptation", n_a."inventoryNumber", n_a."codeAdaptation", o_a.oper_id, o_a.number_id\n' +
				'from sptd.oper_adaptation as o_a left join sptd.adaptation as a\n' +
				'on o_a.adaptation_id = a.adaptation_id\n' +
				'left join sptd.number_adaptation as n_a\n' +
				'on o_a.number_id = n_a.number_id \n' +
				'where oper_id = $1;',
				[operation["oper_id"]]
			)
			operation["adaptation"] = nameAdaptation["rows"]

			const nameTool = await pool.query(
				'select o_t.tool_id, t."nameTool", n_t."inventoryNumber", n_t."codeTool", o_t.oper_id, o_t.number_id\n' +
				'from sptd.oper_tool as o_t left join sptd.tool as t\n' +
				'on o_t.tool_id = t.tool_id\n' +
				'left join sptd.number_tool as n_t\n' +
				'on o_t.number_id = n_t.number_id \n' +
				'where oper_id = $1;',
				[operation["oper_id"]]
			)
			operation["tool"] = nameTool["rows"]

		} catch (e) {
			console.log(e)
		}
	}

	dataOperations["rows"].forEach((operation) => {
		operation["transition"].forEach((transition) => {
			dataExecutor["rows"].forEach((executor) => {
				if (transition["trans_id"] === executor["trans_id"]) {
					transition["executor"].push(executor)
				}
			})
		})
	})
	res.send(dataOperations.rows)
}

const getOperationItem = async (req, res) => {
	const oper_id = req.params.id
	let dataOperItem = await pool.query(
		'SELECT * FROM sptd.oper where oper_id = $1;',
		[oper_id]
	)
	res.send(dataOperItem["rows"])
}

const getAllFusions = async (req, res) => {

	const {rows} = await pool.query(
		'SELECT * FROM sptd.fusion;'
	)

	res.json(rows)
}

const getAllMetals = async (req, res) => {

	const dataMetals = await pool.query(
		`SELECT * FROM sptd.kind_metals;`
	)

	res.json(dataMetals.rows)
}

const getAllMarks = async (req, res) => {

	const dataMarkMetals = await pool.query(
		`SELECT * FROM sptd.mark_metals;`
	)

	res.json(dataMarkMetals.rows)
}

const getFusionTechProcess = async (req, res) => {
	const tech_id = req.params.id
	const dataMaterialTechProcess = await pool.query(
		'SELECT * FROM sptd.tech_fusion where tech_id = $1;',
		[tech_id]
	)
	res.json(dataMaterialTechProcess["rows"])
}

const getInitialForm = async (req, res) => {
	const {rows} = await pool.query(
		'SELECT * FROM sptd.initial_form;',
	)
	res.json(rows)
}

const getCheckTechProcess = async (req, res) => {
	const tech_id = req.params.id
	const {rows} = await pool.query(
		`SELECT * FROM sptd.tech_fusion where tech_id = $1;`,
		[tech_id]
	)
	res.json(rows)
}

const getEquipment = async (req, res) => {
	const {rows} = await pool.query(
		'SELECT * FROM sptd.equipment;',
	)
	res.json(rows)
}

const getNumberEquipment = async (req, res) => {
	const {rows} = await pool.query(
		'SELECT * FROM sptd.number_equipment;',
	)
	res.json(rows)
}

const getAdaptation = async (req, res) => {
	const {rows} = await pool.query(
		'SELECT * FROM sptd.adaptation;',
	)
	res.json(rows)
}

const getNumberAdaptation = async (req, res) => {
	const {rows} = await pool.query(
		'SELECT * FROM sptd.number_adaptation;',
	)
	res.json(rows)
}

const getTool = async (req, res) => {
	const {rows} = await pool.query(
		'SELECT * FROM sptd.tool;',
	)
	res.json(rows)
}

const getNumberTool = async (req, res) => {
	const {rows} = await pool.query(
		'SELECT * FROM sptd.number_tool;',
	)
	res.json(rows)
}

const getTestData = async (req, res) => {
	let dataEquipment
	const tech_id = "2"

	let allOperOnTech_id = await pool.query(
		'select * from sptd.oper where tech_id=$1',
		[tech_id]
	)

	for (const oper of allOperOnTech_id["rows"]) {
		oper["equipment"] = []
		oper["transition"] = []
		oper["adaptation"] = []
		oper["tool"] = []
		try {
			const nameEquipment = await pool.query(
				'select o_e.equipment_id, e."nameEquipment", n_e."inventoryNumber", n_e."codeEquipment", o_e.oper_id, o_e.number_id\n' +
				'from sptd.oper_equipment as o_e left join sptd.equipment as e\n' +
				'on o_e.equipment_id = e.equipment_id\n' +
				'left join sptd.number_equipment as n_e\n' +
				'on o_e.number_id = n_e.number_id \n' +
				'where oper_id = $1;',
				[oper["oper_id"]]
			)
			oper["equipment"] = nameEquipment["rows"]

			const nameAdaptation = await pool.query(
				'select o_a.adaptation_id, a."nameAdaptation", n_a."inventoryNumber", n_a."codeAdaptation", o_a.oper_id, o_a.number_id\n' +
				'from sptd.oper_adaptation as o_a left join sptd.adaptation as a\n' +
				'on o_a.adaptation_id = a.adaptation_id\n' +
				'left join sptd.number_adaptation as n_a\n' +
				'on o_a.number_id = n_a.number_id \n' +
				'where oper_id = $1;',
				[oper["oper_id"]]
			)
			oper["adaptation"] = nameAdaptation["rows"]

			const nameTool = await pool.query(
				'select o_t.tool_id, t."nameTool", n_t."inventoryNumber", n_t."codeTool", o_t.oper_id, o_t.number_id\n' +
				'from sptd.oper_tool as o_t left join sptd.tool as t\n' +
				'on o_t.tool_id = t.tool_id\n' +
				'left join sptd.number_tool as n_t\n' +
				'on o_t.number_id = n_t.number_id \n' +
				'where oper_id = $1;',
				[oper["oper_id"]]
			)
			oper["tool"] = nameTool["rows"]

		} catch (e) {
			console.log(e)
		}
	}

	dataEquipment = allOperOnTech_id["rows"]

	res.json(dataEquipment)
}

module.exports = {
	getTechProcess,
	getOperation,
	getOperationItem,
	getAllFusions,
	getAllMetals,
	getAllMarks,
	getFusionTechProcess,
	getInitialForm,
	getEquipment,
	getCheckTechProcess,
	getNumberEquipment,
	getAdaptation,
	getNumberAdaptation,
	getTool,
	getNumberTool,
	getTestData
}