"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#060F1E] text-white/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-[#E8A020] rounded-lg flex items-center justify-center">
                <span className="text-[#0B1F3A] font-black text-sm">E</span>
              </div>
              <span className="font-bold text-white text-lg tracking-tight">
                에듀<span className="text-[#E8A020]">플로우</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed tracking-tight mb-5">
              학원을 위한 맞춤 마케팅 대행 서비스.
              <br />
              원장님이 교육에만 집중하실 수 있도록,
              <br />
              마케팅은 저희가 책임집니다.
            </p>
            {/* SNS 링크 */}
            <div className="flex items-center gap-3">
              {/* 카카오톡 */}
              <a
                href="https://open.kakao.com/o/sFi0Tvyi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#FEE500] flex items-center justify-center hover:opacity-80 transition-opacity"
                aria-label="카카오톡 채널"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#3A1D1D">
                  <path d="M12 3C6.477 3 2 6.477 2 11c0 2.89 1.657 5.424 4.162 6.962-.178.667-.647 2.415-.742 2.789-.118.463.17.457.358.332.147-.097 2.34-1.594 3.287-2.238.626.09 1.27.137 1.935.137 5.523 0 10-3.477 10-8C22 6.477 17.523 3 12 3z"/>
                </svg>
              </a>
              {/* 인스타그램 */}
              <a
                href="https://instagram.com/eduflow_official"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="인스타그램"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-white/70">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              {/* 스레드 */}
              <a
                href="https://threads.net/@eduflow_official"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="스레드"
              >
                <svg width="15" height="15" viewBox="0 0 192 192" fill="currentColor" className="text-white/70">
                  <path d="M141.537 88.988a66.667 66.667 0 0 0-2.518-1.143c-1.482-27.307-16.403-42.94-41.457-43.1h-.34c-14.986 0-27.449 6.396-35.12 18.036l13.779 9.452c5.73-8.695 14.724-10.548 21.348-10.548h.229c8.249.053 14.474 2.452 18.503 7.129 2.932 3.405 4.893 8.111 5.864 14.05-7.314-1.243-15.224-1.626-23.68-1.14-23.82 1.371-39.134 15.264-38.105 34.568.522 9.792 5.4 18.216 13.735 23.719 7.047 4.652 16.124 6.927 25.557 6.412 12.458-.683 22.231-5.436 29.049-14.127 5.178-6.6 8.453-15.153 9.899-25.93 5.937 3.583 10.337 8.298 12.767 13.966 4.132 9.635 4.373 25.468-8.546 38.376-11.319 11.308-24.925 16.2-45.488 16.351-22.809-.169-40.06-7.484-51.275-21.742C35.236 139.966 29.808 120.682 29.605 96c.203-24.682 5.63-43.966 16.133-57.317C56.954 24.425 74.204 17.11 97.013 16.94c22.975.17 40.526 7.52 52.171 21.847 5.71 7.026 10.015 15.86 12.853 26.162l16.147-4.308c-3.44-12.68-8.853-23.606-16.219-32.668C147.036 9.607 125.202.195 97.07 0h-.113C68.882.194 47.292 9.642 32.788 28.08 19.882 44.485 13.224 67.315 13.001 96c.223 28.685 6.88 51.515 19.788 67.92 14.504 18.438 36.094 27.886 64.184 28.08h.113c24.715-.173 42.05-6.615 56.323-20.878 18.761-18.74 18.121-42.247 11.951-56.855-4.325-10.087-12.432-18.288-23.823-23.279Zm-41.58 53.81c-10.457.572-21.329-4.104-21.888-14.082-.412-7.717 5.482-16.327 23.069-17.332a102.3 102.3 0 0 1 5.93-.174c6.339 0 12.268.602 17.719 1.757-2.015 25.077-14.486 29.179-24.83 29.831Z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-4 tracking-tight">서비스</h4>
            <ul className="space-y-2 text-sm tracking-tight">
              <li>웹페이지 제작</li>
              <li>스레드 운영 대행</li>
              <li>블로그 포스팅</li>
              <li>네이버 플레이스 광고</li>
              <li>네이버 파워링크</li>
              <li>카카오 채널 운영</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4 tracking-tight">연락처</h4>
            <ul className="space-y-2 text-sm tracking-tight">
              <li><a href="tel:010-5069-5364" className="hover:text-white/70 transition-colors">📞 010-5069-5364</a></li>
              <li><a href="mailto:metrogi98@naver.com" className="hover:text-white/70 transition-colors">✉️ metrogi98@naver.com</a></li>
              <li className="pt-2">
                <Link href="/contact" className="text-[#E8A020] hover:text-[#F0B429] transition-colors">
                  무료 상담 신청하기 →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 text-xs tracking-tight">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <p className="text-center sm:text-left">© 2026 에듀플로우. All rights reserved.</p>
            <p className="text-center sm:text-right leading-relaxed">
              상호: 에듀플로우 &nbsp;|&nbsp; 대표: 정필권 &nbsp;|&nbsp; 사업자등록번호: 755-74-00514
              <br className="sm:hidden" />
              <span className="hidden sm:inline"> &nbsp;|&nbsp; </span>
              충청남도 천안시 동남구 대흥로 321, 508-7호 (성황동, 수평빌딩)
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
