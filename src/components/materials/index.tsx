import { useMemo } from 'react'
import { useComponentConfigStore } from '../../stores/component-config'
import MaterialItem from './item'

export function Material() {
    const { componentConfig } = useComponentConfigStore()
    const components = useMemo(() => {
        return Object.values(componentConfig)
    }, [componentConfig])
    return (
        <div className="">
            {components.map(item => {
                return <MaterialItem key={item.name} name={item.name} />
            })}
        </div>
    )
}
