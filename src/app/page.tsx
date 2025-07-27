
'use client';

import Image from "next/image";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Smartphone, Video, BookOpen, Gift, XCircle, CheckCircle2, AlarmClock, MessageSquare } from "lucide-react";
import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import dynamic from 'next/dynamic';

const Carousel = dynamic(() => import('@/components/ui/carousel').then(mod => mod.Carousel), { ssr: false });
const CarouselContent = dynamic(() => import('@/components/ui/carousel').then(mod => mod.CarouselContent), { ssr: false });
const CarouselItem = dynamic(() => import('@/components/ui/carousel').then(mod => mod.CarouselItem), { ssr: false });
const CarouselNext = dynamic(() => import('@/components/ui/carousel').then(mod => mod.CarouselNext), { ssr: false });
const CarouselPrevious = dynamic(() => import('@/components/ui/carousel').then(mod => mod.CarouselPrevious), { ssr: false });


function CountdownTimer() {
    const [timeLeft, setTimeLeft] = React.useState({
        hours: 0,
        minutes: 7,
        seconds: 17,
    });

    React.useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prevTime => {
                const totalSeconds = prevTime.hours * 3600 + prevTime.minutes * 60 + prevTime.seconds - 1;

                if (totalSeconds < 0) {
                    clearInterval(timer);
                    return { hours: 0, minutes: 0, seconds: 0 };
                }

                return {
                    hours: Math.floor(totalSeconds / 3600),
                    minutes: Math.floor((totalSeconds % 3600) / 60),
                    seconds: totalSeconds % 60,
                };
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="flex items-center gap-2 text-sm sm:text-base font-bold text-white">
            <AlarmClock className="h-5 w-5 sm:h-6 sm:w-6" />
            <span className="hidden sm:inline">OFERTA ACABANDO:</span>
            <span className="inline sm:hidden">OFERTA ACABA EM:</span>
            <span className="font-mono tracking-wider text-base sm:text-lg">
                {String(timeLeft.hours).padStart(2, '0')}:
                {String(timeLeft.minutes).padStart(2, '0')}:
                {String(timeLeft.seconds).padStart(2, '0')}
            </span>
        </div>
    );
}

