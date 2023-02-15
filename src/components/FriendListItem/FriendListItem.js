import PropTypes from 'prop-types';
import {
  FriendListCard,
  Status,
  Avatar,
  FriendName,
} from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => (
  <FriendListCard>
    <Status status={isOnline ? 'green' : 'red'}></Status>
    <Avatar src={avatar} alt={name} />
    <FriendName>{name}</FriendName>
  </FriendListCard>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
