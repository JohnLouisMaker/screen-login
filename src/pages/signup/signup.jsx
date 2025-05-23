import { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    console.log("Nome:", name);
    console.log("Email:", email);
    console.log("Senha:", password);

  };

  return (
    <div className="gradient-background h-screen flex flex-col">
      <nav className="flex justify-end mt-8 mr-24">
        <ul className="text-white text-xl">
          <li className="hover:border-b-2 transition-all ease-in-out duration-75">
            <Link to="/screen-login">Já tem conta?</Link>
          </li>
        </ul>
      </nav>

      <h1 className="text-center text-4xl font-light text-white mt-24">
        Criar Conta
      </h1>

      <form onSubmit={handleSignup} className="flex flex-col max-w-md w-full mx-auto mt-30">
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mb-8 border-b-2 text-white text-2xl placeholder-teal-100 border-teal-400 
          focus:outline-none focus:border-white focus:placeholder-white 
          transition-all ease-in-out duration-200"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-8 border-b-2 text-white text-2xl placeholder-teal-100 border-teal-400 
          focus:outline-none focus:border-white focus:placeholder-white 
          transition-all ease-in-out duration-200"
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-10 border-b-2 text-white text-2xl placeholder-teal-100 border-teal-400 
          focus:outline-none focus:border-white focus:placeholder-white 
          transition-all ease-in-out duration-200"
        />
        <button
          type="submit"
          className="mx-auto text-lg w-40 h-9 bg-white text-teal-700 rounded-2xl 
          hover:bg-gray-200 transition-all ease-in-out duration-250"
        >
          Registrar 
        </button>
      </form>
    </div>
  );
}
