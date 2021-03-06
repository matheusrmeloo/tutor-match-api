import * as auth from "./modules/auth";
import * as student from "./modules/student";
import * as tasks from "./modules/tasks";
import * as teacher from "./modules/teacher";
import * as users from "./modules/users";

/**
 * Here are declared the main routes and their related modules.
 * In each of these modules are declared their sub routes, handlers and which middlewares they use.
 */
export const modules = [
    {
        path: "/auth",
        component: auth,
    },
    {
        path: "/tasks",
        component: tasks,
    },
    {
        path: "/users",
        component: users,
    },
    {
        path: "/teacher",
        component: teacher,
    },
    {
        path: "/student",
        component: student,
    },
];
