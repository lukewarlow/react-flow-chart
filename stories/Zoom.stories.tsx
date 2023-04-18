import {Meta, StoryObj} from '@storybook/react'
import { cloneDeep, mapValues } from 'lodash'
import {useEffect} from 'react'
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
  padding: 10px;
  background: cornflowerblue;
  color: white;
  border-radius: 3px;
  text-align: center;
  transition: 0.3s ease all;
  margin: 10px;
  cursor: pointer;
  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
  &:active {
    background: #5682d2;
  }
`


const Config: Meta = {
    // component: Zoom
}

export default Config

export const Zoom: StoryObj = {
    args: {
        zoom: 1
    },
    render(args: any) {
        const [state, setState] = React.useState({
            ...cloneDeep(chartSimple),
            scale: args.zoom,
        })

        useEffect(() => {
            setState((prevState) => {
                return {
                    ...prevState,
                    scale: args.zoom,
                }
            });
        }, [args.zoom])

        const stateActions = mapValues(actions, (func: any) =>
            (...args: any) => setState(func(...args)),
        ) as typeof actions

        return (
            <Page>
                <Content>
                    <FlowChart chart={state} callbacks={stateActions} />
                </Content>
            </Page>
        )
    }
}


// TODO implement Storybook controls
