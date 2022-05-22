import React, {useState} from 'react'
import '../../OperationTable.css'
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
} from "@mui/material"
import EditIcon from '@mui/icons-material/Edit'
import {observer} from "mobx-react"
import OutputOperationTextField from "./OutputOperationTextField/OutputOperationTextField"
import OutputOperationCheckbox from "./OutputOperationCheckbox/OutputOperationCheckbox"
import TechStore from "../../../../../TechStore"
import HeaderModalWindow from "../../../HeaderModalWindow"
import {toJS} from "mobx";
import {nanoid} from "nanoid";

const ButtonEditOperation = observer(({index}) => {

	const {dataOperations} = TechStore
	const [operationItem, setOperationItem] = useState(dataOperations)
	const [open, setOpen] = useState(false)

	//-------------------------initialValidation-------------------

	let copyItem = JSON.parse(JSON.stringify(dataOperations[index]))
	const fieldsCopyItemDeleted = ['id', 'OO', 'OTK', 'PZ', 'KPS', 'transition', 'equipment', 'adaptation', 'tool', 'clicked', 'oper_id', 'tech_id']
	for (const key in copyItem) {
		if (fieldsCopyItemDeleted.includes(key)) {
			delete copyItem[key]
		} else {
			copyItem[key] = false
		}
	}

	const [isValid, setIsValid] = useState(copyItem)

	//-------------------------initialValidation-------------------

	const handleClickOpen = () => {
		setOpen(true)
		console.log("dataOperations[index]", toJS(dataOperations))
	}

	const handleClose = () => {
		setOpen(false)
	}

	const handleInputAndCheckboxChange = (event) => {
		const {name, type} = event.target
		const value = (type === 'checkbox') ? event.target.checked : event.target.value
		const copyOperationItem = JSON.parse(JSON.stringify(operationItem))
		copyOperationItem[index][name] = value
		setOperationItem(copyOperationItem)
	}

	const handleSubmit = (event) => {

		event.preventDefault()

		const letterCheck = /^[а-я А-Я][а-я А-Я -]+[а-я А-Я]$/
		const numberCheck = /^[0-9]+$/

		let copyIsValid = JSON.parse(JSON.stringify(isValid))

		for (const key in isValid) {
			if (key === 'nameOperation') {
				letterCheck.test(operationItem[index][key]) ? copyIsValid[key] = false : copyIsValid[key] = true
			} else {
				numberCheck.test(operationItem[index][key]) ? copyIsValid[key] = false : copyIsValid[key] = true
			}
		}

		setIsValid(copyIsValid)

		const valuesIsValid = Object.values(copyIsValid)
		if (!valuesIsValid.includes(true)) {
			(async() => {
				const response = await fetch(`http://localhost:8000/api/check/operation/${operationItem[index]["oper_id"]}`)
				let result = await response.json()
				if (result.length) {
					await (async () => {
						let response = await fetch(`http://localhost:8000/api/edit/operation/${operationItem[index]["oper_id"]}`, {
							method: 'PUT',
							headers: {
								'Content-Type': 'application/json;charset=utf-8'
							},
							body: JSON.stringify(operationItem[index])
						})
						await response.json()
					})();
					dataOperations[index] = operationItem[index]
				} else {
					const copyOperationItem = JSON.parse(JSON.stringify(operationItem))
					await (async () => {
						const response = await fetch("http://localhost:8000/api/create/operation", {
							method: "POST",
							headers: {
								"Content-Type": "application/json;charset=utf-8"
							},
							body: JSON.stringify(copyOperationItem[index])
						})
						await response.json()
					})();
					dataOperations[index] = copyOperationItem[index]
				}
			})()
			setOpen(false)
		}
	}

	return (
		<>
			<Button
				variant="text"
				onClick={handleClickOpen}
			>
				<EditIcon fontSize="small"/>
			</Button>
			<Dialog
				open={open}
				onClose={handleClose}
				className="buttonEditItemOperationModalWindow"
			>
				<HeaderModalWindow header="Редактировать данные операции" handleClose={handleClose}/>
				<DialogContent dividers>
					<form onSubmit={handleSubmit}>
						<OutputOperationTextField
							operationItem={operationItem[index]}
							handleInputAndCheckboxChange={handleInputAndCheckboxChange}
							nameFieldFirstInput="numberOperation"
							nameFieldSecondInput="nameOperation"
							nameFieldFourthInput="workshop"
							nameFieldFifthInput="area"
							isValid={isValid}
						/>
						<OutputOperationCheckbox
							operationItem={operationItem[index]}
							handleInputAndCheckboxChange={handleInputAndCheckboxChange}
							nameFieldFirstInput="OO"
							nameFieldSecondInput="OTK"
							nameFieldThirdInput="PZ"
							nameFieldFourthInput="KPS"
						/>
						<DialogActions
							sx={{paddingRight: 0}}
						>
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

export default ButtonEditOperation