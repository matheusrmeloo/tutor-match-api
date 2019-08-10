import * as request from "supertest";
import * as bootstrap from "../../core/bootstrap";

describe("Student module", () => {

    before(function (done) {
        this.timeout(60000);
        bootstrap.start("test").then((result: any) => {
            if (!result.success) {
                done(new Error(result.error));
                return;
            }
            done();
        });
    });

    after((done) => {
        bootstrap.stop().then((result: any) => {
            if (!result.success) {
                done(new Error(result.error));
                return;
            }
            done();
        });
    });

    describe("GET /student", () => {
        it("Should make a successful 'get'", (done) => {
            request(bootstrap.server.app)
                .get("/student")
                .expect(200)
                .then((result) => {
                    done();
                })
                .catch((error) => {
                    done(error);
                });
        });
    });

});
