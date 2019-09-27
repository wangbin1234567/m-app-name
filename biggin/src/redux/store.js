import { createStore } from 'redux'


let unStore = {
    EatData:[],
    DrunkData:[],
    counts:0,
    prises:0
}

function storeRoudcer(state = unStore,action){
    switch (action.type) {
        case "Add_EatDate" :
            return {
                ...state,
                EatData:[...action.data]
            }
        case "Add_DrunkData" :
            return {
                ...state,
                DrunkData:[...action.data]
            }
        case "New_count" :
            return {
                ...state,
                counts:action.data
            }
        case "New_Prise" :
            return {
                ...state,
                prises: action.data
            }

        default:
            return state
    }
}

export default createStore(storeRoudcer)
