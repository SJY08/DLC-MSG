import styled from "styled-components";
import { Colors } from "../styles/colors";
import { CiCircleCheck } from "react-icons/ci";
import { CiViewList } from "react-icons/ci";
import { GoPeople } from "react-icons/go";
import { CiShoppingCart } from "react-icons/ci";

function MainPage() {
  return (
    <>
      <ButtonContainer>
        <ButtonWrapper>
          <Button>
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
    </>
  );
}

export default MainPage;

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
