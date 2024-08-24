import styled from "styled-components";
import { Colors } from "../../styles/colors";

interface Props {
  title?: string;
  viewCount?: string;
}

function Video({ title, viewCount }: Props) {
  return (
    <>
      <Container></Container>
    </>
  );
}

export default Video;

const Container = styled.div`
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
