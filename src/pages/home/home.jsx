import { GrTask } from "react-icons/gr";
import { Link } from "react-router-dom";
import Footer from "../../components/footer";

export default function Home() {
  return (
    <div className="gradient-background min-h-screen flex flex-col text-white px-4 font-unageo">
      <nav className="flex flex-col sm:flex-row sm:justify-between sm:items-center px-2 sm:px-4 py-4 sm:py-6 gap-4 sm:gap-0 text-center sm:text-left">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
          TaskZen
        </h1>
        <ul className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-lg sm:text-lg lg:text-2xl items-center sm:items-start">
          <li className="hover:border-b-2 transition-all ease-in-out duration-75">
            <Link to="/login">Login</Link>
          </li>
          <li className="hover:border-b-2 transition-all ease-in-out duration-75">
            <Link to="/signup">Criar Conta</Link>
          </li>
        </ul>
      </nav>

      <main className="flex-grow flex justify-center items-center px-4 pb-10">
        <div className="bg-teal-700/20 backdrop-blur-3xl rounded-2xl py-8 px-4 sm:px-6 w-full max-w-md sm:max-w-2xl text-center shadow-xl">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Bem-vindo ao TaskZen
          </h2>
          <div>
            <GrTask className="text-6xl sm:text-8xl text-white m-9 mx-auto" />
          </div>
          <p className="text-sm sm:text-base text-teal-200 mb-10">
            O <strong>TaskZen</strong> é uma aplicação web desenvolvida para
            quem busca organização sem complicação. Pensado para ser intuitivo,
            bonito e funcional, ele permite que você crie, visualize e gerencie
            suas tarefas diárias de forma prática e eficiente. Tudo isso em uma
            interface suave, com um toque zen e acolhedor, feita pra te ajudar a
            manter o foco sem estresse.
            <br />
            <br />
            Ideal para estudantes, profissionais ou qualquer pessoa que queira
            ter mais controle sobre o seu dia a dia. Com o TaskZen, suas metas
            deixam de ser sonhos e viram realidade — uma tarefa por vez.
          </p>
        </div>
      </main>

      <section className="flex justify-center items-center px-4 pb-10">
        <div className="bg-teal-700/20 backdrop-blur-3xl rounded-2xl py-8 px-4 sm:px-6 w-full max-w-md sm:max-w-2xl text-center shadow-xl">
          <h3 className="text-3xl sm:text-4xl font-extrabold mb-12">
            Depoimentos
          </h3>

          <p className="text-base sm:text-lg mb-8 italic">
            “O TaskZen transformou minha forma de trabalhar. Agora, sou muito
            mais produtivo e consigo focar no que realmente importa, sem aquela
            sensação de estar perdido nas tarefas.”
            <br />
            <span className="font-semibold">– Usuário Satisfeito</span>
          </p>

          <p className="text-base sm:text-lg mb-8 italic">
            “Finalmente, uma ferramenta que me ajuda a manter o foco e a
            organização. É simples, bonita e funcional — tudo que eu precisava
            para gerenciar meu dia a dia corrido.”
            <br />
            <span className="font-semibold">– Profissional Criativo</span>
          </p>

          <p className="text-base sm:text-lg mb-8 italic">
            “Como estudante, o TaskZen tem sido meu aliado para controlar
            prazos, provas e trabalhos. Recomendo para quem quer deixar o caos
            da rotina para trás.”
            <br />
            <span className="font-semibold">– Estudante Dedicado</span>
          </p>

          <p className="text-base sm:text-lg mb-8 italic">
            “Uso o TaskZen para dividir grandes projetos em pequenas tarefas e
            acompanhar meu progresso diariamente. A interface zen me ajuda a
            manter a calma mesmo nos dias mais corridos.”
            <br />
            <span className="font-semibold">– Gerente de Projetos</span>
          </p>

          <p className="text-base sm:text-lg mb-8 italic">
            “O diferencial do TaskZen é justamente a simplicidade aliada à
            eficiência. Não perco mais tempo tentando entender como funciona —
            começo e já me organizo.”
            <br />
            <span className="font-semibold">– Empreendedor Atarefado</span>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
