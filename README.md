# Steg som följdes i demo (se inspelning 18 september 2025)
1. Installera React router med: npm i react-router-dom
2. Skapa CartContext för att alla komponenter ska kunna läsa och ändra cart-data utan props drilling (alltså att skicka props mellan flera nivåer och nestlade komponenter)
3. Bryt ut den statiska arrayn av produkt-objekt i en egen products.js fil i en /data folder så att vi kan importera datan i flera olika komponenter 
4. Skapa en /pages folder med komponenterna som ska agera vyer; Home.jsx, Staff.jsx, Cart.jsx. Detta är vanliga functional components men vi organiserar dem och tänker på dem som sidor där vi importerar och renderar relevanta komponenter. T. ex. Cart.jsx sidan rendrar ut CartComponent-komponenten men vi vill kanske skapa en medlems-login-komponent som också ska renderas ut i Cart-sidan. Dock så vill vi inte visa denna login-komponent i Home-sidan trots att vi vill rendera ut vår CartComponent här också. Därför passar det bättre att skapa separata komponenter för Cart och Login som vi sedan kan välja vilka pages-komponenter vi vill använda dem i. Pages-komponenterna är alltså inte knepigare än parent-komponenter som håller nagivering genom Router. 
5. Bryt ut ProductCard renderingen från shopPage till Home.jsx. 
6. Skapa CartComponent. Flytta cart-state och logik från shopPage till carts nya modulära CartComponent.
7. Importera och rendera ut CartComponent i Cart.jsx page-komponenten. 
8. Flytta columns-namn-array från shopPage till Staff.jsx
9. Skapa Router.jsx i src 
10. Ersätt shopPage-komponenten från App.jsx med Router och CartProvider (destruct objektet från CartContext.jsx)
11. Ta bort shopPage! Nu har vi en modulär app med Router :D 
