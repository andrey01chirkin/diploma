import React, {useState} from 'react'
import EditIcon from "@mui/icons-material/Edit";
import {Button, Dialog, DialogActions, DialogContent} from "@mui/material";
import OutputExecutorTextFields from "./OutputExecutorTextFields/OutputExecutorTextFields";
import {observer} from "mobx-react";
import TechStore from "../../../../../../../TechStore";
import HeaderModalWindow from "../../../../../HeaderModalWindow";
import {toJS} from "mobx";

const ButtonEditExecutor = observer((props) => {

    const {
        item,
        indexExecutor,
        indexTransition,
        indexOperation,
    } = props

    const {dataOperations} = TechStore
    const [open, setOpen] = useState(false)
    const [executorItem, setExecutorItem] = useState(item)

    const [isValid, setIsValid] = useState({
        nameExecutor: false,
        tsht: false,
        tpz: false,
        test: false,
        kvr: false
    })

    const transition = "transition"
    const executor = "executor"

    const handleClickOpen = () => {
        setOpen(true)
        console.log("executorItem", toJS(executorItem))
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleInputChangeEdit = (event) => {
        const {name, value} = event.target
        setExecutorItem({...executorItem, [name]: value})
    }

    const handleSubmitEdit = (event) => {

        event.preventDefault()

        let dataNum = /^\d+$/

        let copyExecutorItem = JSON.parse(JSON.stringify(executorItem))
        delete copyExecutorItem["executor_id"]
        delete copyExecutorItem["tshtCalculated"]
        delete copyExecutorItem["tpzCalculated"]
        delete copyExecutorItem["testCalculated"]
        delete copyExecutorItem["trans_id"]
        let copyIsValid = JSON.parse(JSON.stringify(isValid))
        for (let key in copyExecutorItem) {
            if (dataNum.test(copyExecutorItem[key])) {
                copyIsValid[key] = false
            } else {
                copyIsValid[key] = true
            }
        }

        setIsValid(copyIsValid)

        let valuesObjectIsValid = Object.values(copyIsValid)
        console.log("valuesObjectIsValid", valuesObjectIsValid)
        if (!valuesObjectIsValid.includes(true)) {
            dataOperations[indexOperation][transition][indexTransition][executor][indexExecutor] = executorItem;
            (async() => {
                const response = await fetch(`http://localhost:8000/api/edit/executor/${executorItem["executor_id"]}`, {
                    method: 'PUT',
                    headers: {
                        "Content-Type": "application/json;charset=utf-8"
                    },
                    body: JSON.stringify(executorItem)
                })
                await response.json()
            })();
            setOpen(false)
        }
    }

    return (
        <>
            <Button
                variant="text"
                onClick={handleClickOpen}
            >
                <EditIcon
                    fontSize="small"
                    sx={{
                        color: 'black'
                    }}
                />
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                className="buttonEditItemExecutorModalWindow"
            >
                <HeaderModalWindow header="Редактировать исполнителя" handleClose={handleClose}/>
                <DialogContent dividers>
                    <form method="POST" onSubmit={handleSubmitEdit}>
                        <OutputExecutorTextFields
                            executorItem={executorItem}
                            handleInputChangeEdit={handleInputChangeEdit}
                            nameFieldFirstInput="nameExecutor"
                            nameFieldSecondInput="tsht"
                            nameFieldThirdInput="tpz"
                            nameFieldFourthInput="test"
                            nameFieldFifthInput="kvr"
                            isValid={isValid}
                        />
                        <DialogActions
                            sx={{paddingRight: 0}}
                        >
                            <Button
                                type="submit"
                                variant="contained"
                                color="success"
                            >
                                Сохранить
                            </Button>
                        </DialogActions>
                    </form>
                </DialogContent>
            </Dialog>
        </>
    )
})

export default ButtonEditExecutor