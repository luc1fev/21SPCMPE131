FROM dockerfiles/django-uwsgi-nginx
WORKDIR /prjroot
COPY . /prjroot/
RUN pip3 install --upgrade pip && pip3 install -r requirements.txt
