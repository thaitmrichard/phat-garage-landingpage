'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-orange font-black uppercase tracking-[0.3em] text-sm mb-4 block">Liên hệ với chúng tôi</span>
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter mb-8 leading-tight">
              SẴN SÀNG PHỤC VỤ<br />
              <span className="text-brand-orange">XẾ YÊU CỦA BẠN</span>
            </h2>

            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-zinc-900 rounded-lg flex items-center justify-center text-brand-orange shrink-0 border border-white/5">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold uppercase text-sm tracking-widest mb-1">Hotline 24/7</h3>
                  <p className="text-2xl font-black text-brand-orange tracking-tighter">033333 8481</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-zinc-900 rounded-lg flex items-center justify-center text-brand-orange shrink-0 border border-white/5">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold uppercase text-sm tracking-widest mb-1">Địa chỉ</h3>
                  <p className="text-gray-400">27B Nguyễn Thị Rành, xã Tân An Hội, TP HCM</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-zinc-900 rounded-lg flex items-center justify-center text-brand-orange shrink-0 border border-white/5">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold uppercase text-sm tracking-widest mb-1">Giờ làm việc</h3>
                  <p className="text-gray-400">Thứ 2 - Chủ Nhật: 08:00 - 18:00</p>
                </div>
              </div>
            </div>

            <Button size="lg" className="bg-brand-orange hover:bg-orange-700 text-white font-black uppercase tracking-widest w-full sm:w-auto py-7 px-10 h-auto gap-3 group">
              Đặt lịch ngay qua Zalo <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative min-h-[400px] rounded-2xl overflow-hidden border border-white/10"
          >
            {/* Replace this with actual Google Maps Iframe if needed */}
            <div className="absolute inset-0 bg-zinc-900 flex items-center justify-center group overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20 group-hover:scale-110 transition-transform duration-1000" />
              <div className="relative z-10 text-center p-8">
                <div className="w-20 h-20 bg-brand-orange/20 rounded-full flex items-center justify-center text-brand-orange mx-auto mb-6 animate-bounce">
                  <MapPin size={40} />
                </div>
                <h3 className="text-2xl font-black text-white uppercase italic tracking-tighter mb-4">Tìm chúng tôi trên bản đồ</h3>
                <p className="text-gray-500 max-w-sm mx-auto mb-8">Google Maps sẽ được tích hợp tại đây để khách hàng dễ dàng tìm đường đến garage.</p>
                <Button onClick={() => window.open('https://maps.app.goo.gl/9YNTZ4MXbapqJxcT8', '_blank')} variant="outline" className="border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white font-bold uppercase">
                  Mở Google Maps
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
