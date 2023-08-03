//Pages
import Home from "../page/Home";
import Following from "../page/Following";
import Upload from "../page/Upload";
import Users from "../page/Users";
import Profile from "../page/Profile";
import Explore from "../page/Explore";
import Live from "../page/Live";

//Routes config
import routesConfig from "../configs/routes";

//Layouts
import { HeaderOnly, DefaultLayout } from "../layouts";

// khong can dang nhap
const publicRoutes = [
    { path: routesConfig.home, component: Home, layout: DefaultLayout },
    {
        path: routesConfig.following,
        component: Following,
        layout: DefaultLayout,
    },
    { path: routesConfig.users, component: Users, layout: null },
    { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
    { path: routesConfig.profile, component: Profile, layout: HeaderOnly },
    { path: routesConfig.live, component: Live, layout: DefaultLayout },
    { path: routesConfig.explore, component: Explore, layout: DefaultLayout },
];
// can dang nhap
const privateRoutes = [];

export { privateRoutes, publicRoutes };
