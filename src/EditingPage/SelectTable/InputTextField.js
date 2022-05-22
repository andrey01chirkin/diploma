import React from 'react'
import {TextField} from "@mui/material"
import {observer} from "mobx-react"

const InputTextField = observer(({label, name, value, onChange, isValidItem, helperText, width}) => {

    return (
        <>
            <TextField
                error={isValidItem}
                type="text"
                label={label}
                variant="outlined"
                sx={{
                    width: '100%'
                }}
                name={name}
                value={value}
                onChange={onChange}
                helperText={isValidItem && helperText}
            />
        </>
    )
})

export default InputTextField