'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Car, Sparkles, LifeBuoy } from 'lucide-react';
import ServiceCard from './ServiceCard';

const services = [
  {
    title: "Bảo dưỡng định kỳ",
    description: "Quy trình bảo dưỡng tiêu chuẩn hãng, kiểm tra toàn diện 50+ hạng mục giúp xe vận hành êm ái, bền bỉ.",
    icon: Car,
  },
  {
    title: "Sửa chữa chuyên sâu",
    description: "Xử lý triệt để các lỗi về động cơ, hộp số, hệ thống điện bằng máy chẩn đoán lỗi chuyên dụng thế hệ mới.",
    icon: Wrench,
  },
  {
    title: "Chăm sóc xe (Detailing)",
    description: "Đánh bóng, phủ Ceramic, vệ sinh nội ngoại thất chuyên sâu giúp xế yêu luôn sáng bóng như mới.",
    icon: Sparkles,
  },
  {
    title: "Cứu hộ 24/7",
    description: "Dịch vụ cứu hộ nhanh chóng, hỗ trợ tận nơi tại khu vực Củ Chi và các vùng lân cận bất kể ngày đêm.",
    icon: LifeBuoy,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-black relative overflow-hidden">
      {/* Background Text Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-white/[0.02] uppercase italic select-none pointer-events-none">
        SERVICES
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="mb-16 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-brand-red font-black uppercase tracking-[0.3em] text-sm mb-4 block">Dịch vụ của chúng tôi</span>
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter">
              GIẢI PHÁP TOÀN DIỆN<br />
              <span className="text-brand-red">CHO XẾ YÊU</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              index={index}
              {...service}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
