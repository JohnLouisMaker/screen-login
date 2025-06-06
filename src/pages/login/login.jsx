import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../components/footer";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setMessage("Preencha todos os campos.");
      return;
    }

    fetch(`http://localhost:3000/users?email=${email}&password=${password}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          setMessage("Login realizado: " + data[0].name);
          navigate("/dashboard");
        } else {
          setMessage("Email ou senha inválidos");
        }
      })
      .catch((error) => {
        console.error("Erro na requisição:", error);
        setMessage("Erro ao tentar fazer login. Tente novamente mais tarde.");
      });
  };

  return (
    <div className="gradient-background min-h-screen flex flex-col text-white px-4 pb-16 font-unageo">
      {/* NAV */}
      <nav className="flex justify-between items-center px-4 py-6">
        <h1 className="text-2xl sm:text-4xl font-bold">
          <Link to="/">TaskZen</Link>
        </h1>
        <ul className="flex gap-4 md:text-2xl text-xl">
          <li className="hover:border-b-2 transition-all duration-100">
            <Link to="/signup">Criar Conta</Link>
          </li>
        </ul>
      </nav>

      {/* FORM */}
      <div className="flex-grow flex justify-center items-center px-2">
        <div className="bg-teal-700/20 backdrop-blur-3xl rounded-2xl py-8 px-6 w-full sm:max-w-md shadow-lg">
          <h2 className="text-3xl text-center mb-10 font-light">
            Login
          </h2>

          <form onSubmit={handleLogin} className="flex flex-col">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mb-6 border-b-2 text-white text-xl placeholder-teal-100 border-teal-400 
              focus:outline-none focus:border-white focus:placeholder-white transition-all duration-200"
            />
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mb-8 border-b-2 text-white text-xl placeholder-teal-100 border-teal-400 
              focus:outline-none focus:border-white focus:placeholder-white transition-all duration-200"
            />
            <button
              type="submit"
              className="w-full sm:w-40 h-10 bg-white text-teal-700 rounded-2xl mx-auto
              hover:bg-gray-200 transition-all duration-200"
            >
              Acessar
            </button>

            {message && (
              <p className="text-center mt-4 text-white text-lg">{message}</p>
            )}

            <div className="text-teal-50 text-sm text-center mt-6">
              <Link
                to="/password"
                className="hover:border-b-2 transition-all duration-100 pb-1 inline-block"
              >
                Esqueceu a senha?
              </Link>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}