export default function SalesPage() {
    const checkoutUrl = "https://www.ggcheckout.com/checkout/v2/JM3AHuV1i75ZU4ka1lYx";
    const whatsappUrl = "https://wa.me/5511914758577";
    const [year, setYear] = React.useState(new Date().getFullYear());

    React.useEffect(() => {
        if (typeof window.fbq === 'function') {
            window.fbq('track', 'ViewContent');
        }
        setYear(new Date().getFullYear());
    }, []);

    const benefits = [
        { icon: <Smartphone className="h-8 w-8" />, text: "App personalizado para você!" },
        { icon: <Video className="h-8 w-8" />, text: "Vídeo mostrando CADA passo da receita" },
        { icon: <BookOpen className="h-8 w-8" />, text: "PDF detalhado da receita" },
        { icon: <Gift className="h-8 w-8" />, text: "SUPER BÔNUS: 150 receitas de recheios" },
    ];

    const faqItems = [
        { question: "Nunca consegui acertar doces, vou conseguir mesmo assim?", answer: "Sim! O app foi criado exatamente para quem já tentou e não conseguiu. O passo a passo é visual, didático e mostra o ponto exato da calda, mesmo para iniciantes." },
        { question: "Preciso saber cozinhar ou ter experiência?", answer: "Não precisa! O método foi feito para quem nunca acertou um doce. Basta seguir o tutorial, sem segredos e sem técnicas complicadas." },
        { question: "O acesso é imediato?", answer: "Sim, totalmente imediato. Após a compra, você já recebe o acesso direto no seu e-mail para começar na hora que quiser." },
        { question: "Como recebo o acesso?", answer: "Assim que o pagamento é aprovado, você recebe um e-mail com o link de acesso ao app, ao vídeo tutorial e ao PDF da receita. Tudo em poucos minutos." },
        { question: "Qual a diferença para outras receitas da internet?", answer: "A maioria das receitas só mostra o básico e deixa de fora o verdadeiro segredo do Morango do Amor Perfeito: o ponto exato da calda, o truque que ninguém ensina nos vídeos. No app, você vê esse passo crítico em detalhes, com vídeo, dicas visuais e PDF — além de ganhar 150 recheios frios exclusivos de bônus. É a diferença entre só tentar… e finalmente acertar." }
    ];

    const carouselImages = [
        { src: "https://i.imgur.com/XIJj4gO.png", alt: "Morango do Amor Exemplo 1" },
        { src: "https://i.imgur.com/pYLWKOQ.png", alt: "Morango do Amor Exemplo 2" },
        { src: "https://i.imgur.com/Gxt710S.png", alt: "Morango do Amor Exemplo 3" },
        { src: "https://i.imgur.com/ZVsombB.png", alt: "Morango do Amor Exemplo 4" },
    ];

    const offerItems = [
        { text: "Acesso Exclusivo ao APP", price: "De R$ 30" },
        { text: "PDF DETALHADO DE NOSSA RECEITA", price: "De R$ 20" },
        { text: "VÍDEO PASSO A PASSO DA RECEITA", price: "De R$ 27" },
        { text: "BÔNUS EXCLUSIVO: 150 Receitas de Recheios que não vão ao fogo", price: "De R$ 97" },
        { text: "Truque do Morango do Amor", price: "De R$ 197" },
        { text: "Anos de experiência na confeitaria", price: "De R$ ∞" },
        { text: "Suporte Profissional", price: "" },
        { text: "Garantia Incondicional", price: "" },
    ];

    return (
        <div className="flex min-h-screen flex-col bg-background font-body text-foreground">
            <header className="sticky top-0 z-50 w-full bg-red-500 shadow-md">
                <div className="container flex h-14 items-center justify-center px-4">
                    <CountdownTimer />
                </div>
            </header>

            <main className="flex-1">
                <section className="container mx-auto max-w-4xl px-4 py-12 text-center sm:py-20">
                    <h1 className="font-headline text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                        Você vai fazer o Morango do Amor Perfeito ainda hoje – <span className="text-primary">mesmo que nunca tenha acertado um doce na vida.</span>
                    </h1>
                    <div className="my-8">
                        <Image src="https://i.imgur.com/iFVHloq.gif" alt="Morango do Amor Perfeito" width={400} height={400} className="mx-auto rounded-full" priority data-ai-hint="dessert recipe" />
                    </div>
                    <p className="mx-auto mt-6 max-w-2xl text-base text-foreground/80 sm:text-lg">
                        Revelamos o TRUQUE do Morango do Amor que ninguém te conta com nosso app: com imagens, vídeo e explicações claras – sem enrolação.
                    </p>
                    <div className="mt-8">
                        <Button asChild size="lg" className="h-auto w-full max-w-md bg-accent hover:bg-accent/90 text-accent-foreground font-bold uppercase tracking-wider text-base sm:text-lg px-8 py-5 shadow-2xl shadow-accent/40 transition-transform duration-300 hover:scale-105">
                            <a href="#cta">QUERO APRENDER O TRUQUE AGORA!</a>
                        </Button>
                    </div>
                </section>

                <section className="bg-card py-12 sm:py-20">
                    <div className="container mx-auto max-w-3xl px-4">
                        <h2 className="text-center font-headline text-2xl font-bold text-foreground sm:text-3xl">CHEGA DE:</h2>
                        <Card className="mt-8 p-6 sm:p-8 shadow-lg bg-background">
                            <div className="mb-6 sm:mb-8">
                                <Image src="https://i.imgur.com/9nc3Jw5.jpeg" alt="Morangos com calda" width={400} height={266} className="w-full max-w-sm mx-auto rounded-2xl shadow-xl" loading="lazy" />
                            </div>
                            <ul className="space-y-4 text-base sm:text-lg text-foreground/90">
                                {['Ficar perdida sem saber por onde começar', 'Tentar fazer e sempre errar o ponto da calda', 'Gastar ingredientes e jogar tudo fora', 'Se sentir frustrada por ver todo mundo conseguindo, menos você', 'Ter medo de tentar de novo e se decepcionar', 'Só assistir vídeos e nunca conseguir repetir em casa'].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <XCircle className="mt-0.5 sm:mt-1 h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0 text-destructive" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    </div>
                </section>

                <section className="container mx-auto max-w-5xl px-4 py-12 sm:py-20">
                    <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
                        <div className="md:order-2 text-center md:text-left">
                            <h2 className="font-headline text-2xl font-bold text-foreground sm:text-3xl">Com o app "O Segredo do Morango do Amor Perfeito" você vai descobrir o que não te contam.</h2>
                            <p className="mt-4 text-base text-foreground/80 sm:text-lg">
                                Nosso app inclui um PDF detalhado da receita, uma vídeo aula completa e, como bônus, 150 receitas de recheios que não vão ao fogo.
                            </p>
                            <p className="mt-4 text-xl sm:text-2xl font-bold text-accent">Chega de desperdiçar ingredientes. Tenha sucesso na primeira tentativa!</p>
                        </div>
                        <div className="md:order-1">
                            <Card className="overflow-hidden rounded-2xl shadow-2xl shadow-primary/20">
                                <Image src="https://i.imgur.com/AoRMTxa.png" alt="App Preview" width={600} height={800} className="w-full" data-ai-hint="app mockup" loading="lazy" />
                            </Card>
                        </div>
                    </div>
                </section>

                <section className="bg-card py-12 sm:py-20">
                    <div className="container mx-auto max-w-4xl px-4">
                        <h2 className="text-center font-headline text-2xl font-bold text-foreground sm:text-3xl">Tudo que você vai receber:</h2>
                        <Card className="mt-8 p-6 sm:p-8 shadow-lg bg-background">
                            <ul className="space-y-5">
                                {benefits.map((benefit, index) => (
                                    <li key={index} className="flex items-center gap-4 text-base sm:text-lg">
                                        <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-xl bg-primary/20 text-primary flex-shrink-0">
                                            {React.cloneElement(benefit.icon, { className: 'h-7 w-7 sm:h-8 sm:w-8' })}
                                        </div>
                                        <span className="font-semibold">{benefit.text}</span>
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    </div>
                </section>

                <section className="container mx-auto max-w-3xl px-4 py-12 sm:py-20 text-center">
                    <h2 className="text-center font-headline text-2xl font-bold text-foreground sm:text-3xl">Nosso App por dentro🥰</h2>
                    <div className="mt-8">
                        <Image src="https://i.imgur.com/6MLwlJJ.png" alt="Nosso App por dentro" width={800} height={450} className="mx-auto rounded-lg shadow-xl" loading="lazy" />
                    </div>
                    <p className="mt-6 text-lg sm:text-xl text-foreground/80">
                        Tudo feito com muito amor, pensado pra você!
                    </p>
                </section>

                <section className="container mx-auto max-w-5xl px-4 py-12 sm:py-20 text-center">
                    <h2 className="font-headline text-2xl font-bold sm:text-3xl">Você vai fazer Morangos do Amor como esses:</h2>
                    <p className="mt-4 max-w-3xl mx-auto text-base text-foreground/80 sm:text-lg">Imagine entregar um doce digno de vitrine, com uma casquinha crocante e brilhante. Mesmo que você tenha ZERO experiência na cozinha.</p>
                    <div className="mt-8 max-w-3xl mx-auto">
                        <Carousel opts={{ loop: true, dragFree: false }} className="w-full">
                            <CarouselContent>
                                {carouselImages.map((image, index) => (
                                    <CarouselItem key={index}>
                                        <Card className="overflow-hidden rounded-xl">
                                            <Image src={image.src} alt={image.alt} width={800} height={600} loading="lazy" />
                                        </Card>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious className="ml-12 hidden sm:flex" />
                            <CarouselNext className="mr-12 hidden sm:flex" />
                        </Carousel>
                    </div>
                    <p className="mt-6 text-lg font-bold font-headline sm:text-xl">Com nosso método, QUALQUER UM pode fazer!</p>
                    <p className="mt-2 text-lg sm:text-xl text-foreground/80 font-headline">Agora imagine seus amigos dizendo: <span className="font-bold text-foreground">“Você que fez isso?”</span></p>
                    <p className="mt-2 text-lg sm:text-xl font-bold font-headline">Ou melhor… imagine vender e <span className="text-accent">lucrar</span> com ele.</p>
                </section>

                <section id="cta" className="bg-card py-12 sm:py-20">
                    <div className="container mx-auto max-w-2xl px-4 text-center">
                        <Card className="bg-background shadow-2xl shadow-primary/20 border-primary border-2">
                            <CardHeader className="p-6">
                                <CardTitle className="font-headline text-xl sm:text-2xl text-center">❤️ Recapitulando tudo que você vai receber 🍓</CardTitle>
                            </CardHeader>
                            <CardContent className="p-6 pt-0">
                                <div className="mb-6">
                                    <Image src="https://i.imgur.com/AoRMTxa.png" alt="Offer summary" width={600} height={400} className="rounded-lg mx-auto" loading="lazy" />
                                </div>
                                <ul className="space-y-3 text-left mb-6 text-sm sm:text-base">
                                    {offerItems.map((item, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                                            <span className="flex-1 font-semibold">{item.text}</span>
                                            <span className="text-xs sm:text-sm text-foreground/70 line-through">{item.price}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="text-center bg-primary/10 p-4 rounded-lg">
                                    <p className="text-base sm:text-lg text-foreground/80">No total tudo deveria custar <span className="line-through">R$ 370,00</span></p>
                                    <p className="text-base sm:text-lg mt-2">Mas hoje você vai ter acesso completo por:</p>
                                    <p className="font-headline text-4xl sm:text-5xl font-bold text-accent my-2">R$ 9,90</p>
                                </div>
                                <div className="mt-6">
                                    <Button asChild size="lg" className="h-auto w-full bg-green-500 hover:bg-green-600 text-white font-bold text-base sm:text-lg px-4 sm:px-8 py-5 shadow-2xl shadow-green-500/40 animate-pulse-slow">
                                        <a href={checkoutUrl}>Quero fazer um Morango do Amor Perfeito!</a>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                        <div className="mt-8 max-w-md mx-auto text-center">
                            <Image src="https://i.imgur.com/BtlkF9j.png" alt="Selo de Garantia 7 dias" width={150} height={150} className="mx-auto mb-4" loading="lazy" />
                            <p className="text-sm text-foreground/80 sm:text-base">
                                Estamos tão certos de que você vai amar o app que oferecemos uma garantia de satisfação total por 7 dias.
                            </p>
                            <p className="mt-2 font-semibold text-foreground text-sm sm:text-base">
                                Se não amar o método ou não tiver resultados, seu dinheiro de volta. Simples assim.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="container mx-auto max-w-3xl px-4 py-12 sm:py-20">
                    <h2 className="text-center font-headline text-2xl font-bold text-foreground sm:text-3xl">Dúvidas Frequentes</h2>
                    <Accordion type="single" collapsible className="mt-8 w-full">
                        {faqItems.map((item, index) => (
                            <AccordionItem value={`item-${index + 1}`} key={index} className="border-border bg-card px-4 rounded-lg mb-2 shadow-sm">
                                <AccordionTrigger className="text-base sm:text-lg font-semibold text-left hover:no-underline">{item.question}</AccordionTrigger>
                                <AccordionContent className="text-sm sm:text-base text-foreground/80 pb-4">
                                    {item.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </section>

                <section className="container mx-auto max-w-3xl px-4 pb-12 text-center sm:pb-20">
                    <h3 className="text-xl sm:text-2xl font-bold font-headline">Ainda tem dúvidas?</h3>
                    <p className="mt-2 text-base sm:text-lg text-foreground/80">Fale com a gente pelo Whatsapp</p>
                    <div className="mt-6">
                        <Button asChild size="lg" className="h-auto bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg">
                            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                                <MessageSquare className="h-5 w-5 sm:h-6 sm:w-6 mr-2 sm:mr-3" />
                                Chamar no WhatsApp
                            </a>
                        </Button>
                    </div>
                </section>
            </main>

            <footer className="border-t border-border/40 bg-card">
                <div className="container mx-auto max-w-4xl px-4 py-10 text-center">
                    <h3 className="text-lg sm:text-xl font-bold font-headline">Não Perca Esta Oportunidade Única</h3>
                    <p className="mt-4 text-base sm:text-lg text-foreground/80">Essa oferta de R$9,90 é por tempo limitado. Garanta o seu acesso e domine o Morango do Amor Perfeito.</p>
                    <div className="mt-6">
                        <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8 py-4 sm:px-10 sm:py-5 h-auto shadow-lg transition-transform duration-300 hover:scale-105">
                            <a href="#cta">Garantir Acesso Agora</a>
                        </Button>
                    </div>
                    <p className="text-xs mt-8 text-foreground/50">Morango do Amor Pro &copy; {year}. Todos os direitos reservados.</p>
                </div>
            </footer>
        </div>
    );

    