import HomePage from "./views/HomePage.vue";
import OeufDur from "./views/oeuf/OeufDur.vue";
import OeufMollet from "./views/oeuf/OeufMollet.vue";
import OeufCoque from "./views/oeuf/OeufCoque.vue";
import OeufPlat from "./views/oeuf/OeufPlat.vue";

export const routes = [
    {path: '/', component: HomePage},
    {path: '/oeuf/dur', component: OeufDur},
    {path: '/oeuf/mollet', component: OeufMollet},
    {path: '/oeuf/coque', component: OeufCoque},
    {path: '/oeuf/plat', component: OeufPlat}
]