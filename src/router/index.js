import { createRouter, createWebHistory } from "vue-router";
import TheMainView from "../views/TheMainView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "main",
      component: TheMainView,
    },
    {
      path: "/user",
      name: "user",
      component: () => import("@/views/TheUserView.vue"),
      children: [
        {
          path: "login",
          name: "user-login",
          component: () => import("@/components/users/UserLogin.vue"),
        },
        {
          path: "join",
          name: "user-join",
          component: () => import("@/components/users/UserRegister.vue"),
        },
        {
          path: "mypage",
          name: "user-mypage",
          component: () => import("@/components/users/UserMyPage.vue"),
        },
        // {
        //   path: "modify/:userid",
        //   name: "user-modify",
        //   component: () => import("@/components/users/UserModify.vue"),
        // },
      ],
    },
    {
      path: "/crew",
      name: "crew",
      children: [
        {
          path: "detail/:crewId",
          name: "crew-detail",
          component: () => import("@/components/crews/CrewPage.vue"),
        },
        {
          path: "plan/:crewId",
          name: "crew-plan",
          component: () => import("@/components/crews/CrewPlanPage.vue"),
          redirect: { name: "crew-plan-info" },
          children: [
            {
              path: "info",
              name: "crew-plan-info",
              component: () =>
                import("@/components/crews/CrewPlanSettingPage.vue"),
            },
            {
              path: "schedule",
              name: "crew-plan-schedule",
              component: () =>
                import("@/components/crews/CrewPlanMakingPage.vue"),
            },
          ],
        },
      ],
    },
    {
      path: "/board",
      name: "board",
      component: () => import("@/views/TheBoardView.vue"),
      children: [
        {
          path: "list",
          name: "board-list",
          component: () => import("@/components/boards/BoardList.vue"),
        },
        {
          path: "write",
          name: "board-write",
          component: () => import("@/components/boards/BoardWrite.vue"),
        },
        {
          path: "detail/:id",
          name: "board-detail",
          component: () => import("@/components/boards/BoardDetail.vue"),
        },
        {
          path: "update/:id",
          name: "board-update",
          component: () => import("@/components/boards/BoardUpdate.vue"),
        },
      ],
    },
  ],
});

export default router;
