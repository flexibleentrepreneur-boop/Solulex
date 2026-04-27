'use client';
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AIChatWidget from '@/components/layout/AIChatWidget';

const categoryData = [
  { num: 1, emoji: "🏠", name: "Real Estate" },
  { num: 2, emoji: "🛍️", name: "Products & Assets" },
  { num: 3, emoji: "✨", name: "Beauty" },
  { num: 4, emoji: "🧘‍♂️", name: "Wellness" },
  { num: 5, emoji: "✈️", name: "Travel" },
];

export default function BundlesPage() {
  const [selected, setSelected] = useState<number[]>([]);
  const [bundleName, setBundleName] = useState("");

  const toggle = (num: number) => {
    setSelected(prev => prev.includes(num) ? prev.filter(n => n !== num) : [...prev, num]);
  };

  const generateBundle = () => {
    if (selected.length === 0) return alert("Select at least one category");
    alert(`AI Bundle "${bundleName || 'Custom Launch Pack'}" generated with categories: ${selected.join(', ')}\n\nQuotes, providers & timeline ready. Check your dashboard.`);
  };

  return (
    <div className="min-h-screen bg-black py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-4 purple-gradient bg-clip-text text-transparent">Intelligent Bundle Builder</h1>
        <p className="text-center text-gray-400 mb-12">Mix categories for complete solutions. AI handles the rest.</p>

        <Card className="bg-zinc-900 border-purple-800 mb-12">
          <CardHeader>
            <CardTitle className="text-2xl">Select Categories for Your Bundle</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {categoryData.map(cat => (
                <button
                  key={cat.num}
                  onClick={() => toggle(cat.num)}
                  className={`p-8 rounded-3xl border-2 transition-all text-center ${selected.includes(cat.num) ? 'border-[#7C3AED] bg-purple-950/50 scale-105' : 'border-purple-900 hover:border-purple-600'}`}
                >
                  <div className="text-6xl mb-4">{cat.emoji}</div>
                  <div className="font-semibold">{cat.num}. {cat.name}</div>
                </button>
              ))}
            </div>

            <input
              type="text"
              placeholder="Bundle name (e.g. New Shop Launch Pack)"
              value={bundleName}
              onChange={(e) => setBundleName(e.target.value)}
              className="mt-8 w-full bg-zinc-950 border border-purple-700 rounded-2xl px-6 py-4 text-lg"
            />

            <Button onClick={generateBundle} className="mt-6 w-full py-8 text-lg bg-gradient-to-r from-[#7C3AED] to-purple-600">
              Generate Full AI Bundle (Quotes + Providers + Timeline)
            </Button>
          </CardContent>
        </Card>
      </div>
      <AIChatWidget />
    </div>
  );
}
