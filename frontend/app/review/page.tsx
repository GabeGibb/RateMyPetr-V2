'use client'
import { useState, useEffect } from 'react'

import ReviewForm from "@/components/reviewForm";
import { useSearchParams } from 'next/navigation'


export default function Home() {
    const searchParams = useSearchParams();
    const course_id = searchParams.get('course_id');
    if (!course_id) {
        return (
            <main>
                <div>Course not found</div>
            </main>
        );
    }

    const [reviews, setReviews] = useState([]);
    const [professors, setProfessors] = useState([]);

    async function fetchReviews(course_id: string) {

        const response = await fetch('api/reviews?course_id=' + course_id);
        const data = await response.json();
        setReviews(data.reviews);
        console.log(data)
    }

    async function fetchProfessors(course_id: string) {  
        console.log('test')
        const response = await fetch('https://api-next.peterportal.org/v1/rest/courses/' + course_id);
        const data = await response.json();
        const payload = await data.payload;
        setProfessors(payload.instructors);
    }

    useEffect(() => {
        if (course_id){
            fetchReviews(course_id);
            fetchProfessors(course_id);
        }
    }, []);

    return (
        <main>
            <ReviewForm professors={professors} course_id={course_id}></ReviewForm>
        </main>
    );
}
