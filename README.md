# Pokemon-api

<!-- GETTING STARTED -->
## Description

I used https://pokeapi.co/ API to get full data and saved it to pokemon.json. The data gets picked up by index.js. 

## Technologies: 
This is a Node.JS project. I am using express as a simple creation of API. 

## Setup
1. Clone the repository
```sh
  git clone 
  ```
2. cd into pokemon-api
```sh
  cd Pokemon-api
  ```
3. run ```` npm install ```` to download the node package

4. run index.js
```sh
  node index.js
  ```
5. open http://localhost:3000/pokemon in new tab

## API end points

### default URL
http://localhost:3000/pokemon

### Query parameter - limit & page  (default is 10 per page)
http://localhost:3000/pokemon?limit=10&page=2

### Pass an ID to get that pokemon data 
http://localhost:3000/pokemon/:id
