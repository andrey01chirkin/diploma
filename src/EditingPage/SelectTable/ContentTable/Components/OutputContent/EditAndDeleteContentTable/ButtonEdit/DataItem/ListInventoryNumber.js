import React from 'react'
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";

const ListInventoryNumber = (props) => {

	const {
		handleChangeNumber,
		nameSecondField,
		listNumberForFirstField,
		checkExistingItem,
		labelSecondField,
		value,
		handleFocus
	} = props

	return (
		<FormControl sx={{width: "100%", margin: "22px 0"}} error={checkExistingItem}>
			<InputLabel id="inventoryNumber">{labelSecondField}</InputLabel>
			<Select
				labelId="inventoryNumber"
				label={labelSecondField}
				value={value}
				onChange={handleChangeNumber}
				onFocus={handleFocus}
			>
				{listNumberForFirstField.map((item) => (
					<MenuItem value={item[nameSecondField]}>{item[nameSecondField]}</MenuItem>
				))}
			</Select>
		</FormControl>
	)
}

export default ListInventoryNumber