#! /bin/bash

## http://stackoverflow.com/a/19622569/587407
trap 'exit' ERR

echo "reseting jspm config which was overwritten by jspm install..."

## rewriting my custom baseURL entry which gets overwritten by jspm :-(
## https://github.com/Workiva/karma-jspm/issues/91#issuecomment-136216912
sed -i "s/  baseURL: .*/  baseURL: typeof __karma__ !== 'undefined' \? 'base' : '\/',/" config.js
