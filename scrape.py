from bs4 import BeautifulSoup
import urllib2

page_url = "http://mlb.mlb.com/stats/sortable.jsp#elem=%5Bobject+Object%5D&tab_level=child&click_text=Sortable+Player+hitting&game_type='R'&season=2017&season_type=ANY&league_code='MLB'&sectionType=sp&statType=hitting&page=1&ts=1521667465700&playerType=QUALIFIER&sportCode='mlb'&split=&team_id=&active_sw=&position=&page_type=SortablePlayer&sortOrder='desc'&sortColumn=avg&results=&perPage=50&timeframe=&last_x_days=&extended=0"

html = urllib2.urlopen(page_url)
soup = BeautifulSoup(html.read(), 'html.parser')
for tr in soup.find_all('tr'):
	print tr
	tds = tr.find_all('td')
	print tds[tr].text, "cry"

print len(soup.find_all('tr'))
for line in html:

	print html.read()
print len(html.read())
print str(soup)
