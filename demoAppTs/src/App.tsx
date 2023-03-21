import Builder from "./components/Builder";
import ThemeProvider from "./contexts/ThemeContext";
import AppLayout from "./layouts/AppLayout";

function App() {
  return (
    <ThemeProvider>
      <AppLayout>
        <Builder />
      </AppLayout>
    </ThemeProvider>
  );
}

export default App;
