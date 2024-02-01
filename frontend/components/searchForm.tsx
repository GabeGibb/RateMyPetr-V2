"use client";

// MUI
import {
	TextField,
	FormGroup,
	Box,
	Typography,
	MenuItem,
	Button,
	Stack,
} from "@mui/material";
import { styled } from "@mui/material/styles";

// CSS
import styles from "../styles/searchForm.module.css";

const departments = [
	{
		value: "USD",
		label: "COMPSCI - Computer Science",
	},
	{
		value: "EUR",
		label: "IN4MATX - Informatics",
	},
	{
		value: "BTC",
		label: "I&C SCI - Information and Computer Science",
	},
];

const WhiteTextField = styled(TextField)({
	"& label": {
		color: "#d1d1d1",
	},
	// "&:hover label": {
	// 	fontWeight: 700,
	// },
	"& label.Mui-focused": {
		color: "white",
	},
	// Text Input Border
	"& .MuiOutlinedInput-root": {
		color: "white",
		"& fieldset": {
			borderColor: "white",
		},
		"&:hover fieldset": {
			borderColor: "white",
			borderWidth: 2,
		},
		"&.Mui-focused fieldset": {
			borderColor: "white",
		},
	},
	"& .MuiSelect-icon": {
		color: "white",
	},
});

export default function SearchForm() {
	return (
		<Box
			className={styles.formContainer}
			// display="flex"
			// flexDirection="row"
			// justifyContent="center"
			// alignItems="center"
		>
			<Typography className={styles.formTitle}>
				Search a Course
			</Typography>
			<FormGroup>
				<WhiteTextField
					className={styles.textInput}
					label="Department"
					select>
					{departments.map((option) => (
						<MenuItem key={option.value} value={option.value}>
							{option.label}
						</MenuItem>
					))}
				</WhiteTextField>
				<WhiteTextField
					className={styles.textInput}
					label="Course Number (EX: 45C)"
				/>
				<WhiteTextField
					className={styles.textInput}
					label="Professor"
				/>
				<div className={styles.btnContainer}>
					<Button variant="contained" className={styles.formBtn}>
						Search
					</Button>
				</div>
			</FormGroup>
		</Box>
	);
}
