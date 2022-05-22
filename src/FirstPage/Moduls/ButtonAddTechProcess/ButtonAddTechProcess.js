import React, {useEffect, useState} from 'react'
import {Button, Dialog, DialogActions, DialogContent} from "@mui/material";
import {observer} from "mobx-react";
import {toJS} from "mobx";
import {nanoid} from "nanoid";
import TechStore from "../../../TechStore";
import HeaderModalWindow from "../../../EditingPage/SelectTable/HeaderModalWindow";
import TextFieldsDataTechProcess from "./TextFieldsDataTechProcess/TextFieldsDataTechProcess";

const ButtonAddTechProcess = observer(() => {

	let initialTechProcess = {
		tech_id: nanoid(),
		techName: '',
		techMark: '',
		techWorkshop: ''
	}

	const {dataTechProcess} = TechStore
	const [open, setOpen] = useState(false)
	const [dataTechProcessItem, setDataTechProcessItem] = useState(initialTechProcess)
	const [isValid, setIsValid] = useState({
		techName: false,
		techMark: false,
		techWorkshop: false
	})

	const handleClose = () => {
		setOpen(false)
	}

	const handleChange = (event) => {
		const {name, value} = event.target
		setDataTechProcessItem({...dataTechProcessItem, [name]: value})
	}

	const handleSubmit = (event) => {

		event.preventDefault()

		const letterCheck = /^[а-я А-Я][а-я А-Я 0-9 -]+[а-я А-Я 0-9]$/
		const numberCheck = /^[0-9]+$/

		let copyIsValid = JSON.parse(JSON.stringify(isValid))

		for (const key in isValid) {
			if (key === "techName") {
				letterCheck.test(dataTechProcessItem[key]) ? copyIsValid[key] = false : copyIsValid[key] = true
			} else {
				numberCheck.test(dataTechProcessItem[key]) ? copyIsValid[key] = false : copyIsValid[key] = true
			}
		}

		setIsValid(copyIsValid)

		const copyIsValidValue = Object.values(copyIsValid)
		if (!copyIsValidValue.includes(true)) {

			(async() => {
				const response = await fetch("http://localhost:8000/api/create/techprocess", {
					method: "POST",
					headers: {
						"Content-Type": "application/json;charset=utf-8"
					},
					body: JSON.stringify(dataTechProcessItem)
				})
				await response.json()
			})()

			dataTechProcess.push(dataTechProcessItem)

			setDataTechProcessItem(initialTechProcess)
			setOpen(false)
		}
	}

	return (
		<>
			<Button
				variant="contained"
				color="success"
				onClick={() => setOpen(true)}
			>
				Добавить тех процесс
			</Button>
			<Dialog
				open={open}
				onClose={handleClose}
				className="buttonAddItemEquipmentModalWindow"
			>
				<HeaderModalWindow header="Добавить тех процесс" handleClose={handleClose}/>
				<DialogContent dividers>
					<form onSubmit={handleSubmit}>
						<TextFieldsDataTechProcess
							value={dataTechProcessItem}
							onChange={handleChange}
							isValid={isValid}
						/>
						<DialogActions sx={{paddingRight: 0}}>
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

export default ButtonAddTechProcess