'use client'
import React, { useState } from 'react';

//MUI
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

interface ReviewFormProps {
    professors : string[];
}


const ReviewForm: React.FC<ReviewFormProps> = (props) =>{
    const [showForm, setShowForm] = useState(true);

    const [professor, setProfessor] = useState('');
    const [difficulty, setDifficulty] = useState<number | null>(3);
    const [enjoyment, setEnjoyment] = useState<number | null>(3);
    const [grade, setGrade] = useState<string | null>('');
    const [comment, setComment] = useState('');


    const handleButtonClick = () => {
        setShowForm(!showForm);
    };


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Handle form submission logic here
        console.log('Review submitted:');
        console.log(professor)
        console.log(difficulty)
        console.log(enjoyment)
        console.log(grade)
        console.log(comment)
        // setComment('');
        // setShowForm(false);
    };

    return (
        <Box sx={{ color: 'white' }}>
            <Button variant="contained" onClick={handleButtonClick}>
                {showForm ? 'Hide Form' : 'Leave a Review'}
            </Button>
            {showForm && (
                <form onSubmit={handleSubmit}>
                    <InputLabel id="prof-label" sx={{ color: 'white' }}>Professor</InputLabel>
                    <Select
                    value={professor}
                    sx={{ color: 'white' }}
                    labelId="prof-label"
                    onChange={(e) => setProfessor(e.target.value)}
                    autoWidth
                    >
                        {props.professors.map((professor: string) => (
                            <MenuItem key={professor} value={professor}>{professor}</MenuItem>
                        ))}
                        
                    </Select>

                    <Typography component="legend">Difficulty</Typography>
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
                    <InputLabel id="grade-label" sx={{ color: 'white' }}>Grade</InputLabel>
                    <Select
                    value={grade}
                    sx={{ color: 'white' }}
                    labelId="grade-label"
                    onChange={(e) => setGrade(e.target.value)}
                    autoWidth
                    >
                        <MenuItem value={'A'}>A</MenuItem>
                        <MenuItem value={'B'}>B</MenuItem>
                        <MenuItem value={'C'}>C</MenuItem>
                        <MenuItem value={'D'}>D</MenuItem>
                        <MenuItem value={'F'}>F</MenuItem>
                    </Select>

                    <TextField
                        label="Comment"
                        onChange={(e) => setComment(e.target.value)}
                        multiline
                        rows={4}
                        fullWidth
                        InputProps={{
                            sx: {
                              color: 'white', // sets the color of input text
                            },
                          }}
                          InputLabelProps={{
                            sx: {
                              color: 'white', // sets the color of the label
                            },
                          }}
                    />
                    <Button type="submit" variant="contained">
                        Submit
                    </Button>
                </form>
            )}
        </Box>
    );
};

export default ReviewForm;