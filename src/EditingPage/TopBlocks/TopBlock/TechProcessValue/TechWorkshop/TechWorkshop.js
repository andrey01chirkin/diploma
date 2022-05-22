import React, {useEffect, useState} from "react"
import {Button, Dialog, DialogActions, DialogContent, TextField} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import TechStore from "../../../../../TechStore";
import HeaderModalWindow from "../../../../SelectTable/HeaderModalWindow";
import InputTextField from "../../../../SelectTable/InputTextField";
import {toJS} from "mobx";
import {observer} from "mobx-react";

const TechWorkshop = observer(() => {

	const {dataTechProcess, tech_id} = TechStore
	const [open, setOpen] = useState(false)

	const itemTechProcess = dataTechProcess.find((tech) => tech["tech_id"] === tech_id)

	const initialTechWorkshop = {
		techWorkshop: itemTechProcess["techWorkshop"]
	}

	const [techWorkshop, setTechWorkshop] = useState(initialTechWorkshop)
	const [isValid, setIsValid] = useState(false)

	const handleClick = () => {
		setOpen(true)
	}

	const handleChange = (event) => {
		const {name, value} = event.target
		setTechWorkshop({...techWorkshop, [name]: value})
	}

	const handleClose = () => {
		setOpen(false)
	}

	const handleSubmit = (event) => {
		event.preventDefault()

		const numberCheck = /^[0-9]+$/

		if (numberCheck.test(techWorkshop["techWorkshop"])) {
			setIsValid(false)

			dataTechProcess.forEach(tech => {
				if (tech["tech_id"] === tech_id) {
					tech["techWorkshop"] = techWorkshop["techWorkshop"]
				}
			});

			console.log(toJS(dataTechProcess));

			(async () => {
				const response = await fetch(`http://localhost:8000/api/edit/tech/workshop/${tech_id}`, {
					method: "PUT",
					headers: {
						"Content-Type": "application/json; charset=utf-8"
					},
					body: JSON.stringify(techWorkshop)
				})
				await response.json()
			})()

			setOpen(false)
		} else {
			setIsValid(true)
		}
	}
	return (
		<div className="header__workshop" style={{display: "flex", alignItems: "center"}}>
			<div className="header__workshop__input" style={{display: "flex", alignItems: "center"}}>
				<div className="header__workshop__input__label" style={{marginRight: '5px'}}> Цех: </div>
				<TextField
					type="text"
					disabled
					variant="filled"
					value={itemTechProcess["techWorkshop"]}
					sx={{
						'& .MuiFilledInput-input': {
							padding: '2px 5px 0 5px',
							width: '60px',
						}
					}}
				/>
			</div>
			<div className="header__workshop__buttonEdit">
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
								label="Цех"
								name="techWorkshop"
								value={techWorkshop["techWorkshop"]}
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

export default TechWorkshop