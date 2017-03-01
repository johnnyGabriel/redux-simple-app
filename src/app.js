import { createStore } from 'redux'
import { Counter } from './reducers'

// Store
const store = createStore( Counter, { count: 0 } )

// Elements
const elCounter = document.getElementById('counter')
const btnInc = document.getElementById('inc')
const btnDec = document.getElementById('dec')

btnInc.onclick = () => {
    store.dispatch({ type: 'INC' })
}

btnDec.onclick = () => {
    store.dispatch({ type: 'DEC' })
}

const render = ( el, store ) => {

    let _render = ( state ) => {
        console.log( state )
        el.innerText = state.count
    }

    _render( store.getState() )

    return store.subscribe( () => {
        _render( store.getState() )
    })
    
}

render( elCounter, store )