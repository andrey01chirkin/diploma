import React from 'react'
import {Button} from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TechStore from "../../../../../TechStore";
import {observer} from "mobx-react";
import {toJS} from "mobx";

const RowMoveUpAndDown = observer(() => {

    const {dataOperations, radioButtons} = TechStore

    let index
    dataOperations.forEach((operation, indexOperation) => {
        if (operation['clicked']) {
            index = indexOperation
        }
    })

    const buttonStyle = {
        but1: {
            minWidth: '30px',
            padding: 0,
            marginRight: '5px'
        },
        but2: {
            minWidth: '30px',
            padding: 0,
        }
    }

    const handleClickRowUp = () => {
        let strPrev
        if (index === 0) {
            strPrev = dataOperations[index]
            dataOperations.splice(index, 1)
            dataOperations.splice((dataOperations.length), 0, strPrev)
        } else {
            strPrev = dataOperations[index - 1]
            dataOperations[index - 1] = dataOperations[index]
            dataOperations[index] = strPrev
        }

        dataOperations.forEach((operation) => {
            operation["clicked"] = false
        })

        if (index === 0) {
            dataOperations[dataOperations.length - 1]["clicked"] = true
        } else {
            dataOperations[index - 1]["clicked"] = true
        }

        console.log("dataOperations", toJS(dataOperations))

    }

    const handleClickRowDown = () => {
        let strPrev
        if (index === (dataOperations.length - 1)) {
            strPrev = dataOperations[dataOperations.length - 1]
            dataOperations.splice((dataOperations.length - 1), 1)
            dataOperations.splice(0, 0, strPrev)
        } else {
            strPrev = dataOperations[index + 1]
            dataOperations[index + 1] = dataOperations[index]
            dataOperations[index] = strPrev
        }

        dataOperations.forEach((operation) => {
            operation["clicked"] = false
        })

        if (index === (dataOperations.length - 1)) {
            dataOperations[0]["clicked"] = true
        } else {
            dataOperations[index + 1]["clicked"] = true
        }

        console.log("dataOperations", toJS(dataOperations))

    }

    return (
        <>
            {(radioButtons["content"] || radioButtons["norm"]) ? (
                <>
                    <Button
                        disabled
                        variant="contained"
                        sx={buttonStyle.but1}
                        className="buttonStyle"
                        onClick={handleClickRowUp}
                    >
                        <ExpandLessIcon/>
                    </Button>
                    <Button
                        disabled
                        variant="contained"
                        sx={buttonStyle.but2}
                        onClick={handleClickRowDown}
                    >
                        <ExpandMoreIcon/>
                    </Button>
                </>

            ) : (
                <>
                    <Button
                        variant="contained"
                        sx={buttonStyle.but1}
                        className="buttonStyle"
                        onClick={handleClickRowUp}
                    >
                        <ExpandLessIcon/>
                    </Button>
                    <Button
                        variant="contained"
                        sx={buttonStyle.but2}
                        onClick={handleClickRowDown}
                    >
                        <ExpandMoreIcon/>
                    </Button>
                </>

            )}

        </>
    )
})

export default RowMoveUpAndDown