from fastapi import APIRouter 
from models.review import Review
from database import supabase

router = APIRouter()

#Create a new review
@router.post('/reviews')
def create_rating(review: Review):
    newReview = {}
    for key, value in review.model_dump().items():
        if value:
            newReview[key] = value
    try:
        response = supabase.table('reviews').insert(newReview).execute()
        return {'message': 'review created successfully', 'review': response.data[0]}
    except:
        return {'message': 'review not created'}

#Retrieve reviews
@router.get('/reviews')
def get_rating(review_id=None, professor_id=None, course_id=None):
    query = supabase.table('reviews').select('*')
    if review_id:
        query = query.eq('id', id)
    if professor_id:
        query = query.eq('professor_id', professor_id)
    if course_id:
        query = query.eq('course_id', course_id)
    try:
        return {'message': 'review(s) found', 'reviews': query.execute().data}
    except:
        return {'message': 'review not found', 'reviews': []}

#Update a review
@router.put('/reviews')
def update_rating(review: Review):
    existing_review = supabase.table('reviews').select('*').eq('id', review.id).execute().data
    if existing_review:
        existing_review = existing_review[0]
        for key, value in review.model_dump().items():
            if key not in ['id', 'created_at', 'course_id'] and value != existing_review[key]:
                existing_review[key] = value
        try:
            supabase.table('reviews').update(existing_review).eq('id', review.id).execute()
            return {'message': 'review updated successfully'}
        except:
            return {'message': 'review not updated'}
    else:
        return {'message': 'review not found'}

#Delete a review
@router.delete('/reviews/{review_id}')
def delete_rating(review_id):
    try:
        supabase.table('reviews').delete().eq('id', review_id).execute()
        return {'message': 'review deleted successfully'}
    except:
        return {'message': 'review not deleted'}
