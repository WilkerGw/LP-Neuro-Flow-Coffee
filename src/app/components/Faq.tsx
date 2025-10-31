'use client'; // Diretiva para indicar que este é um Componente de Cliente

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

// Definimos os dados do FAQ aqui para manter o código organizado
const faqData = [
  {
    question: 'O sabor do café é alterado pelos ingredientes?',
    answer: 'Não! Nossa tecnologia de infusão garante que você sinta apenas o sabor complexo e delicioso de um café especial. Os nootrópicos são perfeitamente integrados sem deixar sabor residual.',
  },
  {
    question: 'Posso tomar todos os dias? Tem contra-indicação?',
    answer: 'Sim, ele foi feito para o uso diário para maximizar os benefícios cognitivos. Apenas recomendamos que gestantes ou pessoas com condições médicas específicas consultem um profissional antes do consumo.',
  },
  {
    question: 'Qual o prazo de entrega?',
    answer: 'Para capitais e regiões metropolitanas, o prazo médio é de 3 a 5 dias úteis. Para outras localidades, o prazo é de 5 a 10 dias úteis. Você receberá um código de rastreio assim que o pedido for enviado.',
  },
  {
    question: 'Como funciona a garantia?',
    answer: 'É simples: risco zero para você. Se em 30 dias você não estiver satisfeito com os resultados do NeuroFlow™ Coffee, basta entrar em contato com nosso suporte e nós reembolsaremos 100% do seu dinheiro, sem burocracia.',
  },
];

export default function Faq() {
  // O estado 'openIndex' guarda o índice da pergunta que está aberta.
  // Se for 'null', nenhuma está aberta.
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Função para lidar com o clique em uma pergunta
  const handleToggle = (index: number) => {
    // Se a pergunta clicada já estiver aberta, fechamo-la (definindo o estado como null).
    // Caso contrário, abrimo-la (definindo o estado para o seu índice).
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      {faqData.map((item, index) => (
        <div key={index} className="border-b border-white/20">
          <button
            onClick={() => handleToggle(index)}
            className="w-full flex justify-between items-center text-left py-6"
          >
            <span className="text-lg font-medium">{item.question}</span>
            <ChevronDown
              className={`transform transition-transform duration-300 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>
          {/* O conteúdo da resposta só é mostrado se o 'openIndex' for igual ao índice deste item */}
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              openIndex === index ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'
            }`}
          >
            <p className="text-white/80">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}