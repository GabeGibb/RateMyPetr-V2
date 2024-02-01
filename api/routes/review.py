from fastapi import APIRouter 
from models.review import Review
from database import supabase

router = APIRouter()

@router.route('/reviews', methods=['GET'])
def create_rating():
    return {'message': 'review created successfully'}

@router.route('/reviews/<review_id>', methods=['GET'])
def get_rating(rating_id):
    return supabase.table('reviews').select("*").execute()

@router.route('/reviews/<review_id>', methods=['PUT'])
def update_rating(rating_id):
    return {'message': 'review updated successfully'}

@router.route('/reviews/<review_id>', methods=['DELETE'])
def delete_rating(rating_id):
    return {'message': 'review deleted successfully'}
