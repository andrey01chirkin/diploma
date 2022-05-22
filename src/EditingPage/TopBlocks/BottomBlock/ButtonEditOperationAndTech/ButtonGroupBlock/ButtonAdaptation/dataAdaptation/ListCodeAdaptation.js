import React from 'react'
import {FormControl, TextField} from "@mui/material";

const ListCodeAdaptation = ({valueCodeAdaptation, checkExistingOperation}) => {
	return (
		<FormControl sx={{width: "100%"}} error={checkExistingOperation}>
			<TextField
				label="Код приспособления"
				value={valueCodeAdaptation}
				disabled={!checkExistingOperation}
				error={checkExistingOperation}
			/>
		</FormControl>
	)
}

export default ListCodeAdaptation