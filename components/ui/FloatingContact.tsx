"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";

export default function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-5 z-50 flex flex-col gap-3">
      {/* KakaoTalk */}
      <motion.a
        href="https://open.kakao.com/o/XXXXXXXX"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.3 }}
        whileHover={{ scale: 1.1 }}
        className="flex items-center justify-center w-14 h-14 rounded-full shadow-xl shadow-black/25 bg-[#FEE500] hover:bg-[#F5DC00] transition-colors"
        aria-label="카카오톡 상담"
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="#3A1D1D">
          <path d="M12 3C6.477 3 2 6.477 2 11c0 2.89 1.657 5.424 4.162 6.962-.178.667-.647 2.415-.742 2.789-.118.463.17.457.358.332.147-.097 2.34-1.594 3.287-2.238.626.09 1.27.137 1.935.137 5.523 0 10-3.477 10-8C22 6.477 17.523 3 12 3z"/>
        </svg>
      </motion.a>

      {/* Phone */}
      <motion.a
        href="tel:010-0000-0000"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.1, duration: 0.3 }}
        whileHover={{ scale: 1.1 }}
        className="flex items-center justify-center w-14 h-14 rounded-full bg-[#0B1F3A] hover:bg-[#1B3D6E] shadow-xl shadow-black/25 transition-colors border border-[#E8A020]/30"
        aria-label="전화 상담"
      >
        <Phone size={22} className="text-[#E8A020]" />
      </motion.a>
    </div>
  );
}
