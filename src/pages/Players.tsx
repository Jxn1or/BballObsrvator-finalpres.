import React, { useState } from 'react';
import { Search, Filter, Mail, Share2, TrendingUp } from 'lucide-react';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';

const PLAYERS = [
  { id: '1', name: 'Jean-Jacques Pierre', team: 'P-au-P Eagles', pos: 'PG', points: 24.5, rebounds: 4.2, assists: 8.1, eff: 28.5 },
  { id: '2', name: 'Bastien Louidort', team: 'Cap Dragons', pos: 'SF', points: 19.8, rebounds: 10.2, assists: 2.1, eff: 24.2 },
  { id: '3', name: 'Mario Destin', team: 'Saint-Marc Lions', pos: 'C', points: 15.4, rebounds: 12.8, assists: 1.5, eff: 26.1 },
  { id: '4', name: 'Ricardo Civil', team: 'Jacmel Sharks', pos: 'SG', points: 22.1, rebounds: 3.5, assists: 4.2, eff: 19.8 },
  { id: '5', name: 'Dimitri Joseph', team: 'Les Cayes Suns', pos: 'PF', points: 18.2, rebounds: 8.5, assists: 3.1, eff: 21.4 },
  { id: '6', name: 'Wilson Sanon', team: 'Gonaïves Tigers', pos: 'PG', points: 16.5, rebounds: 3.2, assists: 7.4, eff: 20.2 },
];

export default function Players() {
  const [search, setSearch] = useState('');

  return (
    <div className="space-y-8">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-1">
          <span className="text-xs font-bold text-brand-orange uppercase tracking-[0.2em]">Data & Talent</span>
          <h1 className="text-5xl font-display uppercase tracking-tight">BASE DE DONNÉES JOUEURS</h1>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="bg-white px-6 py-3 rounded-full border border-black/5 shadow-sm flex items-center gap-3 w-80">
            <Search size={18} className="text-black/30" />
            <input 
              type="text" 
              placeholder="Nom du joueur..." 
              className="bg-transparent border-none outline-none text-sm w-full"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <button className="bg-brand-black text-white p-3 rounded-full hover:bg-brand-orange transition-colors">
            <Filter size={20} />
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PLAYERS.filter(p => p.name.toLowerCase().includes(search.toLowerCase())).map(player => (
          <PlayerCard key={player.id} {...player} />
        ))}
      </div>
    </div>
  );
}

function PlayerCard({ name, team, pos, points, rebounds, assists, eff }: any) {
  return (
    <div className="bg-white rounded-[32px] border border-black/5 p-8 space-y-6 hover:shadow-2xl transition-all group overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-orange/5 rounded-full blur-3xl group-hover:bg-brand-orange/10 transition-colors" />
      
      <div className="flex items-start justify-between relative">
        <div className="space-y-1">
          <span className="bg-black/5 px-2 py-0.5 rounded text-[10px] font-black uppercase text-black/40">{pos}</span>
          <h3 className="font-display text-2xl uppercase tracking-tight">{name}</h3>
          <p className="text-brand-orange text-xs font-bold uppercase tracking-widest">{team}</p>
        </div>
        <div className="w-16 h-16 rounded-full bg-black/5 overflow-hidden">
          <img src={`https://picsum.photos/seed/${name}/200/200`} alt={name} referrerPolicy="no-referrer" />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 border-y border-black/5 py-6">
        <StatItem label="PTS" value={points} />
        <StatItem label="REB" value={rebounds} />
        <StatItem label="AST" value={assists} />
      </div>

      <div className="flex items-center justify-between pt-2">
        <div className="space-y-1">
          <label className="text-[10px] uppercase font-black text-black/30">Efficacité</label>
          <div className="font-mono font-bold text-brand-orange text-xl">{eff}</div>
        </div>
        <div className="flex gap-2">
          <button className="p-3 rounded-full bg-black/5 text-black hover:bg-brand-orange hover:text-white transition-all">
            <TrendingUp size={18} />
          </button>
          <button className="p-3 rounded-full bg-black/5 text-black hover:bg-brand-orange hover:text-white transition-all">
            <Share2 size={18} />
          </button>
        </div>
      </div>
      
      <button className="w-full py-4 text-xs font-bold uppercase tracking-widest bg-brand-black text-white rounded-2xl hover:bg-brand-orange transition-colors">
        Voir le profil détaillé
      </button>
    </div>
  );
}

function StatItem({ label, value }: { label: string, value: any }) {
  return (
    <div className="text-center space-y-1">
      <div className="text-[10px] font-black text-black/30 uppercase">{label}</div>
      <div className="text-lg font-mono font-bold">{value}</div>
    </div>
  );
}
