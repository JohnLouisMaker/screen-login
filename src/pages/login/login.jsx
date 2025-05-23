import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);

  }
  return (
    <div className="gradient-background h-screen flex flex-col">

      <nav className="flex justify-end mt-8 mr-24">
        <ul className="text-white text-xl">
          <li className="hover:border-b-2 transition-all ease-in-out duration-75">
            <Link to="/signup">Criar Conta</Link>
          </li>
        </ul>
      </nav>

  
      <h1 className="text-center text-4xl font-light text-white mt-24">
        Login
      </h1>


      <form onSubmit={handleLogin} className="flex flex-col max-w-md w-full mx-auto mt-30">
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className="mb-8 border-b-2 text-white text-2xl placeholder-teal-100 border-teal-400 
          focus:outline-none focus:border-white focus:placeholder-white 
          transition-all ease-in-out duration-200"
        />
        <input
          type="password"
          placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          className="mb-10 border-b-2 text-white text-2xl placeholder-teal-100 border-teal-400 
          focus:outline-none focus:border-white focus:placeholder-white 
          transition-all ease-in-out duration-200"
        />
        <button
          className="mx-auto text-lg w-40 h-9 bg-white text-teal-700 rounded-2xl 
          hover:bg-gray-200 transition-all ease-in-out duration-250"
        >
          Acessar
        </button>


        <div className="text-teal-50 text-md text-center mt-5">
          <Link
            to="/password"
            className="hover:border-b-2 transition-all ease-in-out duration-75 pb-1 inline-block"
          >
            Esqueceu a senha?
          </Link>
        </div>
      </form>
    </div>
  );
}
