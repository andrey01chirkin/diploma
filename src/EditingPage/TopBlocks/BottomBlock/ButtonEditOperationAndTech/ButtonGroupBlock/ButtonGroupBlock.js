import React from 'react'
import {ButtonGroup} from "@mui/material";
import ButtonTransition from "./ButtonTransition/ButtonTransition";
import ButtonEquipment from "./ButtonEquipment/ButtonEquipment";
import ButtonAdaptation from "./ButtonAdaptation/ButtonAdaptation";
import ButtonTool from "./ButtonTool/ButtonTool";

const ButtonGroupBlock = () => {
	return (
		<ButtonGroup variant="contained" size="small" color="info">
			<ButtonEquipment/>
			<ButtonTransition/>
			<ButtonAdaptation/>
			<ButtonTool/>
		</ButtonGroup>
	)
}

export default ButtonGroupBlock