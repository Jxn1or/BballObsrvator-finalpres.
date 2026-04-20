import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { 
  Trophy, 
  Users, 
  Calendar, 
  TrendingUp, 
  LayoutDashboard, 
  Settings,
  Search,
  Bell,
  Info
} from 'lucide-react';
import Home from './pages/Home';
import League from './pages/League';
import Players from './pages/Players';
import CalendarPage from './pages/Calendar';
import About from './pages/About';
import MatchDetails from './pages/MatchDetails';
import Scouting from './pages/Scouting';
import Dashboard from './pages/Dashboard';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#F5F5F0] flex flex-col md:flex-row">
        {/* Navigation - Sidebar for Desktop */}
        <aside className="hidden md:flex fixed left-0 top-0 h-full w-64 bg-brand-black text-white flex-col z-50">
          <div className="p-6 flex items-center gap-3">
            <div className="w-10 h-10 bg-brand-orange flex items-center justify-center font-display text-2xl">B</div>
            <span className="font-display text-xl tracking-tight">BBALL OBSERVATOR</span>
          </div>
          
          <nav className="flex-1 px-4 py-8 space-y-2">
            <NavItem to="/" icon={<LayoutDashboard size={20} />} label="Accueil" />
            <NavItem to="/league" icon={<Trophy size={20} />} label="Classement" />
            <NavItem to="/players" icon={<Users size={20} />} label="Joueurs" />
            <NavItem to="/matches" icon={<Calendar size={20} />} label="Calendrier" />
            <NavItem to="/scouting" icon={<TrendingUp size={20} />} label="Scouting AI" />
            <NavItem to="/about" icon={<Info size={20} />} label="La Ligue" />
          </nav>

          <div className="p-4 border-t border-white/10">
            <NavItem to="/admin" icon={<Settings size={20} />} label="Admin" />
          </div>
        </aside>

        {/* Bottom Navigation for Mobile */}
        <nav className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-brand-black border-t border-white/10 flex items-center justify-around z-50 px-2">
          <MobileNavItem to="/" icon={<LayoutDashboard size={20} />} label="Accueil" />
          <MobileNavItem to="/league" icon={<Trophy size={20} />} label="Stats" />
          <MobileNavItem to="/scouting" icon={<TrendingUp size={20} />} label="AI" />
          <MobileNavItem to="/players" icon={<Users size={20} />} label="Talents" />
          <MobileNavItem to="/about" icon={<Info size={20} />} label="Ligue" />
        </nav>

        {/* Main Content Area */}
        <main className="flex-1 md:pl-64 min-h-screen pb-20 md:pb-0">
          {/* Top Bar */}
          <header className="sticky top-0 h-16 bg-white/80 backdrop-blur-md border-b border-black/5 flex items-center justify-between px-4 md:px-8 z-40">
            <div className="flex md:hidden items-center gap-3 mr-4">
              <div className="w-8 h-8 bg-brand-orange flex items-center justify-center font-display text-xl text-white">B</div>
            </div>
            
            <div className="flex items-center gap-4 bg-black/5 px-4 py-2 rounded-full w-full max-w-sm md:max-w-md">
              <Search size={16} className="text-black/40 shrink-0" />
              <input 
                type="text" 
                placeholder="Rechercher..." 
                className="bg-transparent border-none outline-none text-xs w-full"
              />
            </div>
            
            <div className="flex items-center gap-4 ml-4 shrink-0">
              <button className="relative text-black/60 hover:text-black">
                <Bell size={20} />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-brand-orange rounded-full"></span>
              </button>
              <div className="w-8 h-8 rounded-full bg-brand-orange/20 border border-brand-orange/30 flex items-center justify-center">
                <span className="text-[10px] font-bold text-brand-orange">JD</span>
              </div>
            </div>
          </header>

          <div className="p-4 md:p-8 max-w-7xl mx-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/league" element={<League />} />
              <Route path="/players" element={<Players />} />
              <Route path="/matches" element={<CalendarPage />} />
              <Route path="/scouting" element={<Scouting />} />
              <Route path="/about" element={<About />} />
              <Route path="/matches/:id" element={<MatchDetails />} />
              <Route path="/admin" element={<Dashboard />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

function NavItem({ to, icon, label }: { to: string, icon: React.ReactNode, label: string }) {
  return (
    <Link 
      to={to} 
      className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/10 transition-colors group"
    >
      <span className="text-white/60 group-hover:text-brand-orange transition-colors">{icon}</span>
      <span className="text-sm font-medium tracking-wide uppercase">{label}</span>
    </Link>
  );
}

function MobileNavItem({ to, icon, label }: { to: string, icon: React.ReactNode, label: string }) {
  return (
    <Link 
      to={to} 
      className="flex flex-col items-center gap-1 p-2 group text-white/50 hover:text-brand-orange transition-colors"
    >
      <span className="group-hover:scale-110 transition-transform">{icon}</span>
      <span className="text-[10px] uppercase font-bold tracking-tighter line-clamp-1">{label}</span>
    </Link>
  );
}
