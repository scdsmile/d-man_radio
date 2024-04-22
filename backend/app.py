from flask import Flask, jsonify, send_from_directory
import os
import random

app = Flask(__name__, static_url_path='/media/audio')

@app.route('/get_random_track', methods=['GET'])
def get_random_track():
    music_folder = os.path.join(app.static_url_path[1:])
    files = os.listdir(music_folder)
    random_track = random.choice(files)
    return jsonify(random_track)

@app.route('/media/audio/<path:filename>')
def serve_music(filename):
    return send_from_directory('/media/audio', filename)

@app.route('/media/images/<path:filename>')
def serve_image(filename):
    return send_from_directory('/media/images', filename)
