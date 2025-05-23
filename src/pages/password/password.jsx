import { useState } from "react";
import { Link } from "react-router-dom";

export default function Password() {
  const [email, setEmail] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    console.log("Recuperar senha para o email:", email);
  };

  return (
    <div className="gradient-background h-screen flex flex-col text-white">
      <nav className="flex justify-end mt-8 mr-24">
        <ul className="flex gap-8 text-xl">
          <li className="hover:border-b-2 transition-all ease-in-out duration-75">
            <Link to="/screen-login">Login</Link> 
          </li>
          <li className="hover:border-b-2 transition-all ease-in-out duration-75">
            <Link to="/signup">Criar Conta</Link>
          </li>
        </ul>
      </nav>

      <div className="flex-grow flex items-center justify-center">
        <form onSubmit={handleSend} className="text-center max-w-md w-full px-6">
          <h1 className="text-4xl font-light mb-6">Recuperar Senha</h1>
          <p className="mb-8 text-xl">Insira seu email para recuperar sua senha.</p>
          <input
            type="email"
            placeholder="Seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="
              border-b-2 
              text-white 
              text-2xl 
              placeholder-teal-100 
              border-teal-400 
              focus:outline-none 
              focus:border-white 
              focus:placeholder-white
              transition-all 
              ease-in-out 
              duration-200
              w-full
              mb-10
              bg-transparent
            "
          />
          <button
            type="submit"
            className="
              text-lg 
              w-[160px] 
              h-[36px] 
              bg-white 
              text-teal-700 
              rounded-2xl 
              hover:bg-gray-200 
              transition-all 
              ease-in-out 
              duration-250
              mx-auto
              block
            "
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
