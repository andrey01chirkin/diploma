import React from 'react'
import InputCheckbox from "../../InputCheckbox";

const OutputOperationCheckbox = (props) => {

	const {
		operationItem,
		handleInputAndCheckboxChange,
		nameFieldFirstInput,
		nameFieldSecondInput,
		nameFieldThirdInput,
		nameFieldFourthInput,
	} = props

	return (
		<div className="inputCheckboxs">
			<InputCheckbox
				label="ОО"
				name={nameFieldFirstInput}
				checked={operationItem[nameFieldFirstInput]}
				onChange={handleInputAndCheckboxChange}
			/>
			<InputCheckbox
				label="ОТК"
				name={nameFieldSecondInput}
				checked={operationItem[nameFieldSecondInput]}
				onChange={handleInputAndCheckboxChange}
			/>
			<InputCheckbox
				label="ПЗ"
				name={nameFieldThirdInput}
				checked={operationItem[nameFieldThirdInput]}
				onChange={handleInputAndCheckboxChange}
			/>
			<InputCheckbox
				label="КПС"
				name={nameFieldFourthInput}
				checked={operationItem[nameFieldFourthInput]}
				onChange={handleInputAndCheckboxChange}
			/>
		</div>
	)
}

export default OutputOperationCheckbox