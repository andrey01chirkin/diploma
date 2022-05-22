import React from 'react'
import {FormControl, FormHelperText, TextField} from "@mui/material";

const ListCodeItem = (props) => {

	const {
		labelThirdField,
		value,
		checkExistingItem
	} = props

	return (
		<FormControl sx={{width: "100%"}}>
			<TextField
				label={labelThirdField}
				value={value}
				disabled={!checkExistingItem}
				error={checkExistingItem}
			/>
		</FormControl>
	)
}

export default ListCodeItem