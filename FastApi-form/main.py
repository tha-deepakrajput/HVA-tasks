

from fastapi import FastAPI, Body, Request, Form
from pydantic import BaseModel
from fastapi.templating import Jinja2Templates
from fastapi.responses import JSONResponse

app = FastAPI()

# list_of_usernames = list()
templates = Jinja2Templates(directory="htmldirectory")

class NameValues(BaseModel):
    name: str
    country: str
    age: int
    base_salary: float

@app.get("/home/{user_name}")
def write_home(request: Request, user_name: str):
    return templates.TemplateResponse("index.html", {"request": request})

@app.post("/postData")
def post_data(name: str = Form(...), country: str = Form(...), age: int = Form(...), base_salary: float = Form(...), spousal_status: str = Form(...)):
    name_values = NameValues(name=name, country=country, age=age, base_salary=base_salary)
    print(name_values)
    return JSONResponse(content={
        "name": name_values.name,
        "spousal_status": spousal_status,
        "age" : age
    })
