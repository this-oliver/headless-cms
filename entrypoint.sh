#!/bin/sh

# always run the build step first to update the admin portal
# with latest defined content structures
npm run build

# run development mode if NODE_ENV is not set to production
# to define content structures
if [ "$NODE_ENV" = "production" ]; then
  npm start
else
  npm run dev
fi