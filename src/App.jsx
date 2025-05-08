import { div } from "framer-motion/m";
import "../src/app.css";

export default function CardLogin() {
  return (
    <div>
      <div className="gradient-background h-screen flex flex-col">
        <nav className="flex justify-end" style={{ margin: "2em 6em 0em 0em" }}>
          <ul className="text-white text-xl">
            <li className=" hover:border-b-2 transition-all ease-in-out duration-75">
              <a href="">Criar Conta</a>
            </li>
          </ul>
        </nav>
        <h1
          className="text-center text-4xl font-light text-white"
          style={{ margin: "3em 0em 0px 0em" }}
        >
          Login
        </h1>
        <form
          className="flex flex-col max-w-md w-full"
          style={{ margin: "auto" }}
        >
          <input
            type="email"
            placeholder="Email"
            className="border-b-2 text-white text-2xl placeholder-teal-100 border-teal-400 
          focus:outline-none 
          focus:border-white
          focus:placeholder-white
          transition-all ease-in-out duration-200"
            style={{ marginBottom: "30px" }}
          />
          <input
            type="password"
            placeholder="Senha"
            className="border-b-2 text-white text-2xl placeholder-teal-100 border-teal-400 
          focus:outline-none 
          focus:border-white
          focus:placeholder-white
          transition-all ease-in-out duration-200"
            style={{ marginBottom: "40px" }}
          />
          <button
            className=" text-lg w-[160px] h-[36px] bg-white text-teal-700 rounded-2xl hover:bg-gray-200 transition-all ease-in-out duration-250"
            style={{ margin: "auto" }}
          >
            Acessar
          </button>
          <div
            className="text-teal-50 text-md  text-center"
            style={{ marginTop: "20px" }}
          >
            <a
              href=""
              className="hover:border-b-2 transition-all ease-in-out duration-75"
              style={{ paddingBottom: "5px" }}
            >
              Esqueceu a senha?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
