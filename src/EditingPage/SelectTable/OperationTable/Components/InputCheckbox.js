import React from 'react'
import {Checkbox, FormControlLabel} from "@mui/material";

const InputCheckbox = ({label, name, checked, onChange}) => {
	return (
		<FormControlLabel
			type="checkbox"
			name={name}
			control={<Checkbox size="small"/>}
			label={label}
			checked={checked}
			onChange={onChange}
		/>
	)
}

export default InputCheckbox