"use strict"

const bcoin = require('bcoin')
const c     = console


// ---------------

// environment
// const ENV = "main1"
const ENV = "test"

// select chain
//
// bcoin.set('main')
bcoin.set('regtest')

const chain_db = 'memory'
// const chain_db = 'leveldb'

const chain   = new bcoin.chain({ db: chain_db })
const mempool = new bcoin.mempool({ chain: chain, db: 'memory' })

if (ENV == "test") {
  const miner = new bcoin.miner({ chain: chain, mempool: mempool, size: 8 })
}


// ---------
c.log(`Environment loaded - ENV: ${ENV}`)


pool.open(err => {

  if (err)
    throw err

  // Connect, start retrieving and relaying txs
  pool.connect()

  // Start the blockchain sync.
  pool.startSync()

  chain.on('block', block => {
    c.log(`Added block: ${block}`)
  })

  mempool.on('tx', tx => {
    c.log(`Added tx to mempool: ${tx}`)
  })

  pool.on('tx', tx => {
    c.log(`Saw transaction: ${tx}`)
  })

})


// ---------


miner.open((err) => {
  if (err)
    throw err

  miner.createBlock((err, attempt) => {
    if (err)
      throw err

    attempt.mineAsync((err, block) => {
      if (err)
        throw err

      chain.add(block, err => {
        if (err)
          throw err

        c.log('Added %s to the blockchain.', block.rhash)
        c.log(block)
      })
    })
  })
})

// ---------
