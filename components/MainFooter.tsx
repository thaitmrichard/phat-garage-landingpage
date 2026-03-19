'use client';

import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Youtube, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 border-t border-white/5 py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Link href="/" className="flex items-center gap-2 mb-6 group">
              <div className="w-10 h-10 bg-brand-red flex items-center justify-center rounded-sm transform group-hover:rotate-12 transition-transform">
                <span className="text-white font-black text-xl italic uppercase font-mono">P</span>
              </div>
              <span className="text-2xl font-black tracking-tighter text-white uppercase italic">
                Phát <span className="text-brand-red">Garage</span>
              </span>
            </Link>
            <p className="text-gray-500 text-sm italic max-w-sm mb-8 leading-relaxed font-black uppercase tracking-widest">
              Nhuận Đức, Củ Chi, TP. Hồ Chí Minh
            </p>
          </div>

          <div className="flex flex-col items-center gap-6">
            <h4 className="text-white font-black uppercase tracking-[0.3em] text-xs">Kết nối với chúng tôi</h4>
            <div className="flex items-center gap-6 text-gray-500">
              <Link href="#" className="hover:text-brand-red transition-all hover:scale-125">
                <Facebook size={24} />
              </Link>
              <Link href="#" className="hover:text-brand-red transition-all hover:scale-125">
                <Instagram size={24} />
              </Link>
              <Link href="#" className="hover:text-brand-red transition-all hover:scale-125">
                <Youtube size={24} />
              </Link>
              <Link href="#" className="hover:text-brand-red transition-all hover:scale-125">
                <Twitter size={24} />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/5 text-center">
          <p className="text-gray-600 text-xs font-bold uppercase tracking-widest mb-2">
            © {currentYear} PHÁT GARAGE - ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center justify-center gap-4 text-[10px] text-gray-700 font-bold uppercase tracking-widest">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
