import { Route, Routes } from "react-router-dom";
import { RoutesType } from "../interfaces";
import GettingStartedPage from "../pages/GettingStartedPage";
import WelcomePage from "../pages/WelcomePage";

const AppRouter = () => {
  const routes: RoutesType = [
    {
      path: "",
      component: <WelcomePage />,
    },
    {
      path: "/gettingstarted",
      component: <GettingStartedPage />,
    },
  ];
  return (
    <Routes>
      {routes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={route.component}
        ></Route>
      ))}
    </Routes>
  );
};
export default AppRouter;
