#!/bin/bash

PLUGIN_NAME="pingly-product-enquiry"
BUILD_DIR="builds"
DIST_DIR="$BUILD_DIR/$PLUGIN_NAME"

echo "🔨 Building assets (Laravel Mix)..."
npm install
npm run production

echo "⚡ Optimizing Composer autoload..."
composer install --no-dev --optimize-autoloader

echo "🧹 Cleaning old builds..."
rm -rf $BUILD_DIR

echo "📁 Creating build directory..."
mkdir -p $DIST_DIR

echo "📦 Copying production files..."

cp -r App $DIST_DIR/
cp -r assets $DIST_DIR/
cp -r languages $DIST_DIR/ 2>/dev/null
cp pingly-product-enquiry.php $DIST_DIR/
cp readme.txt $DIST_DIR/ 2>/dev/null
cp mix-manifest.json $DIST_DIR/
cp composer.json $DIST_DIR/

cp -r vendor $DIST_DIR/

echo "🗜 Creating ZIP package..."

cd $BUILD_DIR
zip -rq "$PLUGIN_NAME.zip" "$PLUGIN_NAME" -x "*.DS_Store"
cd ..

echo "✅ Build completed successfully!"
echo "📦 File: $BUILD_DIR/$PLUGIN_NAME.zip 🚀"