import { useEffect } from "react";
import AppRouter from "./components/AppRouter";
import { useAppDispatch } from "./hooks/redux";
import { useToken } from "./hooks/useToken";
import { setToken } from "./store/main/mainSlice";

function App() {
  const localToken = useToken();
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (localToken) dispatch(setToken(localToken));
  }, [localToken]);

  return (
    <div className="w-screen min-h-screen bg-main flex justify-center">
      <div className="w-1/2 mt-44 flex justify-center">
        <AppRouter />
      </div>
    </div>
  );
}

export default App;
