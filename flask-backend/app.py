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
import subprocess
import re  


# Flask Declarations
app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

# Mistral Declarations
api_key = "OBFUSCATED_DO_NOT_REVEAL"
model = "mistral-small-latest"
client = Mistral(api_key=api_key)

@app.route('/medically_translate', methods=['POST'])
def medically_translate():

    # builds the prompt to medically translate
    data = request.json
    print(data['symptoms'])
    query = 'From the following information: find relevant information and organize it by the categories of symptoms, current medications (if applicable), current treatment plan (if applicable), medical history (if applicable) and DO NOT REPEAT INFORMATION; for each category, label the contents as following: for symptoms: each line should begin with \"Symptom n:\" where n is an incrementing number of the entry; for current medications: each line should begin with \"Medication n:\" where n is an incrementing number of the entry; for current treatment plan: each line should begin with \"Treatment plan n:\" where n is an incrementing number of the entry; for medical history, each line should begin with \"Medical history n:\" where n is an incrementing number of the entry; this is the text.'
    query += data['symptoms']

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



    # pattern_symptom = r"Symptom \d+: (.+)"
    # symptom_data = re.findall(pattern_symptom, formalized_concerns)

    # pattern_medication_data = r"Medication \d+: (.+)"
    # medication_data = re.findall(pattern_medication_data, formalized_concerns)

    # pattern_treatment_plan = r"Treatment plan \d+: (.+)"
    # treatment_plan_data = re.findall(pattern_treatment_plan, formalized_concerns)

    # pattern_medical_history = r"Medical history \d+: (.+)"
    # medical_history_data = re.findall(pattern_medical_history, formalized_concerns)


    # #extracting info into list
    # print(symptom_data)
    # print(medication_data)
    # print(treatment_plan_data)
    # print(medical_history_data)

    section_titles = ["Patient Overview","Health Status"]
    
    name = data['name']
    age = data['age']
    email =  data['email']

    bio_data = f"Name: {name},  Age: {age}, Email: {email}"
    generate_pdf(formalized_concerns, bio_data, section_titles, logo_path="/image.png", filename="output")

    response = {
        'message': 'Data received',
        'content': formalized_concerns,
    }
    print(formalized_concerns)
    return response


@app.route('/download_file', methods=['POST', 'GET'])
def download_file():
    file_path = "output.pdf"  # Change this to the actual PDF file path

    try:
        return send_file(file_path, as_attachment=True)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

title = 'PATIENT REPORT'
filename = 'output.pdf'
# def create_pdf(content):
#     doc = SimpleDocTemplate(filename, pagesize=letter)
#     # Register Times New Roman font

#     # Set the font and alignment for the document
#     styles = getSampleStyleSheet()
#     styles['Title'].fontName = 'Times-Roman'
#     styles['Title'].alignment = 0  # Left align
#     styles['BodyText'].fontName = 'Times-Roman'
#     styles['BodyText'].alignment = 0  # Left align
    
#     # Create a title and paragraph
#     list_of_text = [Paragraph('<b>' + title + '</b>', styles['Title']), Paragraph(content, styles['BodyText'])]

#     # Build the PDF
#     downloads_folder = os.path.join(os.path.expanduser("~"), "Downloads")
#     output_path = os.path.join(downloads_folder, filename)
#     doc.filename = output_path
#     doc.build(list_of_text)


def generate_pdf(texts, bio_data, section_titles, logo_path, filename="output2"):
    tex_filename = f"{filename}.tex"
    pdf_filename = f"{filename}.pdf"

     # LaTeX template for a formal report
    latex_content = r"""
    \documentclass[12pt]{article}
    \usepackage[T1]{fontenc}
    \usepackage[utf8]{inputenc}
    \usepackage{lmodern}
    \usepackage{textcomp}
    \usepackage{graphicx}  % for adding images (logo)
    \usepackage{fancyhdr}  % for custom headers
    \usepackage{lastpage}  % to reference last page in header/footer

    \pagestyle{fancy}
    \fancyhf{}
    \fancyhead[L]{Patient Report}
    \fancyhead[C]{bridge}
    \fancyhead[R]{Page \thepage\ of \pageref{LastPage}}

    \title{Formal Patient Report}
    \author{bridge Generated Report}
    \date{\today}

    \begin{document}

% Title page with logo
\begin{titlepage}
    \begin{center}
        \vspace*{1in}
        {\Huge \textbf{Patient Report}} \\[2em]
        {\Large bridge Generated Report} \\[1em]
        {\large \today}
        \vfill
    \end{center}
\end{titlepage}

    """ + "\n"

    text_content = [bio_data, texts]
    # Adding sections based on the section_titles and texts list
    i = 0
    for title in (section_titles):
        latex_content += r"\section*{" + title + "}" + "\n"
        latex_content += text_content[i] + r" \\ " + "\n\n"
        i+=1


    latex_content += r"""
    \end{document}
    """

    # Write the LaTeX content to the .tex file
    with open(tex_filename, "w") as file:
        file.write(latex_content)

    print(f"LaTeX file '{tex_filename}' generated successfully!")

    # Compile the LaTeX file to a PDF
    try:
        subprocess.run(["pdflatex", "-interaction=nonstopmode", tex_filename], check=True)
        print(f"PDF '{pdf_filename}' generated successfully!")
    except subprocess.CalledProcessError as e:
        print("Error in generating PDF:", e)



# placeholder: Hey, I’m Aaryan, a 22-year-old guy who’s been battling an autoimmune condition that’s been wreaking havoc on my digestive system for about two years now. Flare-ups leave me exhausted, nauseous, and stuck in bed half the time, which really messes with school and hanging out with friends. My doctors have me on Humira injections every other week and prednisone during rough patches, but the steroids come with brutal side effects—moon face, weight gain, and this jittery energy that keeps me up all night. I’ve also cycled through OTC stuff like ibuprofen for joint pain and Tylenol when my stomach’s too raw, plus probiotics and vitamins to try and calm the chaos. The mental toll sucks too—constantly worrying about triggers or canceling plans last minute makes me feel isolated. It’s been a frustrating trial-and-error ride, but I’m working with my care team to find a balance that lets me live without feeling like a zombie or a lab rat.",
if __name__ == '__main__':
    app.run(debug=True)