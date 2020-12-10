import styled from 'styled-components';

export const MainStyle = styled.main`
  display: flex;
  flex-direction: column;
  margin-left: 150px;
`

export const WordCard = styled.div`
  display: flex;
  flex-direction: column;
  //flex-wrap: wrap;
  height: 80vh;
  width: 500px;
  margin: auto;
  border-radius: 50px;
  background-color: ${props => props.color === 'black' ? '#555' : '#fff'};
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px -4px 4px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  @media screen and (max-width: 1000px) {
    width: 80vw;
    height: 80vh;
  }
`