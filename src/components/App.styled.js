import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 600px;
  margin-top: 40px;
  margin-right: auto;
  margin-left: auto;
  background: linear-gradient(
    189deg,
    rgba(0, 208, 226, 1) 0%,
    rgba(26, 164, 190, 1) 41%,
    rgba(255, 255, 255, 1) 100%
  );
  box-shadow: 4px 6px 5px 0px rgba(75, 109, 115, 1);
`;

export const Title = styled.h1`
  margin-top: 0;
  margin-right: 0;
  margin-left: 0;
  padding-top: 10px;
  margin-bottom: 10px;
  font-size: 42px;
  font-family: 'Comic Sans MS', cursive, sans-serif;
`;

export const SubTitle = styled.h2`
  margin-right: 0;
  margin-left: 0;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 30px;
  font-family: 'Comic Sans MS', cursive, sans-serif;
`;

export const ALterText = styled.p`
  margin-right: 0;
  margin-left: 0;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 22px;
  font-family: 'Comic Sans MS', cursive, sans-serif;
`;
