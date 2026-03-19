'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, ShieldCheck, Zap, Award } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-black text-white">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-40 bg-cover bg-center bg-no-repeat transition-transform duration-10000 scale-105"
        style={{ backgroundImage: 'url("/images/hero-bg.png")' }}
      />
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/40 to-transparent" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black via-transparent to-transparent opacity-80" />

      <div className="container mx-auto px-4 md:px-6 z-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block py-1 px-3 mb-6 border border-brand-orange text-brand-orange text-xs font-black uppercase tracking-[0.2em] rounded-sm bg-brand-orange/10">
              Technology & Innovation
            </span>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight uppercase italic tracking-tighter">
              PHÁT <span className="text-brand-orange">GARAGE</span><br />
              <span className="text-gray-300">CHĂM SÓC XE BẰNG</span><br />
              CÔNG NGHỆ & TÂM HUYẾT
            </h1>
            
            <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed">
              Hệ thống sửa chữa và bảo dưỡng ô tô hiện đại nhất tại Củ Chi. 
              Chúng tôi cam kết mang lại sự an tâm tuyệt đối và dịch vụ đẳng cấp cho xế cưng của bạn.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-brand-orange hover:bg-orange-700 text-white font-black uppercase tracking-widest px-8 py-7 text-lg group h-auto transition-all hover:translate-x-1"
                asChild
              >
                <a href="tel:0333338481">
                  Hotline: 033333 8481
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/20 text-white hover:bg-white hover:text-black font-black uppercase tracking-widest px-8 py-7 text-lg h-auto transition-all"
              >
                Xem dịch vụ
              </Button>
            </div>
          </motion.div>

          {/* Quick Features */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-white/10 pt-10"
          >
            <div className="flex items-center gap-4">
              <div className="text-brand-orange"><ShieldCheck size={32} /></div>
              <div>
                <h3 className="font-bold uppercase text-sm tracking-wider">Bảo hành dài hạn</h3>
                <p className="text-xs text-gray-500">Cam kết chất lượng phụ tùng chính hãng</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-brand-orange"><Zap size={32} /></div>
              <div>
                <h3 className="font-bold uppercase text-sm tracking-wider">Công nghệ hiện đại</h3>
                <p className="text-xs text-gray-500">Máy chẩn đoán lỗi chuyên sâu thế hệ mới</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-brand-orange"><Award size={32} /></div>
              <div>
                <h3 className="font-bold uppercase text-sm tracking-wider">Kỹ thuật viên giỏi</h3>
                <p className="text-xs text-gray-500">Đội ngũ tay nghề cao & tận tâm</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
