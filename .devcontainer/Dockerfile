FROM node:24-bookworm

RUN apt-get update && apt-get install -y \
  git \
  curl \
  ca-certificates \
  bash \
  less \
  nano \
  && rm -rf /var/lib/apt/lists/*

ENV PNPM_HOME="/home/node/.local/share/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
ENV NEXT_TELEMETRY_DISABLED=1
ENV CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC=1

RUN corepack enable && corepack prepare pnpm@10.25.0 --activate

USER node

WORKDIR /workspaces/aplicativo
