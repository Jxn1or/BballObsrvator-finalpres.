import React from 'react';
import { motion } from 'motion/react';
import { Search, Trophy, Filter, ArrowUpRight } from 'lucide-react';
import { cn } from '../lib/utils';

const TEAMS = [
  { id: '1', name: 'Port-au-Prince Eagles', city: 'P-au-P', wins: 12, losses: 2, pct: '.857', streak: 'W4' },
  { id: '2', name: 'Saint-Marc Lions', city: 'Saint-Marc', wins: 11, losses: 3, pct: '.786', streak: 'W2' },
  { id: '3', name: 'Cap-Haïtien Dragons', city: 'Cap-Haïtien', wins: 9, losses: 5, pct: '.643', streak: 'L1' },
  { id: '4', name: 'Jacmel Sharks', city: 'Jacmel', wins: 8, losses: 6, pct: '.571', streak: 'L2' },
  { id: '5', name: 'Les Cayes Suns', city: 'Les Cayes', wins: 7, losses: 7, pct: '.500', streak: 'W1' },
  { id: '6', name: 'Gonaïves Tigers', city: 'Gonaïves', wins: 6, losses: 8, pct: '.429', streak: 'L1' },
  { id: '7', name: 'Hinche Coyotes', city: 'Hinche', wins: 5, losses: 9, pct: '.357', streak: 'W1' },
  { id: '8', name: 'Jérémie Hawks', city: 'Jérémie', wins: 4, losses: 10, pct: '.286', streak: 'L3' },
];

export default function League() {
  return (
    <div className="space-y-8">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-1">
          <span className="text-xs font-bold text-brand-orange uppercase tracking-[0.2em]">Saison 2024</span>
          <h1 className="text-5xl font-display uppercase tracking-tight">CLASSEMENT LNBH</h1>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="flex bg-white px-4 py-2 rounded-full border border-black/5 shadow-sm">
            <Filter size={16} className="text-black/40 mr-2 mt-1" />
            <select className="bg-transparent border-none outline-none text-sm font-bold uppercase">
              <SortedOption value="standard">Saison Régulière</SortedOption>
              <SortedOption value="playoffs">Playoffs</SortedOption>
            </select>
          </div>
        </div>
      </header>

      <div className="bg-white rounded-[40px] border border-black/5 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[700px] md:min-w-0">
            <thead>
            <tr className="border-b border-black/5">
              <th className="p-8 font-display text-xs uppercase text-black/40 w-16">#</th>
              <th className="py-8 font-display text-xs uppercase text-black/40">Équipe</th>
              <th className="py-8 px-4 font-display text-xs uppercase text-black/40 text-center">V</th>
              <th className="py-8 px-4 font-display text-xs uppercase text-black/40 text-center">D</th>
              <th className="py-8 px-4 font-display text-xs uppercase text-black/40 text-center">%</th>
              <th className="py-8 px-4 font-display text-xs uppercase text-black/40 text-center">Série</th>
              <th className="p-8 font-display text-xs uppercase text-black/40 text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {TEAMS.map((team, idx) => (
              <tr 
                key={team.id} 
                className={cn(
                  "group hover:bg-black/5 transition-colors cursor-pointer border-b border-black/5 last:border-0",
                  idx < 4 ? "bg-brand-orange/[0.02]" : ""
                )}
              >
                <td className="p-8">
                  <span className={cn(
                    "text-xl font-display",
                    idx < 4 ? "text-brand-orange" : "text-black/20"
                  )}>{idx + 1}</span>
                </td>
                <td className="py-8">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-black/5" />
                    <div>
                      <div className="font-bold text-lg leading-tight">{team.name}</div>
                      <div className="text-xs text-black/40 uppercase font-bold tracking-wider">{team.city}</div>
                    </div>
                  </div>
                </td>
                <td className="py-8 px-4 font-mono font-bold text-center">{team.wins}</td>
                <td className="py-8 px-4 font-mono font-bold text-center">{team.losses}</td>
                <td className="py-8 px-4 font-mono text-center opacity-60">{team.pct}</td>
                <td className="py-8 px-4 text-center">
                  <span className={cn(
                    "px-3 py-1 rounded-full text-[10px] font-black uppercase",
                    team.streak.startsWith('W') ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                  )}>
                    {team.streak}
                  </span>
                </td>
                <td className="p-8 text-right">
                  <button className="p-2 rounded-full border border-black/10 group-hover:bg-brand-orange group-hover:border-brand-orange group-hover:text-white transition-all">
                    <ArrowUpRight size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
      
    <div className="p-8 bg-brand-black text-white rounded-[40px] flex items-center justify-between">
        <div className="space-y-1">
          <h3 className="font-display text-2xl uppercase tracking-tight">Zone d'élite</h3>
          <p className="text-white/40 text-sm">Les 4 premières équipes se qualifient pour les demi-finales.</p>
        </div>
        <Zap className="text-brand-orange w-12 h-12 opacity-50" />
      </div>
    </div>
  );
}

function SortedOption({ children, value }: any) {
  return <option value={value}>{children}</option>;
}

function Zap({ className, w, h }: any) {
  return <div className={className}>⚡</div>;
}
