import styled from '@emotion/styled';

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin-left: auto;
  margin-right: auto;

  margin-bottom: ${props => props.theme.spacing(10)};

  border-radius: ${props => props.theme.spacing(1)};
  background-color: ${props => props.theme.colors.white};
    box-shadow: ${props => props.theme.boxShadow};
  overflow: hidden;
  width: 280px;
  }
`;

export const Title = styled.h2`
  padding: ${props => props.theme.spacing(5, 0, 5, 0)};

  font-size: ${props => props.theme.spacing(5)};
  text-transform: uppercase;
  color: ${props => props.theme.colors.darkGrey};
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 280px;
`;

export const StatItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 20%;

  padding: ${props => props.theme.spacing(3, 0, 3, 0)};
  background-color: ${props => props.bgcColor};
  color: ${props => props.theme.colors.white};
`;

export const Label = styled.span`
  margin-bottom: ${props => props.theme.spacing(1)};
  font-size: ${props => props.theme.spacing(3)};
`;

export const Percentage = styled.span`
  font-weight: 700;
`;
