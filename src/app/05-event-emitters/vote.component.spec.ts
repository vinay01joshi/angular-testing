import { VoteComponent } from './vote.component'; 

describe('VoteComponent', () => {
  var component: VoteComponent; 

  beforeEach(() => {
    component = new VoteComponent();
  });

  it('should raise voteChanged event when upvoted', () => {
    let totoalVotes = null;
    component.voteChanged.subscribe(tv => totoalVotes = tv);

    component.upVote();

    // expect(totoalVotes).not.toBe(null);

    expect(totoalVotes).toBe(1);
  });
});