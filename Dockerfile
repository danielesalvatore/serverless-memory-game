FROM node

WORKDIR /usr/src/app

RUN apt-get update
RUN apt-get install -y default-jre

RUN npm install -g serverless

ADD . .

RUN sls dynamodb install

EXPOSE 3000
EXPOSE 8000

CMD ["sls", "offline", "--noAuth"]