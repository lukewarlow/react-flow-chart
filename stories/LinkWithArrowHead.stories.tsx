import {Meta} from '@storybook/react'
import { cloneDeep, mapValues } from 'lodash'
import * as React from 'react'
import { FlowChart } from '../src'
import * as actions from '../src/container/actions'
import { Page } from './components'
import { chartSimple } from './misc/exampleChartState'

export const LinkWithArrowHead = () => {
    const [state, setState] = React.useState(cloneDeep(chartSimple))

    const stateActions = mapValues(actions, (func: any) =>
        (...args: any) => setState(func(...args))) as typeof actions

    return (
        <Page>
            <FlowChart
                chart={state}
                callbacks={stateActions}
                config={{
                    showArrowHead: true,
                }}
            />
        </Page>
    )
}

const Config: Meta = {
}

export default Config
