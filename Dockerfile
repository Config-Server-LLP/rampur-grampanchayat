FROM node:18 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
### FINAL STAGE
FROM nginx:alpine
# Install Node + npm + supervisor
RUN apk update && \
    apk add --no-cache nodejs npm supervisor
# Create supervisor logs dir
RUN mkdir -p /var/log/supervisor
# Copy nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Copy frontend build
COPY --from=build /app/build /usr/share/nginx/html
# Copy backend files
COPY server.js /app/server.js
COPY package*.json /app/
# Install backend dependencies only
WORKDIR /app
RUN npm install --production
# Copy supervisor config
COPY supervisord.conf /etc/supervisord.conf
EXPOSE 80
CMD ["/usr/bin/supervisord", "-c", "/etc/supervisord.conf"]
