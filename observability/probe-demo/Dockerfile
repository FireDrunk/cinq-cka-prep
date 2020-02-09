FROM node:12

# Sources
WORKDIR /usr/src/
ADD *.json ./
ADD *.js ./

# Dependencies
RUN /usr/local/bin/npm install

# Metadata
EXPOSE 3000
ENTRYPOINT ["/usr/local/bin/npm", "run", "start"]