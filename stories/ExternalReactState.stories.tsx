import {Meta} from '@storybook/react'
import { cloneDeep, mapValues } from 'lodash'
import {useState} from 'react'
import * as React from 'react'
import { FlowChart } from '../src'
import * as actions from '../src/container/actions'
import { Page } from './components'
import { chartSimple } from './misc/exampleChartState'

/**
 * State is external to the <FlowChart> Element
 *
 * You could easily move this state to Redux or similar by creating your own callback actions.
 */
export const ExternalReactState = () => {
    const [state, setState] = useState(cloneDeep(chartSimple))

    const stateActions = mapValues(actions, (func: any) =>
      (...args: any) => setState(func(...args))) as typeof actions

    return (
      <Page>
        <FlowChart
          chart={state}
          callbacks={stateActions}
        />
      </Page>
    )
}

const Config: Meta = {
}

export default Config
