import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, Play, Award, BarChart3, Clock, MapPin } from 'lucide-react';
import { cn } from '../lib/utils';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';

export default function MatchDetails() {
  const { id } = useParams();

  return (
    <div className="space-y-8 pb-20">
      <Link to="/" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-black/40 hover:text-brand-orange transition-colors">
        <ChevronLeft size={16} /> Retour aux matchs
      </Link>

      {/* Match Header Card */}
      <div className="bg-brand-black text-white rounded-[40px] overflow-hidden p-12 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/20 to-transparent" />
        
        <div className="relative flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Home Team */}
          <div className="flex flex-col items-center gap-4 flex-1">
            <div className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center">
              <img src="https://picsum.photos/seed/eagles/200/200" alt="Eagles" className="w-16 h-16 object-contain" referrerPolicy="no-referrer" />
            </div>
            <h2 className="font-display text-4xl uppercase tracking-tighter">P-au-P Eagles</h2>
            <div className="text-white/40 text-xs font-black uppercase tracking-[0.2em]">Domicile</div>
          </div>

          {/* Score & VS */}
          <div className="flex flex-col items-center gap-2">
            <div className="text-6xl md:text-9xl font-display uppercase tracking-tight flex items-center gap-4">
              98 <span className="text-brand-orange">:</span> 92
            </div>
            <div className="bg-brand-orange/20 border border-brand-orange/30 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
              Final
            </div>
          </div>

          {/* Away Team */}
          <div className="flex flex-col items-center gap-4 flex-1">
            <div className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center">
              <img src="https://picsum.photos/seed/dragons/200/200" alt="Dragons" className="w-16 h-16 object-contain" referrerPolicy="no-referrer" />
            </div>
            <h2 className="font-display text-4xl uppercase tracking-tighter">Cap Dragons</h2>
            <div className="text-white/40 text-xs font-black uppercase tracking-[0.2em]">Extérieur</div>
          </div>
        </div>

        <div className="relative mt-12 flex items-center justify-center gap-12 border-t border-white/10 pt-8">
           <div className="flex items-center gap-2 text-white/60 text-xs font-bold uppercase tracking-widest">
             <MapPin size={14} className="text-brand-orange" /> Gymnasium Vincent, P-au-P
           </div>
           <div className="flex items-center gap-2 text-white/60 text-xs font-bold uppercase tracking-widest">
             <Clock size={14} className="text-brand-orange" /> 18 Avril 2024
           </div>
        </div>
      </div>

      {/* Highlights & Stats Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Highlights Section */}
          <div className="bg-white rounded-[40px] border border-black/5 p-8 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="font-display text-2xl uppercase italic">Highlights Vidéo</h3>
              <button className="text-brand-orange"><Play size={24} fill="currentColor" /></button>
            </div>
            <div className="aspect-video rounded-3xl bg-black overflow-hidden relative group cursor-pointer">
              <img src="https://picsum.photos/seed/match/1280/720" alt="Highlight" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-brand-orange flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                  <Play size={32} className="text-white ml-2" fill="currentColor" />
                </div>
              </div>
            </div>
          </div>

          {/* Box Score Mini */}
          <div className="bg-white rounded-[40px] border border-black/5 p-8 space-y-6">
             <h3 className="font-display text-2xl uppercase">Box Score</h3>
             <div className="space-y-2">
                <PlayerStatRow name="Jean-Jacques Pierre" pts={28} reb={4} ast={12} blk={1} stl={3} mvp />
                <PlayerStatRow name="Ricardo Civil" pts={22} reb={3} ast={4} blk={0} stl={1} />
                <PlayerStatRow name="Mario Destin" pts={15} reb={14} ast={2} blk={4} stl={0} />
             </div>
          </div>
        </div>

        {/* Sidebar: MVP & Key Info */}
        <div className="space-y-8">
           <div className="bg-brand-orange p-8 rounded-[40px] text-white space-y-6 shadow-xl shadow-brand-orange/20">
              <div className="flex items-center justify-between">
                <Award size={32} />
                <span className="text-[10px] font-black uppercase tracking-widest bg-white/20 px-2 py-1 rounded">Match MVP</span>
              </div>
              <div className="space-y-2">
                 <h4 className="font-display text-3xl uppercase tracking-tighter leading-none">Jean-Jacques <br /> Pierre</h4>
                 <p className="text-white/60 text-xs font-bold uppercase tracking-widest">P-au-P Eagles</p>
              </div>
              <div className="grid grid-cols-2 gap-4 border-t border-white/20 pt-6">
                 <div>
                    <div className="text-[10px] font-black opacity-60 uppercase mb-1">Points</div>
                    <div className="text-3xl font-display">28</div>
                 </div>
                 <div>
                    <div className="text-[10px] font-black opacity-60 uppercase mb-1">Assists</div>
                    <div className="text-3xl font-display">12</div>
                 </div>
              </div>
           </div>

           <div className="bg-white p-8 rounded-[40px] border border-black/5 space-y-6">
              <h3 className="font-display text-xl uppercase tracking-tight">Statistiques Équipe</h3>
              <div className="space-y-4">
                 <TeamCompStat label="Rebonds" home={42} away={38} />
                 <TeamCompStat label="Passes" home={24} away={19} />
                 <TeamCompStat label="3 Points %" home={38} away={32} />
                 <TeamCompStat label="Interceptions" home={12} away={10} />
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}

function PlayerStatRow({ name, pts, reb, ast, blk, stl, mvp }: any) {
  return (
    <div className={cn(
      "flex items-center justify-between p-4 rounded-2xl hover:bg-black/5 transition-colors",
      mvp && "bg-brand-orange/5 border border-brand-orange/10"
    )}>
      <div className="flex items-center gap-3">
        {mvp && <Award size={14} className="text-brand-orange" />}
        <span className="font-bold text-sm">{name}</span>
      </div>
      <div className="flex gap-6 font-mono text-xs font-bold">
        <div className="w-8 text-center">{pts}p</div>
        <div className="w-8 text-center opacity-40">{reb}r</div>
        <div className="w-8 text-center opacity-40">{ast}a</div>
      </div>
    </div>
  );
}

function TeamCompStat({ label, home, away }: any) {
  const total = home + away;
  const homePct = (home / total) * 100;

  return (
    <div className="space-y-2">
      <div className="flex justify-between text-[10px] font-black uppercase text-black/40 tracking-wider">
        <span>{home}</span>
        <span>{label}</span>
        <span>{away}</span>
      </div>
      <div className="h-1.5 bg-black/5 rounded-full overflow-hidden flex">
        <div style={{ width: `${homePct}%` }} className="h-full bg-brand-orange" />
        <div style={{ width: `${100 - homePct}%` }} className="h-full bg-brand-black" />
      </div>
    </div>
  );
}
