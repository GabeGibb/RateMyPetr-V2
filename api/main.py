from fastapi import FastAPI

app = FastAPI()

@app.get("/api")
async def root():
    return {"message": "Hello Worlds"}

@app.get("/api/test")
async def test():
    return {"message": "test"}

#add a comment
