import React, {useEffect, useState} from 'react'
import {Button, TextField} from "@mui/material";
import TechStore from "../../../../TechStore";
import {observer} from "mobx-react";
import {toJS} from "mobx";

const TimeCalculation = observer(() => {

	const buttonStyle = {
		btn: {
			padding: '5px',
			fontSize: '12px'
		},
		btn2: {
			padding: '5px',
			fontSize: '12px',
			marginRight: '5px'
		}
	}

	let {dataOperations} = TechStore

	let sumTsht = 0
	let sumTpz = 0
	let sumTest = 0

	dataOperations.forEach((operationItem) => {
		operationItem["transition"].forEach((transitionItem) => {
			transitionItem["executor"].forEach((executorItem) => {
				sumTsht += Number(executorItem["tsht"])
				sumTpz += Number(executorItem["tpz"])
				sumTest += Number(executorItem["test"])
			})
		})
	})

	useEffect(() => {
		setSumData({...sumData, ['sumTsht']: sumTsht, ['sumTpz']: sumTpz, ['sumTest']: sumTest})
	}, [sumTsht, sumTpz, sumTest])

	const [sumData, setSumData] = useState({
		sumTsht: sumTsht,
		sumTpz: sumTpz,
		sumTest: sumTest,
	})
	const handleChange = (event) => {
		const {name, value} = event.target
		setSumData({...sumData, [name]: Number(value)})
	}

	let percentChangedTsht = 0
	let percentChangedTpz = 0
	let percentChangedTest = 2

	const handleClickCalculation = () => {
		percentChangedTsht = sumData["sumTsht"] / sumTsht
		percentChangedTpz = sumData["sumTpz"] / sumTpz
		percentChangedTest = sumData["sumTest"] / sumTest

		dataOperations.map((operationItem) => {
			operationItem["transition"].map((transitionItem) => {
				transitionItem["executor"].map((executorItem) => {
					executorItem["tshtCalculated"] = Math.round(executorItem["tsht"] * percentChangedTsht)
					executorItem["tpzCalculated"] = Math.round(executorItem["tpz"] * percentChangedTpz)
					executorItem["testCalculated"] = Math.round(executorItem["test"] * percentChangedTest)
				})
			})
		})
	}

	const handleClickConfirm = () => {
		dataOperations.map((operationItem) => {
			operationItem["transition"].map((transitionItem) => {
				transitionItem["executor"].map((executorItem) => {
					executorItem["tsht"] = executorItem["tshtCalculated"]
					executorItem["tpz"] = executorItem["tpzCalculated"]
					executorItem["test"] = executorItem["testCalculated"];
					(async () => {
						const response = await fetch(`http://localhost:8000/api/edit/executor/t/${executorItem["executor_id"]}`, {
							method: "PUT",
							headers: {
								"Content-Type": "application/json; charset=utf-8"
							},
							body: JSON.stringify(executorItem)
						})
						await response.json()
					})()
				})
			})
		})
	}

	return (
		<>
			<div className="header__marking" style={{display: "flex", alignItems: "center"}}>
				<div className="header__marking__label" style={{marginRight: '5px'}}> Тшт: </div>
				<TextField
					type="text"
					disabled
					variant="outlined"
					value={sumTsht}
					sx={{
						'& .MuiOutlinedInput-input': {
							padding: '2px 5px 1px 5px',
							width: '60px',
						}
					}}
				/>
				<TextField
					type="text"
					name="sumTsht"
					focused
					variant="outlined"
					value={sumData["sumTsht"]}
					onChange={handleChange}
					sx={{
						'& .MuiOutlinedInput-input': {
							padding: '2px 5px 1px 5px',
							width: '60px',
						}
					}}
				/>
			</div>
			<div className="header__marking" style={{display: "flex", alignItems: "center"}}>
				<div className="header__marking__label" style={{marginRight: '5px'}}> Тпз: </div>
				<TextField
					type="text"
					disabled
					variant="outlined"
					value={sumTpz}
					sx={{
						'& .MuiOutlinedInput-input': {
							padding: '2px 5px 1px 5px',
							width: '60px',
						}
					}}
				/>
				<TextField
					type="text"
					name="sumTpz"
					focused
					variant="outlined"
					value={sumData["sumTpz"]}
					onChange={handleChange}
					sx={{
						'& .MuiOutlinedInput-input': {
							padding: '2px 5px 1px 5px',
							width: '60px',
						}
					}}
				/>
			</div>
			<div className="header__marking" style={{display: "flex", alignItems: "center"}}>
				<div className="header__marking__label" style={{marginRight: '5px'}}> Тест: </div>
				<TextField
					type="text"
					size="3"
					id="header__marking"
					disabled
					value={sumTest}
					sx={{
						'& .MuiOutlinedInput-input': {
							padding: '2px 5px 1px 5px',
							width: '60px',
						}
					}}
				/>
				<TextField
					type="text"
					name="sumTest"
					focused
					variant="outlined"
					value={sumData["sumTest"]}
					onChange={handleChange}
					sx={{
						'& .MuiOutlinedInput-input': {
							padding: '2px 5px 1px 5px',
							width: '60px',
						}
					}}
				/>
			</div>
			<div className="header__button">
				<Button
					variant="contained"
					sx={buttonStyle.btn2}
					onClick={handleClickCalculation}
				>
					Рассчет
				</Button>
				<Button
					variant="contained"
					sx={buttonStyle.btn}
					onClick={handleClickConfirm}
				>
					Принять
				</Button>
			</div>
		</>
	)
})

export default TimeCalculation