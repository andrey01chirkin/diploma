import React from 'react'
import InputTextField from "../../../../../../InputTextField"

const EditTransition = (props) => {
    const {
        selectedValue,
        handleEditTransition,
        labelFirstInput,
        nameFieldFirstInput,
        isValidTransition
    } = props

    return (
        <div className="textFields">
            <div className="textField">
                <InputTextField
                    label={labelFirstInput}
                    name={nameFieldFirstInput}
                    value={selectedValue[nameFieldFirstInput]}
                    onChange={handleEditTransition}
                    isValidItem={isValidTransition}
                    helperText="Введите символы кириллицы"
                />
            </div>
        </div>
    )
}

export default EditTransition