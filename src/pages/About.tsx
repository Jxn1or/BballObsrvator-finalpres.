import React from 'react';
import { motion } from 'motion/react';
import { Globe, Users, Trophy, Target, Shield, Heart, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';

export default function About() {
  return (
    <div className="space-y-24 pb-24">
      {/* Editorial Hero Section (Recipe 2) */}
      <section className="relative min-h-[70vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[#F5F5F0]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-[0.03] overflow-hidden pointer-events-none">
          <div className="text-[40vw] font-display uppercase leading-none select-none">LNBH</div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 space-y-6"
        >
          <span className="text-xs font-black uppercase tracking-[0.4em] text-brand-orange">Haïti Basketball</span>
          <h1 className="text-[15vw] md:text-[10vw] font-display uppercase leading-[0.8] tracking-tighter mix-blend-multiply">
            PLUS QU'UNE <br /> <span className="text-brand-orange italic">LIGUE.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-black/60 font-light leading-relaxed">
            La Ligue Nationale de Basketball d'Haïti (LNBH) est le sommet de l'excellence athlétique, de la passion et du développement communautaire en Haïti.
          </p>
        </motion.div>
      </section>

      {/* Stats Grid */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <AboutStat value="15" label="Équipes" />
        <AboutStat value="300+" label="Joueurs" />
        <AboutStat value="10" label="Départements" />
        <AboutStat value="2024" label="Saison" />
      </section>

      {/* Mission Section (Recipe 6: Warm Organic) */}
      <section className="bg-white rounded-[60px] p-12 md:p-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center shadow-sm">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 bg-brand-orange/5 text-brand-orange px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest border border-brand-orange/10">
            Notre Mission
          </div>
          <h2 className="text-5xl font-display uppercase tracking-tight leading-none">
            DÉVELOPPER LES <br /> TALENTS DE DEMAIN
          </h2>
          <p className="text-black/60 leading-relaxed text-lg italic">
            "Le basketball est un moteur de changement social en Haïti. Notre objectif est de structurer la pratique professionnelle tout en offrant aux jeunes des opportunités internationales via notre système de data unique."
          </p>
          <div className="space-y-4">
             <MissionPoint icon={<Shield size={18} />} text="Excellence Technique et Discipline" />
             <MissionPoint icon={<Heart size={18} />} text="Impact Social et Communautaire" />
             <MissionPoint icon={<Globe size={18} />} text="Rayonnement International" />
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/5] rounded-[40px] overflow-hidden bg-black/5 rotate-3 hover:rotate-0 transition-transform duration-700">
             <img src="https://picsum.photos/seed/haiti-basketball-2/800/1000" alt="Action" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-brand-orange rounded-[40px] -rotate-6 z-[-1]" />
        </div>
      </section>

      {/* The 15 Teams Section */}
      <section className="space-y-12 text-center max-w-4xl mx-auto">
        <h2 className="text-4xl font-display uppercase tracking-tight">UNE LIGUE, QUINZE HISTOIRES</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {["P-au-P Eagles", "Cap Dragons", "Jacmel Sharks", "Saint-Marc Lions", "Les Cayes Suns", "Gonaïves Tigers", "Hinche Coyotes", "Jérémie Hawks", "Port-de-Paix Kings", "Fort-Liberté Rebels", "Ouanaminthe Warriors", "Mirebalais Titans", "Petit-Goâve Pirates", "Léogâne Rangers", "Miragoâne Waves"].map((team) => (
            <span key={team} className="px-6 py-2 bg-brand-black text-white text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-brand-orange transition-colors cursor-default">
              {team}
            </span>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-black text-white p-12 md:p-24 rounded-[60px] text-center space-y-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-orange opacity-10 pointer-events-none" />
        <h2 className="text-5xl md:text-7xl font-display uppercase tracking-tighter relative z-10 leading-none">REJOIGNEZ <br /> L'AVENTURE LNBH</h2>
        <p className="text-white/60 text-lg max-w-xl mx-auto font-light relative z-10">
          Que vous soyez fan, joueur ou sponsor, participez à l'essor du basketball en Haïti.
        </p>
        <div className="flex flex-wrap justify-center gap-4 relative z-10 pt-4">
           <button className="bg-brand-orange text-white px-12 py-4 rounded-full font-bold uppercase tracking-widest flex items-center gap-2 hover:scale-105 transition-all">
             Nous Contacter <ArrowRight size={20} />
           </button>
        </div>
      </section>
    </div>
  );
}

function AboutStat({ value, label }: { value: string, label: string }) {
  return (
    <div className="text-center p-8 border border-black/5 rounded-3xl bg-white space-y-1">
      <div className="text-4xl font-display uppercase text-brand-orange tracking-tight">{value}</div>
      <div className="text-[10px] font-black uppercase tracking-widest opacity-30">{label}</div>
    </div>
  );
}

function MissionPoint({ icon, text }: { icon: React.ReactNode, text: string }) {
  return (
    <div className="flex items-center gap-4 group">
      <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all">
        {icon}
      </div>
      <span className="text-sm font-bold uppercase tracking-tight">{text}</span>
    </div>
  );
}
