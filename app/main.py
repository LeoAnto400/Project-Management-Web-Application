from fastapi import FastAPI
from app.database import engine
from app import models
from dotenv import load_dotenv
load_dotenv()
import os
from app.database import engine, Base
import app.models 
from app.api.routes import task
from fastapi.middleware.cors import CORSMiddleware



Base.metadata.create_all(bind=engine)
print(os.getenv("DATABASE_URL"))
app = FastAPI(title="Project Manager API")

@app.get("/")
def root():
    return {"message": "Project Manager API is running"}

app.include_router(task.router)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)