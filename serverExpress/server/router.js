const express = require('express')
const router = express.Router()

const {getTechProcess, getCheckTechProcess, getTestData, getOperation, getOperationItem, getAllFusions, getAllMetals, getAllMarks, getFusionTechProcess, getInitialForm, getEquipment, getNumberEquipment, getAdaptation, getNumberAdaptation, getTool, getNumberTool} = require('./controller/getController.js')
const {deleteTechProcess, deleteOperation, deleteEquipment, deleteTransition, deleteExecutor, deleteAdaptation, deleteTool} = require('./controller/deleteController.js')
const {updateNameTechProcess, updateMarkTechProcess, updateWorkshopTechProcess, updateFusionTechProcess, updateOperation, updateNameOperation, updateEquipment, updateTransition, updateExecutor, updateExecutorT, updateAdaptation, updateTool} = require('./controller/updateController')
const {createTechProcess, createTechFusion, createOperation, createEquipment, createTransition, createExecutor, createAdaptation, createTool, getCheckEquipment, getCheckAdaptation, getCheckTool, getCheckEditAdaptation, getCheckEditTool} = require('./controller/postController')

router.get('/tech/all', getTechProcess)
router.get('/operation/:id', getOperation)
router.get('/check/operation/:id', getOperationItem)
router.get('/tech/fusion/all', getAllFusions)
router.get('/tech/fusion/:id', getFusionTechProcess)
router.get('/tech/metal/all', getAllMetals)
router.get('/tech/mark/all', getAllMarks)
router.get('/tech/initial_form/all', getInitialForm)
router.get('/check/tech_fusion/:id', getCheckTechProcess)
router.get('/tech/equipment/all', getEquipment)
router.get('/tech/equipment/number/all', getNumberEquipment)
router.get('/tech/adaptation/all', getAdaptation)
router.get('/tech/adaptation/number/all', getNumberAdaptation)
router.get('/tech/tool/all', getTool)
router.get('/tech/tool/number/all', getNumberTool)
router.get('/tech/test', getTestData)


router.put('/edit/tech/name/:id', updateNameTechProcess)
router.put('/edit/tech/mark/:id', updateMarkTechProcess)
router.put('/edit/tech/workshop/:id', updateWorkshopTechProcess)
router.put('/edit/tech/tech_fusion/:id', updateFusionTechProcess)
router.put('/edit/operation/:id', updateOperation)
router.put('/edit/operation/name/:id', updateNameOperation)
router.put('/edit/equipment/:id', updateEquipment)
router.put('/edit/transition/:id', updateTransition)
router.put('/edit/executor/:id', updateExecutor)
router.put('/edit/executor/t/:id', updateExecutorT)
router.put('/edit/adaptation/:id', updateAdaptation)
router.put('/edit/tool/:id', updateTool)

router.delete('/delete/tech/:id', deleteTechProcess)
router.delete('/delete/operation/:id', deleteOperation)
router.delete('/delete/equipment/:id', deleteEquipment)
router.delete('/delete/transition/:id', deleteTransition)
router.delete('/delete/executor/:id', deleteExecutor)
router.delete('/delete/adaptation/:id', deleteAdaptation)
router.delete('/delete/tool/:id', deleteTool)

router.post('/create/techprocess', createTechProcess)
router.post('/create/tech_fusion', createTechFusion)
router.post('/create/operation', createOperation)
router.post('/create/equipment', createEquipment)
router.post('/create/transition', createTransition)
router.post('/create/executor', createExecutor)
router.post('/create/adaptation', createAdaptation)
router.post('/check/existing/equipment/:id', getCheckEquipment)
router.post('/check/existing/adaptation', getCheckAdaptation)
router.post('/check/existing/tool', getCheckTool)
router.post('/check/edit/existing/adaptation', getCheckEditAdaptation)
router.post('/check/edit/existing/tool', getCheckEditTool)
router.post('/create/tool', createTool)


module.exports = router