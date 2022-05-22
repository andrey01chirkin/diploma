import React from 'react'
import OutputOperation from "./OutputOperation/OutputOperation"
import OutputExecutor from "./OutputExecutor/OutputExecutor"
import {observer} from "mobx-react"

const OutputOperationsAndExecutors = observer(({item, indexOperation}) => {
    return (
        <>
            <OutputOperation
                item={item}
            />
            {item['transition'].map((transition, indexTransition) => (
                transition['executor'].map((item, indexExecutor) => (
                    <OutputExecutor
                        item={item}
                        indexExecutor={indexExecutor}
                        indexTransition={indexTransition}
                        indexOperation={indexOperation}
                        key={indexExecutor}
                    />
                ))
            ))}
        </>
    )
})

export default OutputOperationsAndExecutors