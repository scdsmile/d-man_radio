#!/bin/bash

gunicorn --daemon -c gunicorn_config.py wsgi:app
