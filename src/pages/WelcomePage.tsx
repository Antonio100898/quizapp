import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="h-5/6 flex flex-col items-center">
      <div>
        <h1 className="text-lg font-semibold text-slate-900">
          Welcome to the quiz application by Anton Mishanin
        </h1>
      </div>
      <div className="mt-64 flex items-center">
        <p className="text-white">To get started click</p> <button className="link" onClick={() => navigate("/gettingstarted")}>here</button>
      </div>
    </div>
  );
};
export default WelcomePage;
