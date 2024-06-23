import {configureStore} from '@reduxjs/toolkit'
import todoSlice from './todoSlice'




export const store = configureStore({
    reducer: {
        todo: todoSlice
    }
})

// export type AppStore = typeof store
// export type RootState = ReturnType<AppStore['getState']>
// export type AppDispatch = AppStore['dispatch']
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store