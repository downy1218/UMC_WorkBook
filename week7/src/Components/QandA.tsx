import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    margin-left:120px;
    display:flex;
    flex-direction:column;
    gap:10px;

`
const Container = styled.div`
    display:flex;
    align-items:center;
    padding-left:20px;
    width:1300px;
    height:80px;
    background-color:rgba(91, 91, 91, 1);
    border:none;
    border-radius:10px;
    &:hover{
        opacity:0.8;
    }
    p{
        color:rgba(195, 195, 195, 1);
        font-size:18px;
    }
`

function QandA() {
    const [questions, setQuestions] = useState([
        {
            id: 1,
            title: "멤버십을 해지하려면 어떡해야 하나요?"
        },
        {
            id: 2,
            title: "DANCHA에선 어떤 컨텐츠를 시청할 수 있나요?"
        },
        {
            id: 3,
            title: "DANCHA란 무엇인가요?"
        },
        {
            id: 4,
            title: "DANCHA 요금은 얼마인가요?"
        },
        {
            id: 5,
            title: "DANCHA 아이들이 봐도 괜찮을까요?"
        },
    ])
    return (
        <Wrapper>
            {
                questions.map((item, index) => {
                    return (
                        <Container key={item.id}>
                            <p>{item.title}</p>
                        </Container>
                    )
                })
            }
        </Wrapper>
    )
}

export default QandA;