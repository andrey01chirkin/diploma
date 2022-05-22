import React from 'react'
import TechStore from "../../../../../TechStore"
import BorderHorizontalOutlinedIcon from "@mui/icons-material/BorderHorizontalOutlined"
import {Button} from "@mui/material"
import {nanoid} from "nanoid"
import {toJS} from "mobx";
import {observer} from "mobx-react";

const AddRowMiddle = observer(() => {

    const {dataOperations, radioButtons, tech_id} = TechStore

    const operationItem = {
        oper_id: nanoid(),
        numberOperation: '',
        nameOperation: '',
        workshop: '',
        area: '',
        OO: false,
        OTK: false,
        PZ: false,
        KPS: false,
        transition: [],
        equipment: [],
        adaptation: [],
        tool: [],
        clicked: false,
        tech_id: tech_id
    }

    const buttonStyle = {
        but2: {
            minWidth: '30px',
            padding: 0,
        }
    }

    const handleClick = () => {
        let indexOperationClicked
        dataOperations.forEach((operation, indexOperation) => {
            if (operation["clicked"]) {
                indexOperationClicked = indexOperation
            }
        })
        if (indexOperationClicked) {
            dataOperations.splice((indexOperationClicked + 1), 0, operationItem)
            dataOperations[indexOperationClicked]["clicked"] = false
            dataOperations[indexOperationClicked + 1]["clicked"] = true
        } else {
            dataOperations.splice(dataOperations.length, 0, operationItem)
        }
    }

    return (
        <>
            {(radioButtons["content"] || radioButtons["norm"]) ? (
                        <Button
                            disabled
                            variant="contained"
                            sx={buttonStyle.but2}
                            onClick={handleClick}
                        >
                            <BorderHorizontalOutlinedIcon/>
                        </Button>
                    ) : (
                        <Button
                            variant="contained"
                            sx={buttonStyle.but2}
                            onClick={handleClick}
                        >
                            <BorderHorizontalOutlinedIcon/>
                        </Button>
                    )
                }
        </>

    )
})

export default AddRowMiddle