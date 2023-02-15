import PropTypes from 'prop-types';
import {
  Section,
  Title,
  StatList,
  StatItem,
  Label,
  Percentage,
} from './Statistics.styled';
import { getRandomHexColor } from 'utils';

export const Statistics = ({ title, stats }) => (
  <Section>
    {title && <Title>{title}</Title>}

    <StatList>
      {stats.map(({ id, label, percentage }) => (
        <StatItem key={id} bgcColor={getRandomHexColor()}>
          <Label>{label}</Label>
          <Percentage>{`${percentage}%`}</Percentage>
        </StatItem>
      ))}
    </StatList>
  </Section>
);

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
  title: PropTypes.string,
};
