'use client';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import AIChatWidget from '@/components/layout/AIChatWidget';

export default function Dashboard() {
  // In real app: fetch from Supabase + user session
  const metrics = [
    { label: "Venture Load", value: 65, color: "bg-purple-600" },
    { label: "Stress Level", value: 42, color: "bg-orange-500" },
    { label: "Wellness Score", value: 78, color: "bg-green-500" },
  ];

  return (
    <div className="min-h-screen bg-black py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h1 className="text-5xl font-bold">Business Health Dashboard</h1>
            <p className="text-purple-400">Port Harcourt • Entrepreneur Profile</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-400">FlexPoints Balance</p>
            <p className="text-4xl font-bold text-[#7C3AED]">1,245</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {metrics.map((m, i) => (
            <Card key={i} className="bg-zinc-900 border-purple-900">
              <CardHeader>
                <CardTitle>{m.label}</CardTitle>
              </CardHeader>
              <CardContent>
                <Progress value={m.value} className="h-3 mb-3" />
                <p className="text-5xl font-bold">{m.value}<span className="text-xl">%</span></p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-zinc-900 border-purple-900">
          <CardHeader>
            <CardTitle>Recent Activity & AI Recommendations</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-6 bg-zinc-950 rounded-2xl border border-purple-900/50">
              AI suggests: Book a Wellness session + fractional Real Estate investment in Rivers State.
            </div>
            <div className="text-sm text-gray-400">More empowerment tools (micro-learning, contract templates) coming in Phase 2.</div>
          </CardContent>
        </Card>
      </div>
      <AIChatWidget />
    </div>
  );
}
