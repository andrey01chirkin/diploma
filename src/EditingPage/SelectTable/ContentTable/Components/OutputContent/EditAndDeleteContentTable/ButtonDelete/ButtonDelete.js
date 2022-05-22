import React, {useState} from 'react'
import DeleteForeverIcon from "@mui/icons-material/DeleteForever"
import {Button, Fab, Menu} from "@mui/material"
import CloseIcon from '@mui/icons-material/Close'
import CheckIcon from '@mui/icons-material/Check'
import TechStore from "../../../../../../../TechStore"
import {toJS} from "mobx";

const ButtonDelete = ({item, index, indexItem, nameItem}) => {

	const {dataOperations} = TechStore

	const handleClickConfirm = () => {

		dataOperations[index][nameItem].splice(indexItem, 1)
		const keys = Object.keys(item)
		const keyItem = keys[0];

		(async () => {
			try {
				const response = await fetch(`http://localhost:8000/api/delete/${nameItem}/${item[keyItem]}`, {
					method: "DELETE",
					headers: {
						'Content-Type': 'application/json;charset=utf-8'
					},
					body: JSON.stringify({
						oper_id: item["oper_id"],
						number_id: item["number_id"]
					})
				})
				await response.json()
			} catch (e) {
				console.log(e)
			}
		})()
	}

	const [anchorEl, setAnchorEl] = useState(null)
	const open = Boolean(anchorEl)

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget)
	}

	const handleClose = () => {
		setAnchorEl(null)
	}

	return (
		<>
			<Button
				onClick={handleClick}
				sx={{
					color: 'red'
				}}
			>
				<DeleteForeverIcon fontSize="small"/>
			</Button>
			<Menu
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				sx={{
					'& .MuiMenu-paper': {
						padding: '10px'
					}
				}}
			>
				<p style={{fontSize: '14px', fontWeight: 'bold'}}> Подтвердить </p>
				<Fab
					color="primary"
					size="small"
					onClick={handleClickConfirm}
				>
					<CheckIcon/>
				</Fab>
				<Fab
					size="small"
					sx={{
						backgroundColor: 'red',
						color: '#fff',
						marginLeft: '7px',
						':hover': {
							backgroundColor: '#b22a00'
						}
					}}
					onClick={handleClose}
				>
					<CloseIcon/>
				</Fab>
			</Menu>
		</>
	)
}

export default ButtonDelete