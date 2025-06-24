# Orders Dashboard - React App

En enkel och responsiv React-applikation för att visa och filtrera kunders paketbeställningar. Applikationen stödjer flerspråkighet (Svenska och Engelska) och hämtar orderdata från ett externt API.

---

## Funktioner

- Visa lista med ordrar och detaljer som status, ETA, upphämtningsplats, avsändare och mer.
- Filtrering av ordrar baserat på status (t.ex. Delivered, On the Way, Ready for Pickup).
- Flerspråkigt stöd med möjlighet att växla mellan Svenska och Engelska.
- Responsiv design som fungerar bra på både mobil och desktop.
- Enkel och tydlig UI byggd med React och Tailwind CSS.

---

## Kom igång

### Förutsättningar

- Node.js (version 16 eller senare rekommenderas)
- npm (medföljer Node.js)

### Installation

1. Klona detta repository:

```bash
git clone <din-repo-url>
cd orders
Installera beroenden:

bash
Kopiera
Redigera
npm install
Starta utvecklingsservern:

bash
Kopiera
Redigera
npm start
Öppna webbläsaren och navigera till:

arduino
Kopiera
Redigera
http://localhost:3000
Projektstruktur
bash
Kopiera
Redigera
/public
  /locales
    /en
      translation.json   # Engelska översättningar
    /sv
      translation.json   # Svenska översättningar
/src
  /components            # Återanvändbara React-komponenter (OrderCard, LanguageSwitcher)
  /pages                 # Sidor (OrdersPage)
  /locales               # Språkfiler om man väljer import i src istället för public
  App.js                 # Huvudkomponent, appens layout och routing
  i18n.js                # Konfiguration för i18next
  index.js               # Entrypoint, importerar i18n och renderar App
package.json             # Projektets beroenden och scripts
README.md                # Denna fil
Flerspråkighet (i18n)
Vi använder i18next tillsammans med react-i18next för att hantera språk.

Översättningar finns som JSON-filer i public/locales/{språk}/translation.json.

Språk kan bytas via språkväxlarkomponenten (LanguageSwitcher).

Du kan enkelt lägga till fler språk genom att skapa nya mappar och filer i locales.

Design och teknikval
React 18+ - UI biblioteket för att bygga användargränssnitt.

Tailwind CSS - Utility-first CSS framework för snabb och responsiv styling.

Fetch API - För att hämta orderdata från mock API.

i18next & react-i18next - Hantering av översättningar och språkbyte.

useState & useEffect - React hooks för statehantering och livscykel.

Testing
Denna app är enkel och testas manuellt:

Byt språk i språkväxlaren och kontrollera att alla texter ändras.

Välj olika orderstatus-filter och verifiera att rätt ordrar visas.

Testa appen på olika skärmstorlekar för att säkerställa responsiv design.

Möjlig förbättring och skalbarhet
Lägg till automatisk språkdetektering baserat på användarens webbläsarinställningar.

Spara användarens språkval i localStorage för att komma ihåg det vid återbesök.

Utöka filtermöjligheter (t.ex. datum, avsändare).

Implementera en backend för att hantera användarsessioner och autentisering.

Hantera flera länder med lokaliserade datumformat och valutahantering.

Inför enhetstester med t.ex. Jest och React Testing Library.

Kontakt
Har du frågor eller feedback, kontakta mig gärna:

Namn: Khattab Alshami

E-post: Khmoal90@gmail.com

Telefon: 073-528 38 47

