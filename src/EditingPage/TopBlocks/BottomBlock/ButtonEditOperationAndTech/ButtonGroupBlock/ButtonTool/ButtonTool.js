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
import ListTool from "./dataTool/ListTool";
import ListInventoryNumber from "./dataTool/ListInventoryNumber";
import ListCodeTool from "./dataTool/ListCodeTool";

const ButtonEquipment = observer(() => {

	const {dataOperations, radioButtons} = TechStore

	const [listTool, setListTool] = useState([])
	const [toolName, setToolName] = useState("")

	const [listNumberTool, setListNumberTool] = useState([])
	const [listInventoryNumberForTool, setListInventoryNumberForTool] = useState([])
	const [valueInventoryNumber, setValueInventoryNumber] = useState("")

	const [valueCodeTool, setValueCodeTool] = useState("")

	const [open, setOpen] = useState(false)

	const [checkExistingOperation, setCheckExistingOperation] = useState(false)

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch("http://localhost:8000/api/tech/tool/all")
				const result = await response.json()
				setListTool(result)
			} catch (e) {
				console.log(e)
			}
		})();

		(async () => {
			try {
				const response = await fetch("http://localhost:8000/api/tech/tool/number/all")
				const result = await response.json()
				setListNumberTool(result)
			} catch (e) {
				console.log(e)
			}
		})();

	}, [])

	const handleOpen = async () => {
		setOpen(true)
		setCheckExistingOperation(false)
		setToolName("")
		setValueInventoryNumber("")
		setValueCodeTool("")
		try {
			const oper_id = dataOperations.find(operation => operation["clicked"] === true)["oper_id"]
		} catch (e) {
			setOpen(false)
		}
	}

	const handleChangeNameTool = (event) => {
		const tool = event.target.value
		setToolName(tool)
		const tool_id = listTool.find((itemTool) => (
			itemTool["nameTool"] === tool
		))["tool_id"]
		setListInventoryNumberForTool(listNumberTool.filter(inventoryNumber => (
			inventoryNumber["tool_id"] === tool_id
		)))
		setValueInventoryNumber("")
		setValueCodeTool("")
	}

	const handleFocus = () => {
		setCheckExistingOperation(false)
	}

	const handleChangeInventoryNumber = (event) => {
		const inventoryNumber = event.target.value
		setValueInventoryNumber(inventoryNumber)
		setValueCodeTool(listInventoryNumberForTool.find((inventoryNumberItem) => (
			inventoryNumberItem["inventoryNumber"] === inventoryNumber
		))["codeTool"])
	}

	const handleSubmit = async (event) => {

		event.preventDefault()

		const oper_id = dataOperations.find(operation => operation["clicked"] === true)["oper_id"]
		const tool_id = listTool.find(adaptation => (
			adaptation["nameTool"] === toolName)
		)["tool_id"]
		const number_id = listNumberTool.find(number => (
			number["inventoryNumber"] === valueInventoryNumber)
		)["number_id"]
		const response = await fetch('http://localhost:8000/api/check/existing/tool', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json;charset=utf-8'
			},
			body: JSON.stringify({
				oper_id: oper_id,
				tool_id: tool_id,
				number_id: number_id
			})
		})
		const result = await response.json()
		if (result.length) {

			setCheckExistingOperation(true)

			setToolName("")
			setValueInventoryNumber("")
			setValueCodeTool("")
			setListInventoryNumberForTool([])

		} else {
			const response = await fetch("http://localhost:8000/api/create/tool", {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json;charset=utf-8'
				},
				body: JSON.stringify({
					oper_id: oper_id,
					tool_id: tool_id,
					number_id: number_id
				})
			})
			await response.json()

			dataOperations.forEach(operation => {
				if (operation["oper_id"] === oper_id) {
					operation["tool"].push({
						tool_id: tool_id,
						nameTool: toolName,
						inventoryNumber: valueInventoryNumber,
						codeTool: valueCodeTool,
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
						background: "#CCFFCC",
						color: "black",

						"&:hover": {
							backgroundColor: "#CCFFCC"
						}
					}
				}>
				Инструмент
			</Button>
			<Dialog
				open={open}
				onClose={handleClose}
				className="buttonAddItemEquipmentModalWindow"
			>
				<HeaderModalWindow header="Добавить инструмент" handleClose={handleClose}/>
				<DialogContent dividers>
					<form onSubmit={handleSubmit}>
						<ListTool
							handleChangeNameTool={handleChangeNameTool}
							toolName={toolName}
							listTool={listTool}
							checkExistingOperation={checkExistingOperation}
							handleFocus={handleFocus}
						/>
						<ListInventoryNumber
							valueInventoryNumber={valueInventoryNumber}
							handleChangeInventoryNumber={handleChangeInventoryNumber}
							listInventoryNumberForTool={listInventoryNumberForTool}
							checkExistingOperation={checkExistingOperation}
							handleFocus={handleFocus}
						/>
						<ListCodeTool
							valueCodeTool={valueCodeTool}
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