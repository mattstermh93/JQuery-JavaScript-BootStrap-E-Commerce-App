from app import app
from flask import render_template, jsonify, request
import requests

@app.route('/')
@app.route('/index.html')
def index():
    return render_template('index.html')
