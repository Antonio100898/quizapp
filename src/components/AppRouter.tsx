import { Route, Routes } from "react-router-dom";
import { RoutesType } from "../interfaces";
import GettingStartedPage from "../pages/GettingStartedPage";
import WelcomePage from "../pages/WelcomePage";
import Quizz from "./Quizz";

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
    {
      path: "/quiz",
      component: <Quizz/>
    }
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
