import styled from "styled-components";
import { Colors } from "../styles/colors";
import Header from "../components/header";
import Footer from "../components/footer";
import { FaCircleCheck } from "react-icons/fa6";
import { PiBarbellLight } from "react-icons/pi";

function MissionPage() {
  return (
    <>
      <Background>
        <Header />

        <TitleContainer>
          <TitleLogo>
            <FaCircleCheck />
          </TitleLogo>
          <Title>
            오누이에서 오늘의 미션을
            <br />
            추천해 드릴게요
          </Title>
        </TitleContainer>

        <MissionContainer>
          <MissionWrapper>
            <MissionLogo>
              <PiBarbellLight />
            </MissionLogo>
            <MissionTitleWrapper>
              <MissionTitle>등반하고 인증사진 찍기</MissionTitle>
              <Prize>5000톨</Prize>
            </MissionTitleWrapper>
          </MissionWrapper>

          <MissionWrapper>
            <MissionLogo>
              <PiBarbellLight />
            </MissionLogo>
            <MissionTitleWrapper>
              <MissionTitle>등반하고 인증사진 찍기</MissionTitle>
              <Prize>5000톨</Prize>
            </MissionTitleWrapper>
          </MissionWrapper>
        </MissionContainer>
      </Background>
      <Footer />
    </>
  );
}

export default MissionPage;

const Background = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(white, ${Colors.LightBlue100});
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 60px;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

const TitleLogo = styled.div`
  font-size: 80px;
  color: ${Colors.Blue500};
`;

const Title = styled.p`
  font-size: 36px;
  color: ${Colors.Blue500};
  font-weight: bold;
  text-align: center;
`;

const MissionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px;
`;

const MissionWrapper = styled.div`
  width: 250px;
  height: 275px;
  background: white;
  border: 1px solid ${Colors.Blue500};
  border-radius: 20px;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

const MissionLogo = styled.p`
  font-size: 80px;
  color: ${Colors.Blue500};
`;

const MissionTitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`;

const MissionTitle = styled.p`
  font-size: 22px;
  color: black;
  font-weight: bold;
`;

const Prize = styled.div`
  font-size: 20px;
  color: ${Colors.Blue500};
  font-weight: lighter;
`;
