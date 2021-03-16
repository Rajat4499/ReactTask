export default function reducer(state=[],action) {             // IF NO PARAMETER IS PASSED THEN INITIALIZED TO []
        if (action.type === "ADD_POST")    
            return [
                ...state,
                {
                    description: action.payload.description,
                }
            ];
        else if (action.type === "REMOVE_POST"){
            return state.filter(bug => bug.id !== action.payload.id)
        }
        else if (action.type === "ADD_COMMENT"){
            return [

            ]
        }
        else{
            return state
        }
    }