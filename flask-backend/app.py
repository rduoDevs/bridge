from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import getSampleStyleSheet
from reportlab.platypus import SimpleDocTemplate, Paragraph
import os
from reportlab.lib import fonts
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfbase import pdfmetrics
import os
from mistralai import Mistral
from mistralai.client import MistralClient
from flask import Flask, request, jsonify, send_file
from flask_cors import CORS

# Flask Declarations
app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

# Mistral Declarations
api_key = "yAQTi5kX4jbjdNICl5uVmTQv533le9LD"
model = "mistral-small-latest"
client = Mistral(api_key=api_key)

@app.route('/medically_translate', methods=['POST'])
def medically_translate():

    # builds the prompt to medically translate
    data = request.json
    print(data['content'])
    query = "From the following information: find relevant information and organize it by the categories of biographical information, current medications (if applicable), current treatment plan (if applicable), medical history (if applicable) and DO NOT REPEAT INFORMATION; for each category, label the contents like \"bio data 1- age: 22\", \"medication 1: ibuprofen\"";
    query += data['content']

    # enacts the actual translation
    chat_response = client.chat.complete(
    model= model,
    messages = [
        {
            "role": "user",
            "content": query
        },
    ])

    formalized_concerns = ''
    if chat_response and chat_response.choices:
        formalized_concerns =  chat_response.choices[0].message.content
    else:
        formalized_concerns = 'bridge needs a bit more practice to translate. no info at this time :('
    create_pdf(formalized_concerns)
    response = {
        'message': 'Data received',
        'content': formalized_concerns,
    }
    print(formalized_concerns)
    return response


title = 'PATIENT REPORT'
filename = 'output.pdf'
def create_pdf(content):
    doc = SimpleDocTemplate(filename, pagesize=letter)
    # Register Times New Roman font

    # Set the font and alignment for the document
    styles = getSampleStyleSheet()
    styles['Title'].fontName = 'Times-Roman'
    styles['Title'].alignment = 0  # Left align
    styles['BodyText'].fontName = 'Times-Roman'
    styles['BodyText'].alignment = 0  # Left align
    
    # Create a title and paragraph
    list_of_text = [Paragraph('<b>' + title + '</b>', styles['Title']), Paragraph(content, styles['BodyText'])]

    # Build the PDF
    downloads_folder = os.path.join(os.path.expanduser("~"), "Downloads")
    output_path = os.path.join(downloads_folder, filename)
    doc.filename = output_path
    doc.build(list_of_text)


# placeholder: Hey, I’m Aaryan, a 22-year-old guy who’s been battling an autoimmune condition that’s been wreaking havoc on my digestive system for about two years now. Flare-ups leave me exhausted, nauseous, and stuck in bed half the time, which really messes with school and hanging out with friends. My doctors have me on Humira injections every other week and prednisone during rough patches, but the steroids come with brutal side effects—moon face, weight gain, and this jittery energy that keeps me up all night. I’ve also cycled through OTC stuff like ibuprofen for joint pain and Tylenol when my stomach’s too raw, plus probiotics and vitamins to try and calm the chaos. The mental toll sucks too—constantly worrying about triggers or canceling plans last minute makes me feel isolated. It’s been a frustrating trial-and-error ride, but I’m working with my care team to find a balance that lets me live without feeling like a zombie or a lab rat.",
if __name__ == '__main__':
    app.run(debug=True)