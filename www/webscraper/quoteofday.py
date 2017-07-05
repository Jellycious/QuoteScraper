from lxml import html
import requests
from random import randint

#Sends request and gather html
ig = randint(0,24)
if ig > 0:
	page = 'https://www.brainyquote.com/quotes/topics/topic_computers' + str(ig) + '.html'
else:
	page = 'https://www.brainyquote.com/quotes/topics/topic_computers.html'

page = requests.get(page)
tree = html.fromstring(page.content)
#makes two list of elements containing view quote title
quotes = tree.xpath('//a[@title="view quote"]/text()')
authors = tree.xpath('//a[@title="view author"]/text()')

#select random quote from acquired list
i = randint(0,len(quotes)-1)
quote = quotes[i]
author = authors[i]
print(quote+"//"+author)
