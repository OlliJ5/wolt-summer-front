# Restaurant lister for wolt

## Instructions

Navigate to the root of the project where for example this file is located at 

Then install the needed dependencies with the command
```
npm install
```

Start the JSON server that serves us the restaurant data with the command
```
npm run server
```
The data can be viewed at:
http://localhost:3001/restaurants


Start the React app with the command
```
npm start
```
The app can then be viewed at:
http://localhost:3000/


Unit tests can be run with the command
```
CI=true npm test
```

ESLint can be executed with the command
```
npm run eslint
```


## TODO

* JSON server [x]
* linteri tulille [x]
* tietojen haku JSON serveriltä [x]
* kuva ravintoloista [x]
* sorttaus aakkosjärjestys [x]
* pikkukuvat saman kokosiksi [x]
* jos offline harmaa häivytys tai jotain [x]
* refaktoroi koodi hyvään kuntoon [x]
* testit [x]
    * Restaurant [x]
        * Näyttää ravintolan tiedot [x]
        * Näyttää kiinni olevat [x]
    * RestaurantList [x]
        * Kaikki ravintolat renderöidään [x]
        * listingOrder: ascending -> aakkosjärjestys [x]
        * listingOrder: descending -> käänteinen aakkosjärjestys [x]

* readme ohjeistuksella [x]

### Ekstraa
* filtteri nimen perusteella []
* pikkukartta ravintolan lokaatiosta []