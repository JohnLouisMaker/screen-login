import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../components/footer";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    setMessage("");

    // Validações básicas
    if (!name.trim() || !email.trim() || !password || !confirmPassword) {
      setMessage("Por favor, preencha todos os campos.");
      return;
    }

    if (!email.includes("@")) {
      setMessage("Por favor, insira um email válido.");
      return;
    }

    if (password.length < 6) {
      setMessage("A senha deve ter pelo menos 6 caracteres.");
      return;
    }

    if (password !== confirmPassword) {
      setMessage("As senhas não conferem.");
      return;
    }

    // Requisição POST para o JSON Server
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    })
      .then((response) => {
        if (!response.ok)
          throw new Error("Erro ao criar conta. Tente novamente.");
        return response.json();
      })
      .then((data) => {
        setMessage(`Conta ${data.name} criada com sucesso!`);
        // Limpa os campos
        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        // Navega para o dashboard
        navigate("/dashboard");
      })
      .catch((error) => {
        setMessage(error.message);
      });
  };

  return (
    <div className="gradient-background min-h-screen flex flex-col text-white px-4 pb-16 font-unageo">
      <nav className="flex justify-between px-4 py-6">
        <h1 className="text-2xl sm:text-4xl lg:text-4xl font-bold">
          <Link to="/">TaskZen</Link>
        </h1>
        <ul className="flex gap-4 text-xl lg:text-2xl">
          <li className="hover:border-b-2 transition-all ease-in-out duration-75">
            <Link to="/login">Já tem conta?</Link>
          </li>
        </ul>
      </nav>

      <div className="mb-6"></div>

      <div className="flex-grow flex justify-center items-center px-2">
        <div className="bg-teal-700/20 backdrop-blur-3xl rounded-2xl py-8 px-6 w-full sm:max-w-md shadow-lg">
          <h2 className="text-2xl sm:text-3xl text-center mb-10 font-light">
            Criar Conta
          </h2>

          <form onSubmit={handleSignup} className="flex flex-col w-full">
            <input
              type="text"
              placeholder="Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mb-6 border-b-2 text-white text-xl placeholder-teal-100 border-teal-400
              focus:outline-none focus:border-white focus:placeholder-white
              transition-all ease-in-out duration-200"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mb-6 border-b-2 text-white text-xl placeholder-teal-100 border-teal-400
              focus:outline-none focus:border-white focus:placeholder-white
              transition-all ease-in-out duration-200"
            />
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mb-6 border-b-2 text-white text-xl placeholder-teal-100 border-teal-400
              focus:outline-none focus:border-white focus:placeholder-white
              transition-all ease-in-out duration-200"
            />
            <input
              type="password"
              placeholder="Confirmar Senha"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="mb-8 border-b-2 text-white text-xl placeholder-teal-100 border-teal-400
              focus:outline-none focus:border-white focus:placeholder-white
              transition-all ease-in-out duration-200"
            />
            <button
              type="submit"
              className="w-full sm:w-40 h-10 bg-white text-teal-700 rounded-2xl mx-auto
              hover:bg-gray-200 transition-all ease-in-out duration-250"
            >
              Registrar
            </button>

            {message && (
              <p className="text-center mt-6 text-white font-semibold">
                {message}
              </p>
            )}
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
