const Counter = ( state = { count: 0 }, action ) => {

    let actions = {

        INC() {
            return {
                ...state,
                count: state.count + 1
            }
        },

        DEC() {
            return {
                ...state,
                count: state.count - 1
            }
        }

    }

    if ( !actions[ action.type ] )
        return state

    return actions[ action.type ]()

}

export { Counter }