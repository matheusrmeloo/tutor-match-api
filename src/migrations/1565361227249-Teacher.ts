import {MigrationInterface, QueryRunner} from "typeorm";

export class Teacher1565361227249 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        for (let i = 0; i < 2; i++) {
            await queryRunner.query(`INSERT INTO teacher (name, city) VALUES ('Paulo${i}', 'Arapiraca');`);
        }
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        // for (let i = 0; i < 2; i++) {
        //     await queryRunner.query(`INSERT INTO teacher (name, city) VALUES ('Paulo${i}', 'Arapiraca');`);
        // }
    }

}
