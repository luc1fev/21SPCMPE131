FROM python:3.7

ENV PYTHONUNBUFFERED=1

RUN python -m pip install --upgrade pip && apt get python3-tk

WORKDIR /code
COPY requirements.txt /code/
RUN pip install -r requirements.txt
COPY . /code/