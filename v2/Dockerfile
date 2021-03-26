FROM python:3.7

ENV PYTHONUNBUFFERED=1

RUN python -m pip install --upgrade pip

WORKDIR /code
COPY requirements.txt /code/
RUN pip install -r requirements.txt
COPY . /code/