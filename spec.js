const assert = require('assert')
const createStore = require('redux').createStore
const { Counter } = require('./src/reducers')

describe('Reducer Counter', () => {

    var store = createStore( Counter, { count: 0 } )

    const INC = { type: 'INC' }
    const DEC = { type: 'DEC' }

    it('should just return the state when wrong params are passed', () => {

        var expected = { count: 0 }
        store.dispatch({ type: 'XYZ' })
        assert.deepEqual( store.getState(), expected )
    })


    it('should increment count', () => {

        store.dispatch( INC )
        assert.deepEqual( store.getState(), { count: 1 } )

    })

    it('should decrement count', () => {

        store.dispatch( DEC )
        assert.deepEqual( store.getState(), { count: 0 } )

    })

}) 