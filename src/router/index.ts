import { createWebHistory, createRouter } from "vue-router";

import HomeView from "../views/HomeView.vue";
import OnboardingView from "../views/OnboardingView.vue";
import SignUp from "../components/SignUp.vue";
import Login from "../components/Login.vue";
import { auth } from "../services/firebase";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: { requiresAuth: true },
  },
  {
    path: "/onboarding",
    name: "onboarding",
    component: OnboardingView,
    children: [
      { path: "signup", name: "signup", component: SignUp },
      { path: "login", name: "login", component: Login },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Navigation guard to check if user is authenticated before accessing routes
// router.beforeEach((to: RouteLocationNormalized, from: RouteLocationNormalizedLoaded, next: NavigationGuardNext) => {
//   const requiresAuth = to.matched.some((record: RouteRecordNormalized) => record.meta.requiresAuth);
//   if (requiresAuth) {
//     auth.onAuthStateChanged((user) => {
//       if (user) {
//         next(); // Proceed to the requested route if user is authenticated
//       } else {
//         next("/onboarding/login"); // Redirect to login route if user is not authenticated
//       }
//     });
//   } else {
//     next(); // Proceed to the requested route (no authentication required)
//   }
// });

export default router;
