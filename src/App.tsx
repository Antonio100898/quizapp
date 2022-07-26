import AppRouter from "./components/AppRouter";

function App() {
  return (
    <div className="w-screen h-screen bg-indigo-900 flex justify-center">
      <div className="w-1/2 h-screen bg-indigo-800">
        <AppRouter />
      </div>
    </div>
  );
}

export default App;
