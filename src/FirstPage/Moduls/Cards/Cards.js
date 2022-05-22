import React, {useEffect} from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";
import './Cards.css'
import TechStore from "../../../TechStore";
import {observer} from "mobx-react";
import {Link} from "react-router-dom";
import {nanoid} from "nanoid";
import {Fab, Menu} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ButtonDeleteTechProcess from "./ButtonDeleteTechProcess/ButtonDeleteTechProcess";

const Cards = observer(() => {

	let {dataTechProcess} = TechStore

	useEffect(async () => {
		await TechStore.getDataTechProcess()
	}, [])

	const handleClick = (event) => {
		TechStore.setTechId = event.target.id
	}

	return (
		<Box className="cards">
			{dataTechProcess.map((tech, indexTech) => (
				<Card className="cards__item" key={indexTech}>
					<CardContent
						sx={{
							padding: '16px!important'
						}}
					>
						<Typography variant="h5" component="div" sx={{fontWeight: "bold"}}>
							{tech["techName"]}
						</Typography>
						<hr/>
						<Typography variant="subtitle1" component="div">
							Обозначение: {tech["techMark"]}
						</Typography>
						<Typography variant="subtitle1" component="div">
							Цех: {tech["techWorkshop"]}
						</Typography>
						<CardActions
							sx={{padding: '16px 0 0 0'}}
						>
							<div style={{display: 'flex', justifyContent: "space-between", width: '100%'}}>
								<div>
									<Link to={`/content/${tech["tech_id"]}`}>
										<Button
											id={tech["tech_id"]}
											variant={"contained"}
											size="medium"
											onClick={handleClick}
										>
											Перейти
										</Button>
									</Link>
								</div>
								<ButtonDeleteTechProcess indexTech={indexTech}/>
							</div>
						</CardActions>
					</CardContent>
				</Card>
			))}
		</Box>
	)
})

export default Cards
