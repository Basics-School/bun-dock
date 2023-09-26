
# FROM node:18-alpine AS runner

# RUN apk add --no-cache libc6-compat
# RUN npm install -g npm@latest
# WORKDIR /app
# ENV NODE_ENV production

# COPY . .
# RUN yarn

# RUN yarn build

# EXPOSE 3000
# EXPOSE 5555
# ENV PORT 3000

# CMD ["yarn", "start"  ]



FROM oven/bun AS runner
WORKDIR /app
ENV NODE_ENV production
ADD . .
RUN bun install
RUN bun run build
EXPOSE 3000

ENV PORT 3000

CMD ["bun","start"]
