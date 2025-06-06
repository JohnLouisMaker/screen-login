import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/footer";

export default function Task() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");
  const [tasks, setTasks] = useState([]);

  // 🔄 Carrega do localStorage ao iniciar
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks) setTasks(savedTasks);
  }, []);

  // 💾 Salva sempre que as tarefas mudarem
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

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
      completed: false,
    };

    setTasks((prevTasks) => [newTask, ...prevTasks]);
    setTitle("");
    setDescription("");
    setMessage("");
  };

  const toggleComplete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  return (
    <div className="gradient-background min-h-screen flex flex-col text-white px-4">
      <nav className="flex flex-wrap justify-between items-center gap-4 px-4 py-6">
        <h1 className="text-2xl sm:text-3xl font-semibold text-white">
          <Link to="/screen-login/dashboard">TaskZen</Link>
        </h1>
      
      </nav>

      <main className="flex-grow flex flex-col items-center px-2 pb-16">
        <div className="bg-teal-700/20 backdrop-blur-3xl rounded-2xl py-6 px-6 w-full sm:max-w-md shadow-lg mb-10">
          <div className="flex justify-center text-center mb-8">
            <p className="text-base sm:text-lg text-teal-100">
              Gerencie suas tarefas com foco e leveza.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col w-full">
            <input
              type="text"
              placeholder="Título da tarefa"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mb-4 border-b-2 text-white text-xl placeholder-teal-100 border-teal-400 
              focus:outline-none focus:border-white focus:placeholder-white 
              transition-all ease-in-out duration-200"
            />
            <textarea
              placeholder="Descrição da tarefa"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              className="mb-6 border-b-2 text-white text-lg placeholder-teal-100 border-teal-400 
              focus:outline-none focus:border-white focus:placeholder-white 
              transition-all ease-in-out duration-200 resize-none"
            />
            <button
              type="submit"
              className="w-full sm:w-40 h-10 bg-white text-teal-700 rounded-2xl mx-auto
              hover:bg-gray-200 transition-all ease-in-out duration-250"
            >
              Criar Tarefa
            </button>

            {message && (
              <p className="text-center mt-4 text-white text-sm">{message}</p>
            )}
          </form>
        </div>

        {/* LISTA DE TAREFAS */}
        <div className="w-full max-w-3xl bg-teal-800 bg-opacity-30 backdrop-blur-xl rounded-xl p-6">
          {tasks.length === 0 ? (
            <p className="text-center text-teal-200">Nenhuma tarefa criada ainda.</p>
          ) : (
            <ul className="space-y-4">
              {tasks.map((task, index) => (
                <li
                  key={task.id}
                  className="flex items-start gap-4 border-b border-teal-700 pb-4 last:border-b-0"
                >
                  <input
                    type="checkbox"
                    id={`task-${task.id}`}
                    checked={task.completed}
                    onChange={() => toggleComplete(index)}
                    className="accent-teal-400 w-5 h-5 mt-1"
                  />
                  <div className="flex flex-col">
                    <label
                      htmlFor={`task-${task.id}`}
                      className={`text-lg sm:text-xl font-medium cursor-pointer ${
                        task.completed
                          ? "line-through text-teal-400 opacity-60"
                          : "text-white"
                      }`}
                    >
                      {task.title}
                    </label>
                    <p
                      className={`text-sm sm:text-base mt-1 ${
                        task.completed
                          ? "line-through text-teal-300 opacity-60"
                          : "text-teal-100"
                      }`}
                    >
                      {task.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
