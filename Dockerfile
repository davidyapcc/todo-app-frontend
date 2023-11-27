# Use the official Node.js image as a base
FROM node:14 as build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install Angular CLI globally
RUN npm install -g @angular/cli@12

# Install project dependencies
RUN npm install

# Copy the entire project to the container
COPY . .

# Build the Angular app for production
RUN ng build --prod

# Use Nginx to serve the Angular app
FROM nginx:alpine
COPY --from=build /app/dist/todo-app-frontend /usr/share/nginx/html
