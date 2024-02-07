'use client'

import ReviewForm from "@/components/reviewForm";
import { useSearchParams } from 'next/navigation'

export default function Home() {
    const searchParams = useSearchParams()

    const course_id = searchParams.get('course_id')
    // TODO: get reviews / professors from course_id

    return (
        <main>
            <ReviewForm professors={['test1', 'test2']}></ReviewForm>
        </main>
    );
}
