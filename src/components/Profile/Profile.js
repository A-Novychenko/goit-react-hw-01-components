import PropTypes from 'prop-types';
import {
  ProfileCard,
  Description,
  Avatar,
  Name,
  Text,
  Stats,
  Item,
  Label,
  Value,
} from './Profile.styled';
import { formatNumber } from 'utils';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => (
  <ProfileCard>
    <Description>
      <Avatar src={avatar} alt={username} />
      <Name>{username}</Name>
      <Text>{`@${tag}`}</Text>
      <Text>{location}</Text>
    </Description>

    <Stats>
      <Item>
        <Label>Followers</Label>
        {/* <Value>{new Intl.NumberFormat('en-US').format(followers)}</Value> */}
        <Value>{formatNumber(followers)}</Value>
      </Item>
      <Item>
        <Label>Views</Label>
        <Value>{formatNumber(views)}</Value>
      </Item>
      <Item>
        <Label>Likes</Label>
        <Value>{formatNumber(likes)}</Value>
      </Item>
    </Stats>
  </ProfileCard>
);

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
