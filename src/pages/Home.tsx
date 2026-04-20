import React from 'react';
import { motion } from 'motion/react';
import { Trophy, ArrowRight, Zap, Target, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden bg-brand-black text-white p-6 md:p-12 flex flex-col justify-end group">
        <img 
          src="https://picsum.photos/seed/basketball-haiti/1920/1080" 
          alt="LNBH Basketball"
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/20 to-transparent" />
        
        <div className="relative space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-brand-orange px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-sm">
            Live LNBH
          </div>
          <h1 className="text-5xl md:text-8xl font-display uppercase leading-[0.85] tracking-tighter">
            L'ÉLITE DU <br /> BASKET HAÏTIEN
          </h1>
          <p className="text-white/60 text-sm md:text-lg leading-relaxed max-w-lg italic font-light">
            Découvrez les performances, analysez les statistiques et suivez vos équipes favorites de la LNBH en temps réel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="bg-white text-brand-black px-8 py-3 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-brand-orange hover:text-white transition-all">
              VOIR LES MATCHS <ArrowRight size={18} />
            </button>
            <button className="border border-white/20 hover:bg-white/10 px-8 py-3 rounded-full font-bold transition-all">
              STATISTIQUES
            </button>
          </div>
        </div>
      </section>

      {/* Grid Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <FeatureCard 
          icon={<Zap className="text-brand-orange" />} 
          title="SismoAI Analytics" 
          desc="Prédictions de performances basées sur l'intelligence artificielle."
        />
        <FeatureCard 
          icon={<Globe className="text-brand-orange" />} 
          title="Visibility" 
          desc="Profils exportables pour une exposition internationale des talents."
        />
        <FeatureCard 
          icon={<Target className="text-brand-orange" />} 
          title="Scouting System" 
          desc="Détection et analyse des jeunes talents émergents en Haïti."
        />
      </div>

      {/* Recent Matches & Standings Teaser */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="font-display text-3xl uppercase tracking-tighter">Matchs Récents</h2>
              <Link to="/matches" className="text-xs font-bold text-brand-orange hover:underline uppercase tracking-[0.2em]">Tous les matchs</Link>
            </div>
            <div className="space-y-4">
              <MatchRow home="P-au-P Eagles" away="Cap Dragons" score="98 - 92" time="Final" id="1" />
              <MatchRow home="Jacmel Sharks" away="Saint-Marc Lions" score="84 - 87" time="Final" id="2" />
              <MatchRow home="Les Cayes Suns" away="Gonaïves Tigers" score="LIVE" time="Q3 04:22" isLive id="3" />
            </div>
          </div>

          {/* Actualités Section */}
          <div className="space-y-6 pt-12 border-t border-black/5">
            <div className="flex items-center justify-between">
              <h2 className="font-display text-3xl uppercase tracking-tighter italic">Dernières Actualités</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <NewsCard 
                title="LNBH : Le Gymnasium Vincent prêt pour les Playoffs" 
                category="Infrastructure"
                image="https://picsum.photos/seed/court/800/600"
              />
              <NewsCard 
                title="SismoAI Predict : Qui sera le prochain MVP ?" 
                category="Analytics"
                image="https://picsum.photos/seed/mvp/800/600"
              />
            </div>
          </div>
        </div>

        <div className="space-y-6 bg-white p-8 rounded-[40px] border border-black/5 shadow-sm sticky top-24 h-fit">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-2xl uppercase italic tracking-tight">Classement</h2>
            <Trophy size={20} className="text-brand-orange" />
          </div>
          <div className="space-y-6">
            <StandingsRow rank={1} team="P-au-P Eagles" record="12-2" active />
            <StandingsRow rank={2} team="Saint-Marc Lions" record="11-3" />
            <StandingsRow rank={3} team="Cap Dragons" record="9-5" />
            <StandingsRow rank={4} team="Jacmel Sharks" record="8-6" />
          </div>
          <Link to="/league" className="block text-center w-full py-6 text-[10px] font-black uppercase tracking-[0.3em] border-t border-black/5 text-black/40 hover:text-brand-orange transition-colors">
            Tableau Complet
          </Link>
        </div>
      </div>
    </div>
  );
}

function NewsCard({ title, category, image }: any) {
  return (
    <div className="group cursor-pointer space-y-4">
      <div className="aspect-[16/9] rounded-3xl overflow-hidden bg-black/5">
        <img src={image} alt={title} referrerPolicy="no-referrer" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100" />
      </div>
      <div className="space-y-2">
        <span className="text-[10px] font-black uppercase tracking-widest text-brand-orange">{category}</span>
        <h3 className="font-display text-xl uppercase leading-tight group-hover:text-brand-orange transition-colors">{title}</h3>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="bg-white p-8 rounded-3xl border border-black/5 hover:shadow-xl transition-all group">
      <div className="mb-6 group-hover:scale-110 transition-transform">{icon}</div>
      <h3 className="font-display text-xl uppercase mb-2 tracking-tight">{title}</h3>
      <p className="text-black/60 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

function MatchRow({ home, away, score, time, isLive, id }: any) {
  return (
    <Link to={`/matches/${id}`} className="bg-white p-6 rounded-3xl flex items-center justify-between border border-black/5 hover:border-brand-orange/30 transition-all hover:shadow-lg group">
      <div className="flex items-center gap-6 flex-1">
        <div className="flex items-center gap-3 w-1/3">
          <div className="w-8 h-8 rounded-full bg-black/5" />
          <span className="font-bold text-sm">{home}</span>
        </div>
        <div className={cn(
          "px-4 py-1 rounded text-sm font-mono font-bold",
          isLive ? "bg-brand-orange text-white animate-pulse" : "bg-black/5 text-black"
        )}>
          {score}
        </div>
        <div className="flex items-center gap-3 w-1/3 justify-end">
          <span className="font-bold text-sm">{away}</span>
          <div className="w-8 h-8 rounded-full bg-black/5" />
        </div>
      </div>
      <div className="ml-8 text-xs font-bold text-black/40 uppercase w-24 text-right">
        {time}
      </div>
    </Link>
  );
}

function StandingsRow({ rank, team, record, active }: any) {
  return (
    <div className={cn(
      "flex items-center justify-between p-2 rounded-xl transition-colors",
      active ? "bg-brand-orange/5" : ""
    )}>
      <div className="flex items-center gap-4">
        <span className={cn(
          "w-6 h-6 flex items-center justify-center rounded-full text-xs font-black",
          active ? "bg-brand-orange text-white" : "bg-black/5"
        )}>{rank}</span>
        <span className="font-bold text-sm">{team}</span>
      </div>
      <span className="font-mono text-xs opacity-50">{record}</span>
    </div>
  );
}
