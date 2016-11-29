"use strict"

// output "design" from http://browser.bcoin.io/?network=testnet&prune=true

const bitcore  = require('bitcore-lib')
const Mnemonic = require('bitcore-mnemonic')
// node async/await
const c        = console


const mnemo = new Mnemonic() // default is english
// const mnemo = new Mnemonic(Mnemonic.Words.CHINESE)
// const mnemo = new Mnemonic(Mnemonic.Words.FRENCH)
// const mnemo = new Mnemonic(Mnemonic.Words.ITALIAN)
// const mnemo = new Mnemonic(Mnemonic.Words.JAPANESE)
// const mnemo = new Mnemonic(Mnemonic.Words.SPANISH)


// redis
// const current   =


const privateKey = new bitcore.PrivateKey()


let url =



const address   = new bitcore.PrivateKey()
const mnemonic  = new
// const code = new Mnemonic(Mnemonic.Words.SPANISH)

`
-- Wallet --
Current Address: ${address}
Private Key seed: ${privateKey}
Mnemonic: ${mnemonic}
Confirmed Balance:   0.0
Unconfirmed Balance: 0.0
Balance:             0.0

Send
[ amount ] [ to:Address ] > Send <
`
