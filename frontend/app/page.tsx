"use client";

import { useState } from 'react';
// Components
import SearchForm from "../components/searchForm";
import CourseTable from "../components/courseTable";

export default function Home() {
    const [courses, setCourses] = useState([]);

    const searchClasses = async (parameters: object) => {
        const queryParams = Object.entries(parameters)
            .filter(([_, value]) => value !== "")
            .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
            .join("&");

        const url = `api/reviews?${queryParams}`;
        console.log(url)
        const response = await fetch(url);
        const reviews = await response.json();
        console.log(reviews)
        setCourses(reviews.reviews);
        
    };

	return (
		<main>
            <SearchForm handleSearch={searchClasses} />
            <CourseTable courses={courses} />
		</main>
	);
}
