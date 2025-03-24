from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
from bs4 import BeautifulSoup
import re
import time

app = Flask(__name__)
CORS(app)

def clean_text(text):
    if not text:
        return ""
    return re.sub(r'\s+', ' ', text.strip())

def extract_experience(text):
    # Try to extract years of experience from text
    match = re.search(r'(\d+)\s*(?:year|yr)s?', text.lower())
    if match:
        return int(match.group(1))
    return 0

def extract_research(text):
    # Extract research interests from text
    research_keywords = ['research', 'interest', 'focus', 'area']
    sentences = text.split('.')
    for sentence in sentences:
        if any(keyword in sentence.lower() for keyword in research_keywords):
            return clean_text(sentence)
    return ""

def scrape_professor_data(url):
    try:
        # Send request to the URL
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
        response = requests.get(url, headers=headers)
        response.raise_for_status()
        
        # Parse the HTML
        soup = BeautifulSoup(response.text, 'html.parser')
        
        # Initialize list to store professor data
        professors = []
        
        # Find all professor cards
        professor_elements = soup.find_all('div', class_='person-card')
        
        for element in professor_elements:
            try:
                # Extract professor information
                name_elem = element.find('h3', class_='person-name')
                name = clean_text(name_elem.text) if name_elem else ''
                
                # Get profile image
                img_elem = element.find('img')
                image = img_elem['src'] if img_elem and 'src' in img_elem.attrs else ''
                
                # Get department/branch
                dept_elem = element.find('div', class_='department')
                branch = clean_text(dept_elem.text) if dept_elem else ''
                
                # Get research interests
                research_elem = element.find('div', class_='research-interests')
                research = clean_text(research_elem.text) if research_elem else ''
                
                # Get experience from bio
                bio_elem = element.find('div', class_='bio')
                bio_text = clean_text(bio_elem.text) if bio_elem else ''
                experience = extract_experience(bio_text)
                
                # Get subjects from expertise
                subjects = []
                expertise_elem = element.find('div', class_='expertise')
                if expertise_elem:
                    subject_tags = expertise_elem.find_all('span', class_='tag')
                    subjects = [clean_text(tag.text) for tag in subject_tags]
                
                # Create professor object
                professor = {
                    'id': len(professors) + 1,
                    'name': name,
                    'image': image,
                    'branch': branch,
                    'subjects': subjects,
                    'experience': experience,
                    'research': research,
                    'ratings': []  # Default empty ratings
                }
                
                professors.append(professor)
                
                # Add a small delay to be respectful to the server
                time.sleep(0.5)
                
            except Exception as e:
                print(f"Error processing professor element: {str(e)}")
                continue
        
        return {
            'success': True,
            'professors': professors
        }
        
    except Exception as e:
        return {
            'success': False,
            'error': str(e)
        }

@app.route('/api/scrape', methods=['POST'])
def scrape():
    data = request.get_json()
    url = data.get('url')
    
    if not url:
        return jsonify({
            'success': False,
            'error': 'URL is required'
        })
    
    result = scrape_professor_data(url)
    return jsonify(result)

if __name__ == '__main__':
    app.run(port=5000) 