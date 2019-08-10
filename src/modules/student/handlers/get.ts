import { Request, Response } from "express";
import { counter, increment } from "../helper";

export const get = (request: Request, response: Response) => {

    increment();

    response.status(200);
    response.send({ requests: counter });
};
