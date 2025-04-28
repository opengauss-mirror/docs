#!/bin/bash

if [ -d "ci-build" ]; then
	rm -rf ./ci-build
fi
mkdir -p ci-build
cd ci-build
mkdir -p ./website/zh/docs/version
mkdir -p ./website/en/docs/version
cp -rf ../content/zh/* ./website/zh/docs/version
cp -rf ../content/en/* ./website/en/docs/version
if [ -d "../content/docs-lite" ]; then
    mkdir -p ./website/zh/docs/version-lite
    mkdir -p ./website/en/docs/version-lite
    cp -rf ../content/docs-lite/zh/* ./website/zh/docs/version-lite
    cp -rf ../content/docs-lite/en/* ./website/en/docs/version-lite
fi
cp -r ../website-v2/* .
rm -rf ../website-v2
rm -rf ./content
mv ./website ./content
hugo -D
