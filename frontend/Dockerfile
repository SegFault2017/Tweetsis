FROM node:14.15.4

LABEL version="1.0"
LABEL description="This is the base docker image for Tweetsis frontend react app."
LABEL maintainer = ["ray.tangent42@gmail.com"]

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]

RUN npm install 

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
