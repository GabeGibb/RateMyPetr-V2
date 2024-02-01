// MUI
import { TextField, FormGroup, Box } from "@mui/material";

// CSS
import styles from "../styles/searchForm.module.css";

export default function SearchForm() {
	return (
		<Box display="flex" justifyContent="center" alignItems="center">
			<FormGroup>
				<TextField
					select
					id="outlined-basic"
					label="Outlined"
					variant="outlined"
					sx={{
						width: 400,
					}}
				/>
				<TextField
					id="outlined-basic"
					label="Outlined"
					variant="outlined"
					sx={{
						width: 400,
					}}
				/>
				<TextField
					id="outlined-basic"
					label="Outlined"
					variant="outlined"
					sx={{
						width: 400,
					}}
				/>
			</FormGroup>
		</Box>
	);
}
