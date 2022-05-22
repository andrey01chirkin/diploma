import React, {useState} from 'react'
import BorderBottomOutlinedIcon from "@mui/icons-material/BorderBottomOutlined"
import {Button, Dialog, DialogActions, DialogContent} from "@mui/material"
import TechStore from "../../../../../TechStore"
import {nanoid} from 'nanoid'
import InputTextField from "../../../../SelectTable/InputTextField";
import InputCheckbox from "../../../../SelectTable/OperationTable/Components/InputCheckbox";
import {observer} from "mobx-react";
import HeaderModalWindow from "../../../../SelectTable/HeaderModalWindow";
import {toJS} from "mobx";

const AddRowBottom = observer(() => {

	const {dataOperations, radioButtons, tech_id} = TechStore

	const item = {
		oper_id: nanoid(),
		numberOperation: '',
		nameOperation: '',
		workshop: '',
		area: '',
		OO: false,
		OTK: false,
		PZ: false,
		KPS: false,
		transition: [],
		equipment: [],
		adaptation: [],
		tool: [],
		clicked: false,
		tech_id: tech_id
	}

	const buttonStyle = {
		but1: {
			minWidth: '30px',
			padding: 0,
			marginRight: '5px'
		}
	}

	const [dataOperation, setDataOperation] = useState(item)
	const [open, setOpen] = useState(false)

	//-------------------------initialValidation-------------------

	const initialValidationData = {
		numberOperation: '',
		nameOperation: '',
		workshop: '',
		area: '',
	}

	const [isValid, setIsValid] = useState(initialValidationData)

	//-------------------------initialValidation-------------------

	const handleClickOpen = () => {
		setOpen(true)
	}

	const handleClose = () => {
		setOpen(false)
	}

	const handleChange = (strData, name) => (
		(event) => {
			setDataOperation({...strData, [name]: event.target.value})
		}
	)

	const handleSubmit = (event) => {

		event.preventDefault()

		const letterCheck = /^[а-я А-Я][а-я А-Я -]+[а-я А-Я]$/
		const numberCheck = /^[0-9]+$/

		let copyIsValid = JSON.parse(JSON.stringify(isValid))

		console.log('AddRowBottom')

		for (const key in isValid) {
			if (key === 'nameOperation') {
				console.log(dataOperation[key])
				letterCheck.test(dataOperation[key]) ? copyIsValid[key] = false : copyIsValid[key] = true
			} else {
				numberCheck.test(dataOperation[key]) ? copyIsValid[key] = false : copyIsValid[key] = true
			}
		}

		setIsValid(copyIsValid)

		const valuesIsValid = Object.values(copyIsValid)
		if (!valuesIsValid.includes(true)) {
			dataOperations.push(dataOperation);
			(async () => {
				const response = await fetch("http://localhost:8000/api/create/operation", {
					method: "POST",
					headers: {
						"Content-Type": "application/json;charset=utf-8"
					},
					body: JSON.stringify(dataOperation)
				})
				await response.json()
			})()
			setDataOperation(item)
			setOpen(false)
		}
	}

	return (
		<>
			<Button
				disabled={(radioButtons["content"] || radioButtons["norm"])}
				variant="contained"
				sx={buttonStyle.but1}
				className="buttonStyle"
				onClick={handleClickOpen}
			>
				<BorderBottomOutlinedIcon/>
			</Button>

			<Dialog
				open={open}
				onClose={handleClose}
				className="buttonAddOperationBottomModalWindow"
			>
				<HeaderModalWindow header="Добавить строку внизу таблицы" handleClose={handleClose}/>
				<DialogContent dividers>
					<form method="POST" onSubmit={handleSubmit}>
						<div className="textFields">
							<div className="textField">
								<InputTextField
									label="Номер операции"
									name="numberOperation"
									value={dataOperation["numberOperation"]}
									onChange={handleChange(dataOperation, "numberOperation")}
									isValidItem={isValid["numberOperation"]}
									helperText="Введите целое число"
								/>
							</div>
							<div className="textField">
								<InputTextField
									label="Наименование операции"
									name="nameOperation"
									value={dataOperation["nameOperation"]}
									onChange={handleChange(dataOperation, "nameOperation")}
									isValidItem={isValid["nameOperation"]}
									helperText="Введите символы кириллицы"
								/>
							</div>
							<div className="textField">
								<InputTextField
									label="Цех"
									name="workshop"
									value={dataOperation["workshop"]}
									onChange={handleChange(dataOperation, "workshop")}
									isValidItem={isValid["workshop"]}
									helperText="Введите целое число"
								/>
							</div>
							<div className="textField">
								<InputTextField
									label="Участок"
									name="area"
									value={dataOperation["area"]}
									onChange={handleChange(dataOperation, "area")}
									isValidItem={isValid["area"]}
									helperText="Введите целое число"
								/>
							</div>
						</div>
						<div className="inputCheckboxs">
							<InputCheckbox
								label="ОО"
								name="OO"
								checked={dataOperation["OO"]}
								onChange={(event) => setDataOperation({...dataOperation, "OO": event.target.checked})}
							/>
							<InputCheckbox
								label="ОТК"
								name="OTK"
								checked={dataOperation["OTK"]}
								onChange={(event) => setDataOperation({...dataOperation, "OTK": event.target.checked})}
							/>
							<InputCheckbox
								label="ПЗ"
								name="PZ"
								checked={dataOperation["PZ"]}
								onChange={(event) => setDataOperation({...dataOperation, "PZ": event.target.checked})}
							/>
							<InputCheckbox
								label="КПС"
								name="KPS"
								checked={dataOperation["KPS"]}
								onChange={(event) => setDataOperation({...dataOperation, "KPS": event.target.checked})}
							/>
						</div>
						<DialogActions>
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

export default AddRowBottom