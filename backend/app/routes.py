from flask import Blueprint, jsonify, request
from . import mongo

main = Blueprint('main', __name__)

@main.route('/', methods=['GET'])
def home():
    return jsonify({"message": "Welcome to the Flask MongoDB API"})

@main.route('/api/users', methods=['POST'])
def add_user():
    data = request.json
    if 'name' not in data or 'email' not in data:
        return jsonify({"error": "Invalid data"}), 400

    user = {
        "name": data['name'],
        "email": data['email']
    }
    mongo.db.users.insert_one(user)
    return jsonify({"message": "User added successfully"}), 201

@main.route('/api/users', methods=['GET'])
def get_users():
    users = mongo.db.users.find()
    result = []
    for user in users:
        result.append({"name": user['name'], "email": user['email']})
    return jsonify(result)
