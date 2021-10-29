#!/bin/bash

cd ../..
node ./packages/verdaccio/bin/verdaccio --config ./test/e2e-cypress/config.yml 
