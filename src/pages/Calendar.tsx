import React, { useState } from 'react';
import { Calendar as CalendarIcon, MapPin, Clock, Trophy, ChevronRight, ChevronLeft } from 'lucide-react';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';

const UPCOMING_MATCHES = [
  {
    date: '2024-04-22',
    day: 'Lundi',
    games: [
      { id: '4', home: 'Cap Dragons', away: 'Saint-Marc Lions', time: '18:30', venue: 'Gymnasium Vincent', cat: 'Saison Régulière' },
      { id: '5', home: 'Jacmel Sharks', away: 'P-au-P Eagles', time: '20:30', venue: 'Gymnasium Vincent', cat: 'Saison Régulière' },
    ]
  },
  {
    date: '2024-04-24',
    day: 'Mercredi',
    games: [
      { id: '6', home: 'Les Cayes Suns', away: 'Hinche Coyotes', time: '19:00', venue: 'Parc Larco', cat: 'Saison Régulière' },
    ]
  },
  {
    date: '2024-04-26',
    day: 'Vendredi',
    games: [
      { id: '7', home: 'Gonaïves Tigers', away: 'Jérémie Hawks', time: '18:00', venue: 'Centre Sportif Gonaïves', cat: 'Saison Régulière' },
      { id: '8', home: 'Port-de-Paix Kings', away: 'Ouanaminthe Rebels', time: '20:00', venue: 'Gymnasium Nord-Ouest', cat: 'Saison Régulière' },
    ]
  }
];

export default function Calendar() {
  const [selectedMonth, setSelectedMonth] = useState('AVRIL');

  return (
    <div className="space-y-12 pb-20">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-black/5 pb-8">
        <div className="space-y-1">
          <span className="text-xs font-bold text-brand-orange uppercase tracking-[0.2em]">Saison 2024</span>
          <h1 className="text-5xl font-display uppercase tracking-tight">CALENDRIER OFFICIEL</h1>
        </div>
        
        <div className="flex items-center gap-6">
          <button className="p-2 border border-black/5 rounded-full hover:bg-black/5 transition-colors">
            <ChevronLeft size={20} />
          </button>
          <div className="text-xl font-display uppercase tracking-widest">{selectedMonth} 2024</div>
          <button className="p-2 border border-black/5 rounded-full hover:bg-black/5 transition-colors">
            <ChevronRight size={20} />
          </button>
        </div>
      </header>

      <div className="space-y-16">
        {UPCOMING_MATCHES.map((dayGroup, idx) => (
          <section key={dayGroup.date} className="relative pl-0 md:pl-32 group">
            {/* Date Anchor - Oversized Typographic Style (Recipe 9) */}
            <div className="md:absolute md:left-0 md:top-0 mb-4 md:mb-0">
               <div className="text-6xl md:text-8xl font-display text-black/5 group-hover:text-brand-orange/10 transition-colors leading-none tracking-tighter">
                 {dayGroup.date.split('-')[2]}
               </div>
               <div className="text-[10px] font-black uppercase tracking-widest text-brand-orange mt-1">
                 {dayGroup.day}
               </div>
            </div>

            <div className="space-y-4">
              {dayGroup.games.map((game) => (
                <Link 
                  to={`/matches/${game.id}`} 
                  key={game.id}
                  className="block bg-white rounded-3xl border border-black/5 p-6 md:p-8 hover:shadow-xl hover:border-brand-orange/20 transition-all group/card"
                >
                  <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* Game Time & Cat */}
                    <div className="flex flex-col items-center md:items-start gap-1 w-24">
                      <div className="flex items-center gap-2 text-brand-orange">
                        <Clock size={16} />
                        <span className="font-mono font-bold text-lg">{game.time}</span>
                      </div>
                      <span className="text-[8px] font-black uppercase tracking-widest text-black/30 text-center md:text-left">{game.cat}</span>
                    </div>

                    {/* Matchup */}
                    <div className="flex-1 flex items-center justify-center gap-8 md:gap-12">
                       <div className="flex flex-col items-center gap-2 flex-1">
                         <div className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center group-hover/card:scale-110 transition-transform">
                           <Trophy size={20} className="text-black/20" />
                         </div>
                         <span className="font-display text-xl uppercase tracking-tight text-center">{game.home}</span>
                       </div>

                       <div className="text-xs font-black text-black/10">VS</div>

                       <div className="flex flex-col items-center gap-2 flex-1">
                         <div className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center group-hover/card:scale-110 transition-transform">
                           <Trophy size={20} className="text-black/20" />
                         </div>
                         <span className="font-display text-xl uppercase tracking-tight text-center">{game.away}</span>
                       </div>
                    </div>

                    {/* Venue & Action */}
                    <div className="flex flex-col items-center md:items-end gap-4 w-48">
                       <div className="flex items-center gap-2 text-black/40 text-[10px] font-bold uppercase tracking-wider">
                         <MapPin size={12} /> {game.venue}
                       </div>
                       <button className="bg-brand-black text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-brand-orange transition-colors">
                         Billetterie
                       </button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-12 p-8 bg-brand-orange rounded-[40px] text-white flex items-center justify-between shadow-2xl shadow-brand-orange/20">
         <div className="space-y-1">
           <h3 className="font-display text-2xl uppercase tracking-tight italic">Alerte Match</h3>
           <p className="text-white/70 text-sm italic">Ne manquez aucun match. Activez les notifications pour votre équipe favorite.</p>
         </div>
         <button className="bg-white text-brand-orange px-8 py-3 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-brand-black hover:text-white transition-all">
           Activer
         </button>
      </div>
    </div>
  );
}
