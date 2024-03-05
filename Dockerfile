FROM mongo
RUN apt-get update
RUN apt-get install -y nodejs npm
COPY . $HOME/goldilocks/
WORKDIR $HOME/goldilocks/
RUN npm install
RUN npm run build
RUN node src/utils/main.js
EXPOSE 3000
