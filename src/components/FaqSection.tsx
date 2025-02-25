import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqSection() {
  const faqs = [
    {
      question: "O que é Inteligência Artificial Generativa?",
      answer: "A IA Generativa é uma tecnologia que cria textos, imagens, vídeos e outros tipos de conteúdo a partir de dados e comandos fornecidos pelo usuário. Ela tem o potencial de automatizar processos e acelerar a criatividade em diversos setores."
    },
    {
      question: "Como a IA Generativa pode ajudar minha empresa?",
      answer: "A IA pode ser usada para aumentar a produtividade, automatizar tarefas repetitivas, criar conteúdo de marketing, otimizar processos e facilitar a análise de dados, além de impulsionar a inovação no dia a dia."
    },
    {
      question: "Quais setores podem se beneficiar dos workshops?",
      answer: "Os workshops são personalizados e atendem áreas como tecnologia, marketing, criação de conteúdo, atendimento ao cliente e produção. A IA Generativa pode ser aplicada em praticamente qualquer setor."
    },
    {
      question: "Quais tipos de serviços você oferece?",
      answer: "Ofereço palestras, workshops práticos e consultorias personalizadas, ajudando empresas a implementar soluções em IA Generativa e capacitar suas equipes."
    },
    {
      question: "Como posso agendar uma consultoria ou workshop?",
      answer: "Basta entrar em contato através dos meus canais de atendimento ou preencher o formulário na página de agendamento. Vamos conversar e definir a melhor solução para sua empresa!"
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-accent/50">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Perguntas Frequentes</h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card rounded-lg px-6"
              >
                <AccordionTrigger className="text-lg font-semibold py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}