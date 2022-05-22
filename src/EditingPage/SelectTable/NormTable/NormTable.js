import React from 'react'
import './NormTable.css'
import {observer} from "mobx-react"
import HeadersNormTable from "./Components/HeadersNormTable/HeadersNormTable"
import OutputOperationsAndExecutors from "./Components/OutputOperationAndExecutor/OutputOperationsAndExecutors"
import TechStore from "../../../TechStore"

const NormTable = observer(() => {

	const {dataOperations} = TechStore

	return (
		<>
			<div className="container">
				<div className="tableData">
					<div className="normTable">
						<table>
							<thead>
							<HeadersNormTable/>
							</thead>
							<tbody>
							{dataOperations.map((item, indexOperation) => (
								<OutputOperationsAndExecutors
									item={item}
									indexOperation={indexOperation}
									key={indexOperation}
								/>
							))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</>
	)
})

export default NormTable