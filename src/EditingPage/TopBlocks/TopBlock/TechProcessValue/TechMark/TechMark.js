import React, {useEffect, useState} from "react"
import {Button, Dialog, DialogActions, DialogContent, TextField} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import TechStore from "../../../../../TechStore";
import HeaderModalWindow from "../../../../SelectTable/HeaderModalWindow";
import InputTextField from "../../../../SelectTable/InputTextField";
import {toJS} from "mobx";
import {observer} from "mobx-react";

const TechMark = observer(() => {

	const {dataTechProcess, tech_id} = TechStore
	const [open, setOpen] = useState(false)

	const itemTechProcess = dataTechProcess.find((tech) => tech["tech_id"] === tech_id)

	const initialTechName = {
		techMark: itemTechProcess["techMark"]
	}

	const [techMark, setTechMark] = useState(initialTechName)
	const [isValid, setIsValid] = useState(false)

	const handleClick = () => {
		setOpen(true)
	}

	const handleChange = (event) => {
		const {name, value} = event.target
		setTechMark({...techMark, [name]: value})
	}

	const handleClose = () => {
		setOpen(false)
	}

	const handleSubmit = (event) => {
		event.preventDefault()

		const numberCheck = /^[0-9]+$/

		if (numberCheck.test(techMark["techMark"])) {
			setIsValid(false)

			dataTechProcess.forEach(tech => {
				if (tech["tech_id"] === tech_id) {
					tech["techMark"] = techMark["techMark"]
				}
			});

			(async () => {
				const response = await fetch(`http://localhost:8000/api/edit/tech/mark/${tech_id}`, {
					method: "PUT",
					headers: {
						"Content-Type": "application/json; charset=utf-8"
					},
					body: JSON.stringify(techMark)
				})
				await response.json()
			})()

			setOpen(false)
		} else {
			setIsValid(true)
		}
	}

	return (
		<div className="header__marking" style={{display: "flex", alignItems: "center"}}>
			<div className="header__marking__input" style={{display: "flex", alignItems: "center"}}>
				<div className="header__marking__input__label" style={{marginRight: '5px'}}> Обозначение: </div>
				<TextField
					type="text"
					disabled
					variant="filled"
					value={itemTechProcess["techMark"]}
					sx={{
						'& .MuiFilledInput-input': {
							padding: '2px 5px 0 5px',
							width: '60px'
						}
					}}
				/>
			</div>
			<div className="header__marking__buttonEdit">
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
								label="Обозначение"
								name="techMark"
								value={techMark["techMark"]}
								onChange={handleChange}
								isValidItem={isValid}
								helperText="Введите целое число"
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

export default TechMark