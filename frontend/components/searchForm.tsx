"use client";
//React
import { useState } from "react";

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
		value: "",
		label: "Department",
	},
	{
		value: "COMPSCI",
		label: "COMPSCI - Computer Science",
	},
	{
		value: "IN4MATX",
		label: "IN4MATX - Informatics",
	},
	{
		value: "I&CSCI",
		label: "I&C SCI - Information and Computer Science",
	},
];

const WhiteTextField = styled(TextField)({
	"& label": {
		color: "#d1d1d1",
	},
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

interface SearchFormProps {
	handleSearch: (
		department: string,
		professor: string,
		courseCode: string
	) => Promise<void>;
}

const SearchForm = ({ handleSearch }: SearchFormProps) => {
	const [department, setDepartment] = useState("");
	const [courseNumber, setCourseNumber] = useState("");
	const [professor, setProfessor] = useState("");

	const submitSearchForm = () => {
		handleSearch(department, professor, courseNumber);
	};

	return (
		<Box className={styles.formContainer}>
			<Typography className={styles.formTitle}>
				Search a Course
			</Typography>
			<FormGroup>
				<WhiteTextField
					className={styles.textInput}
					label="Department"
					onChange={(e) => setDepartment(e.target.value)}
					defaultValue={""}
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
					onChange={(e) => setCourseNumber(e.target.value)}
				/>
				<WhiteTextField
					className={styles.textInput}
					label="Professor"
					onChange={(e) => setProfessor(e.target.value)}
				/>
				<div className={styles.btnContainer}>
					<Button
						variant="contained"
						className={styles.formBtn}
						onClick={submitSearchForm}>
						Search
					</Button>
				</div>
			</FormGroup>
		</Box>
	);
};

export default SearchForm;
