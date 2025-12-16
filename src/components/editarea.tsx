import { useEffect } from 'react'
import { useComponentsStore } from '../stores/components'
import { useShallow } from 'zustand/react/shallow'

export function EditArea() {
    const { components, addComponent, deleteComponent, updateComponentProps } = useComponentsStore(
        useShallow(state => ({
            components: state.components,
            addComponent: state.addComponent,
            deleteComponent: state.deleteComponent,
            updateComponentProps: state.updateComponentProps
        }))
    )
    useEffect(() => {
        addComponent(
            {
                id: 222,
                name: 'Container',
                props: {},
                children: []
            },
            1
        )
        addComponent(
            {
                id: 333,
                name: 'Button',
                props: {},
                children: []
            },
            222
        )

        const timer = window.setTimeout(() => {
            deleteComponent(333)
            updateComponentProps(222, { title: 'asdf' })
        }, 2000)

        return () => window.clearTimeout(timer)
    }, [addComponent, deleteComponent, updateComponentProps])
    return (
        <div>
            <pre>{JSON.stringify(components, null, 2)}</pre>
        </div>
    )
}
