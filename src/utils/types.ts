//redux common types
import {rootReducer, store} from "../application/store";

export type AppRootStateType = ReturnType<RootReducerType>
export type RootReducerType = typeof rootReducer
export type AppDispatchType = typeof store.dispatch