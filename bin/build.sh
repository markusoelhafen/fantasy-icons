#!/bin/bash

# Process SVG files
npx babel-node bin/polish-svgs.js

# Create dist directory
# npx rimraf dist
# mkdir dist

# build icons.json
# npx babel-node bin/build-icons-json.js