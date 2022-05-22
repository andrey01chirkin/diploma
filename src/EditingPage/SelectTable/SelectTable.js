import React, {useState} from 'react'
import {Radio, RadioGroup} from "@blueprintjs/core";
import ContentTable from "./ContentTable/ContentTable";
import NormTable from "./NormTable/NormTable";
import OperationTable from "./OperationTable/OperationTable";
import TechStore from "../../TechStore";
import {observer} from "mobx-react";
import HeaderTop from "../TopBlocks/TopBlock/HeaderTop";
import ButtonEditOperationAndTech from "../TopBlocks/BottomBlock/ButtonEditOperationAndTech/ButtonEditOperationAndTech";

const SelectTable = observer(() => {

	const {radioButtons} = TechStore

	const [state, setState] = useState({
		value: 'Operation'
	})

	function handlerRadioButton(event) {
		setState({value: event.target.value})
	}

	function selectTable() {
		if (state.value === 'Operation') {
			for (const key in radioButtons) {
				radioButtons[key] = false
			}
			return (
				<OperationTable/>
			)
		} else if (state.value === 'Content') {
			for (const key in radioButtons) {
				radioButtons[key] = false
			}
			radioButtons["content"] = true
			return (
				<ContentTable/>
			)
		} else {
			for (const key in radioButtons) {
				radioButtons[key] = false
			}
			radioButtons["norm"] = true
			return (
				<NormTable/>
			)
		}
	}

	return (
		<>
			<div className="header header__first">
				<HeaderTop/>
				<RadioGroup
					inline={true}
					onChange={handlerRadioButton}
					selectedValue={state.value}
					className="radioButton"
				>
					<Radio label="Операции" value="Operation"/>
					<Radio label="Содержание" value="Content"/>
					<Radio label="Норма" value="Norm"/>
				</RadioGroup>
			</div>
			<div className="header header__second">
				<ButtonEditOperationAndTech/>
			</div>
			{selectTable()}
		</>
	)
})

export default SelectTable