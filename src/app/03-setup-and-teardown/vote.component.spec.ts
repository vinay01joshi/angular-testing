import { VoteComponent } from './vote.component'; 

describe('VoteComponent', () => {
  //arrage
  let component: VoteComponent;

  beforeEach(()=>{
    component = new VoteComponent();
  });
  
  it('should increment totoal vote when upvoted', () => {  
    //act
    component.upVote();
    //assert
    expect(component.totalVotes).toBe(1);
  });
  it('should decrement totoal vote when downvoted', () => {
    //act
    component.downVote();
    //assert
    expect(component.totalVotes).toBe(-1);
  });
});