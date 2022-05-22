import React, {useState} from 'react'
import {Button, Fab, Menu} from "@mui/material"
import DeleteForeverIcon from "@mui/icons-material/DeleteForever"
import CheckIcon from "@mui/icons-material/Check"
import CloseIcon from "@mui/icons-material/Close"
import {observer} from "mobx-react";
import TechStore from "../../../../../../../TechStore";

const ButtonDeleteExecutor = observer(({item, indexOperation, indexTransition, indexExecutor}) => {

    const {dataOperations} = TechStore
    const transition = "transition"
    const executor = "executor"

    const handleClickSubmit = () => {
        dataOperations[indexOperation][transition][indexTransition][executor].splice(indexExecutor, 1);
        (async() => {
            const response = await fetch(`http://localhost:8000/api/delete/executor/${item["executor_id"]}`, {
                method: "DELETE"
            })
            await response.json()
        })()
        setAnchorEl(null)
    }

    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <>
            <Button
                onClick={handleClick}
                color="error"
            >
                <DeleteForeverIcon fontSize="small"/>
            </Button>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                sx={{
                    '& .MuiMenu-paper': {
                        padding: '10px'
                    }
                }}
            >
                <p style={{fontSize: '14px', fontWeight: 'bold'}}> Подтвердить </p>
                <Fab
                    color="primary"
                    size="small"
                    onClick={handleClickSubmit}
                >
                    <CheckIcon/>
                </Fab>
                <Fab
                    size="small"
                    sx={{
                        backgroundColor: 'red',
                        color: '#fff',
                        marginLeft: '7px',
                        ':hover': {
                            backgroundColor: '#b22a00'
                        }
                    }}
                    onClick={handleClose}
                >
                    <CloseIcon/>
                </Fab>
            </Menu>
        </>
    )
})

export default ButtonDeleteExecutor