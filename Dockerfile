FROM mongo
FROM node
RUN apt-get update
RUN apt-get install -y curl  sudo
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash - && apt-get install -y nodejs npm
COPY . /home/goldilocks/
WORKDIR /home/goldilocks/
RUN npm install -g npm@latest
RUN npm i vite
RUN npm install
ENTRYPOINT 'node' 'dist/utils/main'
EXPOSE 3000
