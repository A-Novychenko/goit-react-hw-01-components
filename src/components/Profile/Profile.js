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

    <Stats className="stats">
      <Item>
        <Label className="label">Followers</Label>
        <Value className="quantity">
          {new Intl.NumberFormat('en-US').format(followers)}
        </Value>
      </Item>
      <Item>
        <Label className="label">Views</Label>
        <Value className="quantity">
          {new Intl.NumberFormat('en-US').format(views)}
        </Value>
      </Item>
      <Item>
        <Label className="label">Likes</Label>
        <Value className="quantity">
          {new Intl.NumberFormat('en-US').format(likes)}
        </Value>
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
