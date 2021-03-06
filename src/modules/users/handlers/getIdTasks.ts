import { Request, Response } from "express";
import { Task } from "../../../models/task";
import { User } from "../../../models/user";

export const getIdTasks = (request: Request, response: Response) => {

    User.findOne({ id: request.params.id })
        .then((user) => {
            Task.find({ user })
                .then((tasks) => {
                    response.status(200);
                    response.send(tasks);
                })
                .catch(() => {
                    response.status(400);
                    response.send({ error: "Tasks not found!" });
                    return;
                });
        })
        .catch(() => {
            response.status(404);
            response.send({ error: "User not found!" });
            return;
        });
};
