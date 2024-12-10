import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import {RouterProvider} from "react-router-dom";
import router from "./router";
import axios from "axios";
import { Provider } from "react-redux";
import { store } from "./store/store";

const acessUrl =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MWU4NGUzNTA1NTM2ODZjZmE4OTI0YjI4ZmFlODAyMSIsIm5iZiI6MTczMDcwNTMxNC4zNzYsInN1YiI6IjY3Mjg3N2EyNzYxOTc5ZjAwNWUyY2RhOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Vj18t5n-_xOYS9jJ_bhTCi1CVgQOzUhd9NQBNr_hdNk";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

axios.defaults.headers.common["Authorization"] = "Bearer " + acessUrl;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    // <React.StrictMode>
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>

    // </React.StrictMode>
);

reportWebVitals();
