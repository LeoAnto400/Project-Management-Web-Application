from fastapi import FastAPI
from app.database import engine
from app import models
from dotenv import load_dotenv
load_dotenv()
import os
from app.database import engine, Base
import app.models 
from app.api.routes import task


Base.metadata.create_all(bind=engine)
print(os.getenv("DATABASE_URL"))
app = FastAPI(title="Project Manager API")

@app.get("/")
def root():
    return {"message": "Project Manager API is running"}

app.include_router(task.router)
