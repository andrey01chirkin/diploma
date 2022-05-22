import React from 'react'
import {Paper} from "@mui/material"
import InputTextField from "../../../../InputTextField"

const FieldsAddTransition = (props) => {

    const {
        initialTransition,
        name,
        handleInputChange,
        indexTransition,
        label,
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
                        label={label}
                        name={name}
                        value={initialTransition[indexTransition][name]}
                        onChange={handleInputChange(indexTransition)}
                        isValidItem={isValid[name]}
                        helperText="Введите символы кириллицы"
                    />
                </div>
            </div>
        </Paper>
    )
}

export default FieldsAddTransition