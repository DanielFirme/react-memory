import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 75rem;
  margin: auto;
  display: flex;
  padding: 5rem 0;

  @media (max-width: 750px){
    flex-direction: column;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;

  @media (max-width: 750px){
    margin-bottom: 5rem;
    align-items: center;
  }

`;

export const LogoLink = styled.a`
  display: block;
`;

export const InfoArea = styled.div`
  width: 100%;
  margin: 1rem 0;

  @media (max-width: 750px){
    display: flex;
    justify-content: space-around;
    text-align: center;
  }
`;

export const GridArea = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 750px){
    justify-content: center;
    margin: 0 2rem;
  }
`;

export const Grid = styled.div`
  width: 43rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;

  @media (max-width: 750px){
    grid-template-columns: repeat(3, 1fr);
  }
`;