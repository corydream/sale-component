#!/usr/bin/env bash

readonly currentDir=$(cd $(dirname $0); pwd)
cd ${currentDir}
rm -rf release
# rm -rf __gen_components
rm -rf release-es2015
# cp -r components __gen_components
#node ./build_scripts/inline-template.js
echo 'Compiling to es2015 via Angular compiler'
$(npm bin)/ngc -p tsconfig-build.json -t es2015 --outDir release-es2015/src

echo 'Bundling to es module of es2015'
export ROLLUP_TARGET=esm
$(npm bin)/rollup -c rollup.config.js -f es -i release-es2015/src/index.js -o release-es2015/esm2015/index.js

echo 'Compiling to es5 via Angular compiler'
$(npm bin)/ngc -p tsconfig-build.json -t es5 --outDir release-es5/src

echo 'Bundling to es module of es5'
export ROLLUP_TARGET=esm
$(npm bin)/rollup -c rollup.config.js -f es -i release-es5/src/index.js -o release-es5/esm5/index.js

echo 'Bundling to umd module of es5'
export ROLLUP_TARGET=umd
$(npm bin)/rollup -c rollup.config.js -f umd -i release-es5/esm5/index.js -o release-es5/bundles/index.umd.js

echo 'Bundling to minified umd module of es5'
export ROLLUP_TARGET=mumd
$(npm bin)/rollup -c rollup.config.js -f umd -i release-es5/esm5/index.js -o release-es5/bundles/index.umd.min.js

echo 'Unifying publish folder'
mv release-es5 release
mv release-es2015/esm2015 release/esm2015
rm -rf release-es2015

echo 'Cleaning up temporary files'
rm -rf ./src/__temp_components
rm -rf release/src/*.js
rm -rf release/src/**/*.js

echo 'Normalizing entry files'
sed -e "s/from '.\//from '.\/src\//g" release/src/index.d.ts > release/index.d.ts
sed -e "s/\":\".\//\":\".\/src\//g" release/src/index.metadata.json > release/index.metadata.json
rm release/src/index.d.ts release/src/index.metadata.json


echo 'Copying package.json'
cp package.json release/package.json

#node ./build_scripts/generate-less.js