import AIChatWidget from '@/components/layout/AIChatWidget';
import { Card, CardContent } from "@/components/ui/card";

export default function Community() {
  return (
    <div className="min-h-screen bg-black py-16 px-6">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">Solulex Community</h1>
        <p className="text-xl text-gray-400">Connect with entrepreneurs across Nigeria • Local events • Verified forums</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <Card className="bg-zinc-900 border-purple-800">
          <CardContent className="p-10">
            <div className="text-6xl mb-6">🇳🇬</div>
            <h2 className="text-3xl font-semibold mb-4">Local Networking</h2>
            <p className="text-gray-400 mb-6">Port Harcourt • Lagos • Abuja • Enugu events and meetups</p>
            <ul className="space-y-3 text-sm">
              <li>• Rivers State Entrepreneur Forum – This weekend</li>
              <li>• Verified seller/buyer groups</li>
              <li>• Peer support for Wellness challenges</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900 border-purple-800">
          <CardContent className="p-10">
            <div className="text-6xl mb-6">💬</div>
            <h2 className="text-3xl font-semibold mb-4">Discussion Forums</h2>
            <p className="text-gray-400">Post struggles → Get bids from providers and community solutions</p>
            <div className="mt-8 p-6 bg-black rounded-2xl text-sm border border-purple-900">
              Example post: "Need bulk beauty products + shop space in PH" — 12 bids received
            </div>
          </CardContent>
        </Card>
      </div>
      <AIChatWidget />
    </div>
  );
}
