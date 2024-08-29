import styled from "styled-components";
import { Colors } from "../styles/colors";
import Header from "../components/header";
import Footer from "../components/footer";
import Video from "../components/Inform/Video";
import News from "../components/Inform/News";
import { useNavigate } from "react-router-dom";

function InformPage() {
  const navigate = useNavigate();

  const toVideoHandler = () => {
    navigate("/video");
  };

  return (
    <>
      <Background>
        <Header />

        <Container>
          <VideoContainer>
            <ButtonContainer>
              <Title>동영상</Title>
              <AllButton onClick={toVideoHandler}>전체보기</AllButton>
            </ButtonContainer>
            <VideoWrapper>
              <Video />
              <Video />
              <Video />
            </VideoWrapper>
          </VideoContainer>

          <NewsContainer>
            <ButtonContainer>
              <Title>동영상</Title>
              <AllButton>전체보기</AllButton>
            </ButtonContainer>
            <News title="응애" enter="응애" explain="응애" />
            <News title="응애" enter="응애" explain="응애" />
            <News title="응애" enter="응애" explain="응애" />
            <News title="응애" enter="응애" explain="응애" />
          </NewsContainer>
        </Container>
      </Background>
      <Footer />
    </>
  );
}

export default InformPage;

const Background = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Container = styled.div`
  width: 1300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

const VideoContainer = styled.div`
  width: 800px;
  display: flex;
  justify-items: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 20px;
  border-bottom: 1px solid ${Colors.Gray400};
`;

const ButtonContainer = styled.div`
  width: 760px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.p`
  font-size: 16px;
  font-weight: bold;
`;

const AllButton = styled.p`
  margin-left: auto;
  color: black;
  border: none;
  background: none;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
`;

const VideoWrapper = styled.div`
  width: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const NewsContainer = styled.div`
  width: 800px;
  height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`;
