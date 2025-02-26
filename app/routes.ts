import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("employees-list", "routes/currentEmployees.tsx")
    ] satisfies RouteConfig;
