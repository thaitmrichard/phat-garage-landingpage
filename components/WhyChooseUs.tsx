'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Eye, Shield, Users } from 'lucide-react';

const reasons = [
  {
    title: "Công nghệ chẩn đoán",
    description: "Sử dụng máy quét lỗi chuyên sâu cho từng dòng xe, xác định chính xác 100% nguyên nhân hư hỏng.",
    icon: Cpu,
  },
  {
    title: "Minh bạch tuyệt đối",
    description: "Khách hàng được trực tiếp theo dõi quá trình sửa chữa và báo giá chi tiết từng hạng mục trước khi thực hiện.",
    icon: Eye,
  },
  {
    title: "Phụ tùng chính hãng",
    description: "Cam kết sử dụng linh kiện, phụ tùng có nguồn gốc rõ ràng, bảo hành theo đúng tiêu chuẩn nhà sản xuất.",
    icon: Shield,
  },
  {
    title: "Đội ngũ chuyên nghiệp",
    description: "Kỹ thuật viên được đào tạo bài bản, có nhiều năm kinh nghiệm thực chiến trên các dòng xe hiện đại.",
    icon: Users,
  },
];

export default function WhyChooseUs() {
  return (
    <section id="about" className="py-24 bg-zinc-900 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <span className="text-brand-red font-black uppercase tracking-[0.3em] text-sm mb-4 block">Tại sao chọn Phát Garage?</span>
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter mb-8 leading-tight">
              SỰ KHÁC BIỆT ĐẾN TỪ<br />
              <span className="text-brand-red">TÂM HUYẾT & CÔNG NGHỆ</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              Chúng tôi không chỉ sửa xe, chúng tôi chăm sóc sự an toàn của bạn. Tại Phát Garage Củ Chi, mỗi chiếc xe đều được đối xử như một tác phẩm nghệ thuật cần sự tỉ mỉ và chuyên nghiệp cao nhất.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              <div className="border-l-2 border-brand-red pl-6">
                <p className="text-3xl font-black text-white italic tracking-tighter mb-1">1000+</p>
                <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">Khách hàng tin cậy</p>
              </div>
              <div className="border-l-2 border-brand-red pl-6">
                <p className="text-3xl font-black text-white italic tracking-tighter mb-1">10+</p>
                <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">Năm kinh nghiệm</p>
              </div>
            </div>
          </motion.div>

          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-black/50 p-8 border border-white/5 rounded-2xl hover:border-brand-red/50 transition-colors group"
              >
                <div className="w-12 h-12 bg-brand-red/10 rounded-lg flex items-center justify-center text-brand-red mb-6 group-hover:bg-brand-red group-hover:text-white transition-all duration-300">
                  <reason.icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-white uppercase mb-3">{reason.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
