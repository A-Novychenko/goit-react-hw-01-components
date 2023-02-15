import styled from '@emotion/styled';

export const FriendListCard = styled.li`
  display: flex;
  align-items: center;

  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${props => props.theme.spacing(10)};
  padding: ${props => props.theme.spacing(3, 3, 3, 3)};

  border-radius: ${props => props.theme.spacing(1)};
  background-color: ${props => props.theme.colors.white};
    box-shadow: ${props => props.theme.boxShadow};

  width: 280px;
  }
`;

export const Status = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => props.status};
  }
`;

export const Avatar = styled.img`
  margin-left: ${props => props.theme.spacing(3)};
  width: 48px;
`;

export const FriendName = styled.p`
  margin-left: ${props => props.theme.spacing(3)};

  font-size: ${props => props.theme.spacing(5)};
  font-weight: 500;
`;
