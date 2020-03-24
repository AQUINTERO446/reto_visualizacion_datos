FROM python:3.8.1-slim-buster
RUN apt-get update && apt-get upgrade -y && apt-get autoremove && apt-get autoclean
RUN apt-get install -y \
        build-essential \
        libpq-dev

WORKDIR /api/

ADD requirements.txt /api/
RUN pip install -r requirements.txt
