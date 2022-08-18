
//import {createRouter, createWebHistory} from "vue-router";
import Home from "../views/Home.vue"
import {createRouter, createWebHistory} from "vue-router/dist/vue-router";
import UserList from "@/components/UserList";
import UserDetails from "@/components/UserDetails";

/** Eager Loading */
const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },

    {
        path: "/users",
        name: "UserList",
        component: UserList
    },

    {
        path: "/users/:userId",
        name: "UserDetails",
        component: UserDetails
    },

    /** Lazy Loading */
    {
        path: "/About",
        name:  "About",

        /** Route level code-splitting*/
        /** This generates a separate chuck (about.[hash].js for this */
        /** which is lazy-loaded when the routes is visited*/
        component: () =>
            import( /* webpackChunkName: "about"*/
            "../views/About.vue"),
    },
];

const router = createRouter({
     history: createWebHistory(process.env.BASE_URL),
     routes,
});

export default  router;