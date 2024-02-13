import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, Login, Register } from "./pages/pages";
import UserDataProvider from "./store/userContext";

function App() {
  return (
    <UserDataProvider>
      <Router>
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/login" exact Component={Login} />
          <Route path="/register" Component={Register} />
        </Routes>
      </Router>
    </UserDataProvider>
  );
}

export default App;
