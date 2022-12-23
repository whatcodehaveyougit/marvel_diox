FROM node:13.12.0-alpine
# The parent image

# It will go inside a subdirectory on the image
WORKDIR /marvel_react_app

# Copying over the package.json to the root directory of the image 
# COPY package.json .

# Should just be able to copy the node modules over..
# RUN npm install --verbose

# Copy all the files from this level, put it in ./marvel_react_app as we are there right now
COPY . .
RUN npm run build

EXPOSE 3000
# required for docker desktop port mapping

CMD ["npm", "start"]