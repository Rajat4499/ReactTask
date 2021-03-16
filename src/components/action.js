import * as actions from "./actionTypes"

export function postAdded(description)
{
    return {
        type : actions.PostAdded,
        payload : {
            description 
        }    
    };
}

export function postRemoved(id)
{
    return {
        type : actions.PostRemoved,
        payload : {
            id : id
        }    
    };
}