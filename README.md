# Start
1. npx create-next-app (Abfragen: name, Typescript, ESLint)
2. In package.json alle nötigen Deps installieren (Copy Paste in "dependencies": https://gist.github.com/adrianhajdin/55e019f0ec6a48c0ca6d933d3cf0181c)
=> im richtigen Ordner: npm i --legacy-peer-deps ausführen
3. npm run dev (Starten)

# Sanity Setup
1. Sanity global installieren: npm i -g @sanity/cli
2. Sanity initalisieren + Coupon: sanity init --coupon javascriptmastery2022
=> Mit Google anmelden, falls nicht schon + name vergeben
=> Use the default dataset configuration? Yes!
=> Project template: Clean Project

-------------

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
- Erst die sanity Deps in package.json entfernen => dann npm i
- Danach npm i sanity neu installieren
- Danach npm i --save-dev @babel/preset-react installieren

# sanity start Problem
Die richtigen Versionen von Deps aus dem Video entnehmen für sanity im sanity_ecommerce (package.json)

# Alle Backend Sachen kommen in api Ordner (brauchen kein Node.js)
- z.B. Stripe kommt hier rein

# Vercel
- Fürs Deployment (https://vercel.com/)
- Start Deploying + mit Github anmelden
- Enviroment Variables einfügen aus .env

# Sanity Dashboard deployen
- in sanity_ecommerce rein => Befehl: sanity deploy ausführen
- Link wird auch im sanity.io Profil angezeigt (https://ecommerce-xiaobox.sanity.studio/desk)
