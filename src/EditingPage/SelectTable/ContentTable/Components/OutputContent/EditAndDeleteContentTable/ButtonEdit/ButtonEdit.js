import React, {useEffect, useState} from 'react'
import {Button, Dialog, DialogActions, DialogContent} from "@mui/material"
import EditIcon from "@mui/icons-material/Edit"
import '../../../../ContentTable.css'
import TechStore from "../../../../../../../TechStore"
import HeaderModalWindow from "../../../../../HeaderModalWindow"
import {toJS} from "mobx";
import EditTransition from "./EditTransition/EditTransition";
import ListItem from "./DataItem/ListItem";
import ListInventoryNumber from "./DataItem/ListInventoryNumber";
import ListCodeItem from "./DataItem/ListCodeItem";

const ButtonEdit = (props) => {

    const {
        header,
        item,
        index,
        nameItem,
        indexItem,
        labelFirstField,
        labelSecondField,
        labelThirdField,
        nameFirstField,
        nameSecondField,
        nameThirdField
    } = props

    useEffect(() => {
        if (nameItem !== "transition") {
            (async () => {
                try {
                    const response = await fetch(`http://localhost:8000/api/tech/${nameItem}/all`)
                    const result = await response.json()
                    setListFirstField(result)
                } catch (e) {
                    console.log(e)
                }
            })();

            (async () => {
                try {
                    const response = await fetch(`http://localhost:8000/api/tech/${nameItem}/number/all`)
                    const result = await response.json()
                    setListNumberAll(result)
                } catch (e) {
                    console.log(e)
                }
            })();
        }

    }, [])

    const {dataOperations} = TechStore

    const [selectedValue, setSelectedValue] = useState(item)

    const [listFirstField, setListFirstField] = useState([])

    const [listNumberAll, setListNumberAll] = useState([])
    const [listNumberForFirstField, setListNumberForFirstField] = useState([])

    const [open, setOpen] = useState(false)

    const [checkExistingItem, setCheckExistingItem] = useState(false)
    const [isValidTransition, setIsValidTransition] = useState(false)

    const handleOpen = async () => {
        setOpen(true)
        if (nameItem !== "transition") {
            const item_id = listFirstField.find(item => item[nameFirstField] === selectedValue[nameFirstField])[nameItem + '_id']
            setListNumberForFirstField(listNumberAll.filter(item => item[nameItem + "_id"] === item_id))
        }
    }

    const handleEditTransition = (event) => {
        const {name, value} = event.target
        setSelectedValue({...selectedValue, [name]: value})
    }

    const handleChangeNameItemFirstField = (event) => {
        const element = event.target.value
        setSelectedValue({...selectedValue, [nameFirstField]: element, [nameSecondField]: "", [nameThirdField]: ""})
        const item_id = listFirstField.find(item => item[nameFirstField] === element)[nameItem + '_id']
        setListNumberForFirstField(listNumberAll.filter(item => item[nameItem + "_id"] === item_id))
    }

    const handleChangeNumber = (event) => {
        const inventoryNumber = event.target.value
        const codeItem = listNumberForFirstField.find(item => item[nameSecondField] === inventoryNumber)[nameThirdField]
        setSelectedValue({...selectedValue, [nameSecondField]: inventoryNumber, [nameThirdField]: codeItem})
    }

    const handleFocus = () => {
        setCheckExistingItem(false)
    }

    const handleSubmit = async (event) => {

        event.preventDefault()

        if (nameItem !== "transition") {

            const oper_id_prev = item["oper_id"]
            const item_id_prev = item[nameItem + "_id"]
            const number_id_prev = item["number_id"]

            const oper_id_next = item["oper_id"]
            const item_id_next = listFirstField.find(item => item[nameFirstField] === selectedValue[nameFirstField])[nameItem + "_id"]
            const number_id_next = listNumberForFirstField.find(item => item[nameSecondField] === selectedValue[nameSecondField])["number_id"]

            if (nameItem !== "equipment") {
                const response = await fetch(`http://localhost:8000/api/check/edit/existing/${nameItem}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                    body: JSON.stringify({
                        oper_id: oper_id_next,
                        item_id: item_id_next,
                        number_id: number_id_next
                    })
                })
                const result = await response.json()

                if (!result.length) {
                    const response = await fetch(`http://localhost:8000/api/edit/${nameItem}/${item_id_prev}`, {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json;charset=utf-8"
                        },
                        body: JSON.stringify([
                            {
                                oper_id_prev,
                                item_id_prev,
                                number_id_prev
                            },
                            {
                                oper_id_next,
                                item_id_next,
                                number_id_next
                            }
                        ])
                    })

                    await response.json()
                    dataOperations[index][nameItem][indexItem] = selectedValue

                } else {
                    setCheckExistingItem(true)
                }
            } else {
                const response = await fetch(`http://localhost:8000/api/edit/${nameItem}/${item_id_prev}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json;charset=utf-8"
                    },
                    body: JSON.stringify([
                        {
                            oper_id_prev,
                            item_id_prev,
                            number_id_prev
                        },
                        {
                            oper_id_next,
                            item_id_next,
                            number_id_next
                        }
                    ])
                })

                await response.json()
                dataOperations[index][nameItem][indexItem] = selectedValue
            }
        } else {

            const strCheck = /^[а-яА-Я][а-я А-Я -]+[а-яА-Я]$/

            if (strCheck.test(selectedValue["nameTransition"])) {
                let response = await fetch(`http://localhost:8000/api/edit/${nameItem}/${selectedValue["trans_id"]}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                    body: JSON.stringify({
                        nameTransition: selectedValue["nameTransition"]
                    })
                })
                await response.json()
                dataOperations[index][nameItem][indexItem] = selectedValue
                setIsValidTransition(false)
                setOpen(false)
            } else {
                setIsValidTransition(true)
                setOpen(true)
            }
        }
    }
    const handleClose = () => {
        setOpen(false)
    }

    return (
        <>
            <Button
                variant="text"
                onClick={handleOpen}
            >
                <EditIcon
                    fontSize="small"
                    sx={{color: 'black'}}
                />
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                className="buttonAddItemEquipmentModalWindow"
            >
                <HeaderModalWindow header={header} handleClose={handleClose}/>
                <DialogContent dividers>
                    <form onSubmit={handleSubmit}>
                        {nameItem === "transition" ? (
                            <EditTransition
                                nameFieldFirstInput={nameFirstField}
                                labelFirstInput={labelFirstField}
                                selectedValue={selectedValue}
                                handleEditTransition={handleEditTransition}
                                labelSecondInput={labelSecondField}
                                nameFieldSecondInput={nameSecondField}
                                labelThirdInput={labelThirdField}
                                nameFieldThirdInput={nameThirdField}
                                isValidTransition={isValidTransition}
                            />
                        ) : (
                            <>
                                <ListItem
                                    handleChangeNameItemFirstField={handleChangeNameItemFirstField}
                                    nameFirstField={nameFirstField}
                                    listFirstField={listFirstField}
                                    checkExistingItem={checkExistingItem}
                                    labelFirstField={labelFirstField}
                                    value={selectedValue[nameFirstField]}
                                    handleFocus={handleFocus}
                                />
                                <ListInventoryNumber
                                    handleChangeNumber={handleChangeNumber}
                                    nameSecondField={nameSecondField}
                                    listNumberForFirstField={listNumberForFirstField}
                                    checkExistingItem={checkExistingItem}
                                    labelSecondField={labelSecondField}
                                    value={selectedValue[nameSecondField]}
                                    handleFocus={handleFocus}
                                />
                                <ListCodeItem
                                    labelThirdField={labelThirdField}
                                    nameThirdField={nameThirdField}
                                    value={selectedValue[nameThirdField]}
                                    checkExistingItem={checkExistingItem}
                                />
                            </>
                        )}
                        <DialogActions sx={{paddingRight: 0, paddingTop: '25px'}}>
                            <Button
                                type="submit"
                                variant="contained"
                                color="success"
                                size="medium"
                            >
                                Сохранить
                            </Button>
                        </DialogActions>
                    </form>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default ButtonEdit