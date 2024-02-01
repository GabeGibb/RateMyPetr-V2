// MUI
import { TextField, FormGroup } from "@mui/material";
import {
	createTheme,
	ThemeProvider,
	Theme,
	useTheme,
} from "@mui/material/styles";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";

// CSS
import styles from "../styles/searchForm.module.css";

export default function SearchForm() {
	return (
		<FormGroup className={styles.searchForm}>
			<TextField
				select
				id="outlined-basic"
				label="Outlined"
				variant="outlined"
			/>
			<TextField
				id="outlined-basic"
				label="Outlined"
				variant="outlined"
			/>
			<TextField
				id="outlined-basic"
				label="Outlined"
				variant="outlined"
			/>
		</FormGroup>
	);
}
