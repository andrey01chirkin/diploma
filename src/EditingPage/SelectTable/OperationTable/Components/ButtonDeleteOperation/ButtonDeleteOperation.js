import React, {useState} from 'react'
import {Button, Fab, Menu} from "@mui/material"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import {observer} from "mobx-react"
import {toJS} from "mobx"
import CheckIcon from "@mui/icons-material/Check"
import CloseIcon from "@mui/icons-material/Close"
import TechStore from "../../../../../TechStore"

const ButtonDeleteOperation = observer(({index, item}) => {

    let {dataOperations} = TechStore

    const handleClickDeleteItem = (event) => {
        event.stopPropagation()
        dataOperations.splice(index, 1)
        setAnchorEl(null);

        (async () => {
            try {
                let response = await fetch(`http://localhost:8000/api/delete/operation/${item["oper_id"]}`, {
                    method: "DELETE"
                });
                await response.json();
            } catch (e) {
                console.log(e)
            }
        })();
    }

    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
        console.log(item["oper_id"]);
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <>
            <Button
                onClick={handleClick}
                sx={{
                    color: 'red'
                }}
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
                    onClick={handleClickDeleteItem}
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

export default ButtonDeleteOperation