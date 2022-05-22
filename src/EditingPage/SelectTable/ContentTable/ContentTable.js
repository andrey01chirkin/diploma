import React from 'react'
import {observer} from "mobx-react"
import HeadersContentTable from "./Components/HeadersContentTable/HeadersContentTable"
import OutputContent from "./Components/OutputContent/OutputContent"
import TechStore from "../../../TechStore";

const ContentTable = observer(() => {

    const {dataOperations} = TechStore

    return (
        <>
            <div className="container">
                <div className="contentTable">
                    <table>
                        <thead>
                        <HeadersContentTable/>
                        </thead>
                        <tbody>
                        {dataOperations.map((item, index) => (
                            <OutputContent
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

export default ContentTable
