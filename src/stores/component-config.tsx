import { create } from 'zustand'
import Container from '../materials/container'
import Button from '../materials/button'
import Page from '../materials/page'

export interface ComponentConfig {
    name: string
    defaultProps: Record<string, any>
    component: any
}

interface State {
    componentConfig: { [key: string]: ComponentConfig }
}

interface Action {
    registerComponent: (name: string, component: ComponentConfig) => void
}

export const useComponentConfigStore = create<State & Action>(set => {
    return {
        componentConfig: {
            Container: {
                name: 'Container',
                defaultProps: {},
                component: Container
            },
            Button: {
                name: 'Button',
                defaultProps: {
                    type: 'primary',
                    text: '按钮'
                },
                component: Button
            },
            Page: {
                name: 'Page',
                defaultProps: {},
                component: Page
            }
        },
        registerComponent: (name: string, componentConfig: ComponentConfig) => {
            set(state => {
                return {
                    ...state,
                    componentConfig: {
                        ...state.componentConfig,
                        [name]: componentConfig
                    }
                }
            })
        }
    }
})
