'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Dịch vụ', href: '#services' },
  { name: 'Về chúng tôi', href: '#about' },
  { name: 'Khai trương', href: '#event' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent',
        scrolled
          ? 'bg-black/90 backdrop-blur-md border-white/10 py-3'
          : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-12 h-12 transform group-hover:scale-110 transition-transform">
              <Image
                src="/images/logo_phat.png"
                alt="Phát Garage Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-2xl font-black tracking-tighter text-white uppercase italic">
              Phát <span className="text-brand-orange">Garage</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-brand-orange transition-colors uppercase tracking-widest"
              >
                {link.name}
              </Link>
            ))}
            <Button onClick={() => window.open('https://portal.phatgarage.com/login', '_blank')}
              className="bg-brand-orange hover:bg-orange-700 text-white font-bold uppercase tracking-tighter transition-all hover:scale-105 active:scale-95"
            >
              Đặt lịch ngay
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black border-b border-white/10"
          >
            <div className="flex flex-col p-6 gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-xl font-bold text-white hover:text-brand-orange transition-colors uppercase tracking-widest"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Button onClick={() => setIsOpen(false)}
                className="bg-brand-orange hover:bg-orange-700 text-white font-bold uppercase tracking-tighter w-full py-6 text-lg"
              >
                Đặt lịch ngay
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
