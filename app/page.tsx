"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  MessageSquare,
  ArrowRight,
  ShieldCheck,
  Box,
  Compass,
  Sparkles,
  ChevronDown,
  Star,
  CheckCircle2,
  MapPin,
  Clock,
  Calculator,
  Send,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const PROJECTS = [
  {
    title: "Cozinha Gourmet Minimalista",
    desc: "Ilha central, armários suspensos com LED embutido e gaveteiros com amortecimento suave para um toque premium no dia a dia.",
    tag: "Cozinhas",
    specs: ["Ilha Central", "LED 3000K Warm", "Ferragens Blum"],
    img: "/cozinha.png",
  },
  {
    title: "Closet Suíte Master Glass",
    desc: "Organização elegante com divisórias em alumínio, vidro reflecta e iluminação de destaque para um ambiente sofisticado e funcional.",
    tag: "Closets",
    specs: ["Espaçoso", "Sensor de Presença", "Nobre Wood"],
    img: "/closet.jpg",
  },
  {
    title: "Home Office Executive Wood",
    desc: "Painel com prateleiras embutidas e passagem de fiação oculta para um espaço de trabalho moderno, elegante e produtivo.",
    tag: "Home Office",
    specs: ["Painel Com Prateleiras", "Prateleiras Embutidas", "LED"],
    img: "/home.png",
  },
];

const AMBIENTES_SHOWCASE = [
  {
    title: "Cozinhas Sob Medida",
    desc: "Aproveitamento inteligente de espaço com ilhas, torres e soluções que unem beleza e praticidade.",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800",
  },
  {
    title: "Dormitórios & Suítes",
    desc: "Cabeceiras, armários e organização pensados para o conforto e a sensação de luxo no cotidiano.",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=800",
  },
  {
    title: "Closets de Alto Padrão",
    desc: "Divisórias sob medida, iluminação interna e detalhes premium para valorizar cada centímetro.",
    image: "/closet2.jpeg",
  },
  {
    title: "Home Office Executivo",
    desc: "Projetos ergonomicamente pensados para produtividade sem perder o estilo do ambiente.",
    image: "/home.jpeg",
  },
];

const DIFFERENTIALS = [
  {
    icon: Compass,
    title: "Projeto 3D Realista",
    desc: "Visualize cada detalhe do ambiente antes da produção, com clareza de materiais, iluminação e proporção.",
  },
  {
    icon: Box,
    title: "MDF Premium",
    desc: "Chapas de alta densidade com acabamento refinado, resistência e durabilidade para uso diário.",
  },
  {
    icon: ShieldCheck,
    title: "Garantia de 5 Anos",
    desc: "Suporte técnico e cobertura completa para marcenaria, ferragens e componentes de alto padrão.",
  },
  {
    icon: Sparkles,
    title: "Montagem Especializada",
    desc: "Equipe técnica cuidando de cada etapa para uma instalação impecável, limpa e dentro do prazo.",
  },
];

const STEPS = [
  {
    icon: MapPin,
    title: "Briefing & Medição",
    desc: "Entendemos seu estilo, suas necessidades e mensuramos o espaço com precisão técnica.",
  },
  {
    icon: Compass,
    title: "Projeto 3D Exclusivo",
    desc: "Criamos um layout visual alinhado ao seu gosto, com materiais, organização e iluminação ideal.",
  },
  {
    icon: Clock,
    title: "Fabricação Computadorizada",
    desc: "Corte automatizado de alta precisão para um encaixe perfeito em cada peça produzida.",
  },
  {
    icon: CheckCircle2,
    title: "Entrega & Montagem",
    desc: "Instalação cuidadosa com acabamento final e rigoroso controle de qualidade.",
  },
];

const TESTIMONIALS = [
  {
    name: "Mariana & Carlos",
    role: "Cozinha e Sala Integrada",
    text: "O resultado ficou muito além do que imaginávamos. A iluminação, os acabamentos e a funcionalidade entregaram exatamente o que a casa precisava.",
  },
  {
    name: "Dr. Roberto Mendes",
    role: "Consultório & Home Office",
    text: "Atendimento impecável, projeto muito bem pensado e execução de alto nível. O ambiente ficou profissional, elegante e altamente funcional.",
  },
  {
    name: "Fernanda Lima",
    role: "Closet Suíte Master",
    text: "Meu closet ficou sofisticado e incrivelmente organizado. O projeto combinou estética, praticidade e detalhes que fazem toda a diferença.",
  },
];

