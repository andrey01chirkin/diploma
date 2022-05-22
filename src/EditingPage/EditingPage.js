import React, {useEffect} from 'react'
import '../../node_modules/@blueprintjs/table/lib/css/table.css'
import './EditingPage.css'
import SelectTable from "./SelectTable/SelectTable";
import {observer} from "mobx-react";
import {Link} from "react-router-dom";
import {Button} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import TechStore from "../TechStore";

const EditingPage = observer(() => {

	const {tech_id} = TechStore

	useEffect(async() => {
		TechStore.setDataOperations = tech_id
	}, [])

	return (
		<div className="container">
			<div className="tableData">
				<div className="buttonBack">
					<Link to="/">
						<Button
							variant="contained"
							sx={{
								marginTop: '30px'
							}}
							startIcon={<ArrowBackIcon/>}
							onClick={() => localStorage.removeItem('tech_id')}
						>
							Назад
						</Button>
					</Link>
				</div>
				<SelectTable/>
			</div>
		</div>
	)
})

export default EditingPage