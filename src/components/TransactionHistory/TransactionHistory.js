import PropTypes from 'prop-types';
import {
  Table,
  TableHead,
  TableRow,
  HeadTableCell,
  TableCell,
  TableBody,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ transactions }) => (
  <Table>
    <TableHead>
      <TableRow>
        <HeadTableCell>Type</HeadTableCell>
        <HeadTableCell>Amount</HeadTableCell>
        <HeadTableCell>Currency</HeadTableCell>
      </TableRow>
    </TableHead>

    {transactions.map(({ id, type, amount, currency }) => (
      <TableBody key={id}>
        <TableRow>
          <TableCell>{type}</TableCell>
          <TableCell>{amount}</TableCell>
          <TableCell>{currency}</TableCell>
        </TableRow>
      </TableBody>
    ))}
  </Table>
);

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
