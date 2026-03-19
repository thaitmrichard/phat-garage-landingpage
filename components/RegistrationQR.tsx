'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function RegistrationQR() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-brand-orange/5 pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12 bg-zinc-900/50 p-8 md:p-16 rounded-[2rem] border border-white/5">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:w-3/5 text-center md:text-left"
          >
            <span className="text-brand-orange font-black uppercase tracking-[0.3em] text-sm mb-4 block">Đặc quyền thành viên</span>
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase italic tracking-tighter mb-6 leading-tight">
              ĐĂNG KÝ THÀNH VIÊN<br />
              <span className="text-brand-orange">NHẬN NGAY ƯU ĐÃI</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Tham gia cộng đồng khách hàng thân thiết của Phát Garage để nhận được các ưu đãi đặc biệt, giảm giá dịch vụ và ưu tiên hỗ trợ cứu hộ 24/7.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
               <div className="bg-zinc-800/50 px-4 py-2 rounded-full border border-white/5 text-sm text-gray-300">
                 Giảm giá bảo dưỡng
               </div>
               <div className="bg-zinc-800/50 px-4 py-2 rounded-full border border-white/5 text-sm text-gray-300">
                 Tích điểm đổi quà
               </div>
               <div className="bg-zinc-800/50 px-4 py-2 rounded-full border border-white/5 text-sm text-gray-300">
                 Hỗ trợ 24/7
               </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:w-2/5 flex flex-col items-center"
          >
            <div className="relative p-4 bg-white rounded-3xl shadow-[0_0_50px_rgba(255,107,0,0.2)]">
              <Image 
                src="/images/qr_phat.png" 
                alt="QRCode Đăng ký thành viên" 
                width={200} 
                height={200}
                className="rounded-2xl"
              />
            </div>
            <p className="mt-6 text-brand-orange font-bold uppercase tracking-widest text-sm animate-pulse">
              Quét mã để đăng ký
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
