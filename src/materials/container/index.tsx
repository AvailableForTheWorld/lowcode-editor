import type { CommonComponentProps } from '../../editor/interface'
import { useMaterialDrop } from '../../editor/hooks/useMaterialDrop'

const Container = ({ children, id }: CommonComponentProps) => {
    const { canDrop, drop } = useMaterialDrop(['Button', 'Container'], id)

    return (
        <div
            ref={node => {
                drop(node)
            }}
            className="border border-black min-h-25 p-5"
            style={{ border: canDrop ? '2px solid blue' : '1px solid black' }}
        >
            {children}
        </div>
    )
}

export default Container
