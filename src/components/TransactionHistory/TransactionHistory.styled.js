import styled from '@emotion/styled';

export const Table = styled.table`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin-left: auto;
  margin-right: auto;

  margin-bottom: ${props => props.theme.spacing(10)};

  border-radius: ${props => props.theme.spacing(1)};
  border: 1px solid ${props => props.theme.colors.darkGrey};
  background-color: ${props => props.theme.colors.white};
    box-shadow: ${props => props.theme.boxShadow};
  overflow: hidden;
  width: 768px;
  font-family: Roboto, sans-serif;
  font-size: ${props => props.theme.spacing(3)};
  }
`;

export const TableHead = styled.thead`
  background-color: ${props => props.theme.colors.lightBlue};
  width: 100%;

  text-transform: uppercase;
  color: ${props => props.theme.colors.white};
`;

export const TableRow = styled.tr`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

export const HeadTableCell = styled.th`
  border-right: 1px solid ${props => props.theme.colors.white};
  padding: ${props => props.theme.spacing(2, 0, 2)};
  width: 100%;
  &:last-child {
    border-right: none;
  }
`;

export const TableBody = styled.tbody`
  width: 100%;
  color: ${props => props.theme.colors.darkGrey};

  &:nth-of-type(2n) {
    background-color: ${props => props.theme.colors.lightGrayTransparency};
  }
`;

export const TableCell = styled.td`
  padding: ${props => props.theme.spacing(2, 0, 2)};
  width: 100%;

  border-right: 1px solid ${props => props.theme.colors.darckGrayTransparency};
  &:last-child {
    border-right: none;
  }

  font-weight: 400;
  text-transform: capitalize;
  text-align: center;
`;
