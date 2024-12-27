import { createSlice } from "@reduxjs/toolkit";

const initialState = []
const customerReducer = createSlice({
    name:'customers',
    initialState,
    reducers : {
        addCustomer(state,action){
            return [...state, action.payload]; 


            // state.push(action.payload)
            // {...state,...action.payload}

        },
        deleteCustomer(state,action) {
            const deleteIndex = action.payload;
           return state.filter((val,index)=>index!==deleteIndex)
        }
    }
})

console.log("customerReducer",customerReducer,typeof(customerReducer))


//action creator - To call reducer function
export const {addCustomer,deleteCustomer} = customerReducer.actions

export default customerReducer.reducer

