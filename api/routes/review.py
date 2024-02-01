from fastapi import APIRouter 
from models.review import Review
from database import supabase

router = APIRouter()

@router.post('/reviews')
def create_rating():
    return {'message': 'review created successfully'}

@router.get('/reviews/{review_id}')
def get_rating(review_id):
    return supabase.table('reviews').select("*").execute()

@router.put('/reviews/{review_id}')
def update_rating(rating_id):
    return {'message': 'review updated successfully'}

@router.delete('/reviews/{review_id}')
def delete_rating(rating_id):
    return {'message': 'review deleted successfully'}
