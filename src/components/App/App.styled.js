import styled from '@emotion/styled';

export const Container = styled.div`
  padding-left: ${props => props.theme.spacing(5)};
  padding-right: ${props => props.theme.spacing(5)};
`;
export const SectionWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;

  margin-top: ${props => props.theme.spacing(10)};
  margin-bottom: ${props => props.theme.spacing(10)};
  padding-top: ${props => props.theme.spacing(20)};
  padding-bottom: ${props => props.theme.spacing(20)};
  
  background-color: ${props =>
    props.bgcColorSection
      ? props.theme.colors.white
      : props.theme.colors.lightGrey};
  }
`;
