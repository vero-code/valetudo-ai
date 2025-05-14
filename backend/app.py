from flask import Flask, request, jsonify
from openai import OpenAI
from dotenv import load_dotenv
import os

load_dotenv()

app = Flask(__name__)

client = OpenAI(
    api_key=os.getenv("PERPLEXITY_API_KEY"),
    base_url="https://api.perplexity.ai"
)

@app.after_request
def add_cors_headers(response):
    response.headers['Access-Control-Allow-Origin'] = 'http://localhost:5173'
    response.headers['Access-Control-Allow-Headers'] = 'Content-Type,Authorization'
    response.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return response

@app.route("/api/ask", methods=["POST"])
def ask():
    data = request.get_json()
    prompt = data.get("prompt")
    followup = data.get("followup")

    if not prompt:
        return jsonify({"error": "Prompt is required"}), 400

    messages = [
        {
            "role": "system",
            "content": (
                "You are an artificial intelligence assistant."
                "Provide concise, helpful, and polite responses."
            ),
        },
        {
            "role": "user",
            "content": prompt if not followup else f"{prompt}\n\nFollow-up: {followup}"
        },
    ]

    try:
        response = client.chat.completions.create(
            model="sonar",
            messages=messages,
            extra_body={
                "web_search_options": {
                    "search_context_size": "medium"
                },
                "search_domain_filter": [
                    "mayoclinic.org",
                    "clevelandclinic.org",
                    "medlineplus.gov",
                    "healthline.com",
                    "drugs.com",
                    "webmd.com",
                    "cdc.gov",
                    "ncbi.nlm.nih.gov",
                    "ema.europa.eu",
                    "uptodate.com",
                ]
            }
        )

        print("Prompt sent to API:", messages)
        print("Raw API response dict:", response.model_dump())

        content = response.choices[0].message.content
        citations = getattr(response, "citations", [])

        return jsonify({
            "answer": content,
            "citations": citations
        })
    
    except Exception as e:
        return jsonify({"error": "Failed to get response", "details": str(e)}), 500

if __name__ == "__main__":
    app.run(port=5000, debug=True)
