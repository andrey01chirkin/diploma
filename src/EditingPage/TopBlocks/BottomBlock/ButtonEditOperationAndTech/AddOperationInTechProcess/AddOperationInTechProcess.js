import React, {useEffect, useState} from 'react'
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material"
import TechStore from "../../../../../TechStore"
import {observer} from "mobx-react";

const AddOperationInTechProcess = observer(() => {

    let {dataOperations, nameOperations} = TechStore
    const [nameOperationItem, setNameOperationItem] = useState(nameOperations)

    const handleChangeSelect = (event) => {
        setNameOperationItem(event.target.value)
    }

    useEffect(() => {
        nameOperations = nameOperationItem
        dataOperations.forEach((operation) => {
            if (operation["clicked"] && nameOperationItem) {
                operation["nameOperation"] = nameOperationItem;
                (async() => {
                    const response = await fetch(`http://localhost:8000/api/edit/operation/name/${operation["oper_id"]}`, {
                        method: "PUT",
                        headers: {
                            'Content-Type': 'application/json;charset=utf-8'
                        },
                        body: JSON.stringify({
                            nameOperation: nameOperationItem
                        })
                    })
                    await response.json()
                })()
            }
        })
    }, [nameOperationItem])

    const handleBlur = () => {
        setNameOperationItem('')
    }

    return (
        <FormControl
            variant="outlined"
            sx={{
                width: '130px',
            }}
        >
            <InputLabel sx={{top: '-11px'}}>Операции</InputLabel>
            <Select
                sx={{
                    '.MuiSelect-select': {
                        paddingTop: '5px',
                        paddingRight: '12px',
                        paddingBottom: '3px',
                        paddingLeft: '12px'
                    }
                }}
                value={nameOperationItem}
                onChange={handleChangeSelect}
                onBlur={handleBlur}
            >
                <MenuItem value="Токарная">Токарная</MenuItem>
                <MenuItem value="Фрезерная">Фрезерная</MenuItem>
                <MenuItem value="Координатно-расточная">Координатно-расточная</MenuItem>
                <MenuItem value="Зуборезная">Зуборезная</MenuItem>
                <MenuItem value="Сверлильная">Сверлильная</MenuItem>
                <MenuItem value="Шлифовальная">Шлифовальная</MenuItem>
                <MenuItem value="Протяжная">Протяжная</MenuItem>
                <MenuItem value="Хонинговальная">Хонинговальная</MenuItem>
                <MenuItem value="Суперфиниш">Суперфиниш</MenuItem>
            </Select>
        </FormControl>
    )
})

export default AddOperationInTechProcess