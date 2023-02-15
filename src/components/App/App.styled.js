import styled from '@emotion/styled';

export const Container = styled.div`
  padding-left: ${props => props.theme.spacing(5)};
  padding-right: ${props => props.theme.spacing(5)};
`;
export const Section = styled.div`
  margin-top: ${props => props.theme.spacing(10)};
  margin-bottom: ${props => props.theme.spacing(10)};
  padding-top: ${props => props.theme.spacing(20)};
  padding-bottom: ${props => props.theme.spacing(20)};
  background-color: ${props => props.theme.colors.lightGrey};
  }
`;
