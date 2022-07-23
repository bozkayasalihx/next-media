#!/bin/bash

yarn patch-package

echo "moving to ios "

cd ./ios

echo "running pod install state"

pod install 

echo "moving back to parent folder"

cd ../