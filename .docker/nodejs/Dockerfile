FROM node:14-alpine
EXPOSE 3000
WORKDIR /usr/src/app
ENTRYPOINT ["/sbin/tini", "-v", "--"]
CMD ["yarn", "start"]

RUN apk add --no-cache tini

COPY node_modules node_modules
COPY .next .next
COPY public public
COPY pages pages
COPY locales locales
COPY package.json i18n.json next.config.js sitemapConfig.json ./
