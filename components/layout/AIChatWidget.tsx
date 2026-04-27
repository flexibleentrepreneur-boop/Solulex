'use client';

import { useState } from 'react';
import { MessageSquare, X, Send, Mic } from 'lucide-react';

export default function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hello! I'm SoluGuide, your AI concierge. What's your business challenge today?" }
  ]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { role: 'user', content: input }]);
    // TODO: Call Grok/OpenAI API here with context
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: "I understand. Let me build a complete solution bundle for you across Real Estate, Products, and Wellness..." 
      }]);
    }, 1000);
    setInput('');
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-[#7C3AED] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all glow-purple z-50"
      >
        <MessageSquare className="w-8 h-8 text-white" />
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 bg-[#111111] border border-purple-800 rounded-3xl shadow-2xl overflow-hidden z-50 flex flex-col h-[500px]">
          <div className="p-4 border-b border-purple-900 flex items-center justify-between bg-purple-950">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-purple-600" />
              <div>
                <div className="font-semibold text-white">SoluGuide AI</div>
                <div className="text-xs text-purple-400">Always here to help</div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)}><X className="text-gray-400" /></button>
          </div>

          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-black/40">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl ${msg.role === 'user' ? 'bg-purple-600 text-white' : 'bg-zinc-900 text-gray-200'}`}>
                  {msg.content}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t border-purple-900 bg-[#111]">
            <div className="flex gap-2">
              <button className="p-3 text-purple-400"><Mic /></button>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                placeholder="Describe your challenge... (e.g., I need a shop in Lagos)"
                className="flex-1 bg-zinc-900 border border-purple-800 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-purple-500"
              />
              <button onClick={sendMessage} className="p-3 bg-purple-600 rounded-2xl text-white">
                <Send />
              </button>
            </div>
            <div className="text-[10px] text-center text-gray-500 mt-2">Voice + Pidgin supported soon</div>
          </div>
        </div>
      )}
    </>
  );
}
