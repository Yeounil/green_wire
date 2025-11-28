import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '이용약관 | Green Wire',
  description: 'Green Wire 서비스 이용약관',
};

export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">이용약관</h1>

      <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
        <p className="text-sm text-muted-foreground">시행일: 2025년 1월 1일</p>

        {/* 제1조 */}
        <section>
          <h2 className="text-xl font-semibold mt-8 mb-4">제1조 (목적)</h2>
          <p>
            이 약관은 Green Wire(이하 &quot;회사&quot;)가 제공하는 미국 주식 뉴스 분석 서비스(이하 &quot;서비스&quot;)의
            이용조건 및 절차, 회사와 이용자의 권리, 의무, 책임사항과 기타 필요한 사항을 규정함을 목적으로 합니다.
          </p>
        </section>

        {/* 제2조 */}
        <section>
          <h2 className="text-xl font-semibold mt-8 mb-4">제2조 (정의)</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>&quot;서비스&quot;</strong>란 회사가 제공하는 미국 주식 관련 뉴스 수집, AI 감정 분석, 관심 종목 관리 등 관련 제반 서비스를 의미합니다.</li>
            <li><strong>&quot;이용자&quot;</strong>란 이 약관에 따라 회사가 제공하는 서비스를 받는 회원 및 비회원을 말합니다.</li>
            <li><strong>&quot;회원&quot;</strong>이란 회사에 개인정보를 제공하여 회원등록을 한 자로서, 회사의 정보를 지속적으로 제공받으며 서비스를 이용할 수 있는 자를 말합니다.</li>
          </ul>
        </section>

        {/* 제3조 */}
        <section>
          <h2 className="text-xl font-semibold mt-8 mb-4">제3조 (약관의 효력 및 변경)</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>이 약관은 서비스를 이용하고자 하는 모든 이용자에게 그 효력이 발생합니다.</li>
            <li>회사는 필요하다고 인정되는 경우 이 약관을 변경할 수 있으며, 변경된 약관은 서비스 내 공지사항에 공지함으로써 효력이 발생합니다.</li>
            <li>회원이 변경된 약관에 동의하지 않는 경우, 회원은 회원탈퇴를 요청할 수 있으며, 변경된 약관의 효력 발생일 이후에도 서비스를 계속 이용하는 경우 약관의 변경 사항에 동의한 것으로 간주됩니다.</li>
          </ol>
        </section>

        {/* 제4조 */}
        <section>
          <h2 className="text-xl font-semibold mt-8 mb-4">제4조 (서비스의 내용)</h2>
          <p>회사는 다음과 같은 서비스를 제공합니다.</p>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>미국 주식 관련 뉴스 수집 및 표시</li>
            <li>AI 기반 뉴스 감정 분석 (긍정/부정/중립)</li>
            <li>실시간 주가 차트 제공 (TradingView 위젯)</li>
            <li>관심 종목 관리 및 알림</li>
            <li>뉴스 요약 및 투자 체크리스트 제공</li>
            <li>기타 회사가 정하는 서비스</li>
          </ul>
        </section>

        {/* 제5조 */}
        <section>
          <h2 className="text-xl font-semibold mt-8 mb-4">제5조 (이용계약의 체결)</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>이용계약은 이용자가 약관의 내용에 동의하고 회원가입 신청을 한 후 회사가 이를 승낙함으로써 체결됩니다.</li>
            <li>회사는 다음 각 호에 해당하는 신청에 대하여는 승낙을 하지 않거나 사후에 이용계약을 해지할 수 있습니다.
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>실명이 아니거나 타인의 명의를 이용한 경우</li>
                <li>허위의 정보를 기재하거나, 회사가 요구하는 내용을 기재하지 않은 경우</li>
                <li>이전에 회원자격을 상실한 적이 있는 경우</li>
                <li>기타 회원으로 등록하는 것이 회사의 서비스 운영에 현저히 지장이 있다고 판단되는 경우</li>
              </ul>
            </li>
          </ol>
        </section>

        {/* 제6조 */}
        <section>
          <h2 className="text-xl font-semibold mt-8 mb-4">제6조 (회원의 의무)</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>회원은 서비스 이용 시 다음 각 호의 행위를 하여서는 안 됩니다.
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>타인의 정보 도용</li>
                <li>회사가 게시한 정보의 무단 변경</li>
                <li>회사가 정한 정보 이외의 정보(컴퓨터 프로그램 등)의 송신 또는 게시</li>
                <li>회사 또는 제3자의 저작권 등 지적재산권에 대한 침해</li>
                <li>회사 또는 제3자의 명예를 손상시키거나 업무를 방해하는 행위</li>
                <li>서비스를 이용하여 얻은 정보를 회사의 사전 승낙 없이 복제, 배포, 방송 또는 상업적으로 이용하는 행위</li>
                <li>자동화된 수단(봇, 스크래퍼 등)을 이용한 서비스 접근</li>
              </ul>
            </li>
            <li>회원은 관련 법령, 이 약관의 규정, 이용안내 및 서비스상에 공지한 주의사항을 준수하여야 합니다.</li>
          </ol>
        </section>

        {/* 제7조 - 투자 면책조항 (중요) */}
        <section className="bg-destructive/10 p-6 rounded-lg border border-destructive/20">
          <h2 className="text-xl font-semibold mb-4 text-destructive">제7조 (투자 면책조항)</h2>
          <div className="space-y-4">
            <p className="font-medium">
              본 서비스는 투자 참고 자료이며, 투자 권유가 아닙니다.
            </p>
            <ol className="list-decimal pl-6 space-y-3">
              <li>
                <strong>투자 판단 책임:</strong> 본 서비스에서 제공하는 모든 정보(뉴스, AI 분석 결과, 감정 점수, 투자 체크리스트 등)는
                참고 자료일 뿐이며, 투자 결정에 대한 책임은 전적으로 이용자 본인에게 있습니다.
              </li>
              <li>
                <strong>수익 미보장:</strong> 과거의 수익률이나 분석 결과가 미래의 수익을 보장하지 않습니다.
              </li>
              <li>
                <strong>AI 분석 한계:</strong> AI 감정 분석 결과는 FinBERT 등 언어 모델을 기반으로 하며,
                100% 정확성을 보장하지 않습니다. AI 분석 결과만을 근거로 투자 결정을 내리지 마시기 바랍니다.
              </li>
              <li>
                <strong>정보의 정확성:</strong> 회사는 제공하는 정보의 정확성, 완전성, 적시성을 보장하지 않습니다.
                뉴스 데이터는 외부 소스에서 수집되며, 지연이나 오류가 있을 수 있습니다.
              </li>
              <li>
                <strong>투자 손실:</strong> 본 서비스를 이용하여 발생한 투자 손실에 대해 회사는 어떠한 책임도 지지 않습니다.
              </li>
              <li>
                <strong>전문가 상담:</strong> 중요한 투자 결정을 내리기 전에 공인된 재무 상담사나 투자 전문가와 상담하시기를 권장합니다.
              </li>
            </ol>
          </div>
        </section>

        {/* 제8조 */}
        <section>
          <h2 className="text-xl font-semibold mt-8 mb-4">제8조 (서비스 제공의 제한 및 중단)</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>회사는 다음 각 호의 경우에 서비스 제공을 제한하거나 중단할 수 있습니다.
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>서비스용 설비의 보수 등 공사로 인한 부득이한 경우</li>
                <li>전기통신사업법에 규정된 기간통신사업자가 전기통신서비스를 중지한 경우</li>
                <li>기타 불가항력적 사유가 있는 경우</li>
              </ul>
            </li>
            <li>회사는 국가비상사태, 정전, 서비스 설비의 장애 또는 서비스 이용의 폭주 등으로 정상적인 서비스 제공이 불가능할 경우,
                서비스의 전부 또는 일부를 제한하거나 중단할 수 있습니다.</li>
          </ol>
        </section>

        {/* 제9조 */}
        <section>
          <h2 className="text-xl font-semibold mt-8 mb-4">제9조 (회사의 면책)</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>회사는 천재지변, 전쟁, 기간통신사업자의 서비스 중지 및 기타 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 관한 책임이 면제됩니다.</li>
            <li>회사는 회원의 귀책사유로 인한 서비스 이용의 장애에 대하여 책임을 지지 않습니다.</li>
            <li>회사는 회원이 서비스를 이용하여 기대하는 수익을 상실한 것에 대하여 책임을 지지 않으며, 그 밖에 서비스를 통하여 얻은 자료로 인한 손해에 관하여 책임을 지지 않습니다.</li>
            <li>회사는 이용자가 게재한 정보, 자료, 사실의 신뢰도, 정확성 등 내용에 관해서는 책임을 지지 않습니다.</li>
            <li>회사는 제3자가 제공하는 서비스(TradingView 차트 등)의 장애, 오류, 지연에 대해 책임을 지지 않습니다.</li>
          </ol>
        </section>

        {/* 제10조 */}
        <section>
          <h2 className="text-xl font-semibold mt-8 mb-4">제10조 (저작권의 귀속)</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>서비스에 대한 저작권 및 지적재산권은 회사에 귀속됩니다.</li>
            <li>이용자는 서비스를 이용함으로써 얻은 정보를 회사의 사전 승낙 없이 복제, 송신, 출판, 배포, 방송 기타 방법에 의하여 영리목적으로 이용하거나 제3자에게 이용하게 하여서는 안 됩니다.</li>
          </ol>
        </section>

        {/* 제11조 */}
        <section>
          <h2 className="text-xl font-semibold mt-8 mb-4">제11조 (회원 탈퇴 및 자격 상실)</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>회원은 언제든지 회사에 탈퇴를 요청할 수 있으며, 회사는 즉시 회원탈퇴를 처리합니다.</li>
            <li>회원이 다음 각 호의 사유에 해당하는 경우, 회사는 회원자격을 제한 및 정지시킬 수 있습니다.
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>가입 신청 시에 허위 내용을 등록한 경우</li>
                <li>다른 사람의 서비스 이용을 방해하거나 그 정보를 도용하는 경우</li>
                <li>서비스를 이용하여 법령 또는 이 약관이 금지하는 행위를 하는 경우</li>
              </ul>
            </li>
          </ol>
        </section>

        {/* 제12조 */}
        <section>
          <h2 className="text-xl font-semibold mt-8 mb-4">제12조 (분쟁해결)</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>회사는 이용자가 제기하는 정당한 의견이나 불만을 반영하고 그 피해를 보상처리하기 위하여 피해보상처리기구를 설치·운영합니다.</li>
            <li>회사와 이용자 간에 발생한 분쟁에 관한 소송은 대한민국 법을 준거법으로 합니다.</li>
            <li>회사와 이용자 간에 발생한 분쟁에 관한 소송은 서울중앙지방법원을 제1심 관할법원으로 합니다.</li>
          </ol>
        </section>

        {/* 부칙 */}
        <section>
          <h2 className="text-xl font-semibold mt-8 mb-4">부칙</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>이 약관은 2025년 1월 1일부터 적용됩니다.</li>
          </ol>
        </section>

        {/* 하단 링크 */}
        <div className="mt-12 pt-8 border-t">
          <Link href="/privacy" className="text-primary hover:underline">
            개인정보처리방침 보기 →
          </Link>
        </div>
      </div>
    </div>
  );
}
