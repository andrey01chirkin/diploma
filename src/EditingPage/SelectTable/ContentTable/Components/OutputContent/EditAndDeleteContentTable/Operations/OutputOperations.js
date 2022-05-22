import React from 'react'
import {observer} from "mobx-react";

const OutputOperations = observer(({item}) => {

	let sumTsht = 0
	let sumTpz = 0
	let sumTest = 0

	item["transition"].map((transitionItem) => {
		transitionItem["executor"].map((executorItem) => {
			sumTsht += Number(executorItem["tsht"])
			sumTpz += Number(executorItem["tpz"])
			sumTest += Number(executorItem["test"])
		})
	})


	return (
		<>
			<tr>
				<td>
					{item['numberOperation']}
				</td>
				<td>
					{item['nameOperation']}
				</td>
				<td/>
				<td/>
				<td/>
				<td>{sumTsht}</td>
				<td>{sumTpz}</td>
				<td>{sumTest}</td>
				<td/>
			</tr>
		</>
	)
})

export default OutputOperations