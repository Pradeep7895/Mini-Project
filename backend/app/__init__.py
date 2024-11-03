from flask import Flask, request, jsonify
from flask_pymongo import PyMongo
from flask_cors import CORS  # Import CORS
import bcrypt

def create_app():
    app = Flask(__name__)

    # MongoDB configuration
    app.config['MONGO_URI'] = 'mongodb://localhost:27017/property_rental'
    mongo = PyMongo(app)

    CORS(app)  # Enable CORS for all routes

    @app.route('/register', methods=['POST'])
    def register():
        data = request.get_json()
        email = data.get('email')
        password = data.get('password')

        if not email or not password:
            return jsonify({'message': 'Email and password are required.'}), 400
        
        existing_user = mongo.db.users.find_one({'email': email})
        if existing_user:
            return jsonify({'message': 'User already exists.'}), 400

        hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())
        mongo.db.users.insert_one({'email': email, 'password': hashed_password})

        return jsonify({'message': 'Registration successful.'}), 201

    @app.route('/login', methods=['POST'])
    def login():
        data = request.get_json()
        email = data.get('email')
        password = data.get('password')

        if not email or not password:
            return jsonify({'message': 'Email and password are required.'}), 400

        user = mongo.db.users.find_one({'email': email})
        if not user:
            return jsonify({'message': 'Invalid email or password.'}), 401
        
        if not bcrypt.checkpw(password.encode('utf-8'), user['password']):
            return jsonify({'message': 'Invalid email or password.'}), 401

        return jsonify({'message': 'Login successful.'}), 200

    @app.route('/rental', methods=['POST'])  # Ensure this route is defined
    def rental():
        data = request.get_json()
        name = data.get('name')
        email = data.get('email')
        property = data.get('property')
        details = data.get('details')

        if not name or not email or not property or not details:
            return jsonify({'message': 'All fields are required.'}), 400

        # Here, insert the rental information into the database
        mongo.db.rentals.insert_one({'name': name, 'email': email, 'property': property, 'details': details})

        return jsonify({'message': 'Rental information submitted successfully.'}), 201

    return app



