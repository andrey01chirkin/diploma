import React from 'react'
import {observer} from "mobx-react"
import InputTextField from "../../../../../../InputTextField"

const OutputTextFieldExecutor = observer((props) => {

	const {
		contentExecutor,
		handleInputChangeExecutor,
		isValid
	} = props

	return (
		<div className="contentExecutor">
			<div className="contentExecutor__item">
				<InputTextField
				label="Исполнитель"
					name="nameExecutor"
					value={contentExecutor["nameExecutor"]}
					onChange={handleInputChangeExecutor}
					isValidItem={isValid["nameExecutor"]}
					helperText="Введите целое число"
				/>
			</div>
			<div className="contentExecutor__item">
				<InputTextField
					label="Тшт"
					name="tsht"
					value={contentExecutor["tsht"]}
					onChange={handleInputChangeExecutor}
					isValidItem={isValid["tsht"]}
					helperText="Введите целое число"
				/>
			</div>
			<div className="contentExecutor__item">
				<InputTextField
					label="Тпз"
					name="tpz"
					value={contentExecutor["tpz"]}
					onChange={handleInputChangeExecutor}
					isValidItem={isValid["tpz"]}
					helperText="Введите целое число"
				/>
			</div>
			<div className="contentExecutor__item">
				<InputTextField
					label="Тест"
					name="test"
					value={contentExecutor["test"]}
					onChange={handleInputChangeExecutor}
					isValidItem={isValid["test"]}
					helperText="Введите целое число"
				/>
			</div>
			<div className="contentExecutor__item">
				<InputTextField
					label="КВР"
					name="kvr"
					value={contentExecutor["kvr"]}
					onChange={handleInputChangeExecutor}
					isValidItem={isValid["kvr"]}
					helperText="Введите целое число"
				/>
			</div>
		</div>
	)
})

export default OutputTextFieldExecutor