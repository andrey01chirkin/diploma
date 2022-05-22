import React from 'react'
import {Paper} from "@mui/material"
import InputTextField from "../../../../InputTextField";

const FieldsAddEquipment = (props) => {

	const {
		initialItem,
		indexItem,
		fieldNameFirstInput,
		fieldNameSecondInput,
		fieldNameThirdInput,
		labelEquipment,
		labelInventoryNumber,
		labelCodeEquipment,
		handleInputChange,
		isValid
	} = props

	return (
		<Paper
			variant="outlined"
			sx={{
				width: '100%',
				marginBottom: '15px'
			}}
		>
			<div className="contentOperation">
				<div className="contentOperation__item">
					<InputTextField
						label={labelEquipment}
						name={fieldNameFirstInput}
						value={initialItem[indexItem][fieldNameFirstInput]}
						onChange={handleInputChange(indexItem)}
						isValidItem={isValid[fieldNameFirstInput]}
						helperText="Введите символы кириллицы"
					/>
				</div>
				<div className="contentOperation__item">
					<InputTextField
						label={labelInventoryNumber}
						name={fieldNameSecondInput}
						value={initialItem[indexItem][fieldNameSecondInput]}
						onChange={handleInputChange(indexItem)}
						isValidItem={isValid[fieldNameSecondInput]}
						helperText="Введите целое число"
					/>
				</div>
				<div className="contentOperation__item">
					<InputTextField
						label={labelCodeEquipment}
						name={fieldNameThirdInput}
						value={initialItem[indexItem][fieldNameThirdInput]}
						onChange={handleInputChange(indexItem)}
						isValidItem={isValid[fieldNameThirdInput]}
						helperText="Введите целое число"
					/>
				</div>
			</div>
		</Paper>
	)
}

export default FieldsAddEquipment