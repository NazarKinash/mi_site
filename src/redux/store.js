import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";

const persistConfig = {
	key: "user",
	storage,
	whitelist: ["token"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
	persistedReducer,
	composeWithDevTools(applyMiddleware(thunk))
);

export const persistor = persistStore(store);

export default store;
