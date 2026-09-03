from flask import Flask, jsonify, request
from flask_cors import CORS
from dotenv import load_dotenv
import os
from openai import OpenAI

app = Flask(__name__)
CORS (app)
load_dotenv()
client = OpenAI(api_key=os.getenv("OPEN AI_API_KEY"))

@app.route("/")
def home():
    return "Ayesha's Spark backend is working! 🚀"


@app.route("/test")
def test():
    return jsonify({
        "message": "Spark AI backend is ready! 🤖"
    })


@app.route("/chat", methods=["POST"])
def chat():
    ...
    
    return jsonify({
        "reply": response.output_text
    })

if __name__ == "__main__":
    app.run(debug=True)