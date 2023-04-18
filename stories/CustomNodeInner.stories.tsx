import {Meta} from '@storybook/react'
import { cloneDeep, mapValues } from 'lodash'
import {useState} from 'react'
import * as React from 'react'
import styled from 'styled-components'
import { FlowChart, INodeInnerDefaultProps } from '../src'
import * as actions from '../src/container/actions'
import { Page } from './components'
import { chartSimple } from './misc/exampleChartState'

const Outer = styled.div`
  padding: 30px;
`

const Input = styled.input`
  padding: 10px;
  border: 1px solid cornflowerblue;
  width: 100%;
`

/**
 * Create the custom component,
 * Make sure it has the same prop signature
 */
const NodeInnerCustom = ({ node, config }: INodeInnerDefaultProps) => {
  if (node.type === 'output-only') {
    return (
      <Outer>
        <p>Use Node inner to customise the content of the node</p>
      </Outer>
    )
  } else {
    return (
      <Outer>
        <p>Add custom displays for each node.type</p>
        <p>You may need to stop event propagation so your forms work.</p>
        <br />
        <Input
          type="number"
          placeholder="Some Input"
          onChange={(e) => console.log(e)}
          onClick={(e) => e.stopPropagation()}
          onMouseUp={(e) => e.stopPropagation()}
          onMouseDown={(e) => e.stopPropagation()}
        />
      </Outer>
    )
  }
}

export const CustomNodeInner = () => {
    const [state, setState] = useState(cloneDeep(chartSimple))

    const stateActions = mapValues(actions, (func: any) =>
        (...args: any) => setState(func(...args))) as typeof actions

    return (
        <Page>
            <FlowChart
                chart={state}
                callbacks={stateActions}
                Components={{
                    NodeInner: NodeInnerCustom,
                }}
            />
        </Page>
    )
}


const Config: Meta = {
}

export default Config
