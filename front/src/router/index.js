import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Project from "../views/Project.vue";
import CreateIssueComponent from "../components/issues/CreateIssueComponent.vue";
import IndexIssueComponent from "../components/issues/IndexIssueComponent.vue";

let addressIssues = process.env.VUE_APP_ISSUEADDRESS || "localhost";
let portIssues = process.env.VUE_APP_ISSUEPORT || "4000";
let addressTasks = process.env.VUE_APP_TASKADDRESS || "localhost";
let portTasks = process.env.VUE_APP_TASKPORT || "5000";
let addressTests = process.env.VUE_APP_TESTADDRESS || "localhost";
let portTests = process.env.VUE_APP_TESTPORT || "5001";

Vue.use(VueRouter);
Vue.prototype.$proxyIssues = `http://${addressIssues}:${portIssues}`;
Vue.prototype.$proxyTasks = `http://${addressTasks}:${portTasks}`;
Vue.prototype.$proxyTests = `http://${addressTests}:${portTests}`;
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Project/:id",
    name: "Project",
    component: Project,
  },
  {
    name: "createIssue",
    path: "/Project/:id/create-issue",
    component: CreateIssueComponent,
  },
  {
    name: "issues",
    path: "/Project/:id/issues",
    component: IndexIssueComponent,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/tests",
    name: "Test",
    component: () => import("../components/tests/IndexTestComponent.vue"),
  },
  {
    path: "/issuesRaw",
    name: "issuesRaw",
    component: () => import("../components/issues/IndexIssueComponent.vue"),
  },
  {
    path: "/manage-difficulty",
    name: "manage-difficulty",
    component: () => import("../components/issues/DifficultyManagement.vue"),
  },
  {
    path: "/create-issue",
    name: "create-issue",
    component: () => import("../components/issues/CreateIssueComponent.vue"),
  },
  {
    path: "/populate",
    name: "Populate",
    component: () => import("../components/HomeComponent.vue"),
  },
  {
    path: "/tasks",
    name: "tasks",
    component: () => import("../components/tasks/IndexTaskComponent.vue"),
  },
  {
    path: "/tasks/:id",
    name: "task",
    component: () => import("../components/tasks/TaskComponent.vue"),
  },
  {
    path: "/create-task",
    name: "createTask",
    component: () => import("../components/tasks/CreateTaskComponent.vue"),
  },
  {
    path: "/managePriority",
    name: "managePriority",
    component: () => import("../components/issues/PriorityManagement.vue"),
  },
  {
    path: "/sprints",
    name: "sprints",
    component: () => import("../components/sprints/IndexSprintComponent.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
