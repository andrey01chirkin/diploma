import React from 'react'
import {FormControl, FormHelperText, InputLabel, MenuItem, Select} from "@mui/material";

const ListTool = (props) => {

	const {
		handleChangeNameTool,
		toolName,
		listTool,
		checkExistingOperation,
		handleFocus
	} = props

	return (
		<FormControl sx={{width: "100%"}} error={checkExistingOperation}>
			<InputLabel id="tool">Инструмент</InputLabel>
			<Select
				labelId="tool"
				label="Инструмент"
				value={toolName}
				onChange={handleChangeNameTool}
				onFocus={handleFocus}
			>
				{listTool.map(adaptation => (
					<MenuItem
						value={adaptation["nameTool"]}
					>
						{adaptation["nameTool"]}
					</MenuItem>
				))}
			</Select>
			{checkExistingOperation && <FormHelperText>Данный инструмент уже задан для операции</FormHelperText>}
		</FormControl>
	)
}

export default ListTool