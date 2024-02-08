"use client";

import { useState } from "react";
// Components
import SearchForm from "../components/searchForm";
import CourseTable from "../components/courseTable";

export default function Home() {
	const [courses, setCourses] = useState([]);

	const searchClasses = async (
		department: string,
		professor: string,
		courseCode: string
	) => {
		const queryElements = [department, professor, courseCode];
		const queryKeys = ["department", "professor", "course_number"];
		let queryParams = "";

		for (let i = 0; i < 3; i++) {
			if (queryElements[i] !== "") {
				queryParams = queryParams.concat(
					`${queryKeys[i]}=${queryElements[i]}&`
				);
			}
		}

		queryParams = queryParams.slice(0, -1);
		const url = `api/reviews?average=true&${queryParams}`;
		const response = await fetch(url);
		const reviews = await response.json();
		console.log(reviews);
		setCourses(reviews.reviews);
	};

	return (
		<main>
			<SearchForm handleSearch={searchClasses} />
			<CourseTable courses={courses} />
		</main>
	);
}
