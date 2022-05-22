const pool = require('../../config/db.js')

const createTechProcess = (req, res) => {
	const {tech_id, techName, techMark, techWorkshop} = req.body
	pool.query(
		'Insert into sptd.tech values ($1, $2, $3, $4)',
		[
			tech_id,
			techName,
			techMark,
			techWorkshop
		],
		(err) => {
			if (!err) {
				res.json("TechProcess has created")
			} else {
				res.json(err)
				console.log(err)
			}
		}
	)
}

const createTechFusion = (req, res) => {
	const {tech_id, fusion_id, metal_id, mark_id, form_id} = req.body
	pool.query(
		'Insert into sptd.tech_fusion values ($1, $2, $3, $4, $5)',
		[
			tech_id,
			fusion_id,
			metal_id,
			mark_id,
			form_id
		],
		(err) => {
			if (!err) {
				res.json("Data has created")
			} else {
				res.json(err)
				console.log(err)
			}
		}
	)
}

const createOperation = (req, res) => {
	const {
		oper_id,
		nameOperation,
		numberOperation,
		workshop,
		area,
		OO,
		OTK,
		PZ,
		KPS,
		tech_id
	} = req.body
	pool.query(
		'Insert into sptd.oper values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)',
		[
			oper_id,
			nameOperation,
			numberOperation,
			workshop,
			area,
			OO,
			OTK,
			PZ,
			KPS,
			tech_id
		],
		(err) => {
			if (!err) {
				res.json("Operation has created")
			} else {
				res.json(err)
				console.log(err)
			}
		}
	)
}

const createTransition = (req, res) => {
	const {trans_id, nameTransition, oper_id} = req.body
	pool.query(
		'Insert into sptd.transition values ($1, $2, $3)',
		[trans_id, nameTransition, oper_id],
		(err) => {
			if (!err) {
				res.json("Transition has created")
			} else {
				res.json(err)
				console.log(err)
			}
		}
	)
}

const createEquipment = (req, res) => {
	const {oper_id, equipment_id, number_id} = req.body
	pool.query(
		'Insert into sptd.oper_equipment values ($1, $2, $3)',
		[oper_id, equipment_id, number_id],
		(err) => {
			if (!err) {
				res.json("Equipment has created")
			} else {
				res.json(err)
				console.log(err)
			}
		}
	)
}

const createAdaptation = (req, res) => {
	const {oper_id, adaptation_id, number_id} = req.body
	pool.query(
		'Insert into sptd.oper_adaptation values ($1, $2, $3)',
		[oper_id, adaptation_id, number_id],
		(err) => {
			if (!err) {
				res.json("Equipment has created")
			} else {
				res.json(err)
				console.log(err)
			}
		}
	)
}

const createTool = (req, res) => {
	const {oper_id, tool_id, number_id} = req.body
	pool.query(
		'Insert into sptd.oper_tool values ($1, $2, $3)',
		[oper_id, tool_id, number_id],
		(err) => {
			if (!err) {
				res.json("Equipment has created")
			} else {
				res.json(err)
				console.log(err)
			}
		}
	)
}


const createExecutor = (req, res) => {
	const {
		executor_id,
		nameExecutor,
		tsht,
		tpz,
		test,
		tshtCalculated,
		tpzCalculated,
		testCalculated,
		kvr,
		trans_id
	} = req.body
	pool.query(
		'Insert into sptd.executor values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)',
		[
			executor_id,
			nameExecutor,
			tsht,
			tpz,
			test,
			tshtCalculated,
			tpzCalculated,
			testCalculated,
			kvr,
			trans_id
		],
		(err) => {
			if (!err) {
				res.json("Tool has created")
			} else {
				res.json(err)
				console.log(err)
			}
		}
	)
}

const getCheckEquipment = async (req, res) => {
	const oper_id = req.params.id
	const dataMaterialTechProcess = await pool.query(
		'SELECT * FROM sptd.oper_equipment where oper_id = $1;',
		[oper_id]
	)
	res.json(dataMaterialTechProcess["rows"])
}

const getCheckAdaptation = async (req, res) => {
	const {oper_id, adaptation_id, number_id} = req.body
	const {rows} = await pool.query(
		'SELECT * FROM sptd.oper_adaptation as o_a ' +
		'where o_a.oper_id = $1 and o_a.adaptation_id = $2 and o_a.number_id = $3',
		[oper_id, adaptation_id, number_id]
	)
	res.json(rows)
}

const getCheckTool = async (req, res) => {
	const {oper_id, tool_id, number_id} = req.body
	const {rows} = await pool.query(
		'SELECT * FROM sptd.oper_tool as o_t ' +
		'where o_t.oper_id = $1 and o_t.tool_id = $2 and o_t.number_id = $3',
		[oper_id, tool_id, number_id]
	)
	res.json(rows)
}

const getCheckEditAdaptation = async (req, res) => {
	const {oper_id, item_id, number_id} = req.body
	const {rows} = await pool.query(
		'SELECT * FROM sptd.oper_adaptation as o_a ' +
		'where o_a.oper_id = $1 and o_a.adaptation_id = $2 and o_a.number_id = $3',
		[oper_id, item_id, number_id]
	)
	res.json(rows)
}

const getCheckEditTool = async (req, res) => {
	const {oper_id, item_id, number_id} = req.body
	const {rows} = await pool.query(
		'SELECT * FROM sptd.oper_tool as o_t ' +
		'where o_t.oper_id = $1 and o_t.tool_id = $2 and o_t.number_id = $3',
		[oper_id, item_id, number_id]
	)
	res.json(rows)
}

module.exports = {
	createTechProcess,
	createTechFusion,
	createOperation,
	createTransition,
	createEquipment,
	createAdaptation,
	createTool,
	createExecutor,
	getCheckEquipment,
	getCheckAdaptation,
	getCheckTool,
	getCheckEditAdaptation,
	getCheckEditTool,
}