import { RecepeCard } from '../RecepeCard';
import PropTypes from 'prop-types';
import { List } from './RecepeList.styled';

export const RecepeList = ({ items }) => {
  return (
    <List>
      {items.map(item => (
        <li key={item.id}>
          <RecepeCard item={item} />
        </li>
      ))}
    </List>
  );
};

RecepeList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
