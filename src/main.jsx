import React from "react";
import { createRoot } from "react-dom/client";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, TrendingUp, Users, CheckCircle2, Search, FileCheck, HandCoins } from "lucide-react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import "./index.css";

const projects = [
  { title: "Maison Luma", category: "Marque de décoration", location: "Paris", raise: "250 000 €", equity: "8 %", progress: "68%", text: "Une jeune marque française de mobilier et objets artisanaux haut de gamme." },
  { title: "Café Atelier", category: "Coffee shop & restauration", location: "Lyon", raise: "120 000 €", equity: "10 %", progress: "82%", text: "Un lieu hybride : café, boutique locale et espace événementiel de quartier." },
  { title: "Studio Verde", category: "Design végétal", location: "Bordeaux", raise: "180 000 €", equity: "7 %", progress: "54%", text: "Création d’aménagements végétalisés pour hôtels, bureaux et restaurants." },
];

const stepsBusiness = [
  [FileCheck, "Déposez votre dossier", "Présentez votre entreprise, vos chiffres, votre équipe et votre besoin de financement."],
  [ShieldCheck, "Validation par notre équipe", "Nous analysons la solidité du projet avant de le présenter aux investisseurs."],
  [HandCoins, "Levez des fonds", "Recevez des investissements en échange d’une part de votre entreprise."],
];

const stepsInvestor = [
  [Search, "Découvrez des entreprises", "Explorez des PME françaises sélectionnées avec soin."],
  [TrendingUp, "Investissez dès un ticket accessible", "Prenez une participation dans des entreprises réelles à fort potentiel."],
  [Users, "Suivez votre portefeuille", "Gardez une vision claire de vos participations et de leur évolution."],
];

