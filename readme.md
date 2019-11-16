## API DOC

http://bit.ly/unpossible-api-doc

### API URL

http://api.unpossible.ml

### Start the Project with docker

```bash
docker-compose up
```

> http://localhost:3000

### Database table synchronization

```bash
yarn dbsync:dev
yarn dbsync:dev --force

yarn dbsync:prod
yarn dbsync:prod --force
```

# Google Cloud Cli

### Login

```bash
gcloud compute --project unpossible ssh --zone asia-southeast1-b staging
```

### Commands

```bash
docker-compose build --no-cache

docker-compose -f docker-compose.prod.yaml up -d
docker-compose -f docker-compose.prod.yaml down
docker-compose -f docker-compose.prod.yaml build
```

# WOD: Without Docker

### Start Project

```bash
# start project in development mode
yarn wod:dev

# start project in dev production mode
yarn wod:prod
```

## Database synchronization

```bash
yarn wod:dbsync:dev
yarn wod:dbsync:dev --force

yarn wod:dbsync:prod
yarn wod:dbsync:prod --force
```
