#!/bin/sh

./manage.py migrate
./manage.py loaddata initial
echo "Creating superuser... enter the password."
./manage.py createsuperuser --username aldo --email aldo.balagulan@gmail.com
echo "Initial data setup!"
