'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MessageSquare } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-[#111111] border-b border-purple-900 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#7C3AED] to-[#4C1D95] flex items-center justify-center text-white font-bold text-2xl">
            S
          </div>
          <div>
            <div className="font-bold text-2xl tracking-tight text-white">Solulex</div>
            <div className="text-[10px] text-purple-400 -mt-1">Flexible Solutions</div>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <Link href="/" className="hover:text-white transition">Home</Link>
          <Link href="/categories" className="hover:text-white transition">Categories</Link>
          <Link href="/ai-guide" className="hover:text-white transition">SoluGuide AI</Link>
          <Link href="/partnerships" className="hover:text-white transition">Partnerships</Link>
          <Link href="/community" className="hover:text-white transition">Community</Link>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="outline" className="border-purple-600 text-purple-400 hover:bg-purple-950">
            Login
          </Button>
          <Button className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
}
