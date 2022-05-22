import React from 'react'
import {FormControl, TextField} from "@mui/material";

const ListCodeTool = ({valueCodeTool, checkExistingOperation}) => {
	return (
		<FormControl sx={{width: "100%"}} error={checkExistingOperation}>
			<TextField
				label="Код приспособления"
				value={valueCodeTool}
				disabled={!checkExistingOperation}
				error={checkExistingOperation}
			/>
		</FormControl>
	)
}

export default ListCodeTool