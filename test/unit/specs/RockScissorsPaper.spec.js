import { PlayResults, Hands } from '@/components/Constants';
import RockScissorsPaper from '@/components/RockScissorsPaper';

describe('Play', () => {
  const play = new RockScissorsPaper();
  it('rock wins scissors', () => {
    expect(play.play(Hands.rock, Hands.scissors)).toBe(PlayResults.p1Wins)
    expect(play.play(Hands.scissors, Hands.rock)).toBe(PlayResults.p2Wins)
  })
  it('scissors wins paper', () => {
    expect(play.play(Hands.scissors, Hands.paper)).toBe(PlayResults.p1Wins)
    expect(play.play(Hands.paper, Hands.scissors)).toBe(PlayResults.p2Wins)
  })
  it('paper wins rock', () => {
    expect(play.play(Hands.paper, Hands.rock)).toBe(PlayResults.p1Wins)
    expect(play.play(Hands.rock, Hands.paper)).toBe(PlayResults.p2Wins)
  })
  it('draw', () => {
    expect(play.play(Hands.rock, Hands.rock)).toBe(PlayResults.draw)
    expect(play.play(Hands.scissors, Hands.scissors)).toBe(PlayResults.draw)
    expect(play.play(Hands.paper, Hands.paper)).toBe(PlayResults.draw)
  })
})
