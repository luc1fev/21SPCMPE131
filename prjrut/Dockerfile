FROM dorowu/ubuntu-desktop-lxde-vnc:bionic
ENV PYTHONUNBUFFERED 1
RUN apt update && \
    apt-get update -y -qq && \
    apt-get install vim python python3 python3-pip -y -qq
RUN mkdir /prjroot
COPY requirements.txt /prjroot/
WORKDIR /prjroot
RUN pip3 install -r requirements.txt
COPY . /prjroot
RUN django-admin startproject thesite
WORKDIR /prjroot/thesite
