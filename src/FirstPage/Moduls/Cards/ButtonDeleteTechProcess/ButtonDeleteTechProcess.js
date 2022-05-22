import React, {useState} from 'react'
import Button from "@mui/material/Button";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import {Fab, Menu} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import TechStore from "../../../../TechStore";
import {toJS} from "mobx";

const ButtonDeleteTechProcess = ({indexTech}) => {

	const {dataTechProcess} = TechStore
	const [anchorEl, setAnchorEl] = useState(null)
	const open = Boolean(anchorEl)

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget)
		console.log(event.target)
		console.log("dataTechProcess", toJS(dataTechProcess))
	}

	const handleClickConfirm = async() => {
		const tech_id = dataTechProcess[indexTech]["tech_id"]
		const response = await fetch(`http://localhost:8000/api/delete/tech/${tech_id}`, {
			method: "DELETE"
		})
		await response.json()
		dataTechProcess.splice(indexTech, 1)
	}

	const handleClose = () => {
		setAnchorEl(null)
	}

	return (
		<div>
			<Button
				onClick={handleClick}
				color={"error"}
				variant="contained"
				sx={{
					height: '100%',
					minWidth: '32px',
					paddingLeft: '10px',
					paddingRight: '10px',
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
		</div>
	)
}

export default ButtonDeleteTechProcess