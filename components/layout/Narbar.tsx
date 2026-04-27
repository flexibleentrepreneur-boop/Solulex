'use client';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setUser(data.session?.user));
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => setUser(session?.user));
    return () => listener.subscription.unsubscribe();
  }, []);

  const logout = async () => {
    await supabase.auth.signOut();
    router.push('/');
  };

  return (
    <nav className="sticky top-0 z-50 bg-black/95 border-b border-purple-900 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#7C3AED] to-[#4C1D95] flex items-center justify-center text-3xl font-black text-white">S</div>
          <div>
            <div className="text-2xl font-bold tracking-tighter">Solulex</div>
            <div className="text-xs text-purple-400 -mt-1">Life OS for Entrepreneurs</div>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/categories" className="hover:text-purple-400 transition">Categories 1-5</Link>
          <Link href="/bundles" className="hover:text-purple-400 transition">Bundles</Link>
          <Link href="/ai-guide" className="hover:text-purple-400 transition">SoluGuide AI</Link>
          <Link href="/community" className="hover:text-purple-400 transition">Community</Link>
          <Link href="/partnerships" className="hover:text-purple-400 transition">Partnerships</Link>
          {user && <Link href="/dashboard" className="hover:text-purple-400 transition">Dashboard</Link>}
        </div>

        <div className="flex items-center gap-4">
          {user ? (
            <>
              <span className="text-sm text-purple-400">Hi, {user.email?.split('@')[0]}</span>
              <Button variant="outline" onClick={logout}>Logout</Button>
            </>
          ) : (
            <>
              <Link href="/login"><Button variant="ghost">Login</Button></Link>
              <Link href="/signup"><Button className="bg-[#7C3AED]">Join Free</Button></Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
