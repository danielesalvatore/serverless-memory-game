FROM jimdo/serverless-offline

WORKDIR /usr/src/app

ADD . .

EXPOSE 3000
EXPOSE 8000

CMD ["sls", "offline", "--noAuth"]