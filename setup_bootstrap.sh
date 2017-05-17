#!/bin/bash

# Script for setting up Bootstrap, by injecting our custom minimalistic
# Boostrap LESS file and making grunt build it.

npm install -g bower
bower install
echo "Copying custom LESS..."
cp -v ./util/bootstrap-custom.less ./bower_components/bootstrap/less/bootstrap.less
pushd ./bower_components/bootstrap
npm -g install grunt grunt-cli
grunt dist
popd
echo "Done setting up custom Bootstrap!"
