import styles from "./terms.module.scss";
import TopBar from "../components/signup/topBar";
import BlueBtn from "../components/signup/button";
import { useState } from "react";
import router from "next/router";
const Terms = () => {
  const [disable, setDisable] = useState(true);
  return (
    <section className={styles.termSection}>
      <TopBar url={"/termsContainer"} title={"개인정보 처리방침"} />
      <section className={styles.termsContent}>
        <span>
          &lt;주니스&gt;('www.tutorlab.co.kr'이하 '튜터랩')은(는) 「개인정보
          보호법」 제30조에 따라 정보주체의 개인정보를 보호하고 이와 관련한
          고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이
          개인정보 처리방침을 수립·공개합니다.
          <br />
          <br /> 이 개인정보처리방침은 2021년 11월 25부터 적용됩니다.
          <br />
          <br />
        </span>
        <strong>
          제1조(개인정보의 처리 목적) <br />
          &lt;주니스&gt;('www.tutorlab.co.kr'이하 '튜터랩')은(는) 다음의 목적을
          위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적
          이외의 용도로는 이용되지 않으며 이용 목적이 변경되는 경우에는
          「개인정보 보호법」 제18조에 따라 별도의 동의를 받는 등 필요한 조치를
          이행할 예정입니다.
          <br />
          <br />
        </strong>
        <span>
          1. 홈페이지 회원가입 및 관리
          <br /> 회원 가입의사 확인, 회원제 서비스 제공에 따른 본인 식별·인증,
          회원자격 유지·관리, 서비스 부정이용 방지, 만14세 미만 아동의 개인정보
          처리 시 법정대리인의 동의여부 확인, 각종 고지·통지, 고충처리 목적으로
          개인정보를 처리합니다. <br />
          <br />
          2. 재화 또는 서비스 제공 <br />
          콘텐츠 제공, 맞춤서비스 제공, 본인인증, 연령인증을 목적으로 개인정보를
          처리합니다.
          <br />
          <br />
        </span>
        <strong>
          제2조(개인정보의 처리 및 보유 기간)
          <br />
        </strong>
        <span>
          ① &lt;주니스&gt;은(는) 법령에 따른 개인정보 보유·이용기간 또는
          정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용기간
          내에서 개인정보를 처리·보유합니다. <br />
          <br />② 각각의 개인정보 처리 및 보유 기간은 다음과 같습니다. <br />
          1.&lt;홈페이지 회원가입 및 관리&gt;
          <br /> &lt;홈페이지 회원가입 및 관리&gt;와 관련한 개인정보는
          수집.이용에 관한 동의일로부터 &lt;1년&gt;까지 위 이용목적을 위하여
          보유.이용됩니다. <br />
          보유근거 : 회원관리 <br />
          관련법령 : 1)신용정보의 수집/처리 및 이용 등에 관한 기록 : 3년 <br />
          2) 소비자의 불만 또는 분쟁처리에 관한 기록 : 3년 <br />
          3) 대금결제 및 재화 등의 공급에 관한 기록 : 5년 <br />
          예외사유 :
          <br /> <br />
        </span>
        <strong>
          제3조(개인정보의 제3자 제공)
          <br />
        </strong>
        <span>
          ① &lt;주니스&gt;은(는) 개인정보를 제1조(개인정보의 처리 목적)에서
          명시한 범위 내에서만 처리하며, 정보주체의 동의, 법률의 특별한 규정 등
          「개인정보 보호법」 제17조 및 제18조에 해당하는 경우에만 개인정보를
          제3자에게 제공합니다.
          <br />② &lt;주니스&gt;은(는) 다음과 같이 개인정보를 제3자에게 제공하고
          있습니다.
          <br />
          1. &lt;튜터랩&gt;
          <br />
          개인정보를 제공받는 자 : 튜터랩
          <br />
          제공받는 자의 개인정보 이용목적 : 이메일, 휴대전화번호, 비밀번호,
          로그인ID, 성별, 생년월일, 학력, 서비스 이용 기록, 접속 로그, 접속 IP
          정보, 결제기록
          <br />
          제공받는 자의 보유.이용기간: 준영구
          <br />
          <br />{" "}
        </span>
        <strong>
          제4조(개인정보처리 위탁)
          <br />
        </strong>
        <span>
          ① &lt;주니스&gt;은(는) 원활한 개인정보 업무처리를 위하여 다음과 같이
          개인정보 처리업무를 위탁하고 있습니다. <br />
          1. &lt;&gt; <br />
          위탁받는 자 (수탁자) : <br />
          위탁하는 업무의 내용 : <br />
          위탁기간 : <br />
          ② &lt;주니스&gt;은(는) 위탁계약 체결시 「개인정보 보호법」 제26조에
          따라 위탁업무 수행목적 외 개인정보 처리금지, 기술적․관리적 보호조치,
          재위탁 제한, 수탁자에 대한 관리․감독, 손해배상 등 책임에 관한 사항을
          계약서 등 문서에 명시하고, 수탁자가 개인정보를 안전하게 처리하는지를
          감독하고 있습니다. <br />
          ③ 위탁업무의 내용이나 수탁자가 변경될 경우에는 지체없이 본 개인정보
          처리방침을 통하여 공개하도록 하겠습니다. <br />
          <br />{" "}
        </span>
        <strong>
          제5조(정보주체와 법정대리인의 권리·의무 및 그 행사방법)
          <br />
        </strong>
        <span>
          ① 정보주체는 주니스에 대해 언제든지 개인정보 열람·정정·삭제·처리정지
          요구 등의 권리를 행사할 수 있습니다. <br />
          ② 제1항에 따른 권리 행사는주니스에 대해 「개인정보 보호법」 시행령
          제41조제1항에 따라 서면, 전자우편, 모사전송(FAX) 등을 통하여 하실 수
          있으며 주니스은(는) 이에 대해 지체 없이 조치하겠습니다. <br />
          ③ 제1항에 따른 권리 행사는 정보주체의 법정대리인이나 위임을 받은 자 등
          대리인을 통하여 하실 수 있습니다.이 경우 “개인정보 처리 방법에 관한
          고시(제2020-7호)” 별지 제11호 서식에 따른 위임장을 제출하셔야 합니다.
          <br />
          ④ 개인정보 열람 및 처리정지 요구는 「개인정보 보호법」 제35조 제4항,
          제37조 제2항에 의하여 정보주체의 권리가 제한 될 수 있습니다. <br />
          ⑤ 개인정보의 정정 및 삭제 요구는 다른 법령에서 그 개인정보가 수집
          대상으로 명시되어 있는 경우에는 그 삭제를 요구할 수 없습니다. <br />
          ⑥ 주니스은(는) 정보주체 권리에 따른 열람의 요구, 정정·삭제의 요구,
          처리정지의 요구 시 열람 등 요구를 한 자가 본인이거나 정당한
          대리인인지를 확인합니다. <br />
          <br />
        </span>
        <strong>
          제6조(처리하는 개인정보의 항목 작성)
          <br />
        </strong>
        <span>
          ① &lt;주니스&gt;은(는) 다음의 개인정보 항목을 처리하고 있습니다.
          <br />
          1&lt;홈페이지 회원가입 및 관리&gt;
          <br />
          필수항목 : 이메일, 로그인ID, 성별, 생년월일, 이름, 회사명, 학력,
          서비스 이용 기록, 접속 로그, 접속 IP 정보
          <br />
          선택항목 :<br />
          <br />
        </span>
        <strong>
          제7조(개인정보의 파기)
          <br />
        </strong>
        <span>
          ① &lt;주니스&gt; 은(는) 개인정보 보유기간의 경과, 처리목적 달성 등
          개인정보가 불필요하게 되었을 때에는 지체없이 해당 개인정보를
          파기합니다.
          <br />
          ② 정보주체로부터 동의받은 개인정보 보유기간이 경과하거나 처리목적이
          달성되었음에도 불구하고 다른 법령에 따라 개인정보를 계속 보존하여야
          하는 경우에는, 해당 개인정보를 별도의 데이터베이스(DB)로 옮기거나
          보관장소를 달리하여 보존합니다.
          <br />
          1. 법령 근거 :<br />
          2. 보존하는 개인정보 항목 : 계좌정보, 거래날짜
          <br />
          ③ 개인정보 파기의 절차 및 방법은 다음과 같습니다.
          <br />
          1. 파기절차
          <br />
          &lt;주니스&gt; 은(는) 파기 사유가 발생한 개인정보를 선정하고,
          &lt;주니스&gt;의 개인정보 보호책임자의 승인을 받아 개인정보를
          파기합니다.
          <br />
          2. 파기방법
          <br />
          종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여 파기합니다
          <br />
          <br />
        </span>
        <strong>
          제8조(개인정보의 안전성 확보 조치)
          <br />
          &lt;주니스&gt;은(는) 개인정보의 안전성 확보를 위해 다음과 같은 조치를
          취하고 있습니다.
          <br />
        </strong>
        <span>
          1. 해킹 등에 대비한 기술적 대책
          <br />
          &lt;주니스&gt;('튜터랩')은 해킹이나 컴퓨터 바이러스 등에 의한 개인정보
          유출 및 훼손을 막기 위하여 보안프로그램을 설치하고 주기적인
          갱신·점검을 하며 외부로부터 접근이 통제된 구역에 시스템을 설치하고
          기술적/물리적으로 감시 및 차단하고 있습니다.
          <br />
          <br />
          2. 개인정보의 암호화
          <br />
          이용자의 개인정보는 비밀번호는 암호화 되어 저장 및 관리되고 있어,
          본인만이 알 수 있으며 중요한 데이터는 파일 및 전송 데이터를 암호화
          하거나 파일 잠금 기능을 사용하는 등의 별도 보안기능을 사용하고
          있습니다.
          <br />
          <br />
          3. 접속기록의 보관 및 위변조 방지
          <br />
          개인정보처리시스템에 접속한 기록을 최소 1년 이상 보관, 관리하고
          있으며,다만, 5만명 이상의 정보주체에 관하여 개인정보를 추가하거나,
          고유식별정보 또는 민감정보를 처리하는 경우에는 2년이상 보관, 관리하고
          있습니다. 또한, 접속기록이 위변조 및 도난, 분실되지 않도록 보안기능을
          사용하고 있습니다.
          <br />
          <br />
          4. 개인정보에 대한 접근 제한
          <br />
          개인정보를 처리하는 데이터베이스시스템에 대한 접근권한의
          부여,변경,말소를 통하여 개인정보에 대한 접근통제를 위하여 필요한
          조치를 하고 있으며 침입차단시스템을 이용하여 외부로부터의 무단 접근을
          통제하고 있습니다.
          <br />
          <br />
        </span>
        <strong>
          제9조(개인정보 자동 수집 장치의 설치•운영 및 거부에 관한 사항)
          <br />
        </strong>
        <span>
          주니스 은(는) 정보주체의 이용정보를 저장하고 수시로 불러오는
          ‘쿠키(cookie)’를 사용하지 않습니다.
          <br />
          <br />
        </span>
        <strong>
          제10조 (개인정보 보호책임자)
          <br />
        </strong>
        <span>
          ① 주니스 은(는) 개인정보 처리에 관한 업무를 총괄해서 책임지고,
          개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여
          아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
          <br />
          ▶ 개인정보 보호책임자
          <br />
          성명 :최성준
          <br />
          직책 :대표
          <br />
          직급 :대표
          <br />
          연락처 :01030022702, csj2702@naver.com,
          <br />
          ※ 개인정보 보호 담당부서로 연결됩니다.
          <br />
          <br />
          ▶ 개인정보 보호 담당부서
          <br />
          부서명 :<br />
          담당자 :<br />
          연락처 :, ,<br />
          ② 정보주체께서는 주니스 의 서비스(또는 사업)을 이용하시면서 발생한
          모든 개인정보 보호 관련 문의, 불만처리, 피해구제 등에 관한 사항을
          개인정보 보호책임자 및 담당부서로 문의하실 수 있습니다. 주니스 은(는)
          정보주체의 문의에 대해 지체 없이 답변 및 처리해드릴 것입니다.
          <br />
          <br />
        </span>
        <strong>
          제11조(개인정보 열람청구)
          <br />
          정보주체는 ｢개인정보 보호법｣ 제35조에 따른 개인정보의 열람 청구를
          아래의 부서에 할 수 있습니다.
          <br />
          &lt;주니스&gt;은(는) 정보주체의 개인정보 열람청구가 신속하게
          처리되도록 노력하겠습니다.
          <br />
          <br />
        </strong>
        <span>
          ▶ 개인정보 열람청구 접수·처리 부서 <br />
          부서명 : <br />
          담당자 : <br />
          연락처 : , , <br />
          <br />
        </span>
        <strong>
          제12조(권익침해 구제방법)
          <br />
        </strong>
        <span>
          정보주체는 개인정보침해로 인한 구제를 받기 위하여
          개인정보분쟁조정위원회, 한국인터넷진흥원 개인정보침해신고센터 등에
          분쟁해결이나 상담 등을 신청할 수 있습니다. 이 밖에 기타 개인정보침해의
          신고, 상담에 대하여는 아래의 기관에 문의하시기 바랍니다.
          <br />
          <br />
          1. 개인정보분쟁조정위원회 : (국번없이) 1833-6972 (www.kopico.go.kr)
          <br />
          2. 개인정보침해신고센터 : (국번없이) 118 (privacy.kisa.or.kr)
          <br />
          3. 대검찰청 : (국번없이) 1301 (www.spo.go.kr)
          <br />
          4. 경찰청 : (국번없이) 182 (ecrm.cyber.go.kr)
          <br />
          <br />
          「개인정보보호법」제35조(개인정보의 열람), 제36조(개인정보의
          정정·삭제), 제37조(개인정보의 처리정지 등)의 규정에 의한 요구에 대
          하여 공공기관의 장이 행한 처분 또는 부작위로 인하여 권리 또는 이익의
          침해를 받은 자는 행정심판법이 정하는 바에 따라 행정심판을 청구할 수
          있습니다.
          <br />
          <br />
          ※ 행정심판에 대해 자세한 사항은 중앙행정심판위원회(www.simpan.go.kr)
          홈페이지를 참고하시기 바랍니다.
          <br />
          <br />
        </span>
        <strong>
          제13조(개인정보 처리방침 변경)
          <br />
        </strong>
        <span>
          ① 이 개인정보처리방침은 2021년 11월 25부터 적용됩니다. <br />② 이전의
          개인정보 처리방침은 아래에서 확인하실 수 있습니다.
        </span>
      </section>
      {/* <input type="checkbox" id="agree" onChange={() => setDisable(!disable)} />
      <label htmlFor="agree" className={styles.agreement}>
        개인정보 처리 방침을 모두 읽었으며, 이에 동의합니다.
      </label>
      <div className={styles.fixedTab}>
        <BlueBtn
          text={"다음"}
          onClick={() => router.push("/signup")}
          disable={disable}
        />
      </div> */}
    </section>
  );
};
export default Terms;
