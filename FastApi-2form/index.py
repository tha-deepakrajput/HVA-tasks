from fastapi import FastAPI, Form
from pydantic import BaseModel

app = FastAPI()

# Define a Pydantic model to parse the form data
class FormData(BaseModel):
    username: str
    password: str

@app.post("/submit/")
async def submit_form(username: str = Form(...), password: str = Form(...)):
    return {"username": username, "password": password}
