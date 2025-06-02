import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/footer";

export default function Task() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !description) {
      setMessage("Por favor, preencha todos os campos!");
      return;
    }

    const newTask = {
      id: Date.now(),
      title,
      description,
    };

    setTasks((prevTasks) => [newTask, ...prevTasks]);
    setMessage("Tarefa criada com sucesso!");
    setTitle("");
    setDescription("");
  };

  return (
    <div className="gradient-background min-h-screen flex flex-col text-white px-4">
      <nav className="flex flex-wrap justify-between items-center gap-4 px-4 py-6">
        <h1 className="text-2xl sm:text-3xl font-semibold text-white">
          <Link to="/dashboard">TaskZen</Link>
        </h1>
        <ul className="flex gap-4 sm:text-lg lg:text-2xl">
          <li className="hover:border-b-2 transition-all ease-in-out duration-75">
            <Link to="/login">Login</Link>
          </li>
          <li className="hover:border-b-2 transition-all ease-in-out duration-75">
            <Link to="/signup">Criar Conta</Link>
          </li>
        </ul>
      </nav>

      {/* Conteúdo que vai crescer e empurrar o footer */}
      <main className="flex-grow flex justify-center items-center px-2 pb-16">
        <div className="bg-teal-700/20 backdrop-blur-3xl rounded-2xl py-6 px-6 w-full sm:max-w-md shadow-lg">
          <div className="flex justify-center text-center mb-12">
            <p className="text-base sm:text-lg text-teal-100">
              Gerencie seus contatos de forma simples, rápida e segura. Tudo
              isso com um toque de tranquilidade e organização.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col w-full">
            <input
              type="text"
              placeholder="Título da tarefa"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mb-6 border-b-2 text-white text-xl placeholder-teal-100 border-teal-400 
              focus:outline-none focus:border-white focus:placeholder-white 
              transition-all ease-in-out duration-200"
            />
            <textarea
              placeholder="Descrição da tarefa"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              className="mb-8 border-b-2 text-white text-lg placeholder-teal-100 border-teal-400 
              focus:outline-none focus:border-white focus:placeholder-white 
              transition-all ease-in-out duration-200 resize-none"
            />
            <button
              type="submit"
              className="w-full sm:w-40 h-10 bg-white text-teal-700 rounded-2xl mx-auto
              hover:bg-gray-200 transition-all ease-in-out duration-250"
            >
              Acessar
            </button>

            {message && (
              <p className="text-center mt-4 text-green-400 text-sm">{message}</p>
            )}
          </form>

          <div className="w-full mt-12">
            {tasks.length === 0 ? (
              <p className="text-center text-teal-200">
                Nenhuma tarefa criada ainda.
              </p>
            ) : (
              tasks.map((task) => (
                <div
                  key={task.id}
                  className="bg-teal-800 bg-opacity-50 rounded-md p-4 mb-4"
                >
                  <h2 className="text-lg sm:text-2xl font-semibold">{task.title}</h2>
                  <p className="mt-1 text-teal-200 text-sm sm:text-base">
                    {task.description}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
