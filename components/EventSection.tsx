'use client';

import React from 'react';
import { motion } from 'framer-motion';
import CountdownTimer from './CountdownTimer';
import { Calendar, MapPin, Clock } from 'lucide-react';

export default function EventSection() {
  return (
    <section id="event" className="py-24 bg-brand-black relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-red to-transparent opacity-50" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-red to-transparent opacity-50" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-zinc-900 border border-white/10 p-8 md:p-16 rounded-2xl relative z-10 overflow-hidden">
          {/* Accent Glow */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-red/10 blur-[100px] rounded-full" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase italic tracking-tighter text-white">
                SỰ KIỆN <span className="text-brand-red underline decoration-4 underline-offset-8">KHAI TRƯƠNG</span><br />
                PHÁT GARAGE CỦ CHI
              </h2>
              <p className="text-gray-400 mb-8 text-lg border-l-4 border-brand-red pl-6">
                Chào đón diện mạo mới, công nghệ mới! Hãy đến và trải nghiệm dịch vụ chăm sóc xe chuyên nghiệp nhất khu vực Củ Chi với hàng ngàn ưu đãi hấp dẫn.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4 text-white">
                  <div className="w-10 h-10 bg-brand-red/20 rounded-full flex items-center justify-center text-brand-red group hover:bg-brand-red hover:text-white transition-colors">
                    <Calendar size={20} />
                  </div>
                  <span className="font-bold uppercase tracking-wider">24 Tháng 03, 2026</span>
                </div>
                <div className="flex items-center gap-4 text-white">
                  <div className="w-10 h-10 bg-brand-red/20 rounded-full flex items-center justify-center text-brand-red group hover:bg-brand-red hover:text-white transition-colors">
                    <Clock size={20} />
                  </div>
                  <span className="font-bold uppercase tracking-wider">08:00 AM - 05:00 PM</span>
                </div>
                <div className="flex items-center gap-4 text-white">
                  <div className="w-10 h-10 bg-brand-red/20 rounded-full flex items-center justify-center text-brand-red group hover:bg-brand-red hover:text-white transition-colors">
                    <MapPin size={20} />
                  </div>
                  <span className="font-bold uppercase tracking-wider">27B Nguyễn Thị Rành, xã Tân An Hội, Củ Chi, TP. Hồ Chí Minh</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <h3 className="text-sm font-black uppercase tracking-[0.3em] text-gray-500 mb-8">Thời gian còn lại</h3>
              <CountdownTimer targetDate="2026-03-24T08:00:00" />
              <div className="mt-12 bg-black/40 p-6 border border-white/5 rounded-xl">
                <p className="text-brand-red font-black uppercase tracking-widest text-sm mb-2 animate-pulse">Giảm ngay 50% tất cả dịch vụ</p>
                <p className="text-gray-400 text-xs">Duy nhất trong ngày khai trương cho 50 khách hàng đầu tiên</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
