import React, {useState} from 'react'
import {Button, Dialog, DialogActions, DialogContent} from "@mui/material";
import HeaderModalWindow from "../../../../../SelectTable/HeaderModalWindow";
import InputTextField from "../../../../../SelectTable/InputTextField";
import TechStore from "../../../../../../TechStore";
import {observer} from "mobx-react";
import {toJS} from "mobx";
import {nanoid} from "nanoid";

const ButtonTransition = observer(() => {

	const {dataOperations, radioButtons} = TechStore

	let transitionData = {
		trans_id: nanoid(),
		nameTransition: '',
	}

	const [open, setOpen] = useState(false)
	const [transitionContent, setTransitionContent] = useState(transitionData)
	const [isValid, setIsValid] = useState(false)

	const handleOpen = () => {
		setOpen(true)
		try {
			const oper_id = dataOperations.find(operation => operation["clicked"] === true)["oper_id"]
		} catch (e) {
			setOpen(false)
		}
	}

	const handleChange = (event) => {
		const {name, value} = event.target
		setTransitionContent({...transitionContent, [name]: value})
	}

	const handleClose = () => {
		setOpen(false)
	}

	const handleSubmit = (event) => {

		event.preventDefault()

		const letterCheck = /^[а-я А-Я][а-я А-Я 0-9 -]+[а-я А-Я 0-9]$/

		if (letterCheck.test(transitionContent["nameTransition"])) {
			setIsValid(false)
			dataOperations.forEach((item) => {
				if (item["clicked"]) {
					let copyTransitionContent = JSON.parse(JSON.stringify(transitionContent))
					copyTransitionContent["executor"] = []
					copyTransitionContent["oper_id"] = dataOperations.find((item) => item["clicked"])["oper_id"]
					item["transition"].push(copyTransitionContent);
					(async () => {
						const response = await fetch("http://localhost:8000/api/create/transition", {
							method: "POST",
							headers: {
								'Content-Type': 'application/json;charset=utf-8'
							},
							body: JSON.stringify(copyTransitionContent)
						})
						await response.json()
					})()
				}
			})

			setTransitionContent({
				trans_id: nanoid(),
				nameTransition: '',
				oper_id: ''
			})
			setOpen(false)
		} else {
			setIsValid(true)
		}
	}

	return (
		<>
			<Button
				disabled={(radioButtons["content"] || radioButtons["norm"])}
				onClick={handleOpen}
				sx={
					{
						background: "#FFFF66",
						color: "black",

						"&:hover": {
							backgroundColor: "#FFFF66"
						}
					}
				}>
				Переход
			</Button>
			<Dialog
				open={open}
				onClose={handleClose}
				className="buttonAddItemTransitionModalWindow"
			>
				<HeaderModalWindow header="Создать переход" handleClose={handleClose}/>
				<DialogContent dividers>
					<form onSubmit={handleSubmit}>
						<InputTextField
							label="Переход"
							name="nameTransition"
							value={transitionContent["nameTransition"]}
							onChange={handleChange}
							isValidItem={isValid}
							helperText="Введите символы кириллицы или числовые значения"
						/>
						<DialogActions sx={{paddingRight: 0, paddingTop: '25px'}}>
							<Button
								type="submit"
								variant="contained"
								color="success"
								size="medium"
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

export default ButtonTransition