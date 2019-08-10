import { Settings } from "interfaces/settings";

export const settings: Settings = {
    port: 4000,
    baseRoute: "/v1",
    auth: {
        secret: "12345",
        expires: 30,
    },
    database: {
        synchronize: true,
        type: "mysql",
        host: "mariadb",
        port: 3306,
        username: "root",
        password: "123",
        database: "quick",
        entities: [
            "/models",
        ],
        migrations: [
            "/migrations",
        ],
    },
};
