import React, {useState} from 'react'
import {observer} from "mobx-react"
import {Button, Dialog, DialogActions, DialogContent} from "@mui/material"
import AddCircleIcon from "@mui/icons-material/AddCircle"
import {nanoid} from "nanoid"
import OutputTextFieldExecutor from "./OutputTextFieldExecutor/OutputTextFieldExecutor"
import TechStore from "../../../../../../../TechStore";
import HeaderModalWindow from "../../../../../HeaderModalWindow";
import {toJS} from "mobx";

const ButtonAddExecutor = observer(({item, index, nameItem, indexItem}) => {

	const initialExecutor = {
		executor_id: nanoid(),
		nameExecutor: '',
		tsht: '',
		tpz: '',
		test: '',
		tshtCalculated: 0,
		tpzCalculated: 0,
		testCalculated: 0,
		kvr: '',
		trans_id: item["trans_id"]
	}

	let [isValid, setIsValid] = useState({
		nameExecutor: false,
		tsht: false,
		tpz: false,
		test: false,
		kvr: false
	})

	const [open, setOpen] = useState(false)
	const [contentExecutor, setContentExecutor] = useState(initialExecutor)

	const {dataOperations} = TechStore

	const handleClickOpen = () => {
		setOpen(true)
	}

	const handleClose = () => {
		setOpen(false)
	}

	const handleInputChangeExecutor = (event) => {
		const {name, value} = event.target
		setContentExecutor({...contentExecutor, [name]: value})
	}

	const handleSubmitExecutor = (event) => {

		event.preventDefault()

		const numCheck = /^\d+$/

		let copyContentExecutor = JSON.parse(JSON.stringify(contentExecutor))
		delete copyContentExecutor["executor_id"]
		delete copyContentExecutor["tshtCalculated"]
		delete copyContentExecutor["tpzCalculated"]
		delete copyContentExecutor["testCalculated"]
		delete copyContentExecutor["trans_id"]
		const copyIsValid = JSON.parse(JSON.stringify(isValid))
		for (let key in copyContentExecutor) {
			if (numCheck.test(copyContentExecutor[key])) {
				copyIsValid[key] = false
			} else {
				copyIsValid[key] = true
			}
		}

		setIsValid(copyIsValid)

		let valuesObjectIsValid = Object.values(copyIsValid)
		console.log(valuesObjectIsValid)
		if (!valuesObjectIsValid.includes(true)) {
			dataOperations[index][nameItem][indexItem]['executor'].push(contentExecutor);
			(async() => {
				const response = await fetch("http://localhost:8000/api/create/executor", {
					method: "POST",
					headers: {
						"Content-Type": "application/json;charset=utf-8"
					},
					body: JSON.stringify(contentExecutor)
				})
				await response.json()
			})()

			console.log(dataOperations)

			setContentExecutor(initialExecutor)
			setOpen(false)
		}

	}

	return (
		<>
			<Button
				variant="text"
				onClick={handleClickOpen}
			>
				<AddCircleIcon
					fontSize="small"
					sx={{
						color: 'black'
					}}
				/>
			</Button>
			<Dialog
				open={open}
				onClose={handleClose}
				className="buttonAddExecutorModalWindow"
			>
				<HeaderModalWindow header="Добавить исполнителя" handleClose={handleClose}/>
				<DialogContent dividers>
					<form method="POST" onSubmit={handleSubmitExecutor}>
						<OutputTextFieldExecutor
							contentExecutor={contentExecutor}
							handleInputChangeExecutor={handleInputChangeExecutor}
							isValid={isValid}
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

export default ButtonAddExecutor