import React, {useEffect, useState} from 'react'
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
} from "@mui/material";
import HeaderModalWindow from "../../../../../SelectTable/HeaderModalWindow";
import TechStore from "../../../../../../TechStore";
import {observer} from "mobx-react";
import {toJS} from "mobx";
import ListAdaptation from "./dataAdaptation/ListAdaptation";
import ListInventoryNumber from "./dataAdaptation/ListInventoryNumber";
import ListCodeAdaptation from "./dataAdaptation/ListCodeAdaptation";

const ButtonEquipment = observer(() => {

	const {dataOperations, radioButtons} = TechStore

	const [listAdaptation, setListAdaptation] = useState([])
	const [adaptationName, setAdaptationName] = useState("")

	const [listNumberAdaptation, setListNumberAdaptation] = useState([])
	const [listInventoryNumberForAdaptation, setListInventoryNumberForAdaptation] = useState([])
	const [valueInventoryNumber, setValueInventoryNumber] = useState("")

	const [valueCodeAdaptation, setValueCodeAdaptation] = useState("")

	const [open, setOpen] = useState(false)

	const [checkExistingOperation, setCheckExistingOperation] = useState(false)

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch("http://localhost:8000/api/tech/adaptation/all")
				const result = await response.json()
				setListAdaptation(result)
			} catch (e) {
				console.log(e)
			}
		})();

		(async () => {
			try {
				const response = await fetch("http://localhost:8000/api/tech/adaptation/number/all")
				const result = await response.json()
				setListNumberAdaptation(result)
			} catch (e) {
				console.log(e)
			}
		})();

	}, [])

	const handleOpen = async () => {
		setOpen(true)
		setCheckExistingOperation(false)
		setAdaptationName("")
		setValueInventoryNumber("")
		setValueCodeAdaptation("")
		try {
			const oper_id = dataOperations.find(operation => operation["clicked"] === true)["oper_id"]
		} catch (e) {
			setOpen(false)
		}
	}

	const handleChangeNameAdaptation = (event) => {
		const adaptation = event.target.value
		setAdaptationName(adaptation)
		const adaptation_id = listAdaptation.find((itemEquipment) => (
			itemEquipment["nameAdaptation"] === adaptation
		))["adaptation_id"]
		setListInventoryNumberForAdaptation(listNumberAdaptation.filter((inventoryNumber) => (
			inventoryNumber["adaptation_id"] === adaptation_id
		)))
		setValueInventoryNumber("")
		setValueCodeAdaptation("")
	}

	const handleFocus = () => {
		setCheckExistingOperation(false)
	}

	const handleChangeInventoryNumber = (event) => {
		const inventoryNumber = event.target.value
		setValueInventoryNumber(inventoryNumber)
		setValueCodeAdaptation(listInventoryNumberForAdaptation.find((inventoryNumberItem) => (
			inventoryNumberItem["inventoryNumber"] === inventoryNumber
		))["codeAdaptation"])
	}

	const handleSubmit = async (event) => {

		event.preventDefault()

		const oper_id = dataOperations.find(operation => operation["clicked"] === true)["oper_id"]
		const adaptation_id = listAdaptation.find(adaptation => (
			adaptation["nameAdaptation"] === adaptationName)
		)["adaptation_id"]
		const number_id = listNumberAdaptation.find(number => (
			number["inventoryNumber"] === valueInventoryNumber)
		)["number_id"]
		const response = await fetch('http://localhost:8000/api/check/existing/adaptation', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json;charset=utf-8'
			},
			body: JSON.stringify({
				oper_id: oper_id,
				adaptation_id: adaptation_id,
				number_id: number_id
			})
		})
		const result = await response.json()
		if (result.length) {

			setCheckExistingOperation(true)

			setAdaptationName("")
			setValueInventoryNumber("")
			setValueCodeAdaptation("")
			setListInventoryNumberForAdaptation([])
		} else {
			const response = await fetch("http://localhost:8000/api/create/adaptation", {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json;charset=utf-8'
				},
				body: JSON.stringify({
					oper_id: oper_id,
					adaptation_id: adaptation_id,
					number_id: number_id
				})
			})

			await response.json()

			dataOperations.forEach(operation => {
				if (operation["oper_id"] === oper_id) {
					operation["adaptation"].push({
						adaptation_id: adaptation_id,
						nameAdaptation: adaptationName,
						inventoryNumber: valueInventoryNumber,
						codeAdaptation: valueCodeAdaptation,
						oper_id: oper_id,
						number_id: number_id
					})
				}
			})
			setOpen(false)
		}
	}

	const handleClose = () => {
		setOpen(false)
	}

	return (
		<>
			<Button
				disabled={(radioButtons["content"] || radioButtons["norm"])}
				onClick={handleOpen}
				sx={
					{
						background: "#CCCC66",
						color: "black",

						"&:hover": {
							backgroundColor: "#CCCC66"
						}
					}
				}>
				Приспособление
			</Button>
			<Dialog
				open={open}
				onClose={handleClose}
				className="buttonAddItemEquipmentModalWindow"
			>
				<HeaderModalWindow header="Добавить приспособление" handleClose={handleClose}/>
				<DialogContent dividers>
					<form onSubmit={handleSubmit}>
						<ListAdaptation
							handleChangeNameAdaptation={handleChangeNameAdaptation}
							adaptationName={adaptationName}
							listAdaptation={listAdaptation}
							checkExistingOperation={checkExistingOperation}
							handleFocus={handleFocus}
						/>
						<ListInventoryNumber
							valueInventoryNumber={valueInventoryNumber}
							handleChangeInventoryNumber={handleChangeInventoryNumber}
							listInventoryNumberForAdaptation={listInventoryNumberForAdaptation}
							checkExistingOperation={checkExistingOperation}
							handleFocus={handleFocus}
						/>
						<ListCodeAdaptation
							valueCodeAdaptation={valueCodeAdaptation}
							checkExistingOperation={checkExistingOperation}
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

export default ButtonEquipment