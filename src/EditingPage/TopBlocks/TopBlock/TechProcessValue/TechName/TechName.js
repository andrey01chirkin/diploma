import React, {useEffect, useState} from "react"
import {Button, Dialog, DialogActions, DialogContent, TextField} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import TechStore from "../../../../../TechStore";
import HeaderModalWindow from "../../../../SelectTable/HeaderModalWindow";
import InputTextField from "../../../../SelectTable/InputTextField";
import {toJS} from "mobx";
import {observer} from "mobx-react";

const TechName = observer(() => {

	const {dataTechProcess, tech_id} = TechStore
	const [open, setOpen] = useState(false)

	const itemTechProcess = dataTechProcess.find((tech) => tech["tech_id"] === tech_id)

	const initialTechName = {
		techName: itemTechProcess["techName"]
	}

	const [techName, setTechName] = useState(initialTechName)
	const [isValid, setIsValid] = useState(false)

	const handleClick = () => {
		setOpen(true)
	}

	const handleChange = (event) => {
		const {name, value} = event.target
		setTechName({...techName, [name]: value})
	}

	const handleClose = () => {
		setOpen(false)
	}

	const handleSubmit = (event) => {
		event.preventDefault()

		const letterCheck = /^[а-я А-Я][а-я А-Я 0-9 -]+[а-я А-Я 0-9]$/

		if (letterCheck.test(techName["techName"])) {
			setIsValid(false)

			dataTechProcess.forEach(tech => {
				if (tech["tech_id"] === tech_id) {
					tech["techName"] = techName["techName"]
				}
			});

			(async () => {
				const response = await fetch(`http://localhost:8000/api/edit/tech/name/${tech_id}`, {
					method: "PUT",
					headers: {
						"Content-Type": "application/json; charset=utf-8"
					},
					body: JSON.stringify(techName)
				})
				await response.json()
			})()

			setOpen(false)
		} else {
			setIsValid(true)
		}
	}

	return (
		<div className="header__name" style={{display: "flex", alignItems: "center"}}>
			<div className="header__name__input" style={{display: "flex", alignItems: "center"}}>
				<div className="header__name__input__label" style={{marginRight: '5px'}}> Наименование: </div>
				<TextField
					type="text"
					disabled
					variant="filled"
					value={itemTechProcess["techName"]}
					sx={{
						'& .MuiFilledInput-input': {
							padding: '2px 5px 0 5px',
							width: '170px',
						}
					}}
				/>
			</div>
			<div className="header__name__buttonEdit">
				<Button
					variant="text"
					onClick={handleClick}
					sx={{
						padding: '5px',
						minWidth: '32px'
					}}
				>
					<EditIcon fontSize="small"/>
				</Button>
				<Dialog
					open={open}
					onClose={handleClose}
					className="buttonAddItemTransitionModalWindow"
				>
					<HeaderModalWindow header="Изменить тех процесс" handleClose={handleClose}/>
					<DialogContent dividers>
						<form onSubmit={handleSubmit}>
							<InputTextField
								label="Наименование"
								name="techName"
								value={techName["techName"]}
								onChange={handleChange}
								isValidItem={isValid}
								helperText="Введите символы кириллицы или числовые значения"
							/>
							<DialogActions sx={{paddingRight: 0, paddingTop: '25px'}}>
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
			</div>
		</div>
	)
})

export default TechName