import AdminHomePage from "../containers/AdminHomePage";
import LoginPage from "../containers/LoginPage";
import SignUpPage from "../containers/SignUpPage";
import TaskBoard from "../containers/taskboard";

export const API_ENDPOINT = "http://localhost:3000";

export const STATUS = [
  {
    value: 0,
    label: "READY",
  },
  {
    value: 1,
    label: "IN PROGRESS",
  },
  {
    value: 2,
    label: "COMPLETED",
  },
];

export const STATUS_CODE = {
  SUCCESS: 200,
  CREATED: 201,
  ERROR: 500,
};

export const ADMIN_ROUTES = [
  {
    path: "/admin",
    name: "home",
    exact: true,
    component: AdminHomePage,
  },
  {
    path: "/admin/task-board",
    name: "Task Board",
    exact: true,
    component: TaskBoard,
  },
];

export const ROUTES = [
  {
    path: "/login",
    name: "Login",
    component: LoginPage,
  },
  {
    path: "/",
    exact : true,
    name: "Login",
    component: LoginPage,
  },
  {
    path: "/signup",
    name: "Sign Up",
    component: SignUpPage,
  },
];
