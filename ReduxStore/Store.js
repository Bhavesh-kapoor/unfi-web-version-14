import { configureStore } from "@reduxjs/toolkit";
import UserLoggedAction from "./actions/UserLoggedActions";
import ImageDisplay from "./actions/ModalImage";
import FilterResut from "./actions/FilterResut";

export default configureStore(
    {
        reducer:{
            User:UserLoggedAction,
            CurrentImage:ImageDisplay,
            Filter:FilterResut,
        }
    }
)