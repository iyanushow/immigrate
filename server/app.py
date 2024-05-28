from flask import Flask, request, jsonify
from flask_cors import CORS
from immigrate import get_immigration_pathway

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes


@app.route('/submit', methods=['POST'])
def submit_form():
    data = request.get_json()
    age = data.get('age')
    education = data.get('education')
    hasFamily = data.get('hasFamily')
    hasJobOffer = data.get('hasJobOffer')
    language_proficiency = data.get('languageProficiency')
    preferred_location = data.get('preferredLocation')
    work_experience = data.get('workExperience')

    print(data)

    # Process the data (for example, save to database or perform some logic)

    response = get_immigration_pathway(
        age=age,
        education=education,
        work_experience=work_experience,
        language_proficiency=language_proficiency,
        preferred_location=preferred_location,
        job_offer="Yes" if hasJobOffer else "No",
        family_in_canada="Yes" if hasFamily else "No",
    )

    print(response)
    
    return jsonify(response)


if __name__ == '__main__':
    app.run(debug=True)
