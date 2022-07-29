import { configureStore } from '@reduxjs/toolkit'
import user from './user'
import cart from './cart'
import favourite from './favourite'

export const store = configureStore({
  reducer: {user, cart, favourite},
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch