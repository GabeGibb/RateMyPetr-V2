from pydantic import BaseModel

class Review(BaseModel):
    id: str = None
    created_at: str = None
    enjoyment: int
    difficulty: int
    comment: str = ''
    grade: str
    professor_id: str
    course_id: str