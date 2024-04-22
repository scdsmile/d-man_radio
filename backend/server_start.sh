#!/bin/bash

# проверка на наличие работающего процесса "app"
if ps ax | grep -v grep | grep wsgi:app > /dev/null
then
    echo "app.py is already running! restart? (y/n)"
    read user_choice

    if [ "$user_choice" = "y" ]
    then
        echo "Restart app.py..."
        pkill -f wsgi:app
        gunicorn --daemon -c gunicorn_config.py wsgi:app
        echo "App is succesfully restarted."
    else
        echo "No changes..."
    fi
else
    echo "Starting app..."
    gunicorn --daemon -c gunicorn_config.py wsgi:app
    echo "App is succesfully started."
fi
