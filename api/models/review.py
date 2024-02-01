from pydantic import BaseModel

class Review(BaseModel):
    id: str
    created_at: str
    enjoyment: int
    difficulty: int
    comment: str
    grade: str
    professor_id: str