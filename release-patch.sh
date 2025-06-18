#!/bin/bash

set -e

echo "📦 Bumping patch version..."
npm version patch

echo "🔨 Building package..."
pnpm build

echo "🚀 Publishing to npm..."
npm publish --access public

echo "✅ Done! Published new patch version of @tweakor/forge"
