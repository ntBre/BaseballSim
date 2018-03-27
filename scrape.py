from lxml import html
import requests
page = requests.get("http://mlb.mlb.com/stats/sortable.jsp#elem=%5Bobject+Object%5D&tab_level=child&click_text=Sortable+Player+hitting&game_type='S'&season=&season_type=SINGLE&league_code='MLB'&sectionType=sp&statType=hitting&page=1&ts=1522041978734&split=&playerType=ALL&timeframe=&active_sw=")
tree = html.fromstring(page.content)
help(html)
for i in tree:
	print i
