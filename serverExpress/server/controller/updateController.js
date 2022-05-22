const pool = require('../../config/db.js')

const updateNameTechProcess = (req, res) => {
	const {techName} = req.body
	const tech_id = req.params.id
	pool.query(
		'Update sptd.tech set "techName" = $1 where tech_id = $2',
		[techName, tech_id],
		(err) => {
			if (!err) {
				res.json("Data is updated")
			} else {
				res.json(err)
				console.log(err)
			}
		})
}

const updateMarkTechProcess = (req, res) => {
	const {techMark} = req.body
	const tech_id = req.params.id
	pool.query(
		'Update sptd.tech set "techMark" = $1 where tech_id = $2',
		[techMark, tech_id],
		(err) => {
			if (!err) {
				res.json("Data is updated")
			} else {
				res.json(err)
				console.log(err)
			}
		})
}

const updateWorkshopTechProcess = (req, res) => {
	const {techWorkshop} = req.body
	const tech_id = req.params.id
	pool.query(
		'Update sptd.tech set "techWorkshop" = $1 where tech_id = $2',
		[techWorkshop, tech_id],
		(err) => {
			if (!err) {
				res.json("Data is updated")
			} else {
				res.json(err)
				console.log(err)
			}
		})
}

const updateFusionTechProcess = (req, res) => {
	const {fusion_id, metal_id, mark_id, form_id} = req.body
	const tech_id = req.params.id
	pool.query(
		'Update sptd.tech_fusion set ' +
		'fusion_id = $1,' +
		'metal_id = $2,' +
		'mark_id = $3,' +
		'form_id = $4' +
		'where tech_id = $5',
		[fusion_id, metal_id, mark_id, form_id, tech_id],
		(err) => {
			if (!err) {
				res.json("Data is updated")
			} else {
				res.json(err)
				console.log(err)
			}
		})
}

const updateOperation = (req, res) => {

	const {numberOperation, nameOperation, workshop, area, OO, OTK, PZ, KPS} = req.body

	const oper_id = req.params.id
	pool.query(
		`update sptd.oper set 
		"nameOperation"=$1,
		"numberOperation"=$2,
		workshop=$3,
		area=$4,
		"OO"=$5,
		"OTK"=$6,
		"PZ"=$7,
		"KPS"=$8
		where oper_id=$9`,
		[
			nameOperation,
			numberOperation,
			workshop,
			area,
			OO,
			OTK,
			PZ,
			KPS,
			oper_id
		],
		(err) => {
			if (!err) {
				res.json("Everything correct")
			} else {
				res.json(err)
				console.log(err)
			}
		})
}

const updateNameOperation = (req, res) => {
	const {nameOperation} = req.body
	const oper_id = req.params.id
	pool.query(
		'Update sptd.oper set "nameOperation" = $1 where oper_id = $2',
		[nameOperation, oper_id],
		(err) => {
			if (!err) {
				res.json("Data is updated")
			} else {
				res.json(err)
				console.log(err)
			}
		})
}

const updateEquipment = (req, res) => {
	const prevData = req.body[0]
	const nextData = req.body[1]
	pool.query(
		`update sptd.oper_equipment set
		oper_id=$1,
		equipment_id=$2,
		number_id=$3
		where oper_id=$4 and equipment_id=$5 and number_id=$6`,
		[
			nextData["oper_id_next"],
			nextData["item_id_next"],
			nextData["number_id_next"],
			prevData["oper_id_prev"],
			prevData["item_id_prev"],
			prevData["number_id_prev"]
		],
		(err) => {
			if (!err) {
				res.json("Everything correct")
			} else {
				res.json(err)
				console.log(err)
			}
		})
}

const updateTransition = (req, res) => {
	const {nameTransition} = req.body
	const trans_id = req.params.id
	pool.query(
		`update sptd.transition set 
		"nameTransition"=$1
		where trans_id=$2`,
		[
			nameTransition,
			trans_id
		],
		(err) => {
			if (!err) {
				res.json("Everything correct")
			} else {
				res.json(err)
				console.log(err)
			}
		})
}

const updateExecutor = (req, res) => {
	const {nameExecutor, tsht, tpz, test, kvr} = req.body
	const executor_id = req.params.id
	pool.query(
		`update sptd.executor set 
		"nameExecutor"=$1,
		tsht=$2,
		tpz=$3,
		test=$4,
		kvr=$5
		where executor_id=$6`,
		[
			nameExecutor,
			tsht,
			tpz,
			test,
			kvr,
			executor_id
		],
		(err) => {
			if (!err) {
				res.json("Everything correct")
			} else {
				res.json(err)
				console.log(err)
			}
		})
}

const updateExecutorT = (req, res) => {
	const {tsht, tpz, test, tshtCalculated, tpzCalculated, testCalculated} = req.body
	const executor_id = req.params.id
	pool.query(
		`update sptd.executor set 
		tsht=$1,
		tpz=$2,
		test=$3,
		"tshtCalculated"=$4,
		"tpzCalculated"=$5,
		"testCalculated"=$6
		where executor_id=$7`,
		[
			tsht,
			tpz,
			test,
			tshtCalculated,
			tpzCalculated,
			testCalculated,
			executor_id
		],
		(err) => {
			if (!err) {
				res.json("Data is updated")
			} else {
				res.json(err)
				console.log(err)
			}
		})
}

const updateAdaptation = (req, res) => {
	const prevData = req.body[0]
	const nextData = req.body[1]
	pool.query(
		`update sptd.oper_adaptation set
		oper_id=$1,
		adaptation_id=$2,
		number_id=$3
		where oper_id=$4 and adaptation_id=$5 and number_id=$6`,
		[
			nextData["oper_id_next"],
			nextData["item_id_next"],
			nextData["number_id_next"],
			prevData["oper_id_prev"],
			prevData["item_id_prev"],
			prevData["number_id_prev"]
		],
		(err) => {
			if (!err) {
				res.json("Everything correct")
			} else {
				res.json(err)
				console.log(err)
			}
		})
}

const updateTool = (req, res) => {
	const prevData = req.body[0]
	const nextData = req.body[1]
	pool.query(
		`update sptd.oper_tool set
		oper_id=$1,
		tool_id=$2,
		number_id=$3
		where oper_id=$4 and tool_id=$5 and number_id=$6`,
		[
			nextData["oper_id_next"],
			nextData["item_id_next"],
			nextData["number_id_next"],
			prevData["oper_id_prev"],
			prevData["item_id_prev"],
			prevData["number_id_prev"]
		],
		(err) => {
			if (!err) {
				res.json("Everything correct")
			} else {
				res.json(err)
				console.log(err)
			}
		})
}

module.exports = {
	updateNameTechProcess,
	updateMarkTechProcess,
	updateWorkshopTechProcess,
	updateFusionTechProcess,
	updateOperation,
	updateNameOperation,
	updateEquipment,
	updateTransition,
	updateExecutor,
	updateExecutorT,
	updateAdaptation,
	updateTool
}