import React from 'react'
import './OperationTable.css'
import {observer} from "mobx-react"
import HeadersOperationTable from "./Components/HeadersOperationTable/HeadersOperationTable"
import TechStore from "../../../TechStore"
import OutputOperations from "./Components/OutputOperations/OutputOperations";
import {toJS} from "mobx";

const OperationTable = observer(() => {

    const {dataOperations} = TechStore

    return (
        <>
            <div className="container">
                <div className="operationTable">
                    <table>
                        <thead>
                        <HeadersOperationTable/>
                        </thead>
                        <tbody>
                        {dataOperations.map((item, index) => (
                            <OutputOperations
                                key={index}
                                item={item}
                                index={index}
                            />
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
})

export default OperationTable