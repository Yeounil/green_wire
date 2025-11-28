import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '개인정보처리방침 | Green Wire',
  description: 'Green Wire 개인정보처리방침 - 개인정보보호법에 따른 개인정보 처리에 관한 사항',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">개인정보처리방침</h1>

      <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
        <p className="text-muted-foreground">
          Green Wire(이하 &quot;회사&quot;)는 개인정보보호법에 따라 이용자의 개인정보 보호 및 권익을 보호하고
          개인정보와 관련한 이용자의 고충을 원활하게 처리할 수 있도록 다음과 같은 처리방침을 두고 있습니다.
        </p>
        <p className="text-sm text-muted-foreground">시행일: 2025년 1월 1일</p>

        {/* 제1조 */}
        <section>
          <h2 className="text-xl font-semibold mt-8 mb-4">제1조 (개인정보의 처리 목적)</h2>
          <p>회사는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.</p>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>
              <strong>회원 가입 및 관리</strong>
              <p className="text-muted-foreground">회원 가입의사 확인, 회원제 서비스 제공에 따른 본인 식별·인증, 회원자격 유지·관리, 서비스 부정이용 방지, 각종 고지·통지 목적으로 개인정보를 처리합니다.</p>
            </li>
            <li>
              <strong>서비스 제공</strong>
              <p className="text-muted-foreground">미국 주식 뉴스 분석, AI 감정 분석, 관심 종목 관리, 맞춤형 콘텐츠 제공 등 서비스 제공 목적으로 개인정보를 처리합니다.</p>
            </li>
            <li>
              <strong>마케팅 및 광고 활용 (선택)</strong>
              <p className="text-muted-foreground">이벤트 및 광고성 정보 제공, 서비스의 유효성 확인, 접속빈도 파악, 회원의 서비스 이용에 대한 통계 목적으로 개인정보를 처리합니다.</p>
            </li>
          </ul>
        </section>

        {/* 제2조 */}
        <section>
          <h2 className="text-xl font-semibold mt-8 mb-4">제2조 (처리하는 개인정보 항목)</h2>
          <p>회사는 다음의 개인정보 항목을 처리하고 있습니다.</p>

          <h3 className="text-lg font-medium mt-6 mb-3">1. 회원 가입 시 수집 항목</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-border">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-border px-4 py-2 text-left">구분</th>
                  <th className="border border-border px-4 py-2 text-left">수집 항목</th>
                  <th className="border border-border px-4 py-2 text-left">수집 목적</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-4 py-2">필수</td>
                  <td className="border border-border px-4 py-2">사용자명, 이메일, 비밀번호(암호화)</td>
                  <td className="border border-border px-4 py-2">회원 식별 및 서비스 제공</td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-2">선택</td>
                  <td className="border border-border px-4 py-2">마케팅 수신 동의 여부</td>
                  <td className="border border-border px-4 py-2">이벤트/광고 정보 발송</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-medium mt-6 mb-3">2. 소셜 로그인 시 수집 항목</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-border">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-border px-4 py-2 text-left">제공자</th>
                  <th className="border border-border px-4 py-2 text-left">수집 항목</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-4 py-2">Google</td>
                  <td className="border border-border px-4 py-2">이메일, 이름, 프로필 이미지</td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-2">Kakao</td>
                  <td className="border border-border px-4 py-2">이메일, 닉네임, 프로필 이미지</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-medium mt-6 mb-3">3. 서비스 이용 과정에서 생성/수집되는 정보</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>관심 종목(favorites) 목록</li>
            <li>검색 기록</li>
            <li>IP 주소, 쿠키, 접속 로그, 서비스 이용 기록</li>
          </ul>
        </section>

        {/* 제3조 */}
        <section>
          <h2 className="text-xl font-semibold mt-8 mb-4">제3조 (개인정보의 보유 및 이용 기간)</h2>
          <p>회사는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.</p>

          <h3 className="text-lg font-medium mt-6 mb-3">1. 회원 정보</h3>
          <p>회원 탈퇴 시 즉시 파기 (단, 관련 법령에 따라 보존이 필요한 경우 해당 기간 동안 보존)</p>

          <h3 className="text-lg font-medium mt-6 mb-3">2. 관련 법령에 따른 보존 기간</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-border">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-border px-4 py-2 text-left">보존 항목</th>
                  <th className="border border-border px-4 py-2 text-left">보존 기간</th>
                  <th className="border border-border px-4 py-2 text-left">근거 법령</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-4 py-2">계약 또는 청약철회 등에 관한 기록</td>
                  <td className="border border-border px-4 py-2">5년</td>
                  <td className="border border-border px-4 py-2">전자상거래 등에서의 소비자보호에 관한 법률</td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-2">대금결제 및 재화 등의 공급에 관한 기록</td>
                  <td className="border border-border px-4 py-2">5년</td>
                  <td className="border border-border px-4 py-2">전자상거래 등에서의 소비자보호에 관한 법률</td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-2">소비자의 불만 또는 분쟁처리에 관한 기록</td>
                  <td className="border border-border px-4 py-2">3년</td>
                  <td className="border border-border px-4 py-2">전자상거래 등에서의 소비자보호에 관한 법률</td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-2">웹사이트 방문 기록 (로그 기록)</td>
                  <td className="border border-border px-4 py-2">3개월</td>
                  <td className="border border-border px-4 py-2">통신비밀보호법</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 제4조 */}
        <section>
          <h2 className="text-xl font-semibold mt-8 mb-4">제4조 (개인정보의 제3자 제공)</h2>
          <p>회사는 원칙적으로 이용자의 개인정보를 제3자에게 제공하지 않습니다. 다만, 아래의 경우에는 예외로 합니다.</p>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>이용자가 사전에 동의한 경우</li>
            <li>법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우</li>
          </ul>
        </section>

        {/* 제5조 */}
        <section>
          <h2 className="text-xl font-semibold mt-8 mb-4">제5조 (개인정보 처리의 위탁)</h2>
          <p>회사는 원활한 개인정보 업무처리를 위하여 다음과 같이 개인정보 처리업무를 위탁하고 있습니다.</p>
          <div className="overflow-x-auto mt-4">
            <table className="min-w-full border-collapse border border-border">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-border px-4 py-2 text-left">수탁업체</th>
                  <th className="border border-border px-4 py-2 text-left">위탁 업무 내용</th>
                  <th className="border border-border px-4 py-2 text-left">보유 기간</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-4 py-2">Supabase Inc. (미국)</td>
                  <td className="border border-border px-4 py-2">데이터베이스 호스팅, 회원 인증</td>
                  <td className="border border-border px-4 py-2">회원 탈퇴 시 또는 위탁 계약 종료 시</td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-2">Google LLC (미국)</td>
                  <td className="border border-border px-4 py-2">소셜 로그인(OAuth), 웹 분석</td>
                  <td className="border border-border px-4 py-2">회원 탈퇴 시 또는 위탁 계약 종료 시</td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-2">주식회사 카카오 (한국)</td>
                  <td className="border border-border px-4 py-2">소셜 로그인(OAuth)</td>
                  <td className="border border-border px-4 py-2">회원 탈퇴 시 또는 위탁 계약 종료 시</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            ※ 해외 이전: Supabase Inc., Google LLC는 미국에 소재하며, 개인정보보호법에 따라 안전하게 관리됩니다.
          </p>
        </section>

        {/* 제6조 */}
        <section>
          <h2 className="text-xl font-semibold mt-8 mb-4">제6조 (정보주체의 권리·의무 및 행사방법)</h2>
          <p>이용자는 개인정보주체로서 다음과 같은 권리를 행사할 수 있습니다.</p>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li><strong>개인정보 열람 요구:</strong> 회사가 보유하고 있는 본인의 개인정보에 대해 열람을 요구할 수 있습니다.</li>
            <li><strong>개인정보 정정·삭제 요구:</strong> 개인정보의 오류 등에 대한 정정 또는 삭제를 요구할 수 있습니다.</li>
            <li><strong>개인정보 처리정지 요구:</strong> 개인정보의 처리정지를 요구할 수 있습니다.</li>
            <li><strong>동의 철회:</strong> 개인정보 수집·이용에 대한 동의를 철회할 수 있습니다.</li>
          </ul>
          <p className="mt-4">위 권리 행사는 회사에 대해 서면, 이메일 등을 통하여 할 수 있으며, 회사는 이에 대해 지체없이 조치하겠습니다.</p>
        </section>

        {/* 제7조 */}
        <section>
          <h2 className="text-xl font-semibold mt-8 mb-4">제7조 (개인정보의 파기)</h2>
          <p>회사는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체없이 해당 개인정보를 파기합니다.</p>
          <h3 className="text-lg font-medium mt-6 mb-3">파기 절차 및 방법</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>전자적 파일:</strong> 복구 및 재생이 불가능한 방법으로 영구 삭제</li>
            <li><strong>기록물, 인쇄물:</strong> 분쇄하거나 소각하여 파기</li>
          </ul>
        </section>

        {/* 제8조 */}
        <section>
          <h2 className="text-xl font-semibold mt-8 mb-4">제8조 (쿠키의 사용)</h2>
          <p>회사는 이용자에게 개별적인 맞춤서비스를 제공하기 위해 &apos;쿠키(cookie)&apos;를 사용합니다.</p>

          <h3 className="text-lg font-medium mt-6 mb-3">1. 사용하는 쿠키 종류</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-border">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-border px-4 py-2 text-left">쿠키명</th>
                  <th className="border border-border px-4 py-2 text-left">목적</th>
                  <th className="border border-border px-4 py-2 text-left">유형</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-4 py-2">access_token</td>
                  <td className="border border-border px-4 py-2">로그인 인증</td>
                  <td className="border border-border px-4 py-2">필수 (HttpOnly)</td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-2">refresh_token</td>
                  <td className="border border-border px-4 py-2">인증 토큰 갱신</td>
                  <td className="border border-border px-4 py-2">필수 (HttpOnly)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-medium mt-6 mb-3">2. 쿠키 설정 거부</h3>
          <p>이용자는 웹 브라우저에서 옵션을 설정함으로써 쿠키를 허용하거나 거부할 수 있습니다. 다만, 쿠키 저장을 거부할 경우 로그인이 필요한 일부 서비스 이용에 어려움이 있을 수 있습니다.</p>
        </section>

        {/* 제9조 */}
        <section>
          <h2 className="text-xl font-semibold mt-8 mb-4">제9조 (개인정보 보호책임자)</h2>
          <p>회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.</p>
          <div className="bg-muted p-4 rounded-lg mt-4">
            <p><strong>개인정보 보호책임자</strong></p>
            <ul className="mt-2 space-y-1">
              <li>이메일: privacy@greenwire.com</li>
            </ul>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            이용자는 서비스를 이용하면서 발생한 모든 개인정보 보호 관련 문의, 불만처리, 피해구제 등에 관한 사항을
            개인정보 보호책임자에게 문의하실 수 있습니다.
          </p>
        </section>

        {/* 제10조 */}
        <section>
          <h2 className="text-xl font-semibold mt-8 mb-4">제10조 (권익침해 구제방법)</h2>
          <p>이용자는 개인정보침해로 인한 구제를 받기 위하여 아래의 기관에 분쟁해결이나 상담 등을 신청할 수 있습니다.</p>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>개인정보분쟁조정위원회: (국번없이) 1833-6972 (www.kopico.go.kr)</li>
            <li>개인정보침해신고센터: (국번없이) 118 (privacy.kisa.or.kr)</li>
            <li>대검찰청: (국번없이) 1301 (www.spo.go.kr)</li>
            <li>경찰청: (국번없이) 182 (ecrm.cyber.go.kr)</li>
          </ul>
        </section>

        {/* 제11조 */}
        <section>
          <h2 className="text-xl font-semibold mt-8 mb-4">제11조 (개인정보처리방침 변경)</h2>
          <p>이 개인정보처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.</p>
          <ul className="list-disc pl-6 mt-4 space-y-1">
            <li>공고일자: 2025년 1월 1일</li>
            <li>시행일자: 2025년 1월 1일</li>
          </ul>
        </section>

        {/* 하단 링크 */}
        <div className="mt-12 pt-8 border-t">
          <Link href="/terms" className="text-primary hover:underline">
            이용약관 보기 →
          </Link>
        </div>
      </div>
    </div>
  );
}
