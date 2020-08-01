import { StoryFn } from '@storybook/addons'
import GlobalStyles from '../src/styles/global'

const witchGlobalStyles = (storyFn: StoryFn) => (
  <>
    <GlobalStyles />
    {storyFn()}
  </>
)

export default witchGlobalStyles
