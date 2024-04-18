import CustomFooter from '../components/Footer/Footer';
import CustomHeader from '../components/Header/Header';
import * as S from './landingPage.style';

function LandingPage() {
  return (
    <>
      <CustomHeader />
      <S.main>
        <S.Image src='/Landingmainimg.png' alt='main img' />
        <h1>
          새로운 일정 관리<span>Taskify</span>
        </h1>
        <p>서비스의 메인설명 들어갑니다.</p>
        {/* 나중에 버튼 수정(링크추가) */}
        <button>로그인하기</button>
      </S.main>
      <S.section>
        <S.sectionWrapper1>
          <p>Point 1</p>
          <h2>
            일의 <span>우선순위</span>를<br /> 관리하세요
          </h2>
          <img src='/Landingimg1.png' alt='img1' />
        </S.sectionWrapper1>
      </S.section>
      <S.section>
        <S.sectionWrapper2>
          <p>Point 2</p>
          <h2>
            해야 할 일을
            <br /> 등록하세요
          </h2>
          <img src='/Landingimg2.png' alt='img2' />
        </S.sectionWrapper2>
      </S.section>
      <S.section>
        <S.sectionWrapper3>
          <h3>생산성을 높이는 다양한 설정⚡</h3>
          <div>
            <S.sectionBox>
              <S.imageBox>
                <img src='/Landingimg3.png' alt='img3' />
              </S.imageBox>
              <S.textBox>
                <h4>대시보드 설정</h4>
                <p>대시보드 사진과 이름을 변경할 수 있어요.</p>
              </S.textBox>
            </S.sectionBox>
            <S.sectionBox>
              <S.imageBox>
                <img src='/Landingimg4.png' alt='img4' />
              </S.imageBox>
              <S.textBox>
                <h4>초대</h4>
                <p>새로운 팀원을 초대할 수 있어요.</p>
              </S.textBox>
            </S.sectionBox>
            <S.sectionBox>
              <S.imageBox>
                <img src='/Landingimg5.png' alt='img5' />
              </S.imageBox>
              <S.textBox>
                <h4>구성원</h4>
                <p>구성원을 초대하고 내보낼 수 있어요.</p>
              </S.textBox>
            </S.sectionBox>
          </div>
        </S.sectionWrapper3>
      </S.section>
      <CustomFooter />
    </>
  );
}
export default LandingPage;
