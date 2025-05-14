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
    image_base64 = data.get("imageBase64")
    search_after = data.get("search_after_date_filter")
    search_before = data.get("search_before_date_filter")
    user_country = data.get("user_country")

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
            "content": [
                {
                    "type": "text",
                    "text": prompt if not followup else f"{prompt}\n\nFollow-up: {followup}"
                },
                {
                    "type": "image_url",
                    "image_url": {
                        "url": image_base64
                    }
                }
            ] if image_base64 else (
                prompt if not followup else f"{prompt}\n\nFollow-up: {followup}"
            )
        }
    ]

    extra_body={
        "web_search_options": {
            "search_context_size": "medium",
        }
    }

    if search_after:
        extra_body["search_after_date_filter"] = search_after
    if search_before:
        extra_body["search_before_date_filter"] = search_before

    if user_country:
        extra_body["web_search_options"]["user_location"] = {
            "country": user_country
        }
    else:
        extra_body["search_domain_filter"] = [
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

    try:
        print("FULL REQUEST PAYLOAD:")
        print("Messages:", messages)
        print("Extra body:", extra_body)

        response = client.chat.completions.create(
            model="sonar-pro",
            messages=messages,
            extra_body=extra_body
        )

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
