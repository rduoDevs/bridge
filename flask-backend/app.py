from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import getSampleStyleSheet
from reportlab.platypus import SimpleDocTemplate, Paragraph
import os
from reportlab.lib import fonts
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfbase import pdfmetrics

from flask import Flask, request, jsonify
from flask_cors import CORS
app = Flask(__name__)


CORS(app, resources={r"/*": {"origins": "*"}})

@app.route('/create_pdf', methods=['POST'])
def create_pdf():
    print("TESTTTTTT")
    data = request.json
    title = data.get('input1')
    sections = data.get('input2')
    texts = data.get('input3')
    # Create a PDF document
    doc = SimpleDocTemplate(filename, pagesize=letter)
    # Register Times New Roman font

    # Set the font and alignment for the document
    styles = getSampleStyleSheet()
    styles['Title'].fontName = 'Times-Roman'
    styles['Title'].alignment = 0  # Left align
    styles['BodyText'].fontName = 'Times-Roman'
    styles['BodyText'].alignment = 0  # Left align
    
    # Create a title and paragraph
    list_of_text = [Paragraph('<b>' + title + '</b>', styles['Title']), Paragraph('', styles['Title'])]
    for i in range(len(sections)):
        list_of_text.append(Paragraph('<b>' + sections[i] + '</b>', styles['Title']))
        list_of_text.append(Paragraph(texts[i], styles['BodyText']))
        list_of_text.append(Paragraph('', styles['Title']))
        
    
    # Build the PDF
    downloads_folder = os.path.join(os.path.expanduser("~"), "Downloads")
    output_path = os.path.join(downloads_folder, filename)
    doc.filename = output_path
    doc.build(list_of_text)
    response = {
        'message': 'Data received',
        'input1': title,
        'input2': sections,
        'input3': texts
    }
    return jsonify(response)

# Example usage
title = "BRIDGE REPORT FOR: PRAGYAN YADAV"
paragraph = "This is a sample paragraph that will be included in the PDF document."
filename = "testwork.pdf"

#create_pdf(title, ['SECTION 1: CONCERNS', 'SECTION 2: EMOTIONS'], ['Patient has been observing an abnormal increase in pain on his right leg for the past week, and is concerned it may be underlying.', 'Patient has been observing an abnormal increase in pain on his right leg for the past week, and is concerned it may be underlying.'])
if __name__ == '__main__':
    app.run(debug=True)