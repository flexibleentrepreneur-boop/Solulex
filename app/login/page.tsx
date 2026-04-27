'use client';
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import AIChatWidget from '@/components/layout/AIChatWidget';

export default function Login() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleMagicLink = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: `${window.location.origin}/dashboard` }
    });
    if (error) alert(error.message);
    else alert('Magic link sent! Check your email (including spam).');
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6 py-20">
      <div className="max-w-md w-full bg-zinc-900 border border-purple-800 rounded-3xl p-10">
        <div className="text-center mb-10">
          <div className="mx-auto w-16 h-16 rounded-2xl purple-gradient flex items-center justify-center text-4xl mb-4">S</div>
          <h1 className="text-4xl font-bold">Welcome to Solulex</h1>
          <p className="text-gray-400 mt-2">Sign in to access your Entrepreneur Life OS</p>
        </div>

        <div className="space-y-6">
          <div>
            <label className="text-sm text-gray-400 block mb-2">Email</label>
            <Input 
              type="email" 
              placeholder="your@email.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-black border-purple-700 focus:border-[#7C3AED]"
            />
          </div>

          <Button 
            onClick={handleMagicLink} 
            disabled={loading || !email}
            className="w-full py-7 bg-[#7C3AED] hover:bg-[#6D28D9] text-lg"
          >
            {loading ? 'Sending Magic Link...' : 'Send Magic Link (Passwordless)'}
          </Button>

          <p className="text-center text-sm text-gray-500">
            No password needed • Magic link sent to your inbox
          </p>
        </div>

        <div className="mt-10 text-center text-sm">
          New here? <Link href="/signup" className="text-purple-400 hover:underline">Create free account</Link>
        </div>
      </div>
      <AIChatWidget />
    </div>
  );
}
