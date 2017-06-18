#!/bin/sh

docker run --name fanfickeywords-postgres -p 5432:5432 -e POSTGRES_USER=fanfickeywords -e POSTGRES_PASSWORD=notsecure -d postgres
echo "Run necessary Django DB setup scripts after this"
