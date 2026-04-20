import React, { useState } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell
} from 'recharts';
import { motion } from 'motion/react';
import { 
  Users, Trophy, Calendar, TrendingUp, Plus, 
  MessageSquare, Layout, ShieldCheck, Mail
} from 'lucide-react';
import { cn } from '../lib/utils';

const STATS = [
  { label: 'Utilisateurs', value: '12,840', change: '+12%', icon: <Users size={20} /> },
  { label: 'Matchs Joués', value: '156', change: '+8%', icon: <Calendar size={20} /> },
  { label: 'Joueurs Actifs', value: '312', change: '+24%', icon: <Trophy size={20} /> },
  { label: 'Revenu Pub', value: '$4,200', change: '+5%', icon: <TrendingUp size={20} /> },
];

export default function Dashboard() {
  const [tab, setTab] = useState('overview');

  return (
    <div className="space-y-8">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-1">
          <span className="text-xs font-bold text-brand-orange uppercase tracking-[0.2em]">Console Admin</span>
          <h1 className="text-5xl font-display uppercase tracking-tight">GESTION DE LA LIGUE</h1>
        </div>
        
        <div className="flex gap-3">
          <button className="bg-brand-black text-white px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-brand-orange transition-all">
            <Plus size={18} /> NOUVEAU MATCH
          </button>
          <button className="bg-white border border-black/5 px-6 py-3 rounded-full font-bold hover:bg-black/5 transition-all">
            PARAMÈTRES
          </button>
        </div>
      </header>

      {/* Tabs */}
      <div className="flex gap-8 border-b border-black/5">
        <TabButton active={tab === 'overview'} onClick={() => setTab('overview')}>Vue d'ensemble</TabButton>
        <TabButton active={tab === 'teams'} onClick={() => setTab('teams')}>Équipes & Joueurs</TabButton>
        <TabButton active={tab === 'content'} onClick={() => setTab('content')}>Actualités</TabButton>
        <TabButton active={tab === 'analytics'} onClick={() => setTab('analytics')}>Analytiques</TabButton>
      </div>

      {tab === 'overview' && (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map((stat, i) => (
              <div key={i} className="bg-white p-6 rounded-3xl border border-black/5 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-brand-orange/10 text-brand-orange flex items-center justify-center">
                    {stat.icon}
                  </div>
                  <span className="text-green-500 text-xs font-black">{stat.change}</span>
                </div>
                <div>
                  <div className="text-black/40 text-[10px] font-black uppercase tracking-widest">{stat.label}</div>
                  <div className="text-2xl font-display uppercase tracking-tight">{stat.value}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-white p-8 rounded-[40px] border border-black/5 min-h-[400px] flex flex-col">
              <h3 className="font-display text-2xl uppercase tracking-tighter mb-8">Engagement Utilisateurs</h3>
              <div className="flex-1">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={[
                    { name: 'Lundi', value: 400 },
                    { name: 'Mardi', value: 300 },
                    { name: 'Mercredi', value: 600 },
                    { name: 'Jeudi', value: 800 },
                    { name: 'Vendredi', value: 500 },
                    { name: 'Samedi', value: 900 },
                    { name: 'Dimanche', value: 1100 },
                  ]}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F0F0F0" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#666' }} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#666' }} />
                    <Tooltip cursor={{ fill: 'transparent' }} contentStyle={{ borderRadius: '16px', border: 'none' }} />
                    <Bar dataKey="value" fill="#FF6321" radius={[8, 8, 0, 0]} barSize={40} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-brand-black text-white p-8 rounded-[40px] shadow-2xl flex flex-col">
              <h3 className="font-display text-2xl uppercase tracking-tighter mb-8 italic">Actions Rapides</h3>
              <div className="space-y-4 flex-1">
                <ActionButton icon={<MessageSquare size={18} />} label="Répondre aux avis fans" count={12} />
                <ActionButton icon={<ShieldCheck size={18} />} label="Vérifier feuilles de match" count={4} />
                <ActionButton icon={<Mail size={18} />} label="Newsletter Hebdomadaire" />
                <ActionButton icon={<Layout size={18} />} label="Mise à jour bannière" />
              </div>
              <div className="pt-8 border-t border-white/10 mt-8">
                <button className="w-full py-4 bg-brand-orange text-white rounded-2xl font-bold uppercase text-xs tracking-widest hover:brightness-110 transition-all">
                  Rapport de Fin de Journée
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function TabButton({ children, active, onClick }: { children: any, active: boolean, onClick: any }) {
  return (
    <button 
      onClick={onClick}
      className={cn(
        "pb-4 text-xs font-bold uppercase tracking-widest transition-all relative",
        active ? "text-brand-orange" : "text-black/40 hover:text-black"
      )}
    >
      {children}
      {active && <motion.div layoutId="tab" className="absolute bottom-0 left-0 right-0 h-1 bg-brand-orange rounded-full" />}
    </button>
  );
}

function ActionButton({ icon, label, count }: any) {
  return (
    <button className="w-full flex items-center justify-between p-4 rounded-2xl hover:bg-white/10 transition-colors group">
      <div className="flex items-center gap-3">
        <span className="text-white/40 group-hover:text-brand-orange transition-colors">{icon}</span>
        <span className="text-sm font-medium">{label}</span>
      </div>
      {count && (
        <span className="bg-brand-orange text-[10px] font-black px-2 py-0.5 rounded-full">{count}</span>
      )}
    </button>
  );
}
