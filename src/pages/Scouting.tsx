import React, { useState } from 'react';
import { 
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer,
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts';
import { TrendingUp, Award, Target, Sparkles, Loader2, Search } from 'lucide-react';
import { getPlayerScoutingReport } from '../services/aiService';
import { cn } from '../lib/utils';

const RADAR_DATA = [
  { subject: 'Scoring', A: 120, B: 110, fullMark: 150 },
  { subject: 'Defense', A: 98, B: 130, fullMark: 150 },
  { subject: 'Speed', A: 86, B: 130, fullMark: 150 },
  { subject: 'Power', A: 99, B: 100, fullMark: 150 },
  { subject: 'Skill', A: 85, B: 90, fullMark: 150 },
  { subject: 'IQ', A: 65, B: 85, fullMark: 150 },
];

const PERFORMANCE_DATA = [
  { match: 'M1', pts: 22, ast: 4, reb: 2 },
  { match: 'M2', pts: 18, ast: 6, reb: 3 },
  { match: 'M3', pts: 28, ast: 3, reb: 5 },
  { match: 'M4', pts: 24, ast: 8, reb: 4 },
  { match: 'M5', pts: 32, ast: 5, reb: 6 },
];

export default function Scouting() {
  const [loading, setLoading] = useState(false);
  const [report, setReport] = useState<any>(null);
  const [selectedPlayer, setSelectedPlayer] = useState('Jean-Jacques Pierre');

  const generateReport = async () => {
    setLoading(true);
    try {
      const data = await getPlayerScoutingReport(selectedPlayer, {
        ppg: 24.5,
        rpg: 4.2,
        apg: 8.1,
        last5: PERFORMANCE_DATA
      });
      setReport(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-1">
          <span className="text-xs font-bold text-brand-orange uppercase tracking-[0.2em]">Advanced Analytics</span>
          <h1 className="text-5xl font-display uppercase tracking-tight">SCOUTING AI <span className="text-brand-orange italic">2.0</span></h1>
        </div>
        
        <button 
          onClick={generateReport}
          disabled={loading}
          className="bg-brand-black text-white px-8 py-4 rounded-full font-bold flex items-center gap-3 hover:bg-brand-orange disabled:opacity-50 transition-all shadow-lg"
        >
          {loading ? <Loader2 size={20} className="animate-spin" /> : <Sparkles size={20} className="text-brand-orange" />}
          GÉNÉRER ANALYSE SISMOAI
        </button>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Performance Visuals */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white p-8 rounded-[40px] border border-black/5 shadow-sm space-y-8">
            <div className="flex items-center justify-between">
              <h3 className="font-display text-2xl uppercase tracking-tighter">Comparaison de Profil</h3>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-brand-orange" />
                <span className="text-[10px] font-bold uppercase text-black/40">Joueur Actuel</span>
              </div>
            </div>
            
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={RADAR_DATA}>
                  <PolarGrid stroke="#E5E5E5" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: '#141414', fontSize: 10, fontWeight: 700 }} />
                  <PolarRadiusAxis angle={30} domain={[0, 150]} tick={false} axisLine={false} />
                  <Radar
                    name="Jean-Jacques Pierre"
                    dataKey="A"
                    stroke="#FF6321"
                    fill="#FF6321"
                    fillOpacity={0.6}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white p-8 rounded-[40px] border border-black/5 shadow-sm space-y-8">
            <h3 className="font-display text-2xl uppercase tracking-tighter">Évolution de Performance</h3>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={PERFORMANCE_DATA}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F0F0F0" />
                  <XAxis dataKey="match" tick={{ fontSize: 10, fill: '#666' }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fontSize: 10, fill: '#666' }} axisLine={false} tickLine={false} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                  />
                  <Line type="monotone" dataKey="pts" stroke="#FF6321" strokeWidth={4} dot={{ r: 6, fill: '#FF6321', strokeWidth: 2, stroke: '#fff' }} activeDot={{ r: 8 }} />
                  <Line type="monotone" dataKey="ast" stroke="#141414" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Right: AI Report Content */}
        <div className="space-y-8">
          <div className={cn(
            "bg-brand-black text-white p-8 rounded-[40px] shadow-2xl transition-all duration-500 min-h-[600px]",
            !report && "flex items-center justify-center border-2 border-dashed border-white/10 bg-transparent text-black/20"
          )}>
            {!report ? (
              <div className="text-center space-y-4">
                <Target size={48} className="mx-auto" />
                <p className="font-display uppercase tracking-widest text-sm">Prêt pour l'analyse</p>
              </div>
            ) : (
              <div className="space-y-8">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 bg-brand-orange text-[10px] font-black uppercase px-2 py-0.5 rounded">Rapport IA</div>
                  <h3 className="font-display text-4xl uppercase tracking-tighter leading-none">{selectedPlayer}</h3>
                </div>

                <div className="space-y-4">
                  <h4 className="text-brand-orange text-[10px] font-black uppercase tracking-widest">Projection de Potentiel</h4>
                  <div className="text-5xl font-display uppercase italic">{report.potential}</div>
                </div>

                <div className="space-y-6 pt-6 border-t border-white/10">
                  <div className="space-y-3">
                    <h4 className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white/40">
                      <TrendingUp size={14} className="text-green-400" /> Forces
                    </h4>
                    <ul className="space-y-2">
                      {report.strengths.map((s: string, i: number) => (
                        <li key={i} className="text-sm font-medium border-l-2 border-brand-orange pl-4">{s}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white/40">
                      <Target size={14} className="text-red-400" /> Analyse Tactique
                    </h4>
                    <p className="text-sm text-white/70 leading-relaxed italic">
                      "{report.prediction}"
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10">
                  <button className="w-full py-4 bg-white text-brand-black rounded-2xl font-bold uppercase text-xs tracking-widest hover:bg-brand-orange hover:text-white transition-all">
                    Exporter le profil FIFA/NBA Style
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
