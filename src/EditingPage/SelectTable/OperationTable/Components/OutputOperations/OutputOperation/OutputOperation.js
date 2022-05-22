import React from 'react'
import {Checkbox} from "@mui/material"
import {observer} from "mobx-react"
import {toJS} from "mobx";

const OutputOperation = observer((props) => {

    const {item} = props

    let sumTsht = 0
    let sumTpz = 0
    let sumTest = 0

    item["transition"].forEach((transitionItem) => {
        transitionItem["executor"].forEach((executorItem) => {
            sumTsht += Number(executorItem["tsht"])
            sumTpz += Number(executorItem["tpz"])
            sumTest += Number(executorItem["test"])
        })
    })

    return (
        <>
            <td>
                {item['numberOperation']}
            </td>
            <td>
                {item['nameOperation']}
            </td>
            <td>
                {item['workshop']}
            </td>
            <td>
                {item['area']}
            </td>
            <td>
                {sumTsht}
            </td>
            <td>
                {sumTpz}
            </td>
            <td>
                {sumTest}
            </td>
            <td width="50px">
                <Checkbox
                    size="small"
                    type="checkbox"
                    name='OO'
                    checked={item['OO']}
                />
            </td>
            <td width="50px">
                <Checkbox
                    size="small"
                    type="checkbox"
                    name='OTK'
                    checked={item['OTK']}
                />
            </td>
            <td width="50px">
                <Checkbox
                    size="small"
                    type="checkbox"
                    name='PZ'
                    checked={item['PZ']}
                />
            </td>
            <td width="50px">
                <Checkbox
                    size="small"
                    type="checkbox"
                    name='KPS'
                    checked={item['KPS']}
                />
            </td>
        </>
    )
})

export default OutputOperation