import { mount } from '@vue/test-utils'
import { expect } from 'chai'
import sinon from 'sinon'
import { PlayResults, Hands } from '@/components/Constants';
import Play from '@/components/Play';
import RockScissorsPaper from '../../../src/components/RockScissorsPaper';


describe('Play', () => {    
  let rockScissorsPaper
  let wrapper
  
  beforeEach(function(){
    rockScissorsPaper = new RockScissorsPaper()
    wrapper = mount(Play, {
      propsData: {
        rockScissorsPaper: rockScissorsPaper
      }
    })
  });

  it('draw spy', () => {
    const spy = sinon.spy(rockScissorsPaper, 'play')

    const button1 = wrapper.find("#p1Buttons > #rock")
    const button2 = wrapper.find("#p2Buttons > #rock")
    button1.trigger('click')
    button2.trigger('click')

    sinon.assert.calledWith(spy, Hands.rock, Hands.rock)
  })

  it('draw stub', () => {
    sinon.stub(rockScissorsPaper, 'play').returns(PlayResults.draw)

    const button1 = wrapper.find("#p1Buttons > #rock")
    const button2 = wrapper.find("#p2Buttons > #rock")
    button1.trigger('click')
    button2.trigger('click')

    const resultElement = wrapper.find("#result")
    expect(resultElement.text()).to.equal('result: Draw...')
  })

  it('draw mock', () => {
    const mock = sinon.mock(rockScissorsPaper)
                      .expects('play')
                      .withArgs(Hands.rock, Hands.rock)
                      .returns(PlayResults.draw)

    const button1 = wrapper.find("#p1Buttons > #rock")
    const button2 = wrapper.find("#p2Buttons > #rock")
    button1.trigger('click')
    button2.trigger('click')

    mock.verify()
    const resultElement = wrapper.find("#result")
    expect(resultElement.text()).to.equal('result: Draw...')
  })

  // it('renders p1 wins', () => {
  //   const button1 = wrapper.find("#p1Buttons > #paper")
  //   const button2 = wrapper.find("#p2Buttons > #rock")
  //   button1.trigger('click')
  //   button2.trigger('click')

  //   const resultElement = wrapper.find("#result")
  //   expect(resultElement.text()).to.equal('result: Player 1 Wins!')
  // })

  // it('renders p2 wins', () => {
  //   const button1 = wrapper.find("#p1Buttons > #paper")
  //   const button2 = wrapper.find("#p2Buttons > #scissors")
  //   button1.trigger('click')
  //   button2.trigger('click')

  //   const resultElement = wrapper.find("#result")
  //   expect(resultElement.text()).to.equal('result: Player 2 Wins!')
  // })
})
