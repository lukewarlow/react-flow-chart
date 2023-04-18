import {Meta, StoryFn} from '@storybook/react'
import * as React from 'react'
import { FlowChartWithState } from '../src'
import { Page } from './components'
import { chartSimple } from './misc/exampleChartState'

export const SnapToGrid: StoryFn = () => {
  return (
    <Page>
      <FlowChartWithState
        initialValue={chartSimple}
        config={{
          snapToGrid: true,
        }}
      />
    </Page>
  )
}

const Config: Meta = {
    title: 'Snap To Grid',
}

export default Config
