import styled from "styled-components";
import { Colors } from "../../styles/colors";

interface Props {
  title?: string;
  viewCount?: number;
}

function Video({ title, viewCount }: Props) {
  return (
    <>
      <Container>
        <VideoImage />
        <VideoTitle>{title}</VideoTitle>
        <ViedoView>조회수 {viewCount}회</ViedoView>
      </Container>
    </>
  );
}

export default Video;

const Container = styled.div`
  width: 420px;
  height: 360px;
  padding: 10px;
  display: flex;
  justify-content: left;
  align-items: start;
`;

const VideoImage = styled.div`
  width: 400px;
  height: 255px;
  border: none;
  background: ${Colors.Gray200};
`;

const VideoTitle = styled.p`
  width: 370px;
  height: 50px;
  font-size: 16px;
  font-weight: bold;
  color: black;
`;

const ViedoView = styled.p`
  width: 370px;
  height: 20px;
  font-size: 16px;
  font-weight: lighter;
  color: ${Colors.Gray500};
`;
