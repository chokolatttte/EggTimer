import HomePage from "./views/HomePage.vue";
import TimerPage from "./views/TimerPage.vue";

export const routes = [
    {path: '/', component: HomePage},
    {path: '/timer/:id', component: TimerPage},
]