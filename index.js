const express = require('express');
app = express();
const port = 3000;

app.get("/pokemon", function(req,res,next){
    let Pokemon = require("./pokemon");
    
    let page = req.query.page || 1 ;
    let limit = req.query.limit || 10;
    
    if( limit > 100 ) {
        res.json( { error: "Please provide limit less than 100" } );  
    }
    
    Pokemon = Pokemon.slice( (page-1)*limit, limit*page ); // to fetch based on page & limit
    
    if( Pokemon.length ) {
        res.json( { count: Pokemon.length, results : Pokemon } );
    } else {
        res.json( { error: "No Pokemon found" } );
    }
});

app.get("/pokemon/:id", function(req,res,next){
    let Pokemon = require("./pokemon");
    
    const id = parseInt( req.params.id ); // convering to integrer
    
    // checking if it is valid id
    if( ! ( Number.isInteger( id ) &&  id > 0 ) ) {
        res.json( { error : "Please provide integer value for id" } );
    }
    
    // filtering from Pokemon.json file to match the id.
    Pokemon = Pokemon.filter(function (el) {
        return el.id == id;
    });
      
    if( Pokemon.length ) {
        res.json( { result : Pokemon } );
    } else {
        res.json( { error: "No Pokemon found for id "+id } );
    }
    
});

app.listen(port, () => {
    console.log(`Pokemon app listening on port ${port}`)
})