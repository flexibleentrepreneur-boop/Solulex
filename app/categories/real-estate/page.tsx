'use client';

import { useState, useEffect } from 'react';
import { Search, MapPin, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AIChatWidget from '@/components/layout/AIChatWidget';

export default function RealEstateHub() {
  const [listings, setListings] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedState, setSelectedState] = useState('All');

  // Nigerian states (popular ones for MVP)
  const states = ['All', 'Lagos', 'Abuja', 'Rivers', 'Anambra', 'Oyo', 'Kano', ...];

  // TODO: Fetch from Supabase with filters
  useEffect(() => {
    // supabase.from('listings').select('*').eq('category_number', 1).eq('state', selectedState || undefined)
  }, [selectedState]);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white pb-20">
      <div className="bg-gradient-to-br from-[#7C3AED] to-[#4C1D95] py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline text-6xl mb-4">🏠</div>
          <h1 className="text-5xl font-bold mb-4">Real Estate Hub</h1>
          <p className="text-xl text-purple-200 max-w-2xl mx-auto">
            Find, buy, rent or invest in properties across Nigeria with AI assistance and virtual tours.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-zinc-900 border border-purple-800 rounded-3xl p-6 flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search properties in Lagos, Abuja..."
              className="w-full bg-black border border-purple-700 rounded-2xl pl-12 py-4 text-white placeholder:text-gray-500 focus:border-purple-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <select 
            className="bg-black border border-purple-700 rounded-2xl px-6 py-4 text-white"
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
          >
            {states.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
          <Button className="bg-[#7C3AED] hover:bg-[#6D28D9] px-10">Search with AI</Button>
        </div>
      </div>

      {/* Listings Grid */}
      <div className="max-w-7xl mx-auto px-6 mt-12 grid md:grid-cols-3 gap-8">
        {/* Sample listings – replace with real Supabase data */}
        {[1,2,3,4,5,6].map(i => (
          <Card key={i} className="bg-zinc-900 border-purple-900 overflow-hidden hover:border-purple-500 transition group">
            <div className="h-64 bg-gradient-to-br from-purple-900 to-black relative">
              <div className="absolute top-4 right-4 bg-black/70 px-3 py-1 rounded-full text-xs">Verified</div>
            </div>
            <CardHeader>
              <CardTitle className="text-xl">4-Bedroom Duplex in Lekki Phase 1</CardTitle>
              <p className="text-purple-400 flex items-center gap-2"><MapPin className="w-4 h-4" /> Lagos, Lagos State</p>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-white mb-4">₦185,000,000</div>
              <div className="flex gap-3">
                <Button className="flex-1 bg-purple-600">View Details + 360° Tour</Button>
                <Button variant="outline" className="border-purple-600">Talk to AI</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <AIChatWidget />
    </div>
  );
}
