# Next.JS
Schnelles laden der Produkte

# npm i --legacy-peer-deps
Installieren alle deps mit der richtigen Version

# npm run dev
App starten

# Sanity
- Muss eingerichtet werden (hier als Clean Project)
- sanity docs (Documentation) => Nach Key Wörter suchen, die man nicht versteht
- sanity manage (Manager, aktuelles Projekt auswählbar) + (Verbindungsdaten für den Client)
- sanity start (Im Ordner "sanity_ecommerce" Schema starten + anmelden => localhost:3333)

# npm i --save-dev @babel/preset-react Problem
- Erst die sanity Deps in package.json entfernen => dannn npm i
- Danach npm i sanity neu installieren
- Danach npm i --save-dev @babel/preset-react installieren

# sanity start Problem
Die richtigen Versionen von Deps aus dem Video entnehmen für sanity im sanity_ecommerce (package.json)

# Alle Backend Sachen kommen in api Ordner (brauchen kein Node.js)
- z.B. Stripe kommt hier rein