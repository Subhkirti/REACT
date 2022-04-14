import { Add_To_Cart } from "../Constant";

const initialState={carddata:[]}
export default function cardItem(state=initialState,action){
    switch(action.type){
        case Add_To_Cart:
            return{
                ...state,
                carddata:action.data
            }
            break
            default:
                return {
                    state
                }
            
    }
}