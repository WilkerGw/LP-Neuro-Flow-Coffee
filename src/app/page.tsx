import {
  BrainCircuit,
  Battery,
  Annoyed,
  CheckCircle,
  BadgeCheck,
  Mail,
  Linkedin,
  Instagram,
} from "lucide-react";
import Image from "next/image";
import Faq from "./components/Faq";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 overflow-x-hidden">
      <div className="w-full max-w-6xl mx-auto">
        {/* Seção 1: Dobra Principal (Above the Fold) */}
        <section className="text-center py-10 sm:py-10">
          <h1 className="text-2xl sm:text-4xl font-extrabold leading-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
            Pare de lutar contra a névoa mental. <br /> Alcance o foco profundo
            que seu cérebro merece.
          </h1>
          <p className="max-w-3xl mx-auto text-md sm:text-md text-white/80 mb-8">
            Apresentando NeuroFlow&trade; Coffee: o café especial que une o sabor
            que você ama com a clareza mental que você precisa. Energia limpa,
            sem ansiedade e sem o &quot;crash&quot; da tarde.
          </p>
          {/* Elemento Visual - Placeholder para imagem ou vídeo */}
          <div className="w-full max-w-4xl h-96 mx-auto bg-gray-800/50 rounded-2xl mb-8 flex items-center justify-center border border-white/10">
            <video
              src="/videos/coffee-video.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover rounded-2xl"
            >
              O seu navegador não suporta a tag de vídeo.
            </video>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold cursor-pointer py-4 px-10 rounded-full transition-transform transform hover:scale-105 shadow-lg shadow-blue-600/20">
            QUERO MEU CAFÉ COM FOCO TOTAL
          </button>
          <p className="mt-4 text-sm text-white/60">
            Oferta de Lançamento + Frete Grátis por tempo limitado.
          </p>
        </section>

        {/* Seção 2: O Problema (Conexão com a Dor) */}
        <section className="py-24">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Seu dia parece uma batalha pela concentração?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card de Vidro */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-lg text-center">
              <BrainCircuit size={48} className="mx-auto mb-4 text-blue-400" />
              <h3 className="text-xl font-semibold mb-2">Névoa Mental</h3>
              <p className="text-white/70">
                Dificuldade para organizar ideias e começar tarefas importantes.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-lg text-center">
              <Battery size={48} className="mx-auto mb-4 text-yellow-400" />
              <h3 className="text-xl font-semibold mb-2">Picos e Quedas</h3>
              <p className="text-white/70">
                Aquele pico de energia do café que sempre termina em cansaço e
                irritabilidade à tarde.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-lg text-center">
              <Annoyed size={48} className="mx-auto mb-4 text-red-400" />
              <h3 className="text-xl font-semibold mb-2">Foco Interrompido</h3>
              <p className="text-white/70">
                A luta constante contra notificações, e-mails e a vontade de
                procrastinar.
              </p>
            </div>
          </div>
        </section>

        {/* Seção 3: A Solução (Apresentação do Herói) */}
        <section className="py-24 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              O ritual que sua mente estava esperando.
            </h2>
            <p className="text-lg text-white/80 mb-4">
              NeuroFlow&trade; Coffee não é apenas mais um café. É uma fusão
              cientificamente embasada entre grãos 100% arábica de origem única
              e os nootrópicos naturais mais potentes.
            </p>
            <p className="text-lg text-white/80">
              A L-teanina promove um estado de calma e alerta, enquanto o Lion&apos;s
              Mane potencializa a cognição e a memória. O resultado? Uma
              experiência de café superior que eleva sua mente.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <div className="relative w-full h-80 bg-gray-800/50 rounded-2xl flex items-center justify-center border border-white/10 overflow-hidden">
              <Image
                src="/images/coffee-image.png"
                alt="Hero"
                fill // **1. Propriedade 'fill' para preencher o pai**
                className="object-cover" // **2. Classe 'object-cover' para cobrir o espaço sem distorção**
                sizes="(max-width: 768px) 100vw, 50vw" // **3. Opcional, mas recomendado para performance com 'fill'**
              />
            </div>
          </div>
        </section>

        {/* Seção 4: Como Funciona (Simplificando a Ciência) */}
        <section className="py-24 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">
            Três passos para uma mente em alta performance.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-600/20 text-blue-300 rounded-full flex items-center justify-center text-2xl font-bold mb-4 border border-blue-500">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">O Sabor Premium</h3>
              <p className="text-white/70">
                Você prepara seu café como sempre amou. O aroma e o sabor de um
                café especial de alta pontuação iniciam seu ritual.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-600/20 text-blue-300 rounded-full flex items-center justify-center text-2xl font-bold mb-4 border border-blue-500">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">
                A Sinergia Nootrópica
              </h3>
              <p className="text-white/70">
                Enquanto a cafeína fornece energia, a L-teanina suaviza os
                efeitos. O Lion&apos;s Mane começa a nutrir seus neurônios.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-600/20 text-blue-300 rounded-full flex items-center justify-center text-2xl font-bold mb-4 border border-blue-500">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">O Estado de &quot;Flow&quot;</h3>
              <p className="text-white/70">
                Em minutos, você sente uma clareza mental diferente. Um foco
                calmo e sustentado que dura por horas.
              </p>
            </div>
          </div>
        </section>

        {/* Seção 5: Prova Social (Gerando Confiança) */}
        <section className="py-24">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Não acredite apenas em nós. <br /> Veja quem já destravou o seu
            potencial.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-lg">
              <p className="text-lg text-white/90 mb-4">
                &quot;Como programador, o NeuroFlow virou uma arma secreta. O código
                flui sem esforço e o bug da tarde simplesmente sumiu.&quot;
              </p>
              <div className="flex items-center">
                <div className="relative w-12 h-12 rounded-full bg-gray-600 mr-4 overflow-hidden">
                  <Image
                    src="/images/Rafael.png"
                    alt="Rafael"
                    fill
                    className="object-cover"
                  ></Image>
                </div>
                <div>
                  <p className="font-semibold">Rafael M.</p>
                  <p className="text-sm text-white/60">Desenvolvedor Sênior</p>
                </div>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-lg">
              <p className="text-lg text-white/90 mb-4">
                &quot;Eu precisava de criatividade e foco para meus projetos. Esse
                café entrega exatamente isso, sem me deixar ansiosa. O sabor é
                incrível!&quot;
              </p>
              <div className="flex items-center">
                <div className="relative w-12 h-12 rounded-full bg-gray-600 mr-4 overflow-hidden">
                  <Image
                    src="/images/Juliana.png"
                    alt="Rafael"
                    fill
                    className="object-cover w-full h-full"
                  ></Image>
                </div>
                <div>
                  <p className="font-semibold">Juliana P.</p>
                  <p className="text-sm text-white/60">Arquiteta</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center gap-8 sm:gap-16 mt-12 text-white/60">
            <p className="font-semibold text-lg">
              Destaque na{" "}
              <span className="font-bold text-white/80">Café Tech</span>
            </p>
            <p className="font-semibold text-lg">
              Aprovado por{" "}
              <span className="font-bold text-white/80">Biohacker Brasil</span>
            </p>
          </div>
        </section>

        {/* Seção 6: A Oferta */}
        <section id="oferta" className="py-24">
          <div className="bg-gradient-to-br from-gray-900 via-gray-900 to-blue-900/30 border border-white/10 rounded-3xl p-8 sm:p-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Peça hoje e transforme sua rotina mental.
            </h2>
            <p className="text-lg text-white/70 mb-8">
              Aproveite a oferta de lançamento por tempo limitado.
            </p>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
              <div className="relative w-full h-90 bg-gray-800/50 rounded-2xl flex items-center justify-center border border-white/10 overflow-hidden">
                <Image
                  src="/images/coffee-250.png"
                  alt="Café NeuroFlow"
                  fill // **1. Propriedade 'fill' para preencher o pai**
                  className="object-cover" // **2. Classe 'object-cover' para cobrir o espaço sem distorção**
                  sizes="(max-width: 768px) 100vw, 50vw" // **3. Opcional, mas recomendado para performance com 'fill'**
                />
              </div>
              <div className="text-left">
                <h3 className="text-xl font-semibold mb-4">O que você leva:</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="text-green-400 mr-3" /> 1 Pacote de
                    NeuroFlow&trade; Coffee (250g).
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-green-400 mr-3" />{" "}
                    <span className="font-bold">BÔNUS #1:</span> E-book &quot;O Guia
                    do Foco Profundo&quot;.
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-green-400 mr-3" />{" "}
                    <span className="font-bold">BÔNUS #2:</span> Acesso à nossa
                    playlist exclusiva para concentração.
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-green-400 mr-3" />{" "}
                    <span className="font-bold">FRETE GRÁTIS</span> para todo o
                    Brasil.
                  </li>
                </ul>
              </div>
            </div>
            <div className="my-8">
              <p className="text-lg text-white/70">
                De: <span className="line-through">R$ 129,90</span>
              </p>
              <p className="text-2xl sm:text-4xl font-extrabold text-blue-400">
                Por apenas: R$ 89,90
              </p>
              <p className="text-white/80">ou 9x de R$ 9,99</p>
            </div>
            <button className="bg-green-600 hover:bg-green-700 text-white font-bold text-xl py-5 px-12 rounded-full transition-transform transform hover:scale-105 shadow-lg shadow-green-600/20">
              SIM, QUERO GARANTIR MEU NEUROFLOW AGORA!
            </button>
            <div className="mt-8 flex justify-center items-center gap-4 bg-white/5 border border-white/10 rounded-xl p-4 max-w-lg mx-auto backdrop-blur-lg">
              <BadgeCheck size={40} className="text-blue-400" />
              <div>
                <h4 className="font-bold">
                  Sua Satisfação ou seu Dinheiro de Volta.
                </h4>
                <p className="text-sm text-white/70">
                  Teste por 30 dias. Se não sentir uma melhora notável,
                  devolvemos 100% do seu investimento. Risco zero.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Seção 7: FAQ */}
        <section className="py-24">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Perguntas Frequentes
          </h2>
          <Faq />
        </section>

        {/* Seção 8: Footer (Rodapé) */}
        <footer className="py-12 border-t border-white/10 text-center text-white/60">
          <h3 className="text-2xl font-bold mb-2">NeuroFlow&trade;</h3>
          <p className="mb-6">Seu café, sua mente. Em perfeita sintonia.</p>
          <div className="flex justify-center gap-6 mb-8">
            <a href="#" className="hover:text-white">
              <Mail />
            </a>
            <a href="#" className="hover:text-white">
              <Linkedin />
            </a>
            <a href="#" className="hover:text-white">
              <Instagram />
            </a>
          </div>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} NeuroFlow Coffee. Todos os direitos
            reservados.
          </p>
          <p className="text-sm">CNPJ: 00.000.000/0001-00</p>
          <div className="mt-4 text-sm">
            <a href="#" className="hover:text-white underline">
              Política de Privacidade
            </a>
            <span className="mx-2">|</span>
            <a href="#" className="hover:text-white underline">
              Termos de Uso
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}