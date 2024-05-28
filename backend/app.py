import os
import smtplib
from flask import Flask, jsonify, request
from flask_cors import CORS
from email.message import EmailMessage

app = Flask(__name__)

user_email = 'portfolionagesh.1957@gmail.com '
receiving_email = 'portfolionagesh.1957@gmail.com'
user_password = 'qlqy eoda vftd mtkx'
# user_email = os.environ.get('USER_EMAIL', 'default_user_email')
# user_password = os.environ.get('USER_PASSWORD', 'default_user_password')
# receiving_email = os.environ.get('RECEIVING_EMAIL')

@app.route('/contact', methods=['POST'])
def contact():
    receiving_email_address = receiving_email

    name = request.form.get('name')
    email = request.form.get('email')
    subject = request.form.get('subject')
    message = request.form.get('message')

    app.logger.info(f"Received form data:\nName: {name}\nEmail: {email}\nsubject: {subject}\nmessage: {message}")

    try:
        msg = EmailMessage()
        msg.set_content(f"From: {name}\nEmail: {email}\nsubject: {subject}\nmessage: {message}")

        msg['Subject'] = f"New contact form submission: {subject}"
        msg['From'] = email
        msg['To'] = receiving_email_address

        with smtplib.SMTP('smtp.gmail.com', 587) as server:
            server.starttls()
            server.login(user_email,user_password)
            server.send_message(msg)

        return jsonify({'name': name, 'email': email, 'subject': subject, 'message': message})

    except Exception as e:
        print(f"Error sending email: {e}")
        return jsonify({'message': 'Error sending email'}), 500