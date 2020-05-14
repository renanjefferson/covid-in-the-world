import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 32px;
  margin: 30px 0;

  div {
    background: #232129;
    padding: 15px 20px;
    border-radius: 10px;
    border: 2px solid #212329;

    & + div {
      margin-left: 16px;
    }
  }
  div.infected {
    border-bottom-color: #ff872c;
  }
  div.recovered {
    border-bottom-color: #12a454;
  }
  div.dead {
    border-bottom-color: #e83f5b;
  }
  @media only screen and (max-width: 823px) {
    div {
      width: 100%;
    }
  }
  @media only screen and (max-width: 768px) {
    display: block;

    div {
      & + div {
        margin: 0;
        margin-top: 16px;
      }
    }
  }
`;
