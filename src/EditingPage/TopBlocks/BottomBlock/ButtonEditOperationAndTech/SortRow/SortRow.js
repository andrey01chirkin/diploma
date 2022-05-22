import React from 'react'
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import {Button} from "@mui/material";
import {observer} from "mobx-react";
import TechStore from "../../../../../TechStore";
import {toJS} from "mobx";

const SortRow = observer(() => {

	const {dataOperations} = TechStore

	const buttonStyle = {
		but2: {
			minWidth: '30px',
			padding: 0,
		}
	}

	const handleClick = () => {
		dataOperations.sort((item1, item2) => item1.numberOperation > item2.numberOperation ? 1 : -1);
	}

	return (
		<Button
			variant="contained"
			sx={buttonStyle.but2}
			onClick={handleClick}
		>
			<FormatListNumberedIcon/>
		</Button>
	)
})

export default SortRow