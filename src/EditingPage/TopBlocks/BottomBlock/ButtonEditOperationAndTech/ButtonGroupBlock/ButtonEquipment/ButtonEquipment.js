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
import ListEquipment from "./dataEquipment/ListEquipment";
import ListInventoryNumber from "./dataEquipment/ListInventoryNumber";
import ListCodeEquipment from "./dataEquipment/ListCodeEquipment";

const ButtonEquipment = observer(() => {

	const {dataOperations, radioButtons} = TechStore

	const [listEquipment, setListEquipment] = useState([])
	const [equipmentName, setEquipmentName] = useState("")

	const [listNumberEquipment, setListNumberEquipment] = useState([])
	const [listInventoryNumberForEquipment, setListInventoryNumberForEquipment] = useState([])
	const [valueInventoryNumber, setValueInventoryNumber] = useState("")

	const [valueCodeEquipment, setValueCodeEquipment] = useState("")

	const [open, setOpen] = useState(false)

	const [checkExistingOperation, setCheckExistingOperation] = useState(false)

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch("http://localhost:8000/api/tech/equipment/all")
				const result = await response.json()
				setListEquipment(result)
			} catch (e) {
				console.log(e)
			}
		})();

		(async () => {
			try {
				const response = await fetch("http://localhost:8000/api/tech/equipment/number/all")
				const result = await response.json()
				setListNumberEquipment(result)
			} catch (e) {
				console.log(e)
			}
		})();

	}, [])

	const handleOpen = async () => {
		setOpen(true)
		setCheckExistingOperation(false)
		setEquipmentName("")
		setValueInventoryNumber("")
		setValueCodeEquipment("")
		try {
			const oper_id = dataOperations.find(operation => operation["clicked"] === true)["oper_id"]
		} catch (e) {
			setOpen(false)
		}
	}

	const handleChangeNameEquipment = (event) => {
		const equipment = event.target.value
		setEquipmentName(equipment)
		const equipment_id = listEquipment.find((itemEquipment) => (
			itemEquipment["nameEquipment"] === equipment
		))["equipment_id"]
		setListInventoryNumberForEquipment(listNumberEquipment.filter((inventoryNumber) => (
			inventoryNumber["equipment_id"] === equipment_id
		)))
		setValueInventoryNumber("")
		setValueCodeEquipment("")
	}

	const handleFocus = () => {
		setCheckExistingOperation(false)
	}

	const handleChangeInventoryNumber = (event) => {
		const inventoryNumber = event.target.value
		setValueInventoryNumber(inventoryNumber)
		setValueCodeEquipment(listInventoryNumberForEquipment.find((inventoryNumberItem) => (
			inventoryNumberItem["inventoryNumber"] === inventoryNumber
		))["codeEquipment"])
	}

	const handleSubmit = async (event) => {
		event.preventDefault()
		const oper_id = dataOperations.find(operation => operation["clicked"] === true)["oper_id"]
		const equipment_id = listEquipment.find(equipment => (
			equipment["nameEquipment"] === equipmentName)
		)["equipment_id"]
		const number_id = listNumberEquipment.find(number => (
			number["inventoryNumber"] === valueInventoryNumber)
		)["number_id"]
		const response = await fetch(`http://localhost:8000/api/check/existing/equipment/${oper_id}`, {
			method: 'POST'
		})
		const result = await response.json()

		if (result.length) {

			setCheckExistingOperation(true)

			setEquipmentName("")
			setValueInventoryNumber("")
			setValueCodeEquipment("")
			setListInventoryNumberForEquipment([])
		} else {
			const response = await fetch("http://localhost:8000/api/create/equipment", {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json;charset=utf-8'
				},
				body: JSON.stringify({
					oper_id: oper_id,
					equipment_id: equipment_id,
					number_id: number_id
				})
			})
			await response.json()

			dataOperations.forEach(operation => {
				if (operation["oper_id"] === oper_id) {
					operation["equipment"].push({
						equipment_id: equipment_id,
						nameEquipment: equipmentName,
						inventoryNumber: valueInventoryNumber,
						codeEquipment: valueCodeEquipment,
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
						background: "#CC66FF",
						color: "black",

						"&:hover": {
							backgroundColor: "#CC66FF"
						}
					}
				}>
				Оборудование
			</Button>
			<Dialog
				open={open}
				onClose={handleClose}
				className="buttonAddItemEquipmentModalWindow"
			>
				<HeaderModalWindow header="Добавить оборудование" handleClose={handleClose}/>
				<DialogContent dividers>
					<form onSubmit={handleSubmit}>
						<ListEquipment
							handleChangeNameEquipment={handleChangeNameEquipment}
							equipmentName={equipmentName}
							listEquipment={listEquipment}
							checkExistingOperation={checkExistingOperation}
							handleFocus={handleFocus}
						/>
						<ListInventoryNumber
							valueInventoryNumber={valueInventoryNumber}
							handleChangeInventoryNumber={handleChangeInventoryNumber}
							listInventoryNumberForEquipment={listInventoryNumberForEquipment}
							checkExistingOperation={checkExistingOperation}
							handleFocus={handleFocus}
						/>
						<ListCodeEquipment
							valueCodeEquipment={valueCodeEquipment}
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