// import Home from "./pages/home/home";
// import NotFound from "./component/404/NotFound";
// import TourExplore from "./pages/tourExplore/tourExplore";
// import Setting from "./pages/settings/setting";
// import MainProfile from "./pages/profile/main";
// import MainTour from "./pages/tour/main";
import Signup from "./pages/signup/Signup.jsx";
import Login from "./pages/login/Login.jsx";
// import StartingPage from "./pages/startingPage/startingPage";
// import ChangeProfile from "./pages/changeProfile/changeProfile";
// import FollowersPage from "./pages/followersPage/followersPage";
// import MainExplore from "./pages/explore/mainExplore";

let routes = [
  // { path: "/", element: <Home /> },
  // { path: "/tourexplore", element: <TourExplore /> },
  // { path: "/setting", element: <Setting /> },
  // { path: "/*", element: <NotFound /> },
  // { path: "/profile", element: <MainProfile /> },
  // { path: "/changeProfile", element: <ChangeProfile /> },
  // { path: "/followers", element: <FollowersPage /> },
  // { path: "/tour", element: <MainTour /> },
  { path: "/signup", element: <Signup /> },
  { path: "/login", element: <Login /> },
  // { path: "/startingPage", element: <StartingPage /> },
  // { path: "/explore", element: <MainExplore /> },
];

export default routes;
