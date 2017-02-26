import { createStore } from 'redux'

const el = document.getElementById('counter')

const Counter = ( state = { count: 0 }, action ) => {

    switch( action.type ) {

        case 'ADD':
            return { ...state, count: state.count + 1 }

        case 'REM':
            return { ...state, count: state.count - 1 }

        default:
            return state

    }

}

const store = createStore( Counter )

store.subscribe( () => {

    console.log(store.getState())
    el.innerText = store.getState().count

})

setTimeout(() => {
    store.dispatch( { type: 'ADD' } )
}, 2000)