const FAQS = [
  {
    question: "Qual é o prazo médio de entrega dos móveis?",
    answer: "O prazo médio varia entre 30 e 45 dias úteis após a aprovação do projeto 3D e da proposta final.",
  },
  {
    question: "Vocês cobram para fazer a visita técnica ou o projeto 3D?",
    answer: "A medição inicial e a primeira versão do projeto 3D são realizadas gratuitamente, sem compromisso.",
  },
  {
    question: "Quais são as formas de pagamento disponíveis?",
    answer: "Oferecemos parcelamento em cartão, boleto bancário e condições especiais para pagamento à vista.",
  },
  {
    question: "Como funciona a garantia dos móveis e ferragens?",
    answer: "A garantia cobre defeitos de fabricação na estrutura e nos componentes, com suporte técnico e acompanhamento pós-venda.",
  },
];

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinnedSectionRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeProject, setActiveProject] = useState(0);

  const [selectedAmbientes, setSelectedAmbientes] = useState<string[]>(["Cozinha"]);
  const [acabamento, setAcabamento] = useState("Premium (MDF + LED)");

  const toggleAmbiente = (amb: string) => {
    if (selectedAmbientes.includes(amb)) {
      if (selectedAmbientes.length > 1) {
        setSelectedAmbientes(selectedAmbientes.filter((item) => item !== amb));
      }
    } else {
      setSelectedAmbientes([...selectedAmbientes, amb]);
    }
  };

  const generateWhatsappUrl = () => {
    const text = `Olá! Fiz uma simulação de pré-orçamento pelo site da Traços Planejados:%0A%0A*Ambientes selecionados:* ${selectedAmbientes.join(", ")}%0A*Acabamento:* ${acabamento}%0A%0AGostaria de agendar a medição técnica e meu projeto 3D gratuito!`;
    return `https://wa.me/5555996721400?text=${text}`;
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const slides = gsap.utils.toArray<HTMLElement>(".project-slide");

      const pinTl = gsap.timeline({
        scrollTrigger: {
          trigger: pinnedSectionRef.current,
          start: "top top",
          end: `+=${slides.length * 100}%`,
          pin: true,
          pinSpacing: true,
          scrub: 1,
          onUpdate: (self) => {
            const index = Math.round(self.progress * (slides.length - 1));
            setActiveProject(index);
          },
        },
      });

      slides.forEach((slide, i) => {
        if (i > 0) {
          pinTl.fromTo(slide, { yPercent: 100 }, { yPercent: 0, ease: "power1.inOut" });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-neutral-950 text-white selection:bg-emerald-500 selection:text-black">
      <header className="fixed left-0 top-0 z-50 flex w-full items-center justify-between border-b border-white/10 bg-neutral-950/80 px-6 py-4 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-black tracking-[0.25em] text-emerald-400">MÓVEIS</span>
          <span className="-mt-1 block text-[10px] tracking-[0.45em] text-neutral-400">PLANEJADOS</span>
        </div>

        <a
          href="#simulador"
          className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-2.5 text-xs font-bold text-neutral-950 shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-400"
        >
          <Calculator size={14} /> Pré-Orçamento Rápido
        </a>
      </header>

      <section className="relative flex h-screen w-full items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 h-full w-full overflow-hidden">
          <video
            src="/hero-video.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full scale-125 object-cover object-center brightness-80"
          />
        </div>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.22),_transparent_40%),linear-gradient(to_bottom,_rgba(0,0,0,0.38),_rgba(0,0,0,0.82))]" />

        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/80 px-4 py-1.5 text-xs font-bold tracking-[0.25em] text-emerald-400 backdrop-blur-md">
            <Sparkles size={14} /> DESIGN AUTORAL & SOB MEDIDA
          </span>

          <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight text-white md:text-7xl">
            Móveis planejados que elevam cada espaço da sua casa.
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm font-light text-neutral-300 md:text-lg">
            Soluções em marcenaria premium, projeto 3D personalizado e acabamento refinado para cozinhas, closets, suítes e home offices.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#simulador"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-8 py-4 font-bold text-neutral-950 shadow-xl shadow-emerald-500/20 transition hover:bg-emerald-400"
            >
              <Calculator size={18} /> Simular Pré-Orçamento
            </a>
            <a
              href="https://wa.me/5555996721400"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-neutral-700 bg-neutral-900/80 px-8 py-4 font-bold text-white transition hover:bg-neutral-800"
            >
              <MessageSquare size={18} className="text-emerald-400" /> WhatsApp Direto
            </a>
          </div>

          <div className="mt-12 grid gap-4 text-left sm:grid-cols-3">
            {[
              { value: "+500", label: "Projetos entregues" },
              { value: "5 anos", label: "Garantia em ferragens e estrutura" },
              { value: "3D", label: "Visualização antes da produção" },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                <div className="text-2xl font-black text-emerald-400">{item.value}</div>
                <div className="mt-1 text-xs uppercase tracking-[0.2em] text-neutral-400">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-20 border-y border-white/10 bg-neutral-950 px-6 py-24">
        <div className="mx-auto max-w-6xl space-y-12">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-xl space-y-3">
              <span className="text-xs font-bold tracking-[0.25em] text-emerald-400 uppercase">Móveis Sob Medida</span>
              <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">Soluções pensadas para cada detalhe do seu ambiente.</h2>
            </div>
            <p className="max-w-md text-sm text-neutral-400">
              Combinamos funcionalidade, organização e estética para transformar cozinhas, closets, suítes e home offices em espaços mais completos.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {AMBIENTES_SHOWCASE.map((amb, idx) => (
              <div
                key={idx}
                className="group overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900 transition hover:border-emerald-500/50"
              >
                <div className="h-52 overflow-hidden">
                  <img
                    src={amb.image}
                    alt={amb.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-grow flex-col justify-between p-6">
                  <div>
                    <h3 className="mb-2 text-lg font-bold text-white">{amb.title}</h3>
                    <p className="text-xs leading-relaxed text-neutral-400">{amb.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={pinnedSectionRef} className="relative h-screen w-full overflow-hidden bg-neutral-950">
        <div className="absolute left-8 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-3 lg:flex">
          {PROJECTS.map((_, i) => (
            <div
              key={i}
              className={`h-2.5 rounded-full transition-all duration-500 ${
                activeProject === i ? "w-10 bg-emerald-400 shadow-lg shadow-emerald-400/50" : "w-2.5 bg-neutral-800"
              }`}
            />
          ))}
        </div>

        {PROJECTS.map((project, idx) => (
          <div
            key={idx}
            className="project-slide absolute inset-0 flex h-full w-full items-center justify-center bg-neutral-950 p-6 md:p-12"
            style={{ zIndex: idx + 1 }}
          >
            <div className="relative grid w-full max-w-6xl overflow-hidden rounded-[2.5rem] border border-neutral-800 bg-neutral-900/90 p-8 shadow-2xl backdrop-blur-xl transition hover:border-emerald-500/30 lg:grid-cols-12 lg:gap-8 lg:p-12">
              <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />

              <div className="z-10 space-y-6 lg:col-span-5">
                <div className="flex items-center gap-3">
                  <span className="rounded-full border border-emerald-500/30 bg-emerald-950/60 px-3.5 py-1.5 text-xs font-bold tracking-[0.2em] text-emerald-400 uppercase">
                    {project.tag}
                  </span>
                </div>

                <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-white md:text-5xl">{project.title}</h2>
                <p className="text-sm leading-relaxed text-neutral-300 md:text-base">{project.desc}</p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.specs.map((spec, i) => (
                    <span key={i} className="rounded-lg border border-neutral-800 bg-neutral-950/80 px-3 py-1.5 text-[11px] font-semibold text-neutral-300">
                      • {spec}
                    </span>
                  ))}
                </div>

                <div className="pt-4">
                  <a
                    href={generateWhatsappUrl()}
                    target="_blank"
                    rel="noreferrer"
                    className="group/btn inline-flex items-center gap-3 rounded-xl bg-emerald-500 px-7 py-3.5 text-sm font-bold text-neutral-950 shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-400"
                  >
                    Solicitar projeto similar
                    <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
                  </a>
                </div>
              </div>

              <div className="relative z-10 mt-8 h-[320px] overflow-hidden rounded-2xl border border-neutral-800 shadow-2xl lg:col-span-7 lg:mt-0 lg:h-[480px]">
                <img
                  src={project.img}
                  alt={project.title}
                  className="h-full w-full object-cover object-center transition duration-700 ease-out hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        ))}
      </section>

      <section id="simulador" className="relative z-20 border-y border-white/10 bg-neutral-900/60 px-6 py-28">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-5xl">Monte seu pré-orçamento em 30 segundos.</h2>
            <p className="mx-auto mt-4 max-w-xl text-sm text-neutral-400">
              Selecione o que você precisa e envie o resumo diretamente para nossa equipe no WhatsApp com prioridade.
            </p>
          </div>

          <div className="space-y-8 rounded-3xl border border-neutral-800 bg-neutral-950 p-8 shadow-2xl md:p-12">
            <div className="space-y-4">
              <label className="block text-sm font-bold uppercase tracking-[0.2em] text-neutral-200">
                1. Quais ambientes você deseja projetar?
              </label>
              <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                {[
                  "Cozinha",
                  "Dormitório / Suíte",
                  "Closet",
                  "Home Office",
                  "Sala de Estar",
                  "Banheiro",
                  "Espaço Gourmet",
                  "Toda a Casa",
                ].map((amb) => {
                  const isSelected = selectedAmbientes.includes(amb);
                  return (
                    <button
                      key={amb}
                      type="button"
                      onClick={() => toggleAmbiente(amb)}
                      className={`rounded-xl border p-4 text-center text-xs font-bold transition ${
                        isSelected
                          ? "border-emerald-400 bg-emerald-500 text-neutral-950 shadow-md shadow-emerald-500/10"
                          : "border-neutral-800 bg-neutral-900 text-neutral-300 hover:border-neutral-700"
                      }`}
                    >
                      {amb}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="space-y-4">
              <label className="block text-sm font-bold uppercase tracking-[0.2em] text-neutral-200">
                2. Padrão de acabamento preferido:
              </label>
              <div className="grid gap-3 md:grid-cols-3">
                {[
                  { name: "Essencial", desc: "100% MDF com ferragens padrão" },
                  { name: "Premium (MDF + LED)", desc: "Perfil de LED e amortecimento em portas" },
                  { name: "Alto Padrão / Luxo", desc: "Vidro reflecta, iluminação e ripados" },
                ].map((item) => (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => setAcabamento(item.name)}
                    className={`rounded-xl border p-4 text-left transition ${
                      acabamento === item.name
                        ? "border-emerald-400 bg-neutral-900 text-white ring-1 ring-emerald-400"
                        : "border-neutral-800 bg-neutral-900/40 text-neutral-400 hover:border-neutral-700"
                    }`}
                  >
                    <div className="text-sm font-bold text-white">{item.name}</div>
                    <div className="mt-1 text-[11px] text-neutral-400">{item.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-center justify-between gap-6 border-t border-neutral-800 pt-8 md:flex-row">
              <div>
                <span className="block text-xs font-bold uppercase tracking-[0.2em] text-neutral-500">Resumo do pedido:</span>
                <p className="mt-1 text-sm font-semibold text-emerald-400">
                  {selectedAmbientes.length} ambiente(s) ({selectedAmbientes.join(", ")}) • {acabamento}
                </p>
                <span className="mt-1 block text-xs text-neutral-400">Inclui medição e projeto 3D gratuito.</span>
              </div>

              <a
                href={generateWhatsappUrl()}
                target="_blank"
                rel="noreferrer"
                className="flex w-full items-center justify-center gap-3 whitespace-nowrap rounded-xl bg-emerald-500 px-8 py-4 font-black text-neutral-950 shadow-xl shadow-emerald-500/20 transition hover:bg-emerald-400 md:w-auto"
              >
                <Send size={18} /> Enviar pré-orçamento no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-20 bg-neutral-950 px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <span className="text-xs font-bold tracking-[0.25em] text-emerald-400 uppercase">Satisfação Comprovada</span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-5xl">O que dizem nossos clientes.</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {TESTIMONIALS.map((item, idx) => (
              <div key={idx} className="flex flex-col justify-between space-y-6 rounded-3xl border border-neutral-800 bg-neutral-900 p-8">
                <div className="space-y-4">
                  <div className="flex gap-1 text-emerald-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={18} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed text-neutral-300 italic">“{item.text}”</p>
                </div>
                <div className="border-t border-neutral-800 pt-4">
                  <h4 className="text-base font-bold text-white">{item.name}</h4>
                  <span className="text-xs text-emerald-400">{item.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-20 border-t border-white/10 bg-neutral-900/30 px-6 py-28">
        <div className="mx-auto max-w-3xl">
          <div className="mb-16 text-center">
            <span className="text-xs font-bold tracking-[0.25em] text-emerald-400 uppercase">Tire suas dúvidas</span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-5xl">Perguntas frequentes.</h2>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900 transition">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="flex w-full items-center justify-between gap-4 p-6 text-left text-base font-bold transition hover:text-emerald-400 md:text-lg"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-emerald-400 transition-transform duration-300 ${openFaq === idx ? "rotate-180" : ""}`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="border-t border-neutral-800/50 px-6 pb-6 pt-4 text-sm leading-relaxed text-neutral-400">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="relative z-40 border-t border-neutral-800 bg-neutral-950 px-6 py-12 text-center">
        <div className="mx-auto max-w-2xl space-y-6">
          <span className="block text-3xl font-black tracking-[0.35em] text-emerald-400">PLANEJADOS</span>
          <p className="mx-auto max-w-md text-sm text-neutral-400">
            Fale com nossa equipe e solicite um orçamento personalizado com projeto 3D e atendimento humanizado.
          </p>
          <div className="border-t border-neutral-900 pt-8 text-xs text-neutral-600">© 2026 Móveis Planejados. Todos os direitos reservados. - Desenvolvido por Matheus Ferreira</div>
        </div>
      </footer>
    </div>
  );
}
