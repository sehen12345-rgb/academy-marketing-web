import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">M</span>
              </div>
              <span className="font-bold text-white text-lg">
                마케팅<span className="text-blue-400">파트너</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              학원을 위한 맞춤 마케팅 대행 서비스.
              <br />
              원장님이 교육에만 집중하실 수 있도록,
              <br />
              마케팅은 저희가 책임집니다.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">서비스</h4>
            <ul className="space-y-2 text-sm">
              <li>웹페이지 제작</li>
              <li>스레드 운영 대행</li>
              <li>블로그 포스팅</li>
              <li>네이버 플레이스 광고</li>
              <li>네이버 파워링크</li>
              <li>당근 광고</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">연락처</h4>
            <ul className="space-y-2 text-sm">
              <li>📞 010-XXXX-XXXX</li>
              <li>✉️ contact@example.com</li>
              <li className="pt-2">
                <Link href="/contact" className="text-blue-400 hover:text-blue-300 transition-colors">
                  무료 상담 신청하기 →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 text-xs text-slate-500 text-center">
          © 2025 마케팅파트너. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
