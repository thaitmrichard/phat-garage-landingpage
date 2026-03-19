'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Search, ClipboardList, CheckSquare, Settings, CarFront, HeartHandshake } from 'lucide-react';
import ServiceCard from './ServiceCard';

const services = [
  {
    title: "Tiếp nhận xe",
    description: "Tra cứu bằng số VIN để biết thông tin chính xác xe của quý khách. Chúng tôi nắm rõ sơ đồ mạch điện, hình vẽ chi tiết đến từng bộ phận.",
    icon: Search,
  },
  {
    title: "Tư vấn & Chẩn đoán",
    description: "Advisor chuyên nghiệp chẩn đoán lỗi bằng thiết bị hiện đại, đưa ra hướng xử lý và báo giá chi tiết, minh bạch.",
    icon: ClipboardList,
  },
  {
    title: "Chọn hướng xử lý",
    description: "Khách hàng nhận báo giá, chọn phương án thi công và phụ tùng thay thế phù hợp với nhu cầu và ngân sách.",
    icon: CheckSquare,
  },
  {
    title: "Sửa chữa chuyên sâu",
    description: "Đặt hàng phụ tùng chính hãng và tiến hành sửa chữa theo quy trình kỹ thuật nghiêm ngặt, đảm bảo chất lượng cao nhất.",
    icon: Settings,
  },
  {
    title: "Kiểm tra & Bàn giao",
    description: "Kiểm tra kỹ lưỡng toàn bộ hạng mục trước khi bàn giao xe cho khách hàng, đảm bảo xe vận hành hoàn hảo.",
    icon: CarFront,
  },
  {
    title: "Bảo hành & Chăm sóc",
    description: "Chăm sóc khách hàng sau sửa chữa, đồng hành cùng quý khách bằng chính sách bảo hành và hậu mãi tận tâm.",
    icon: HeartHandshake,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-black relative overflow-hidden">
      {/* Background Text Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-white/[0.02] uppercase italic select-none pointer-events-none">
        PROCESS
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="mb-16 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-brand-orange font-black uppercase tracking-[0.3em] text-sm mb-4 block">Quy trình chuyên nghiệp</span>
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter">
              6 BƯỚC SỬA XE<br />
              <span className="text-brand-orange">TIÊU CHUẨN</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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
