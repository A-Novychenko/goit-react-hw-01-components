import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin-left: auto;
  margin-right: auto;

  width: 280px;
  background-color: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.spacing(1)};
  border: 1px solid ${props => props.theme.colors.darkGrey};
  box-shadow: ${props => props.theme.boxShadow};
  overflow: hidden;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: ${props => props.theme.spacing(8)};
`;

export const Avatar = styled.img`
  margin-bottom: ${props => props.theme.spacing(8)};

  width: 100px;
  border-radius: 50%;
  border: 1px solid ${props => props.theme.colors.lightGrey};
`;

export const Name = styled.p`
  margin-bottom: ${props => props.theme.spacing(2)};
  font-size: ${props => props.theme.spacing(5)};
  font-weight: 500;

  color: #000000;
`;

export const Text = styled.p`
  margin-bottom: ${props => props.theme.spacing(2)};
  font-size: ${props => props.theme.spacing(4)};
  color: ${props => props.theme.colors.darkGrey};
  :last-child {
    margin-bottom: 0;
  }
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 280px;
  background-color: ${props => props.theme.colors.lightGrayTransparency};

  border-bottom-left-radius: ${props => props.theme.spacing(1)};
  border-bottom-right-radius: ${props => props.theme.spacing(1)};
  border-top: 1px solid ${props => props.theme.colors.darckGrayTransparency};
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 33%;
  padding: ${props => props.theme.spacing(4, 2)};
  border-right: 1px solid ${props => props.theme.colors.darckGrayTransparency};
  :last-child {
    border-right: none;
  }
`;

export const Label = styled.span`
  margin-bottom: ${props => props.theme.spacing(2)};
  color: ${props => props.theme.colors.darkGrey};
`;

export const Value = styled.span`
  font-weight: 700;
`;
