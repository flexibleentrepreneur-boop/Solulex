import Navbar from '@/components/layout/Navbar';
import AIChatWidget from '@/components/layout/AIChatWidget';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-24 pb-20 px-6 relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-purple-950 text-purple-300 px-4 py-1.5 rounded-full text-sm mb-6">
            🇳🇬 Built for Nigerian Entrepreneurs
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold tracking-tighter mb-6">
            One Problem.<br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7C3AED] to-purple-400">
              Complete Solution.
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Solulex is your AI-powered Entrepreneur Life OS. Real Estate • Products • Beauty • Wellness • Travel — all connected.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#7C3AED] hover:bg-[#6D28D9] text-lg px-10 py-7 rounded-2xl">
              Talk to SoluGuide AI Now
            </Button>
            <Button size="lg" variant="outline" className="border-purple-600 text-lg px-10 py-7 rounded-2xl">
              Browse Categories
            </Button>
          </div>
        </div>

        {/* Numbered Category Cards */}
        <div className="max-w-6xl mx-auto mt-20 grid grid-cols-2 md:grid-cols-5 gap-6 px-6">
          {[1,2,3,4,5].map((num, i) => (
            <div key={i} className="bg-zinc-900 border border-purple-900/50 rounded-3xl p-8 hover:border-purple-500 transition group">
              <div className="text-5xl font-bold text-purple-600 mb-4">{num}</div>
              <div className="text-xl font-semibold mb-2">Category {num}</div>
              <div className="text-sm text-gray-400">Real Estate / Products / etc.</div>
            </div>
          ))}
        </div>
      </section>

      <AIChatWidget />
    </div>
  );
}
