import { configureStore } from "@reduxjs/toolkit";
import reserveList from "../features/reserveList";
// ...

const store = configureStore({
  reducer: {
    reserveList: reserveList.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
