import React from 'react'
import InputTextField from "../../../../../../InputTextField"

const OutputExecutorTextFields = (props) => {

	const {
		executorItem,
		handleInputChangeEdit,
		nameFieldFirstInput,
		nameFieldSecondInput,
		nameFieldThirdInput,
		nameFieldFourthInput,
		nameFieldFifthInput,
		isValid
	} = props

	return (
		<>
			<div className="textFields">
				<div className="textField">
					<InputTextField
						label="Исполнитель"
						name={nameFieldFirstInput}
						value={executorItem[nameFieldFirstInput]}
						onChange={handleInputChangeEdit}
						isValidItem={isValid[nameFieldFirstInput]}
						helperText="Введите целое число"
					/>
				</div>
				<div className="textField">
					<InputTextField
						label="Тшт"
						name={nameFieldSecondInput}
						value={executorItem[nameFieldSecondInput]}
						onChange={handleInputChangeEdit}
						isValidItem={isValid[nameFieldSecondInput]}
						helperText="Введите целое число"
					/>
				</div>
				<div className="textField">
					<InputTextField
						label="Тпз"
						name={nameFieldThirdInput}
						value={executorItem[nameFieldThirdInput]}
						onChange={handleInputChangeEdit}
						isValidItem={isValid[nameFieldThirdInput]}
						helperText="Введите целое число"
					/>
				</div>
				<div className="textField">
					<InputTextField
						label="Тест"
						name={nameFieldFourthInput}
						value={executorItem[nameFieldFourthInput]}
						onChange={handleInputChangeEdit}
						isValidItem={isValid[nameFieldFourthInput]}
						helperText="Введите целое число"
					/>
				</div>
				<div className="textField">
					<InputTextField
						label="КВР"
						name={nameFieldFifthInput}
						value={executorItem[nameFieldFifthInput]}
						onChange={handleInputChangeEdit}
						isValidItem={isValid[nameFieldFifthInput]}
						helperText="Введите целое число"
					/>
				</div>
			</div>
		</>

	)
}

export default OutputExecutorTextFields