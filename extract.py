import requests
from bs4 import BeautifulSoup

# URL you want to scrape
url = "https://aadi.is-a.dev/projects"

# Send request
response = requests.get(url)

# Parse HTML
soup = BeautifulSoup(response.text, "html.parser")

# Write prettified HTML to file
with open("output.txt", "w", encoding="utf-8") as f:
    f.write(soup.prettify())

print("HTML saved to output.txt")
