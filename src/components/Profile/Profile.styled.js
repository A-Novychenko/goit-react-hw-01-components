import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin-left: auto;
  margin-right: auto;

  width: 280px;
  background-color: #ffffff;
  border-radius: 4px;
  border: 1px solid #7c7c7c;
  box-shadow: 0px 0px 22px 4px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 0px 22px 4px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 22px 4px rgba(0, 0, 0, 0.75);
  overflow: hidden;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 32px;
`;

export const Avatar = styled.img`
  margin-bottom: 32px;

  width: 100px;
  border-radius: 50%;
  border: 1px solid #dddddd;
`;

export const Name = styled.p`
  margin-bottom: 8px;
  font-size: 20px;
  font-weight: 500;

  color: #000000;
`;

export const Text = styled.p`
  margin-bottom: 8px;
  font-size: 16px;
  color: #7c7c7c;
  :last-child {
    margin-bottom: 0;
  }
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 280px;
  background-color: #dddddd;

  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top: 1px solid #7c7c7c;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 33%;
  padding: 16px 8px;
  border-right: 1px solid #7c7c7c;
  :last-child {
    border-right: none;
  }
`;

export const Label = styled.span`
  margin-bottom: 8px;
  color: #7c7c7c;
`;

export const Value = styled.span`
  font-weight: 700;
`;
