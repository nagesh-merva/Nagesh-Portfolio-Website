import os
import smtplib
from flask import Flask, jsonify, request
from flask_cors import CORS
from email.message import EmailMessage

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

user_email = os.environ.get('USER_EMAIL', 'default_user_email')
user_password = os.environ.get('USER_PASSWORD', 'default_user_password')
receiving_email = os.environ.get('RECEIVING_EMAIL')

@app.route('/contact', methods=['POST'])
def contact():
    receiving_email_address = receiving_email

    name = request.form.get('name')
    email = request.form.get('email')
    subject = request.form.get('subject')
    message = request.form.get('message')

    app.logger.info(f"Received form data:\nName: {name}\nEmail: {email}\nSubject: {subject}\nMessage: {message}")

    try:
        msg = EmailMessage()
        msg.set_content(f"From: {name}\nEmail: {email}\nSubject: {subject}\nMessage: {message}")

        msg['Subject'] = f"New contact form submission: {subject}"
        msg['From'] = user_email 
        msg['To'] = receiving_email_address

        with smtplib.SMTP('smtp.gmail.com', 587) as server:
            server.starttls()
            server.login(user_email, user_password)
            server.send_message(msg)

        return jsonify({'message': 'Email sent successfully', 'status': 'success'}), 200

    except Exception as e:
        app.logger.error(f"Error sending email: {e}")
        return jsonify({'message': 'Error sending email', 'error': str(e), 'status': 'error'}), 500

