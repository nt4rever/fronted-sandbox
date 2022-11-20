import Memo from "./Memo";
import "./App.css";
import { AppProvider } from "./contexts/appContext";

function App() {
  return (
    <div className="container">
      <AppProvider>
        <Memo />
      </AppProvider>
    </div>
  );
}

export default App;
