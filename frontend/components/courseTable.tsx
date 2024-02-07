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
    avg_enjoyment: string;
    avg_difficulty: string;
    total_reviews: string;
}

const CourseTableRow: React.FC<CourseTableRowProps> = (props) => {
    function routeToReview(){
        window.location.href = `/review/?course_id=${props.course_id}`;
    }
    // Implement the row component logic here
    return (
        <TableRow onClick={routeToReview}>
            {/* Render the row content here */}
            <StyledTableCell>{props.course_id}</StyledTableCell>
            <StyledTableCell>{props.avg_enjoyment}</StyledTableCell>
            <StyledTableCell>{props.avg_difficulty}</StyledTableCell>
            <StyledTableCell>{props.total_reviews}</StyledTableCell>
        </TableRow>
    );
};

interface CourseTableProps {
    courses: any[];
}


const CourseTable: React.FC<CourseTableProps> = (props) => {
    // Implement the table component logic here
    return (
        <Table sx={{
            maxWidth:{
                xs: '90%',
                sm: '75%',
            },
            margin: 'auto',
            text: {
                color: '#ffffff',
            }
        }}>
            <TableHead>
                <CourseTableRow
                    course_id="Name"
                    avg_enjoyment="Enjoyment"
                    avg_difficulty="Difficulty"
                    total_reviews="Reviews"
                />
            </TableHead>
            <TableBody>
                {props.courses.map((course, index) => (
                    <CourseTableRow
                        key={index}
                        course_id={course.course_id}
                        avg_enjoyment={course.avg_enjoyment}
                        avg_difficulty={course.avg_difficulty}
                        total_reviews={course.total_reviews}
                    />
                ))}
            </TableBody>
        </Table>
    );
};

export default CourseTable;
