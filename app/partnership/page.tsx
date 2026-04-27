import AIChatWidget from '@/components/layout/AIChatWidget';
import { Button } from "@/components/ui/button";

export default function Partnerships() {
  return (
    <div className="min-h-screen bg-black py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6">Partnership Hub</h1>
        <p className="text-xl text-gray-400 mb-12">AI-powered matching for suppliers, co-ventures, and collaborations</p>

        <div className="bg-zinc-900 border border-purple-800 rounded-3xl p-12">
          <p className="text-2xl mb-8">"Describe your partnership need and SoluGuide will generate intro messages + match you instantly."</p>
          <Button className="py-8 px-16 text-lg bg-[#7C3AED]" onClick={() => alert("Opening AI Partnership Matcher...")}>
            Start AI Matching Now
          </Button>
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-6 text-sm">
          <div className="bg-zinc-900 p-8 rounded-3xl">Real Estate Agents</div>
          <div className="bg-zinc-900 p-8 rounded-3xl">Product Suppliers</div>
          <div className="bg-zinc-900 p-8 rounded-3xl">Travel & Wellness Experts</div>
        </div>
      </div>
      <AIChatWidget />
    </div>
  );
}
