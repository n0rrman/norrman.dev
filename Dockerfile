FROM node:20-bullseye-slim

WORKDIR /app
COPY package.json .
RUN npm install
COPY . .

CMD ["npm", "run", "dev", "--", "-p", "80"]
