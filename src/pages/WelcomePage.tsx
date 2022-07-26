import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
    const navigate = useNavigate()
    return (
        <div className="w-screen h-screen">Welcome user!
        <button onClick={() => navigate("/gettingstarted")}>Get started!</button>
        </div>
    )
}
export default WelcomePage;