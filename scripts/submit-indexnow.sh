#!/bin/bash
# Submit new URLs to IndexNow (Bing/Yandex instant indexing) -- tokennara
# Usage: bash scripts/submit-indexnow.sh https://www.tokennara.com/blog/new-post-slug

SITE_URL="$1"
KEY="3d416418803fd2d33e7ceaf6f1ca7af8"
HOST="www.tokennara.com"

if [ -z "$SITE_URL" ]; then
  echo "Usage: bash scripts/submit-indexnow.sh <full-url>"
  echo "Example: bash scripts/submit-indexnow.sh https://www.tokennara.com/blog/example-post"
  exit 1
fi

curl -s -X POST "https://yandex.com/indexnow" \
  -H "Content-Type: application/json" \
  -d "{\"host\":\"$HOST\",\"key\":\"$KEY\",\"keyLocation\":\"https://$HOST/$KEY.txt\",\"urlList\":[\"$SITE_URL\"]}"

echo ""
echo "Submitted to IndexNow: $SITE_URL"
