import styled from "styled-components";
import { Colors } from "../../styles/colors";

interface Props {
  enter?: string;
  title?: string;
  explain?: string;
}

function News({ enter, title, explain }: Props) {
  return (
    <>
      <Container>
        <Wrapper>
          <Entertainment>{enter}</Entertainment>
          <NewsTitle>{title}</NewsTitle>
          <NewsExplain>{explain}</NewsExplain>
        </Wrapper>
        <NewsImage />
      </Container>
    </>
  );
}

export default News;

const Container = styled.div`
  width: 800px;
  height: 200px;
  padding: 10px;
  justify-content: center;
  gap: 10px;
`;
const Wrapper = styled.div`
  width: 620px;
  height: 170px;
  padding: 10px;
  gap: 20px;
  display: flex;
  justify-content: left;
  align-items: start;
`;

const Entertainment = styled.p`
  width: 600px;
  height: 22px;
  font-size: 20px;
  color: ${Colors.Gray600};
`;

const NewsTitle = styled.p`
  width: 600px;
  height: 26px;
  color: ${Colors.Blue500};
  font-size: 24px;
  font-weight: bold;
`;

const NewsExplain = styled.p`
  width: 600px;
  height: 42px;
  font-size: 20px;
  color: ${Colors.Gray500};
`;

const NewsImage = styled.div`
  width: 150px;
  height: 150px;
  border: none;
  background: ${Colors.Gray500};
  border-radius: 15px;
`;
