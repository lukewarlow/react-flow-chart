import {Meta, StoryFn} from '@storybook/react'
import * as React from 'react'
import { FlowChartWithState } from '../src'
import { Page } from './components'
import { chartSimple } from './misc/exampleChartState'

export const InternalReactState: StoryFn = () => {
  return (
    <Page>
      <FlowChartWithState initialValue={chartSimple}/>
    </Page>
  )
}

const Config: Meta = {
}

export default Config
