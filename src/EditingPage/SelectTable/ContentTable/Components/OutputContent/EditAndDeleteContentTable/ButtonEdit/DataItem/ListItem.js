import React from 'react'
import {FormControl, FormHelperText, InputLabel, MenuItem, Select} from "@mui/material";

const ListItem = (props) => {

	const {
		handleChangeNameItemFirstField,
		nameFirstField,
		listFirstField,
		checkExistingItem,
		labelFirstField,
		value,
		handleFocus
	} = props

	return (
		<FormControl sx={{width: "100%"}} error={checkExistingItem}>
			<InputLabel id="item">{labelFirstField}</InputLabel>
			<Select
				labelId="item"
				label={labelFirstField}
				value={value}
				onChange={handleChangeNameItemFirstField}
				onFocus={handleFocus}
			>
				{listFirstField.map(item => (
					<MenuItem
						value={item[nameFirstField]}
					>
						{item[nameFirstField]}
					</MenuItem>
				))}
			</Select>
			{checkExistingItem && <FormHelperText sx={{color: 'red'}}>Данный элемент уже задан для операции</FormHelperText>}
		</FormControl>
	)
}

export default ListItem