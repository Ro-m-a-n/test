import "./App.css";
import SignUpPage from "./pages/SignUpPage";
import UserListPage from "./pages/UserListPage";
import WelcomePage from "./pages/WelcomePage";
import { AppProvider } from "./store/appContext";

function App() {
  return (
    <AppProvider>
      <WelcomePage />
      <UserListPage />
      <SignUpPage />
    </AppProvider>
  );
}

export default App;
