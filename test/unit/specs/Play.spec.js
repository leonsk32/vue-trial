import { mount } from '@vue/test-utils'
import { expect } from 'chai'
import { PlayResults, Hands } from '@/components/Constants';
import Play from '@/components/Play';


describe('Play', () => {
  // TODO RockScissorsPaper を Stub にする

  const wrapper = mount(Play)

  it('renders draw', () => {
    const button1 = wrapper.find("#p1Buttons > #rock")
    const button2 = wrapper.find("#p2Buttons > #rock")
    button1.trigger('click')
    button2.trigger('click')

    const resultElement = wrapper.find("#result")
    expect(resultElement.text()).to.equal('result: Draw...')
  })

  it('renders p1 wins', () => {
    const button1 = wrapper.find("#p1Buttons > #paper")
    const button2 = wrapper.find("#p2Buttons > #rock")
    button1.trigger('click')
    button2.trigger('click')

    const resultElement = wrapper.find("#result")
    expect(resultElement.text()).to.equal('result: Player 1 Wins!')
  })

  it('renders p2 wins', () => {
    const button1 = wrapper.find("#p1Buttons > #paper")
    const button2 = wrapper.find("#p2Buttons > #scissors")
    button1.trigger('click')
    button2.trigger('click')

    const resultElement = wrapper.find("#result")
    expect(resultElement.text()).to.equal('result: Player 2 Wins!')
  })
})