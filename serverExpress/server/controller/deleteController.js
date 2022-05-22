const pool = require('../../config/db.js')

const deleteTechProcess = (req, res) => {
	const tech_id = req.params.id
	pool.query(
		'delete from sptd.tech where tech_id=$1',
		[tech_id],
		(err) => {
			if (!err) {
				res.json("TechProcess has deleted")
			} else {
				res.json(err)
				console.log(err)
			}
		}
	)
}

const deleteOperation = (req, res) => {
	const oper_id = req.params.id
	pool.query(
		'delete from sptd.oper where oper_id=$1',
		[oper_id],
		(err) => {
			if (!err) {
				res.json("Operation has deleted")
			} else {
				res.json(err)
				console.log(err)
			}
		}
	)
}

const deleteEquipment = (req, res) => {
	const equipment_id = req.params.id
	const {oper_id, number_id} = req.body
	pool.query(
		'delete from sptd.oper_equipment where oper_id=$1 AND equipment_id=$2 AND number_id=$3',
		[oper_id, equipment_id, number_id],
		(err) => {
			if (!err) {
				res.json("Equipment has deleted")
			} else {
				res.json(err)
				console.log(err)
			}
		}
	)
}

const deleteTransition = (req, res) => {
	const trans_id = req.params.id
	pool.query(
		'delete from sptd.transition where trans_id=$1',
		[trans_id],
		(err) => {
			if (!err) {
				res.json("Transition has deleted")
			} else {
				res.json(err)
				console.log(err)
			}
		}
	)
}

const deleteExecutor = (req, res) => {
	const executor_id = req.params.id
	pool.query(
		'delete from sptd.executor where executor_id=$1',
		[executor_id],
		(err) => {
			if (!err) {
				res.json("Executor has deleted")
			} else {
				res.json(err)
				console.log(err)
			}
		}
	)
}

const deleteAdaptation = (req, res) => {
	const adaptation_id = req.params.id
	const {oper_id, number_id} = req.body
	pool.query(
		'delete from sptd.oper_adaptation where oper_id=$1 AND adaptation_id=$2 AND number_id=$3',
		[oper_id, adaptation_id, number_id],
		(err) => {
			if (!err) {
				res.json("Adaptation has deleted")
			} else {
				res.json(err)
				console.log(err)
			}
		}
	)
}


const deleteTool = (req, res) => {
	const tool_id = req.params.id
	const {oper_id, number_id} = req.body
	pool.query(
		'delete from sptd.oper_tool where oper_id=$1 AND tool_id=$2 AND number_id=$3',
		[oper_id, tool_id, number_id],
		(err) => {
			if (!err) {
				res.json("Tool has deleted")
			} else {
				res.json(err)
				console.log(err)
			}
		}
	)
}


module.exports = {
	deleteTechProcess,
	deleteOperation,
	deleteEquipment,
	deleteTransition,
	deleteExecutor,
	deleteAdaptation,
	deleteTool
}