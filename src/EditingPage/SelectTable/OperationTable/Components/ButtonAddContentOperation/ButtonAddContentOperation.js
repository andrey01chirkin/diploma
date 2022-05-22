import React, {useEffect, useState} from 'react'
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent
} from "@mui/material"
import AddCircleIcon from '@mui/icons-material/AddCircle'
import {observer} from "mobx-react"
import {nanoid} from "nanoid"
import FieldsAddTransition from "./FieldsAddTransition/FieldsAddTransition";
import FieldsAddEquipment from "./FieldsAddEquipment/FieldsAddEquipment";
import TechStore from "../../../../../TechStore";
import HeaderModalWindow from "../../../HeaderModalWindow";

const ButtonAddContentOperation = observer(({index}) => {

	const {dataTable} = TechStore

	const indexTransition = 0
	const indexEquipment = 1
	const indexAdaptation = 2
	const indexTool = 3

	const initialContent = [
		{
			id: nanoid(),
			nameTransition: '',
			executor: []
		},
		{
			id: nanoid(),
			nameEquipment: '',
			inventoryNumber: '',
			codeEquipment: '',
		},
		{
			id: nanoid(),
			nameAdaptation: '',
			inventoryNumber: '',
			codeEquipment: '',
		},
		{
			id: nanoid(),
			nameTool: '',
			inventoryNumber: '',
			codeEquipment: '',
		},
	]

	const [contentItems, setContentItems] = useState(initialContent)
	const [open, setOpen] = useState(false)

	// ----------------initialValidation----------------

	let copyInitialContent = JSON.parse(JSON.stringify(initialContent))
	const deleteFieldWithKey = ['id', 'executor']
	copyInitialContent = copyInitialContent.map((item) => {
		for (const key in item) {
			(deleteFieldWithKey.includes(key)) ? delete item[key] : item[key] = false
		}
		return item
	})
	const [isValid, setIsValid] = useState(copyInitialContent)

	// ----------------initialValidation----------------

	const handleClickOpen = () => {
		setOpen(true)
	}

	const handleClose = () => {
		setOpen(false)
	}

	const handleInputChange = (indexItem) => (
		(event) => {
			const {name, value} = event.target
			const copyContentItems = JSON.parse(JSON.stringify(contentItems))
			copyContentItems[indexItem][name] = value
			setContentItems(copyContentItems)
		}
	)

	const handleSubmit = (event) => {

		event.preventDefault()

		const letterCheck = /^[а-яА-Я][а-я А-Я]+[а-яА-Я]$/
		const numberCheck = /^[0-9]+$/

		let copyIsValid = JSON.parse(JSON.stringify(isValid))

		if (contentItems[indexTransition]['nameTransition']) {
			if (letterCheck.test(contentItems[indexTransition]['nameTransition'])) {
				copyIsValid[indexTransition]['nameTransition'] = false
			} else {
				copyIsValid[indexTransition]['nameTransition'] = true
			}

			setIsValid(copyIsValid)

			const valuesIsValid = Object.values(copyIsValid[indexTransition])
			if (!valuesIsValid.includes(true)) {
				dataTable[index]['transition'].push(contentItems[indexTransition])
				setContentItems(initialContent)
			}
		}

		if (contentItems[indexEquipment]['nameEquipment'] || contentItems[indexEquipment]['inventoryNumber'] || contentItems[indexEquipment]['codeEquipment']) {
			for (const key in isValid[indexEquipment]) {
				if (key === 'nameEquipment') {
					if (letterCheck.test(contentItems[indexEquipment][key])) {
						copyIsValid[indexEquipment][key] = false
					} else {
						copyIsValid[indexEquipment][key] = true
					}
				} else {
					if (numberCheck.test(contentItems[indexEquipment][key])) {
						copyIsValid[indexEquipment][key] = false
					} else {
						copyIsValid[indexEquipment][key] = true
					}
				}
			}

			setIsValid(copyIsValid)
			console.log('isValid[indexEquipment]', isValid[indexEquipment])

			const valuesIsValid = Object.values(copyIsValid[indexEquipment])
			if (!valuesIsValid.includes(true)) {
				dataTable[index]['equipment'].push(contentItems[indexEquipment])
				setContentItems(initialContent)
			}
		}

		if (contentItems[indexAdaptation]['nameAdaptation'] || contentItems[indexAdaptation]['inventoryNumber'] || contentItems[indexAdaptation]['codeEquipment']) {

			for (const key in isValid[indexAdaptation]) {
				if (key === 'nameAdaptation') {
					if (letterCheck.test(contentItems[indexAdaptation][key])) {
						copyIsValid[indexAdaptation][key] = false
					} else {
						copyIsValid[indexAdaptation][key] = true
					}
				} else {
					numberCheck.test(contentItems[indexAdaptation][key]) ?
						copyIsValid[indexAdaptation][key] = false :
						copyIsValid[indexAdaptation][key] = true
				}

			}

			setIsValid(copyIsValid)

			const valuesIsValid = Object.values(copyIsValid[indexAdaptation])
			if (!valuesIsValid.includes(true)) {
				dataTable[index]['adaptation'].push(contentItems[indexAdaptation])
				setContentItems(initialContent)
			}
		}


		if (contentItems[indexTool]['nameTool'] || contentItems[indexTool]['inventoryNumber'] || contentItems[indexTool]['codeEquipment']) {

			for (const key in isValid[indexTool]) {
				if (key === 'nameTool') {
					letterCheck.test(contentItems[indexTool][key]) ?
						copyIsValid[indexTool][key] = false :
						copyIsValid[indexTool][key] = true
				} else {
					numberCheck.test(contentItems[indexTool][key]) ?
						copyIsValid[indexTool][key] = false :
						copyIsValid[indexTool][key] = true
				}
			}

			setIsValid(copyIsValid)
			console.log('isValid[indexTool]', isValid[indexTool])

			const valuesIsValid = Object.values(copyIsValid[indexTool])
			if (!valuesIsValid.includes(true)) {
				dataTable[index]['tool'].push(contentItems[indexTool])
				setContentItems(initialContent)
			}
		}

	}

	return (
		<>
			<Button
				size="small"
				onClick={handleClickOpen}
			>
				<AddCircleIcon/>
			</Button>
			<Dialog
				open={open}
				onClose={handleClose}
				className="buttonAddContentModalWindow"
				sx={{
					'& .MuiDialog-paper': {
						maxWidth: 'none',
						width: '1000px'
					}
				}}
			>
				<HeaderModalWindow header="Добавить содержание" handleClose={handleClose}/>
				<DialogContent dividers>
					<form method="POST" onSubmit={handleSubmit}>
						<FieldsAddTransition
							initialTransition={contentItems}
							name="nameTransition"
							handleInputChange={handleInputChange}
							indexTransition={indexTransition}
							label='Переход'
							isValid={isValid[indexTransition]}
						/>
						<FieldsAddEquipment
							initialItem={contentItems}
							indexItem={indexEquipment}
							fieldNameFirstInput="nameEquipment"
							fieldNameSecondInput="inventoryNumber"
							fieldNameThirdInput="codeEquipment"
							labelEquipment="Оборудование"
							labelInventoryNumber="Инвентарный номер"
							labelCodeEquipment="Код оборудования"
							handleInputChange={handleInputChange}
							isValid={isValid[indexEquipment]}
						/>
						<FieldsAddEquipment
							initialItem={contentItems}
							indexItem={indexAdaptation}
							fieldNameFirstInput="nameAdaptation"
							fieldNameSecondInput="inventoryNumber"
							fieldNameThirdInput="codeEquipment"
							labelEquipment="Приспособление"
							labelInventoryNumber="Инвентарный номер"
							labelCodeEquipment="Код оборудования"
							handleInputChange={handleInputChange}
							isValid={isValid[indexAdaptation]}
						/>
						<FieldsAddEquipment
							initialItem={contentItems}
							indexItem={indexTool}
							fieldNameFirstInput="nameTool"
							fieldNameSecondInput="inventoryNumber"
							fieldNameThirdInput="codeEquipment"
							labelEquipment="Инструмент"
							labelInventoryNumber="Инвентарный номер"
							labelCodeEquipment="Код оборудования"
							handleInputChange={handleInputChange}
							isValid={isValid[indexTool]}
						/>
						<DialogActions sx={{paddingRight: '0'}}>
							<Button
								type="submit"
								variant="contained"
								color="success"
							>
								Сохранить
							</Button>
						</DialogActions>
					</form>
				</DialogContent>
			</Dialog>
		</>
	)
})

export default ButtonAddContentOperation