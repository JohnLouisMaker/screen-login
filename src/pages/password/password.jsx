import { useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import Footer from "../../components/footer";

export default function Password() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSend = async (e) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      setMessage("Por favor, insira um email válido.");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:3000/users?email=${email}`
      );
      if (!response.ok) {
        throw new Error("Erro na requisição ao servidor.");
      }

      const data = await response.json();

      if (data.length === 0) {
        setMessage("Esse email não está cadastrado no sistema.");
        return;
      }

    
      const templateParams = {
        user_email: email,
      };

      await emailjs.send(
        "service_uvqeq5v",
        "template_il5k4q9",
        templateParams,
        "eGw_luQTGWRPSXTDW"
      );

      setMessage(
        "Email de recuperação enviado com sucesso! Verifique sua caixa de entrada."
      );
    } catch (error) {
      console.error(error);
      setMessage("Erro ao enviar email. Tente novamente mais tarde.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-unageo gradient-background text-white px-4">

      <nav className="flex flex-wrap justify-end items-center gap-4 px-4 py-6">

        <ul className="flex gap-4 text-xl md:text-2xl">
          <li className="hover:border-b-2 transition-all ease-in-out duration-75">
            <Link to="/login">Login</Link>
          </li>
          <li className="hover:border-b-2 transition-all ease-in-out duration-75">
            <Link to="/signup">Criar Conta</Link>
          </li>
        </ul>
      </nav>


      <main className="flex-grow flex justify-center items-center px-2">
        <div className="bg-teal-700/20 backdrop-blur-3xl rounded-2xl py-8 px-6 w-full sm:max-w-md shadow-lg">
          <h1 className="text-2xl sm:text-3xl text-center mb-6 font-light">
            Recuperar Senha
          </h1>
          <p className="mb-8 text-center text-lg sm:text-xl">
            Insira seu email para recuperar sua senha.
          </p>
          <form onSubmit={handleSend} className="flex flex-col w-full">
            <input
              type="email"
              placeholder="Seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mb-10 border-b-2 text-white text-xl placeholder-teal-100 border-teal-400 
              focus:outline-none focus:border-white focus:placeholder-white 
              transition-all ease-in-out duration-200 bg-transparent"
            />
            <button
              type="submit"
              className="w-full sm:w-40 h-10 bg-white text-teal-700 rounded-2xl mx-auto
              hover:bg-gray-200 transition-all ease-in-out duration-250"
            >
              Enviar
            </button>

            {message && (
              <p className="text-center mt-4 text-white md:text-lg transform">
                {message}
              </p>
            )}
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}
