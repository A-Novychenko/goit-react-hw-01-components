import styled from '@emotion/styled';

export const Container = styled.div`
  padding-left: 20px;
  padding-right: 20px;

  @media screen and (min-width: 320px) {
    width: 320px;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
  }
`;
export const Section = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
  padding-top: 80px;
  padding-bottom: 80px;
  background-color: #dddddd;
  
  }
`;
