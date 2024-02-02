import React from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

interface CourseTableRowProps {
    course_id: string;
    enjoyment: number;
    difficulty: number;
    averageGrade: string;
}

const CourseTableRow: React.FC<CourseTableRowProps> = (props) => {
    // Implement the row component logic here
    return (
        <TableRow>
            {/* Render the row content here */}
            <TableCell>{props.course_id}</TableCell>
            <TableCell>{props.enjoyment}</TableCell>
            <TableCell>{props.difficulty}</TableCell>
            <TableCell>{props.averageGrade}</TableCell>
        </TableRow>
    );
};

interface CourseTableProps {
    courses: any[];
}


const CourseTable: React.FC<CourseTableProps> = (props) => {
    // Implement the table component logic here
    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Enjoyment</TableCell>
                    <TableCell>Difficulty</TableCell>
                    <TableCell>Average Grade</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {props.courses.map((course, index) => (
                    <CourseTableRow
                        key={index}
                        course_id={course.course_id}
                        enjoyment={course.enjoyment}
                        difficulty={course.difficulty}
                        averageGrade={course.averageGrade}
                    />
                ))}
            </TableBody>
        </Table>
    );
};

export default CourseTable;
