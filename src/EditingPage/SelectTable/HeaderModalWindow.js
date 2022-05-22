import React from 'react'
import {DialogTitle, IconButton} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const HeaderModalWindow = ({header, handleClose}) => {

	const BootstrapDialogTitle = (props) => {
		const {children, onClose, ...other} = props;

		return (
			<DialogTitle sx={{m: 0, p: 2}} {...other}>
				{children}
				{onClose ? (
					<IconButton
						aria-label="close"
						onClick={onClose}
						sx={{
							position: 'absolute',
							right: 8,
							top: 8,
							color: (theme) => theme.palette.grey[500],
						}}
					>
						<CloseIcon/>
					</IconButton>
				) : null}
			</DialogTitle>
		)
	}

	return (
		<BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
			{header}
		</BootstrapDialogTitle>
	)
}

export default HeaderModalWindow