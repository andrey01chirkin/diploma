import React from 'react'
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";

const ListInventoryNumber = (props) => {
const {
	valueInventoryNumber,
	handleChangeInventoryNumber,
	listInventoryNumberForEquipment,
	checkExistingOperation,
	handleFocus
} = props
	return (
		<FormControl sx={{width: "100%", margin: "20px 0"}} error={checkExistingOperation}>
			<InputLabel id="inventoryNumber">Инвентарный номер</InputLabel>
			<Select
				labelId="inventoryNumber"
				label="Инвентарный номер"
				value={valueInventoryNumber}
				onChange={handleChangeInventoryNumber}
				onFocus={handleFocus}
			>
				{listInventoryNumberForEquipment.map((item) => (
					<MenuItem value={item["inventoryNumber"]}>{item["inventoryNumber"]}</MenuItem>
				))}
			</Select>
		</FormControl>
	)
}

export default ListInventoryNumber