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
        <span className="quantity">{followers}</span>
      </Item>
      <Item>
        <Label className="label">Views</Label>
        <span className="quantity">{views}</span>
      </Item>
      <Item>
        <Label className="label">Likes</Label>
        <span className="quantity">{likes}</span>
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
