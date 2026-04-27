'use client';
import { useState } from 'react';
import { Send, Mic, X, Sparkles } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function AIChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant' as const, content: "Hello! I'm SoluGuide, your AI concierge for Solulex. Describe any business struggle (in English or Pidgin) and I'll bundle solutions across Real Estate, Products, Beauty, Wellness & Travel." }
  ]);
  const [input, setInput] = useState('');
  const [isThinking, setIsThinking] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMsg = { role: 'user' as const, content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsThinking(true);

    // Simulate deep AI bundling (in production: call /api/ai or Grok/OpenAI with category context)
    setTimeout(() => {
      const aiResponse = `Understood: "${input}". Here's a smart bundle for you:\n\n• Category 1 (Real Estate): Shop space in Port Harcourt\n• Category 2 (Products): Bulk gadgets sourcing\n• Category 4 (Wellness): Stress relief session\n\nEstimated cost: ₦2.8M | Timeline: 18 days\nWant me to generate quotes, match providers, or escalate to human concierge?`;
      setMessages(prev => [...prev, { role: 'assistant' as const, content: aiResponse }]);
      setIsThinking(false);
    }, 1500);
  };

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-[#7C3AED] rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-all glow z-[60]"
      >
        <Sparkles className="w-8 h-8" />
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 w-96 h-[520px] bg-zinc-950 border border-purple-800 rounded-3xl overflow-hidden flex flex-col shadow-2xl z-[70]">
          {/* Header */}
          <div className="px-5 py-4 bg-purple-950 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full purple-gradient flex items-center justify-center text-xl">🧠</div>
              <div>
                <p className="font-semibold text-white">SoluGuide AI</p>
                <p className="text-xs text-purple-300">One problem. Full solution.</p>
              </div>
            </div>
            <button onClick={() => setOpen(false)} className="text-gray-400 hover:text-white"><X size={20} /></button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-5 overflow-y-auto space-y-4 text-sm bg-black/30">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-4 py-3 rounded-2xl ${msg.role === 'user' ? 'bg-[#7C3AED] text-white' : 'bg-zinc-900 border border-purple-900/50'}`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isThinking && <div className="text-purple-400 text-sm">SoluGuide is thinking across all 5 categories...</div>}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-purple-900 bg-zinc-950">
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" onClick={() => alert("Voice mode active (Web Speech API). Try speaking in Pidgin soon!")}>
                <Mic size={20} />
              </Button>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                placeholder="E.g. I need a shop + products in Rivers State..."
                className="flex-1 bg-zinc-900 border border-purple-700 rounded-2xl px-4 py-3 focus:outline-none focus:border-[#7C3AED]"
              />
              <Button onClick={sendMessage} disabled={!input.trim()} className="bg-[#7C3AED]">
                <Send size={18} />
              </Button>
            </div>
            <p className="text-[10px] text-center text-gray-500 mt-2">Supports English + Pidgin hints • Powered by AI</p>
          </div>
        </div>
      )}
    </>
  );
}
