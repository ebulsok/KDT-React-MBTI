import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { reset } from '../store/modules/mbti';
import OrangeButton from './OrangeButton';

export default function Show() {
  const result = useSelector((state) => state.mbti.mbtiResult);
  const explanation = useSelector((state) => state.mbti.explanation[result]);
  const dispatch = useDispatch();

  async function sqlSendData() {
    const resInc = await fetch('http://localhost:4000/data/inccount', {
      method: 'POST',
    });
    if (resInc.status === 200) console.log(await resInc.json());
    else throw new Error('통신 이상');
  }

  async function mongoSendData() {
    const resInc = await fetch('http://localhost:4000/mongo/inccount', {
      method: 'POST',
    });
    if (resInc.status === 200) console.log(await resInc.json());
    else throw new Error('통신 이상');
  }

  useEffect(() => {
    // sqlSendData();
    mongoSendData();
  }, []);

  return (
    <>
      <Header>당신의 개발자 MBTI 결과는?</Header>
      <Explanation>{explanation.text}</Explanation>
      <Result>{result}</Result>
      <Additional>이건 재미로 읽어 보세요!</Additional>
      <AdditionalImg src={explanation.img} alt="팩폭" />
      <OrangeButton text="다시 검사하기" clickEvent={() => dispatch(reset())} />
    </>
  );
}

const Header = styled.p`
  font-size: 3em;
`;

const Explanation = styled.p`
  font-size: 1.5em;
  color: #777;
`;

const Result = styled.p`
  font-size: 3em;
  color: dodgerblue;
`;

const Additional = styled.p`
  font-size: 2em;
  color: orange;
`;

const AdditionalImg = styled.img`
  width: 500px;
  transform: translateX(-35px);
`;
