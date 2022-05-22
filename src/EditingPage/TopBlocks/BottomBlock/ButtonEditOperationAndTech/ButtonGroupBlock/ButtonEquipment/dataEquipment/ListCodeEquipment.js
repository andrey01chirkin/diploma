import React from 'react'
import {FormControl, FormHelperText, TextField} from "@mui/material";

const ListCodeEquipment = ({valueCodeEquipment, checkExistingOperation}) => {
	return (
		<FormControl sx={{width: "100%"}}>
			<TextField
				label="Код оборудования"
				value={valueCodeEquipment}
				disabled={!checkExistingOperation}
				error={checkExistingOperation}
			/>
		</FormControl>
	)
}

export default ListCodeEquipment