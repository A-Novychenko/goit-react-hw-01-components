import { Profile } from 'components/Profile';
import { Statistics } from 'components/Statistics';
import { FriendList } from 'components/FriendList';
import user from '../../data/user.json';
import data from '../../data/data.json';
import friends from '../../data/friends.json';
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

      <SectionWrapper bgcColorSection>
        <FriendList friends={friends} />
      </SectionWrapper>
    </Container>
  );
};
