import React from 'react'
import '../TopBlocks.css'
import TimeCalculation from "./TimeCalculation/TimeCalculation";
import {observer} from "mobx-react";
import TechProcessValue from "./TechProcessValue/TechProcessValue";

const HeaderTop = observer(() => {

	return (
		<>
			<div className="header__rows">
				<div className="header__first__row">
					<TechProcessValue/>
				</div>
				<div className="header__second__row">
					<TimeCalculation/>
				</div>
			</div>
		</>
	)
})

export default HeaderTop