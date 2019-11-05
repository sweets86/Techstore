# Techstore
Techstore är ett projekt, ett exempel på en e-handel webbsida kan se ut, uppbyggt med javascript utan någon backend kod. Där vi andvänder oss av produkter från JSON filen, som renderas via javascript. Med möjlighet att lägga produkterna i kundvagnen som sparas i Localstorage i kundvagnssidan (varukorgen) där produkterna hämtas från localstorage med möjligheten att ta bort produkterna, med hjälp av en function som visar hur många produkter som finns samt totalpriset för alla olika produkter i kundvagnen. Båda sidorna är responsiva. Vi andvändes oss mest av Javascript, HTML och native CSS utan färdiga biblotek och koder. 

Vi la bara till "H1" som visade att kundvagen är tom när man trycker "slutför köp".

Vi har lagt till en "IF" sats som kollar om arrayn i localstorage finns och har en längd, så ska produkterna som finns arrayn renderas i kundvagns sidan. Om "IF" satsen inte "stämmer" så ska en "H1" komma upp som skall visa att kundvagnen är tom. 