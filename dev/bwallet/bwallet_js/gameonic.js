"use strict"

// Gameonic

const fetch    = require('node-fetch')
const Mnemonic = require('bitcore-mnemonic')
const c        = console

// Select a language:

// const words = Mnemonic.Words.ENGLISH
// const words = Mnemonic.Words.CHINESE
// const words = Mnemonic.Words.FRENCH
// const words = Mnemonic.Words.ITALIAN
const words = Mnemonic.Words.JAPANESE
// const words = Mnemonic.Words.SPANISH


// ---

const apiEndpoint = (word) => {
  return `http://jisho.org/api/v1/search/words?keyword=${word}`
}

const translateFromJap = await (word) => {
  // return async () => {
      // return data // end of data request

      // traverse json object graph to find the first translation
      // c.log( resp.data )
      // c.log( resp.data[0].senses[0] )
      // c.log( resp.data[0].senses[0].english_definitions )
      let translation = resp.data[0].senses[0].english_definitions[0]

      return translation
  // }
}

// ---

// words.forEach((word) => {
for (let i = 0; i < words.length; i++) {
  let word = words[i]
  c.log(word)

  let url = apiEndpoint(word)
  // c.log(url)
  let respJson = await fetch(url)
  let resp     = await respJson.json()

  let translation = resp.data[0].senses[0].english_definitions[0]

  // let translation = await translateFromJap(word)
  c.log(translation)
  break
}
