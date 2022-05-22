import React, {useEffect} from 'react'
import Cards from "./Moduls/Cards/Cards"
import './FirstPage.css'
import {observer} from "mobx-react";
import TechStore from "../TechStore";
import ButtonAddTechProcess from "./Moduls/ButtonAddTechProcess/ButtonAddTechProcess";

const FirstPage = observer(() => {

	useEffect(() => {
		TechStore.setDataOperations = []
	}, [])

	return(
		<div className="firstPage">
			<h1>Список технологических процессов</h1>
			<ButtonAddTechProcess/>
			<Cards/>
		</div>
	)
})

export default FirstPage