import React from 'react'
import {FormControl, FormHelperText, InputLabel, MenuItem, Select} from "@mui/material";

const ListEquipment = (props) => {

	const {
		handleChangeNameEquipment,
		equipmentName,
		listEquipment,
		checkExistingOperation,
		handleFocus
	} = props

	return (
		<FormControl sx={{width: "100%"}} error={checkExistingOperation}>
			<InputLabel id="equipment">Оборудование</InputLabel>
			<Select
				labelId="equipment"
				label="Оборудование"
				value={equipmentName}
				onChange={handleChangeNameEquipment}
				onFocus={handleFocus}
			>
				{listEquipment.map(equipment => (
					<MenuItem
						value={equipment["nameEquipment"]}
					>
						{equipment["nameEquipment"]}
					</MenuItem>
				))}
			</Select>
			{checkExistingOperation && <FormHelperText>Оборудование для данной операции уже существует</FormHelperText>}
		</FormControl>
	)
}

export default ListEquipment