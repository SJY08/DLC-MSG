import styled from "styled-components"
import { Colors } from "../../styles/colors"
import { ReactNode } from "react"

interface Props {
    name?: string
    subName?: string
    children?: ReactNode
}

function ItemContainer({ name, subName, children }: Props) {
    return (
        <>
            <Container>
                {name && (
                    <TitleContainer>
                        <Title>{name}</Title>
                        <SubTitle>{subName}</SubTitle>
                    </TitleContainer>
                )}

                <ChildrenContainer>{children}</ChildrenContainer>
            </Container>
        </>
    )
}

export default ItemContainer

const Container = styled.div`
    width: 700px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
`

const TitleContainer = styled.div`
    margin-top: 20px;
    width: 700px;
    display: flex;
    justify-content: left;
    align-items: center;
    gap: 20px;
`

const Title = styled.p`
    font-size: 20px;
    font-weight: bold;
    color: black;
`

const SubTitle = styled.p`
    color: ${Colors.Gray500};
    font-size: 16px;
`

const ChildrenContainer = styled.div`
    width: 700px;
    display: flex;
    justify-content: left;
    align-items: start;
    gap: 20px;
`
