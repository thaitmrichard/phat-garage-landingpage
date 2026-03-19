'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
}

export default function ServiceCard({ title, description, icon: Icon, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="group relative overflow-hidden bg-zinc-900 border-white/5 hover:border-brand-red transition-all duration-500 hover:-translate-y-2">
        {/* Hover Background Accent */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/5 -mr-16 -mt-16 rounded-full blur-3xl group-hover:bg-brand-red/20 transition-all duration-500" />
        
        <CardContent className="p-8 relative z-10 text-center md:text-left">
          <div className="w-16 h-16 bg-brand-red/10 rounded-xl flex items-center justify-center text-brand-red mb-6 mx-auto md:mx-0 group-hover:bg-brand-red group-hover:text-white transition-all duration-500 transform group-hover:rotate-6">
            <Icon size={32} />
          </div>
          
          <h3 className="text-xl font-black text-white uppercase italic mb-4 tracking-tighter">
            {title}
          </h3>
          
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            {description}
          </p>

          <div className="w-12 h-1 bg-brand-red/30 group-hover:w-full transition-all duration-500" />
        </CardContent>
      </Card>
    </motion.div>
  );
}
