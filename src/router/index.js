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
          path: "pass",
          name: "user-pass",
          component: () => import("@/components/users/UserFindPassword.vue"),
        },
        {
          path: "mypage",
          name: "user-mypage",
          component: () => import("@/components/users/UserMyPage.vue"),
          redirect: { name: "user-mypage-crew" },
          children: [
            {
              path: "crew",
              name: "user-mypage-crew",
              component: () =>
                import("@/components/users/UserMyPageMyCrew.vue"),
            },
            {
              path: "info",
              name: "user-mypage-info",
              component: () =>
                import("@/components/users/UserMyPageMyInfo.vue"),
            },
          ],
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
    {
      path: "/review",
      name: "review",
      component: () => import("@/views/TheReviewView.vue"),
      children: [
        {
          path: "list",
          name: "review-list",
          component: () => import("@/components/review/ReviewList.vue"),
        },
        {
          path: "detail/:id",
          name: "review-detail",
          component: () => import("@/components/review/ReviewDetail.vue"),
        },
      ],
    },
  ],
});

export default router;
