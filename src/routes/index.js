import Home from "../page/Home";
import Following from "../page/Following";
import Upload from "../page/Upload";
import Users from "../page/Users";
import Profile from "../page/Profile";
import { HeaderOnly, DefaultLayout } from "../components/Layouts";

// khong can dang nhap
const publicRoutes = [
    { path: "/", component: Home, layout: DefaultLayout },
    { path: "/following", component: Following, layout: DefaultLayout },
    { path: "/users", component: Users, layout: null },
    { path: "/upload", component: Upload, layout: HeaderOnly },
    { path: "/:nickname", component: Profile, layout: HeaderOnly },
];
// can dang nhap
const privateRoutes = [];

export { privateRoutes, publicRoutes };
