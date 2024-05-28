import os
from openai import OpenAI
from dotenv import load_dotenv


load_dotenv()

print(os.getenv('OPENAI_KEY'))
client = OpenAI(api_key=os.getenv('OPENAI_KEY'))



def get_immigration_pathway(age, education, work_experience, language_proficiency, job_offer, family_in_canada, preferred_location):
    # Define the client profile and question
    client_profile = {
        "age": age,
        "education": education,
        "work_experience": work_experience,
        "language_proficiency": language_proficiency,
        "job_offer": job_offer,
        "family_in_canada": family_in_canada,
        "preferred_location": preferred_location
    }

    question = (
        "Based on the following client profile:\n"
        f"Age: {client_profile['age']}\n"
        f"Education: {client_profile['education']}\n"
        f"Work Experience: {client_profile['work_experience']}\n"
        f"Language Proficiency: {client_profile['language_proficiency']}\n"
        f"Job Offer: {client_profile['job_offer']}\n"
        f"Family in Canada: {client_profile['family_in_canada']}\n"
        f"Preferred Location: {client_profile['preferred_location']}\n\n"
        "What is the recommended immigration pathway for this client?"
    )

    # Request completion from the model
    response = client.completions.create(
        model="ft:davinci-002:personal::9TcI2k99",  # Your fine-tuned model
        prompt=question,
        max_tokens=50
    )

    # Extract and return the model's recommendation
    recommended_pathway = response.choices[0].text.strip()
    print(recommended_pathway)
    return recommended_pathway

