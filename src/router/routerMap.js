import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Test from "../pages/test/Test";
import Error from "../pages/error/Error";

const routerMap = [
    {
        name: "Home",
        component: Home
    },
    {
        name: "About",
        component: About
    },
    {
        name: "Test",
        component: Test
    },
    {
        name: "Error",
        component: Error
    }
];

export default routerMap;