function App() {
  return (
    <div className="min-h-screen bg-[#F8F5F0] text-[#111827]">
      <header className="sticky top-0 z-50 border-b border-[#0B1F3A]/10 bg-[#F8F5F0]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl border border-[#C9A56A]/30 bg-[#0F1115] shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-[#D9B57A]/20 to-transparent" />
              <div className="relative text-2xl font-light tracking-tight text-[#D9B57A]">N</div>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-2xl font-light tracking-[0.35em] text-[#171717]">NEXUM</span>
              <span className="mt-1 text-[10px] uppercase tracking-[0.3em] text-black/40">Private Investment Platform</span>
            </div>
          </div>
          <nav className="hidden items-center gap-8 text-sm text-black/70 md:flex">
            <a href="#projets" className="hover:text-black">Projets</a>
            <a href="#business" className="hover:text-black">Entreprises</a>
            <a href="#investisseurs" className="hover:text-black">Investisseurs</a>
            <a href="#securite" className="hover:text-black">Confiance</a>
          </nav>
          <Button className="rounded-full bg-[#0B1F3A] px-5 py-2 text-white hover:bg-[#08172C]">Commencer</Button>
        </div>
      </header>
      <main>
        <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#0B1F3A]/10 bg-white px-5 py-2 text-sm text-[#0B1F3A]/80 shadow-sm">
              <div className="flex items-center gap-1"><div className="h-2 w-6 rounded-full bg-[#1D4ED8]" /><div className="h-2 w-6 rounded-full border border-black/10 bg-white" /><div className="h-2 w-6 rounded-full bg-[#DC2626]" /></div>
              🇫🇷 Plateforme d’investissement française nouvelle génération
            </div>
            <h1 className="max-w-2xl text-5xl font-semibold leading-tight tracking-tight md:text-7xl">Investissez dans l’avenir réel des entreprises françaises.</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-black/65">NEXUM connecte des entrepreneurs français ambitieux avec des investisseurs qui souhaitent prendre une participation dans des entreprises concrètes, locales et sélectionnées.</p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row"><Button className="rounded-full bg-[#0B1F3A] px-7 py-6 text-base text-white hover:bg-[#08172C]">Découvrir les projets <ArrowRight className="ml-2" size={18} /></Button><Button variant="outline" className="rounded-full border-black/20 px-7 py-6 text-base">Déposer mon entreprise</Button></div>
            <div className="mt-10 grid max-w-lg grid-cols-3 gap-6 text-sm"><div><strong className="block text-2xl">42</strong><span className="text-black/55">projets étudiés</span></div><div><strong className="block text-2xl">3,8M€</strong><span className="text-black/55">objectif financé</span></div><div><strong className="block text-2xl">100%</strong><span className="text-black/55">dossiers vérifiés</span></div></div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }} className="relative">
            <div className="absolute -inset-6 rounded-[3rem] bg-[#C9A56A]/25 blur-3xl" />
            <Card className="relative overflow-hidden rounded-[2.5rem] border border-black/10 bg-white shadow-2xl"><CardContent className="p-6"><div className="rounded-[2rem] bg-gradient-to-br from-[#07152B] to-[#0B1F3A] p-6 text-white"><p className="text-sm text-white/60">Projet sélectionné</p><h2 className="mt-3 text-3xl font-semibold">Maison Luma</h2><p className="mt-3 text-white/70">Marque française de décoration artisanale — Paris</p><div className="mt-8 grid grid-cols-3 gap-4"><div className="rounded-2xl bg-white/10 p-4"><p className="text-xs text-white/50">Levée</p><p className="mt-1 font-semibold">250k€</p></div><div className="rounded-2xl bg-white/10 p-4"><p className="text-xs text-white/50">Capital</p><p className="mt-1 font-semibold">8%</p></div><div className="rounded-2xl bg-white/10 p-4"><p className="text-xs text-white/50">Investi</p><p className="mt-1 font-semibold">68%</p></div></div><div className="mt-6 h-3 overflow-hidden rounded-full bg-white/10"><div className="h-full w-[68%] rounded-full bg-[#C9A56A]" /></div></div><div className="mt-6 space-y-4">{["Dossier financier vérifié", "Pitch deck disponible", "Investissement encadré juridiquement"].map((item) => <div key={item} className="flex items-center gap-3 rounded-2xl bg-[#F7F3ED] p-4 text-sm"><CheckCircle2 size={18} className="text-[#B38A56]" /> {item}</div>)}</div></CardContent></Card>
          </motion.div>
        </section>
        <section id="projets" className="relative overflow-hidden bg-white py-20"><div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-[#C9A56A]/10 blur-3xl" /><div className="mx-auto max-w-7xl px-6"><div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end"><div><p className="text-sm uppercase tracking-[0.25em] text-[#B38A56]">Opportunités</p><h2 className="mt-3 text-4xl font-semibold tracking-tight">Projets à financer</h2></div><p className="max-w-md text-black/60">Chaque entreprise est sélectionnée pour son potentiel, sa clarté financière et la qualité de son équipe.</p></div><div className="grid gap-6 md:grid-cols-3">{projects.map((project) => <Card key={project.title} className="rounded-[2rem] border border-black/10 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"><CardContent className="p-6"><div className="relative mb-5 h-44 overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-[#F3EBDD] via-[#F8F5F0] to-[#C9A56A]/30"><div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(11,31,58,0.15),transparent_50%)]" /><div className="absolute bottom-4 left-4 text-xs font-medium uppercase tracking-[0.3em] text-[#0B1F3A]/40">NEXUM Selection</div></div><p className="text-sm text-[#B38A56]">{project.category} · {project.location}</p><h3 className="mt-2 text-2xl font-semibold">{project.title}</h3><p className="mt-3 min-h-16 text-sm leading-6 text-black/60">{project.text}</p><div className="mt-6 flex justify-between text-sm"><span>Objectif : <strong>{project.raise}</strong></span><span>Capital : <strong>{project.equity}</strong></span></div><div className="mt-4 h-2 rounded-full bg-black/10"><div className="h-full rounded-full bg-[#0B1F3A]" style={{ width: project.progress }} /></div><Button variant="outline" className="mt-6 w-full rounded-full border-black/20 py-3">Voir le dossier</Button></CardContent></Card>)}</div></div></section>
        <section className="mx-auto grid max-w-7xl gap-8 px-6 py-20 md:grid-cols-2"><div id="business" className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#07152B] to-[#0B1F3A] p-8 text-white md:p-12"><div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-[#C9A56A]/10 blur-3xl" /><p className="text-sm uppercase tracking-[0.25em] text-white/45">Entrepreneurs</p><h2 className="mt-4 text-4xl font-semibold">Levez des fonds sans passer uniquement par les banques.</h2><p className="mt-5 leading-7 text-white/65">Présentez votre projet à une communauté d’investisseurs qui croit dans les PME, les commerces, les marques et les entreprises locales.</p><div className="mt-8 space-y-4">{stepsBusiness.map(([Icon, title, text]) => <div key={title} className="flex gap-4 rounded-3xl bg-white/10 p-5"><Icon className="mt-1 shrink-0 text-[#C9A56A]" size={22} /><div><h3 className="font-semibold">{title}</h3><p className="mt-1 text-sm leading-6 text-white/60">{text}</p></div></div>)}</div></div><div id="investisseurs" className="rounded-[2.5rem] bg-[#EFE5D9] p-8 md:p-12"><p className="text-sm uppercase tracking-[0.25em] text-[#B38A56]">Investisseurs</p><h2 className="mt-4 text-4xl font-semibold">Investissez dans des entreprises que vous comprenez.</h2><p className="mt-5 leading-7 text-black/65">Accédez à des opportunités concrètes, avec des dossiers lisibles, des chiffres transparents et un suivi dans le temps.</p><div className="mt-8 space-y-4">{stepsInvestor.map(([Icon, title, text]) => <div key={title} className="flex gap-4 rounded-3xl bg-white/70 p-5"><Icon className="mt-1 shrink-0 text-[#B38A56]" size={22} /><div><h3 className="font-semibold">{title}</h3><p className="mt-1 text-sm leading-6 text-black/60">{text}</p></div></div>)}</div></div></section>
        <section id="securite" className="bg-gradient-to-br from-[#07152B] to-[#0B1F3A] py-20 text-white"><div className="mx-auto max-w-7xl px-6"><div className="max-w-3xl"><p className="text-sm uppercase tracking-[0.25em] text-[#C9A56A]">Confiance & réglementation</p><h2 className="mt-4 text-4xl font-semibold md:text-5xl">La confiance est le vrai produit.</h2><p className="mt-6 text-lg leading-8 text-white/65">L’investissement au capital d’entreprises est une activité réglementée. NEXUM doit donc fonctionner avec un cadre juridique solide, une vérification des profils, des informations transparentes et des partenaires agréés.</p></div><div className="mt-12 grid gap-6 md:grid-cols-4">{["Vérification KYC", "Dossiers financiers", "Contrats encadrés", "Risques clairement expliqués"].map((item) => <div key={item} className="rounded-3xl border border-white/10 bg-white/5 p-6"><ShieldCheck className="text-[#C9A56A]" /><h3 className="mt-5 font-semibold">{item}</h3></div>)}</div></div></section>
        <section className="relative mx-auto max-w-5xl overflow-hidden px-6 py-24 text-center"><div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(201,165,106,0.15),transparent_45%)]" /><h2 className="text-4xl font-semibold tracking-tight md:text-6xl">Construisons ensemble la nouvelle génération d’entreprises françaises.</h2><p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-black/60">Rejoignez la liste d’attente pour investir ou déposer votre entreprise. Les premiers dossiers seront sélectionnés avec soin.</p><div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row"><Button className="rounded-full bg-[#0B1F3A] px-8 py-6 text-base text-white hover:bg-[#08172C]">Je veux investir</Button><Button variant="outline" className="rounded-full border-black/20 px-8 py-6 text-base">Je cherche un financement</Button></div></section>
      </main>
      <footer className="border-t border-[#0B1F3A]/10 bg-[#F8F5F0] px-6 py-8 text-center text-sm text-[#0B1F3A]/60">© 2026 NEXUM — Plateforme de financement participatif en préparation. L’investissement comporte un risque de perte en capital.</footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
