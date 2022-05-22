import React, {useState} from 'react'
import '../../../OperationTable.css'

export default function WidthColumns(props) {

	const [colWidth, setColWidth] = useState({
		numberOperation: 150,
		nameOperation: 250,
		level: 100,
		workshop: 70,
		area: 100,
		tsht: 50,
		tpz: 50,
		test: 50,
		OO: 50,
		OTK: 50,
		PZ: 50,
		KPS: 50
	})

	const maxWidthDataCol = (event) => {
		const {id} = event.target
		let spanEl = document.querySelectorAll(`span.${id}`)
		let inputEl = document.querySelectorAll(`input[name = '${id}']`)
		let divEl = document.querySelectorAll(`div.${id}Cell`)
		let pEl = document.querySelector(`p.${id}`)
		let widthInputText = []
		widthInputText.push(pEl.offsetWidth)
		for (let i = 0; i < spanEl.length; i++) {
			if (inputEl[i]) {
				spanEl[i].innerHTML = inputEl[i]['value']
				widthInputText.push(spanEl[i].offsetWidth)
			}
		}
		for (let i = 0; i < spanEl.length; i++) {
			if (divEl[i]) {
				spanEl[i].innerHTML = divEl[i].innerHTML
				widthInputText.push(spanEl[i].offsetWidth)
			}
		}
		const maxWidth = Math.max.apply(Math, widthInputText)
		setColWidth({...colWidth, [id]: maxWidth + 10})
		for (let i = 0; i < spanEl.length; i++) {
			spanEl[i].innerHTML = ''
		}
	}

	const [thDisabled, setThDisabled] = useState(false)

	let width = 0
	let x = 0

	const onMouseMoveRightResize = (id) => (
		(event) => {
			const dx = event.clientX - x
			width = colWidth[id] + dx
			setColWidth({...colWidth, [id]: width})
		}
	)

	const onMouseDownRightResize = (event) => {
		x = event.clientX
		const {id} = event.target
		setThDisabled(true)
		const onMouseMoveRightResizeCall =  onMouseMoveRightResize(id)
		document.addEventListener("mousemove", onMouseMoveRightResizeCall)
		document.addEventListener("mouseup", () => {
			setThDisabled(false)
			document.removeEventListener("mousemove", onMouseMoveRightResizeCall)
		})
	}

	return (
		<th style={{width: `${colWidth[`${props.id}`]}px`, userSelect: thDisabled ? 'none' : 'auto'}}>
			<p className={props.classNameHeader}>{props.NameHeader}</p>
			<div
				className={props.classNameDiv}
				id={props.id}
				onDoubleClick={maxWidthDataCol}
				onMouseDown={onMouseDownRightResize}
			>
			</div>
		</th>
	)
}