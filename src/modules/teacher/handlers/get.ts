import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Teacher } from "../../../models/teacher";

export const get = async (request: Request, response: Response) => {

    let transactionOfLastOutput = null;
    if (request.params.type === "city") {
        transactionOfLastOutput = await getRepository(Teacher)
        .createQueryBuilder("Teacher")
        .leftJoinAndSelect("Teacher.students", "Student")
        .andWhere("Teacher.city = :value", { value: request.params.value })
        .getMany()
        .catch((e) => {
            response.status(400);
            response.send({ error: e });
            return;
        });
    } else if (request.params.type === "order") {
        transactionOfLastOutput = await getRepository(Teacher)
        .createQueryBuilder("Teacher")
        .leftJoinAndSelect("Teacher.students", "Student")
        .orderBy("Teacher." + request.params.value, "ASC")
        .getMany()
        .catch(() => {
            response.status(400);
            response.send({ error: "Erro ao listar dados." });
            return;
        });
    } else {
        transactionOfLastOutput = await getRepository(Teacher)
        .createQueryBuilder("Teacher")
        .leftJoinAndSelect("Teacher.students", "Student")
        .getMany()
        .catch(() => {
            response.status(400);
            response.send({ error: "Erro ao listar dados." });
            return;
        });
    }
    response.status(200);
    response.send({data: transactionOfLastOutput});
};
