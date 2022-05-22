import React, {useEffect, useState} from 'react'
import {Button, Dialog, DialogActions, DialogContent, FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import HeaderModalWindow from "../../../../SelectTable/HeaderModalWindow";
import TechStore from "../../../../../TechStore";
import {observer} from "mobx-react";
import {toJS} from "mobx";

const AddFusionInTechProcess = observer(() => {

	const {tech_id} = TechStore

	useEffect(() => {
		(async () => {
			const response = await fetch("http://localhost:8000/api/tech/fusion/all")
			const result = await response.json()
			setDataFusions(result)
		})();

		(async () => {
			const response = await fetch("http://localhost:8000/api/tech/metal/all")
			const result = await response.json()
			setDataMetals(result)
		})();

		(async () => {
			const response = await fetch("http://localhost:8000/api/tech/mark/all")
			const result = await response.json()
			setDataMarks(result)
		})();

		(async () => {
			try {
				const response = await fetch(`http://localhost:8000/api/tech/fusion/${tech_id}`)
				const result = await response.json()
				setSelectedData(result[0])
			} catch (e) {
				console.log(e)
			}
		})();

		(async () => {
			const response = await fetch("http://localhost:8000/api/tech/initial_form/all")
			const result = await response.json()
			setDataInitialForm(result)
		})();

	}, [])


	const [dataFusions, setDataFusions] = useState([])
	const [nameFusion, setNameFusion] = useState("")

	const [dataMetals, setDataMetals] = useState([])
	const [metalsForFusion, setMetalsForFusion] = useState([])
	const [nameMetal, setNameMetal] = useState("")

	const [dataMarks, setDataMarks] = useState([])
	const [marksForMetal, setMarksForMetal] = useState([])
	const [nameMark, setNameMark] = useState("")

	const [dataInitialForm, setDataInitialForm] = useState([])
	const [nameInitialForm, setNameInitialForm] = useState("")

	const [selectedData, setSelectedData] = useState({})

	const [open, setOpen] = useState(false)

	const handleOpen = () => {
		console.log(selectedData)
		if (selectedData) {
			setNameFusion(dataFusions.find(fusionItem => (
				fusionItem["fusion_id"] === selectedData["fusion_id"]
			))["nameFusion"])

			setNameMetal(dataMetals.find(metalItem => (
				metalItem["metal_id"] === selectedData["metal_id"]
			))["nameMetal"])

			const fusion_id = selectedData["fusion_id"]
			const metal_id = selectedData["metal_id"]
			const mark_id = selectedData["mark_id"]

			setMetalsForFusion(dataMetals.filter(metal => metal["fusion_id"] === fusion_id))
			setNameMetal(dataMetals.find(metal => metal["metal_id"] === metal_id)["nameMetal"])

			setMarksForMetal(dataMarks.filter(mark => mark["metal_id"] === metal_id))
			setNameMark(dataMarks.find(mark => mark["mark_id"] === mark_id)["nameMark"])

			setNameInitialForm(dataInitialForm.find(zagotovkaItem => (
				zagotovkaItem["form_id"] === selectedData["form_id"]
			))["nameForm"])
		}
		setOpen(true)
	}

	const handleChangeFusion = (event) => {
		const nameFusion = event.target.value
		setNameFusion(nameFusion)

		const fusion_id = dataFusions.find(fusion => fusion["nameFusion"] === nameFusion)["fusion_id"]
		setMetalsForFusion(dataMetals.filter(metal => metal["fusion_id"] === fusion_id))

		setNameMetal("")
		setNameMark("")
		setSelectedData({...selectedData, ["fusion_id"]: fusion_id})
	}

	const handleChangeMetal = (event) => {
		const nameMetal = event.target.value
		setNameMetal(nameMetal)
		const metal_id = dataMetals.find(metal => metal["nameMetal"] === nameMetal)["metal_id"]
		setMarksForMetal(dataMarks.filter(mark => mark["metal_id"] === metal_id))

		setNameMark("")
		setSelectedData({...selectedData, ["metal_id"]: metal_id})
	}

	const handleChangeMark = (event) => {
		const nameMark = event.target.value
		setNameMark(nameMark)
		const mark_id = dataMarks.find(mark => mark["nameMark"] === nameMark)["mark_id"]
		setSelectedData({...selectedData, ["mark_id"]: mark_id})
	}

	const handleChangeInitialForm = (event) => {
		const nameZagotovka = event.target.value
		setNameInitialForm(nameZagotovka)
		const form_id = dataInitialForm.find(zagotovka => zagotovka["nameForm"] === nameZagotovka)["form_id"]
		setSelectedData({...selectedData, ["form_id"]: form_id})
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		(async() => {
			const response = await fetch(`http://localhost:8000/api/check/tech_fusion/${tech_id}`)
			const resultCheck = await response.json()
			if (resultCheck.length) {
				await (async () => {
					const url = `http://localhost:8000/api/edit/tech/tech_fusion/${tech_id}`
					const response = await fetch(url, {
						method: "PUT",
						headers: {
							'Content-Type': 'application/json;charset=utf-8'
						},
						body: JSON.stringify(selectedData)
					})
					await response.json()
				})()
			} else {
				await (async () => {
					const url = `http://localhost:8000/api/create/tech_fusion`
					const response = await fetch(url, {
						method: "POST",
						headers: {
							'Content-Type': 'application/json;charset=utf-8'
						},
						body: JSON.stringify({tech_id: tech_id,...selectedData})
					})
					await response.json()
				})()
			}
		})()
		setOpen(false)
	}

	const handleClose = () => {
		setOpen(false)
	}

	return (
		<>
			<Button
				variant={"contained"}
                size={"small"}
				onClick={handleOpen}
			>
				Заготовка
			</Button>
			<Dialog
				open={open}
				onClose={handleClose}
				className="buttonAddItemEquipmentModalWindow"
			>
				<HeaderModalWindow header="Данные заготовки" handleClose={handleClose}/>
				<DialogContent dividers>
					<form onSubmit={handleSubmit}>
						<div style={{
							border: '1px solid black',
							borderRadius: '5px',
							borderColor: '#D8D8D8',
							padding: '10px',
							display: 'flex',
							flexDirection: 'column',
							height: '212px',
							justifyContent: "space-between"
						}}>
							<div>
								<FormControl fullWidth>
									<InputLabel id="fusion">Сплавы</InputLabel>
									<Select
										labelId="fusion"
										label="Сплавы"
										value={nameFusion}
										onChange={handleChangeFusion}
									>
										{dataFusions.map((fusion) => (
											<MenuItem value={fusion["nameFusion"]}>{fusion["nameFusion"]}</MenuItem>
										))}
									</Select>
								</FormControl>
							</div>
							<div>
								<FormControl fullWidth>
									<InputLabel id="metal">Металлы</InputLabel>
									<Select
										labelId="metal"
										label="Металлы"
										value={nameMetal}
										onChange={handleChangeMetal}
									>
										{metalsForFusion.map((metal) => (
											<MenuItem value={metal["nameMetal"]}>{metal["nameMetal"]}</MenuItem>
										))}
									</Select>
								</FormControl>
							</div>
							<div>
								<FormControl fullWidth>
									<InputLabel id="mark">Марки</InputLabel>
									<Select
										labelId="mark"
										label="Марки"
										value={nameMark}
										onChange={handleChangeMark}
									>
										{marksForMetal.map((mark) => (
											<MenuItem value={mark["nameMark"]}>{mark["nameMark"]}</MenuItem>
										))}
									</Select>
								</FormControl>
							</div>
						</div>
						<Select
							variant="filled"
							fullWidth
							value={nameInitialForm}
							sx={{
								marginTop: '15px',
								'& .MuiSelect-filled': {
									padding: '15px 12px'
								}
							}}
							onChange={handleChangeInitialForm}
						>
							{dataInitialForm.map((zagotovka) => (
								<MenuItem value={zagotovka["nameForm"]}>{zagotovka["nameForm"]}</MenuItem>
							))}
						</Select>
						<DialogActions
							sx={{
								paddingRight: 0,
								paddingTop: '25px'
							}}
						>
							<Button
								type="submit"
								variant="contained"
								color="success"
							>
								Сохранить
							</Button>
						</DialogActions>
					</form>
				</DialogContent>
			</Dialog>
		</>
	)
})

export default AddFusionInTechProcess