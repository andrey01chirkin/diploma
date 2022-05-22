import React from 'react'
import ButtonEdit from "./ButtonEdit/ButtonEdit"
import ButtonDelete from "./ButtonDelete/ButtonDelete"
import ButtonAddExecutor from "./ButtonAddExecutor/ButtonAddExecutor"
import {observer} from "mobx-react"

const OutputItem = observer((props) => {

    const {
        index,
        item,
        indexItem,
        nameItem,
        header,
        backgroundColor,
        labelFirstField,
        labelSecondField,
        labelThirdField,
        nameFirstField,
        nameSecondField,
        nameThirdField,
    } = props

    return (
        <tr style={{backgroundColor: backgroundColor}}>
            <td/>
            <td/>
            <td>
                {item[nameFirstField]}
            </td>
            <td>
                {item[nameSecondField]}
            </td>
            <td>
                {item[nameThirdField]}
            </td>
            <td className={'tsht'}>
                {/*{item['executor'][0]['tsht']}*/}
            </td>
            <td className={'tpz'}>
                {/*{dataTable[index]['transition'][indexTransition]['executor'][0]['tpz']}*/}
            </td>
            <td className={'test'}>
                {/*{dataTable[index]['transition'][indexTransition]['executor'][0]['test']}*/}
            </td>
            <td>
                <div className="groupButton">
                    <ButtonEdit
                        header={header}
                        item={item}
                        index={index}
                        nameItem={nameItem}
                        indexItem={indexItem}
                        labelFirstField={labelFirstField}
                        labelSecondField={labelSecondField}
                        labelThirdField={labelThirdField}
                        nameFirstField={nameFirstField}
                        nameSecondField={nameSecondField}
                        nameThirdField={nameThirdField}
                    />
                    <ButtonDelete
                        item={item}
                        index={index}
                        nameItem={nameItem}
                        indexItem={indexItem}
                    />
                    {nameItem === 'transition' &&
                        <ButtonAddExecutor
                            item={item}
                            index={index}
                            nameItem={nameItem}
                            indexItem={indexItem}
                        />
                    }
                </div>
            </td>
        </tr>
    )
})

export default OutputItem