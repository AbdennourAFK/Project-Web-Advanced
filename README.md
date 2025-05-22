# Project-Web-Advanced
Een interactieve webapplicatie die gebruikers in staat stelt om landen van over de hele wereld te bekijken, filteren, sorteren en favorieten op te slaan. De gegevens worden opgehaald via de publieke Rest countries API(https://restcountries.com/).

##functionaliteiten
-Lijst met alle landen op basis van live data via een externe API
-Zoekfunctie op basis van landnaam
-Filter op continent (regio)
-Sorteren op: Alfabetische volgorde, regio,populatie(bevolkingsaantal).
-Mogelijkheid om landen toe te voegen aan favorieten (opgeslagen in `localStorage`)
-Responsief ontwerp geschikt voor mobiel en desktop

##Toegepaste javascript concepten
1. DOM Manipulatie
   **Elementen selecteren**: Met `document.querySelector()` en `getElementById()` selecteren we knoppen, invoervelden, enz (regels 1-4).
   **Elementen manupileren**: Dynamisch toevoegen van HTML via `innerHTML`, aanpassen van klassen via `classList.add()`, etc (regels 22-34).
   **Events aan elementen koppelen**: Klik- en invoerevents met `addEventListener()`(regels 35–37, 64, 96–102, 106–110).
   
2. Modern JavaScript
 - **Gebruik van constanten**: `const` wordt gebruikt voor vaste referenties naar DOM-elementen en API URL’s (regels 1–4, 13, 85).
 - **Template literals**: HTML wordt opgebouwd met backticks `` `...${expression}` ``(regel 27 en 28).


 - **Iteratie over arrays**: Met `forEach()` worden landen in de DOM weergegeven (regel 20 en 36).
 - **Array methodes**: Gebruik van `.filter()`, `.map()`, `.sort()` om te filteren en sorteren (regels 58–66, 73–81).
 - **Arrow functions**: Gebruikt bij vrijwel alle callbacks, bijvoorbeeld in `.forEach()`(meerdere regels, bv. 20, 36, 64) .
 - **Ternary operator**: Gebruikt voor conditionele weergave van favorieten (regel 26).
 - **Callback functions**: Gebruikt in array methodes en event listeners (regels 20, 58, 73, 100).
 - **Promises**: De fetch-aanroep werkt met `.then()`, `.catch()`.
 - **Async & Await**: De hoofd-fetchfunctie gebruikt `async/await` voor duidelijke en leesbare code (regels 7–13).
 - **Observer API**: Een `IntersectionObserver` detecteert wanneer elementen in beeld komen om animaties toe te passen.
 - **Lijnen**:48, 100–102, 109–111, 114–116

3. Data en API
 - **Fetch om data op te halen**: Landen worden opgehaald via `fetch()` uit de REST Countries API (regel 9).
 - **JSON manipuleren**: Data wordt geparsed met `.json()` en vervolgens gefilterd, gesorteerd en weergegeven (regel 10).

4.Opslag en validatie
- **LocalStorage**: Favorieten worden opgeslagen met `localStorage.setItem()` en opgehaald bij paginaherlaad (regels 5, 43, 45).
- **Formuliervalidatie**: Er is eenvoudige validatie voor het zoekveld (niet leeg, minimaal aantal tekens) .

5. Styling en layout
 - **HTML layout**: Gebruik van `flexbox` voor de lijstweergave en filtersecties.
 - **Basis CSS**: Zelfgeschreven CSS met aandacht voor mobiele weergave en dark mode.
 - **Gebruiksvriendelijke elementen**: 
  - Favorieten-knop 
  - Sorteren met dropdowns
  - Verwijderknop bij favorieten

6. Tooling en structuur
 - **Vite**: Project is opgezet met Vite voor snelle ontwikkeling.

## Screenshots van de applicatie
home: ![image](https://github.com/user-attachments/assets/4a305049-3ec6-431b-af25-e092d159d47d)
sorteer op naam: <img width="934" alt="sorteer op naam web adv" src="https://github.com/user-attachments/assets/5267b5cc-b68c-4f89-b832-6dca31190d24" />
sorteer op populatie: <img width="955" alt="sorteer op populatie" src="https://github.com/user-attachments/assets/e406ef24-4aa8-4659-a8cb-525ac7d2a136" />
favorieten (Ik heb België en marokko toegevoegd als favoriet) <img width="940" alt="favorieten" src="https://github.com/user-attachments/assets/1ab3229d-2a25-42f7-b63f-38946520223b" />






##Gebruikte technologieën & Bronnen
-Html,css,javascript, vite.
-Rest contries API (https://restcountries.com/) Voor het ophalen van de landeninformatie.
-MDN Web docks (https://developer.mozilla.org/) Voor documentatie over JavaScript, HTML, CSS en fetch.
-W3Schools (https://www.w3schools.com/) Voor algemene uitleg en voorbeelden.
