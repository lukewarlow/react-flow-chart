import {Meta} from '@storybook/react'
import { cloneDeep, mapValues } from 'lodash'
import * as React from 'react'
import styled from 'styled-components'
import { FlowChart } from '../src'
import * as actions from '../src/container/actions'
import { Content, Page, Sidebar } from './components'
import { chartSimple } from './misc/exampleChartState'

const Message = styled.div`
  margin: 10px;
  padding: 10px;
  line-height: 1.4em;
`

const Button = styled.div`
  padding: 10px 15px;
  background: cornflowerblue;
  color: white;
  border-radius: 3px;
  text-align: center;
  transition: 0.3s ease all;
  cursor: pointer;
  &:hover {
    box-shadow: 0 10px 20px rgba(0,0,0,.1);
  }
  &:active {
    background: #5682d2;
  }
`

export const SelectedSidebar = () => {
    const [state, setState] = React.useState(cloneDeep(chartSimple))

    const stateActions = mapValues(actions, (func: any) =>
        (...args: any) => setState(func(...args))) as typeof actions

    return (
        <Page>
        <Content>
            <FlowChart
            chart={state}
            callbacks={stateActions}
            />
        </Content>
        <Sidebar>
            { state.selected.type
            ? <Message>
                <div>Type: {state.selected.type}</div>
                <div>ID: {state.selected.id}</div>
                <br/>
                {/*
                We can re-use the onDeleteKey action. This will delete whatever is selected.
                Otherwise, we have access to the state here so we can do whatever we want.
                */}
                <Button onClick={() => stateActions.onDeleteKey({})}>Delete</Button>
            </Message>
            : <Message>Click on a Node, Port or Link</Message> }
        </Sidebar>
        </Page>
    )
}

const Config: Meta = {
}

export default Config
