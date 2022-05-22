import React from 'react'
import InputTextField from "../../../../InputTextField"
import {observer} from "mobx-react";

const OutputOperationTextField = observer((props) => {

	const {
		operationItem,
		handleInputAndCheckboxChange,
		nameFieldFirstInput,
		nameFieldSecondInput,
		nameFieldFourthInput,
		nameFieldFifthInput,
		isValid
	} = props

	return (
		<div className="textFields">
			<div className="textField">
				<InputTextField
					label="Номер операции"
					name={nameFieldFirstInput}
					value={operationItem[nameFieldFirstInput]}
					onChange={handleInputAndCheckboxChange}
					isValidItem={isValid[nameFieldFirstInput]}
					helperText="Введите целое число"
				/>
			</div>
			<div className="textField">
				<InputTextField
					label="Наименование операции"
					name={nameFieldSecondInput}
					value={operationItem[nameFieldSecondInput]}
					onChange={handleInputAndCheckboxChange}
					isValidItem={isValid[nameFieldSecondInput]}
					helperText='Введите символы кириллицы'
				/>
			</div>
			<div className="textField">
				<InputTextField
					label="Цех"
					name={nameFieldFourthInput}
					value={operationItem[nameFieldFourthInput]}
					onChange={handleInputAndCheckboxChange}
					isValidItem={isValid[nameFieldFourthInput]}
					helperText="Введите целое число"
				/>
			</div>
			<div className="textField">
				<InputTextField
					label="Участок"
					name={nameFieldFifthInput}
					value={operationItem[nameFieldFifthInput]}
					onChange={handleInputAndCheckboxChange}
					isValidItem={isValid[nameFieldFifthInput]}
					helperText="Введите целое число"
				/>
			</div>
		</div>
	)
})

export default OutputOperationTextField