import { Component } from "../../core/interfaces";
import { get } from "./handlers/get";

export const routes: Component = {
    "/": {
        get: {
            handler: get,
        },
    },
};
