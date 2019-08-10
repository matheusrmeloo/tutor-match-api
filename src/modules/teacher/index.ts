import { Component } from "../../core/interfaces";
import { get } from "./handlers/get";

export const routes: Component = {
    "/:type/:value": {
        get: {
            handler: get,
        },
    },
    "/": {
        get: {
            handler: get,
        },
    },
};
