import React from 'react'
import InputTextField from "../../../../EditingPage/SelectTable/InputTextField";

const TextFieldsEquipmentData = ({value, onChange, isValid}) => {
	return (
		<>
			<div className="TextFieldsEquipmentData">
				<div className="TextFieldEquipmentData">
					<InputTextField
						label="Наименование"
						name="techName"
						value={value["techName"]}
						onChange={onChange}
						isValidItem={isValid["techName"]}
						helperText="Введите символы кириллицы или числовые значения"
					/>
				</div>
				<div className="TextFieldEquipmentData">
					<InputTextField
						label="Обозначение"
						name="techMark"
						value={value["techMark"]}
						onChange={onChange}
						isValidItem={isValid["techMark"]}
						helperText="Введите целое число"
					/>
				</div>
				<div className="TextFieldEquipmentData">
					<InputTextField
						label="Цех"
						name="techWorkshop"
						value={value["techWorkshop"]}
						onChange={onChange}
						isValidItem={isValid["techWorkshop"]}
						helperText="Введите целое число"
					/>
				</div>
			</div>
		</>
	)
}

export default TextFieldsEquipmentData