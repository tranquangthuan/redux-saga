import AdminHomePage from "../containers/AdminHomePage";
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
    path: "/",
    name: "home",
    exact: true,
    component: AdminHomePage,
  },
  {
    path: "/task-board",
    name: "Task Board",
    exact: true,
    component: TaskBoard,
  },
];
