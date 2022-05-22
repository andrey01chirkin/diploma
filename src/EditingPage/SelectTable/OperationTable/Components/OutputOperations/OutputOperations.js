import React, {useEffect} from 'react';
import TechStore from "../../../../../TechStore";
import ButtonEditOperation from "../ButtonEditOperation/ButtonEditOperation";
import ButtonDeleteOperation from "../ButtonDeleteOperation/ButtonDeleteOperation";
import OutputOperation from "./OutputOperation/OutputOperation";
import {observer} from "mobx-react";
import {toJS} from "mobx";

const OutputOperations = observer(({item, index}) => {

    const {dataOperations} = TechStore

    const handleClick = () => {
        dataOperations.forEach((operation) => {
            operation["clicked"] = false
        })
        dataOperations[index]["clicked"] = true
    }

    return (
        <tr
            style={dataOperations[index]["clicked"] ? {
                backgroundColor: "#E4F2FE"
            } : {}}
            onClick={handleClick}
        >
            <OutputOperation
                item={item}
                index={index}
            />
            <td>
                <div className="groupButton">
                    <ButtonEditOperation index={index} item={item}/>
                    {/*<ButtonAddContentOperation index={index}/>*/}
                    <ButtonDeleteOperation index={index} item={item}/>
                </div>
            </td>
        </tr>
    )
})

export default OutputOperations