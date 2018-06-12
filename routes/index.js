const express = require('express');
const router = express.Router();
const fs = require('fs');
const reader = require('../helpers/reader.js');

// GET home page
router.get('/', function(req, res, next) {
  res.render('home', reader.read('pokemons'));
});

// GET insert page (show the form)
router.get('/pokemon/add', function(req, res, next) {
  res.render('insert');
});

// POST insert page (add a new pokemon)
router.post('/pokemon/add', function(req, res, next) {
  let pokemons = reader.read('pokemons');
  pokemons.pokemons.push(req.body);
  fs.writeFileSync("data/pokemons.json", JSON.stringify(pokemons));
  res.redirect('/');
});

// GET pokemon page
router.get('/pokemon/:pokemonName', function(req, res, next) {
  let name = req.params.pokemonName;
  let pokemons = reader.read('pokemons');
  pokemons.pokemons.forEach(function(pokemon) {
    if(pokemon.name == name) {
      res.json(pokemon);
    }
  });
});

// GET show page
router.get('/pokemons', function(req, res, next) {
  let pokemons = reader.read('pokemons');
  res.json(pokemons);
});

module.exports = router;
