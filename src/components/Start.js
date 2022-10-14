import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import OrangeButton from './OrangeButton';
import { next } from '../store/modules/mbti';
import { useEffect, useState } from 'react';

export default function Start() {
  const [counts, setCounts] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      const resCount = await fetch('http://localhost:4000/data/count');
      if (resCount.status === 200) {
        const num = await resCount.json();
        if (num[0].counts !== 0) setCounts(num[0].counts);
      } else throw new Error('통신 이상');
    }
    fetchData();
  }, [counts]);

  return (
    <>
      <Header>개발자 MBTI 조사</Header>
      <MainImg src="/images/main.jpg" alt="메인 이미지" />
      <SubHeader>
        개발자가 흔히 접하는 상황에 따라서 MBTI를 알아봅시다! 지금까지{'\n\n'}
        {counts} 명이 참여해주셨습니다.
      </SubHeader>
      <OrangeButton text="테스트 시작" clickEvent={() => dispatch(next())} />
    </>
  );
}

const MainImg = styled.img`
  width: inherit;
`;

const Header = styled.p`
  font-size: 3em;
`;

const SubHeader = styled.p`
  font-size: 1.5em;
  color: #777;
`;
