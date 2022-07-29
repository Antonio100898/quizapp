import { Route, Routes } from "react-router-dom";
import { RoutesType } from "../interfaces";
import FinishedQuizPage from "../pages/FinishedQuizPage";
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
    },
    {
      path: "/finishedquiz",
      component: <FinishedQuizPage />
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
