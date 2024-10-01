import "./App.css";
import { useLogin } from "@privy-io/react-auth";
import { useNavigate } from "react-router-dom";
function App() {
  const navigate = useNavigate();
  const { login } = useLogin({
    onComplete() {
      navigate("/dashboard");
    },
  });
  return (
    <>
      <button onClick={login}>Login</button>
    </>
  );
}

export default App;
