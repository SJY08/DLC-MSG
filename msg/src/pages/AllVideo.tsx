import styled from "styled-components";
import { Colors } from "../styles/colors";
import Header from "../components/header";
import Footer from "../components/footer";
import Video from "../components/Inform/Video";

function AllVideo() {
  return (
    <>
      <Background>
        <Header />
        <VideoContainer>
          <Title>동영상</Title>
          <VideoWrapper>
            <Video />
            <Video />
            <Video />
          </VideoWrapper>
          <VideoWrapper>
            <Video />
            <Video />
            <Video />
          </VideoWrapper>
          <VideoWrapper>
            <Video />
            <Video />
            <Video />
          </VideoWrapper>
        </VideoContainer>
      </Background>
      <Footer />
    </>
  );
}

export default AllVideo;

const Background = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

const Title = styled.p`
  width: 730px;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const VideoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`;

const VideoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
