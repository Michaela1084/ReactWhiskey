import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
    name: "root",
    initialState: {
        name: "Name",
        age: "Age",
        a_content: "Alcohol Content",
        color: "Color",
        flavor: "Flavor"
    },
    reducers: {
        chooseName: (state, action) => { state.name = action.payload},
        chooseAge: (state, action) => { state.age = action.payload},
        chooseA_content: (state, action) => { state.a_content = action.payload},
        chooseColor: (state, action) => { state.color = action.payload},
        chooseFlavor: (state, action) => { state.flavor = action.payload}
        // chooseFirst: (state, action) => { state.first = action.payload},
        // chooseLast: (state, action) => { state.last = action.payload},
        // chooseEmail: (state, action) => { state.email = action.payload},
        // choosePhone: (state, action) => { state.phone_number = action.payload},
        // chooseAddress: (state, action) => { state.address = action.payload}
    }
})

export const reducer = rootSlice.reducer;
export const { chooseName, chooseAge, chooseA_content, chooseColor, chooseFlavor} = rootSlice.actions