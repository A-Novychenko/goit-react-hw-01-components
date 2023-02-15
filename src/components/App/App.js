import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import user from '../../user.json';
import data from '../../data.json';
import { Container, SectionWrapper } from './App.styled';

export const App = () => {
  return (
    <Container>
      <SectionWrapper>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </SectionWrapper>
      <SectionWrapper>
        <Statistics title="Upload stats" stats={data} />
        <Statistics stats={data} />
      </SectionWrapper>
    </Container>
  );
};
