'use client'
import React, { useState } from 'react';

//MUI
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { Unstable_Popup as BasePopup } from '@mui/base/Unstable_Popup';
import FormGroup from '@mui/material/FormGroup';
import { Paper } from '@mui/material';

interface Professor {
    ucinetid: string;
    name: string;
    shortenedName: string;
}

interface ReviewFormProps {
    professors : Professor[];
    course_id: string;
}


const ReviewForm: React.FC<ReviewFormProps> = (props) =>{
    const [showForm, setShowForm] = useState(true);
    
    //Popup
    const [anchor, setAnchor] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchor);
    const id = open ? 'popup' : undefined;

    //Form
    const [professor, setProfessor] = useState('');
    const [difficulty, setDifficulty] = useState<number | null>(3);
    const [enjoyment, setEnjoyment] = useState<number | null>(3);
    const [grade, setGrade] = useState<string | null>('');
    const [comment, setComment] = useState('');


    const handleButtonClick = () => {
        setShowForm(!showForm);
    };


    const handleSubmit = async (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        
        if (!professor || difficulty === null || enjoyment === null || !grade || !comment) {
            setAnchor(event.currentTarget);
            setTimeout(() => { setAnchor(null); }, 3000);
            return;
        }

        const newReview = {
            professor_id: professor,
            difficulty,
            enjoyment,
            grade,
            comment,
            course_id: props.course_id
        };


        const response = await fetch('/api/reviews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newReview)
        });

        if (response.ok) {
            setShowForm(false);
            // TODO: Show success message
        } else {
            alert("UH OH SOMETHING WENT WRONG")
        }

    };

    return (
        <Box>
            <Button variant="contained" onClick={handleButtonClick}>
                {showForm ? 'Hide Form' : 'Leave a Review'}
            </Button>
            {showForm && (
                <FormGroup>
                    <Typography>Difficulty</Typography>
                    <Rating 
                        name="difficulty-rating"  
                        value={difficulty}
                        onChange={(e, value) => setDifficulty(value)}
                    />

                    <Typography component="legend">Enjoyment</Typography>
                    <Rating 
                        name="enjoyment-rating"  
                        value={enjoyment}
                        onChange={(e, value) => setEnjoyment(value)}
                    />
                    <TextField
                    value={professor}
                    label="Professor"
                    onChange={(e) => setProfessor(e.target.value)}
                    select
                    >
                        {props.professors.map((professor: Professor) => (
                            <MenuItem key={professor.ucinetid} value={professor.ucinetid}>{professor.name}</MenuItem>
                        ))}
                        
                    </TextField>

                    <InputLabel>Grade</InputLabel>
                    <TextField
                    value={grade}
                    label="Grade"
                    onChange={(e) => setGrade(e.target.value)}
                    select
                    >
                        <MenuItem value={'A'}>A</MenuItem>
                        <MenuItem value={'B'}>B</MenuItem>
                        <MenuItem value={'C'}>C</MenuItem>
                        <MenuItem value={'D'}>D</MenuItem>
                        <MenuItem value={'F'}>F</MenuItem>
                    </TextField>

                    <TextField
                        label="Comment"
                        onChange={(e) => setComment(e.target.value)}
                        multiline
                        rows={4}
                        fullWidth
                    />
                    <Button type="submit" aria-describedby={id} variant="contained" onClick={handleSubmit}>
                        Submit
                    </Button>
                    <BasePopup id={id} open={open} anchor={anchor}>
                        <Paper sx={{color: 'black'}}>
                            Fill out all fields
                        </Paper>
                    </BasePopup>
                </FormGroup>
            )}
        </Box>
    );
};

export default ReviewForm;