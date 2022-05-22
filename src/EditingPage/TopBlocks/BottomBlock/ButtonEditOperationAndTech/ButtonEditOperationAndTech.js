import React from 'react'
import '../../TopBlocks.css'
import {observer} from "mobx-react";
import AddRowBottom from "./AddRowBottom/AddRowBottom";
import SortRow from './SortRow/SortRow.js'
import AddRowMiddle from "./AddRowMiddle/AddRowMiddle";
import RowMoveUpAndDown from "./RowMoveUpAndDown/RowMoveUpAndDown";
import AddOperationInTechProcess from "./AddOperationInTechProcess/AddOperationInTechProcess";
import ButtonGroupBlock from "./ButtonGroupBlock/ButtonGroupBlock";
import AddFusionInTechProcess from "./AddFusionInTechProcess/AddFusionInTechProcess";

const ButtonEditOperationAndTech = observer(() => {

	return (
		<div className="header__rows__block2">
			<div className="header__first__row">
				<div className="header_lists">
					<div className="header__button">
						<AddFusionInTechProcess/>
					</div>
					<div className="header__button">
						<AddOperationInTechProcess/>
					</div>
				</div>
				<div className="groupButton">
					<ButtonGroupBlock/>
				</div>
			</div>
			<div className="header__second__row">
				<div className="header__sort">
					<RowMoveUpAndDown/>
				</div>
				<div className="header__name">
					<SortRow/>
				</div>
				<div className="header__add__row">
					<AddRowBottom/>
					<AddRowMiddle/>
				</div>
			</div>
		</div>
	)
})

export default ButtonEditOperationAndTech