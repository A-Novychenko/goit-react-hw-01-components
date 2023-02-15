import { Profile } from 'components/Profile/Profile';
import user from '../../user.json';
import { Container, Section } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Section>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Section>
    </Container>
  );
};
