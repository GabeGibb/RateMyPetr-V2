"use client";

import { useState } from 'react';
// Components
import SearchForm from "../components/searchForm";
import CourseTable from "../components/courseTable";
export default function Home() {
    const [courses, setCourses] = useState([]);

    const searchClasses = async () => {
        
        const response = await fetch("api/reviews");
        const reviews = await response.json();
        console.log(reviews); // Handle the response data

        
        setCourses(reviews.reviews);
        
    };

	return (
		<main>
			<SearchForm handleSearch={searchClasses}/>
            <CourseTable courses={courses} />
		</main>
	);
}
