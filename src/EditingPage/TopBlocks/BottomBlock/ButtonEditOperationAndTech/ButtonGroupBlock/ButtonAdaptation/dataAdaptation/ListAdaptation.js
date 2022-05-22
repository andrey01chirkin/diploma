import React from 'react'
import {FormControl, FormHelperText, InputLabel, MenuItem, Select} from "@mui/material";

const ListAdaptation = (props) => {

	const {
		handleChangeNameAdaptation,
		adaptationName,
		listAdaptation,
		checkExistingOperation,
		handleFocus
	} = props

	return (
		<FormControl sx={{width: "100%"}} error={checkExistingOperation}>
			<InputLabel id="adaptation">Приспособление</InputLabel>
			<Select
				labelId="adaptation"
				label="Приспособление"
				value={adaptationName}
				onChange={handleChangeNameAdaptation}
				onFocus={handleFocus}
			>
				{listAdaptation.map(adaptation => (
					<MenuItem
						value={adaptation["nameAdaptation"]}
					>
						{adaptation["nameAdaptation"]}
					</MenuItem>
				))}
			</Select>
			{checkExistingOperation && <FormHelperText>Данное приспособление уже задано для операции</FormHelperText>}
		</FormControl>
	)
}

export default ListAdaptation