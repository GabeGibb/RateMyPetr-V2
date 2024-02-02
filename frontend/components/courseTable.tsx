import React from 'react';

//MUI
import { styled } from "@mui/material/styles";
import { Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

const StyledTableCell = styled(TableCell)({
    color: 'white',
    borderBottom: '1px solid #30363d',
});

interface CourseTableRowProps {
    course_id: string;
    enjoyment: string;
    difficulty: string;
    averageGrade: string;
}

const CourseTableRow: React.FC<CourseTableRowProps> = (props) => {
    // Implement the row component logic here
    return (
        <TableRow>
            {/* Render the row content here */}
            <StyledTableCell>{props.course_id}</StyledTableCell>
            <StyledTableCell>{props.enjoyment}</StyledTableCell>
            <StyledTableCell>{props.difficulty}</StyledTableCell>
            <StyledTableCell>{props.averageGrade}</StyledTableCell>
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
                <CourseTableRow
                    course_id="Name"
                    enjoyment="Enjoyment"
                    difficulty="Difficulty"
                    averageGrade="Average Grade"
                />
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
