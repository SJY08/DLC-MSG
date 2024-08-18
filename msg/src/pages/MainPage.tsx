import styled from "styled-components";
import { Colors } from "../styles/colors";
import { CiCircleCheck } from "react-icons/ci";
import { CiViewList } from "react-icons/ci";
import { GoPeople } from "react-icons/go";
import { CiShoppingCart } from "react-icons/ci";
import Chart from "../components/Charts";
import Header from "../components/header";
import Footer from "../components/footer";
import { useNavigate } from "react-router-dom";

function MainPage() {
  const navigate = useNavigate();

  const toMissionHandler = () => {
    navigate("/mission");
  };

  return (
    <>
      <Header />

      <Container>
        <ButtonContainer>
          <ButtonWrapper>
            <Button onClick={toMissionHandler}>
              <CiCircleCheck />
            </Button>
            <ButtonName>도전과제</ButtonName>
          </ButtonWrapper>

          <ButtonWrapper>
            <Button>
              <CiViewList />
            </Button>
            <ButtonName>취미관리</ButtonName>
          </ButtonWrapper>

          <ButtonWrapper>
            <Button>
              <GoPeople />
            </Button>
            <ButtonName>동호회</ButtonName>
          </ButtonWrapper>

          <ButtonWrapper>
            <Button>
              <CiShoppingCart />
            </Button>
            <ButtonName>상점</ButtonName>
          </ButtonWrapper>
        </ButtonContainer>

        <ChartContainer>
          <ChartNameWrapper>
            <ChartName>도전과제 클리어</ChartName>
          </ChartNameWrapper>
          <Chart />
        </ChartContainer>
      </Container>

      <Footer />
    </>
  );
}

export default MainPage;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 80px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`;

const Button = styled.button`
  width: 100px;
  height: 100px;
  border-radius: 24px;
  border: 1px solid ${Colors.Blue700};
  background: white;
  color: ${Colors.Blue700};
  font-size: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background: ${Colors.Gray50};
    transition: 200ms;
  }

  &:active {
    background: ${Colors.Gray100};
  }
`;

const ButtonName = styled.p`
  font-size: 24px;
  color: ${Colors.Blue700};
  text-align: center;
`;

const ChartContainer = styled.div`
  width: 900px;
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: column;
`;

const ChartNameWrapper = styled.div`
  width: 780px;
  margin-left: 20px;
`;

const ChartName = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: ${Colors.Blue700};
`;
