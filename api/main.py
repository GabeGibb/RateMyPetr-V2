from fastapi import FastAPI
from routes import review

app = FastAPI()

app.include_router(review.router)


@app.get("/")
async def root():
    return {"message": "Hello Worlds"}

@app.get("/test")
async def test():
    return {"message": "test"}

