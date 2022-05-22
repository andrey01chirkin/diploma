import React from 'react'
import ButtonEditExecutor from "./ButtonEditExecutor/ButtonEditExecutor"
import ButtonDeleteExecutor from "./ButtonDeleteExecutor/ButtonDeleteExecutor"
import {observer} from "mobx-react";

const OutputExecutor = observer(({item, indexExecutor, indexTransition, indexOperation}) => {
	return (
		<tr style={{backgroundColor: '#6699FF'}}>
			<td/>
			<td/>
			<td>
				{item['nameExecutor']}
			</td>
			<td>
				{item['tsht']}
			</td>
			<td>
				{item['tpz']}
			</td>
			<td>
				{item['test']}
			</td>
			<td>
				{item['tshtCalculated']}
			</td>
			<td>
				{item['tpzCalculated']}
			</td>
			<td>
				{item['testCalculated']}
			</td>
			<td>
				{item['kvr']}
			</td>
			<td>
				<div className="groupButton">
					<ButtonEditExecutor
						item={item}
						indexExecutor={indexExecutor}
						indexTransition={indexTransition}
						indexOperation={indexOperation}
					/>
					<ButtonDeleteExecutor
						item={item}
						indexOperation={indexOperation}
						indexTransition={indexTransition}
						indexExecutor={indexExecutor}
					/>
				</div>
			</td>
		</tr>
	)
})

export default OutputExecutor