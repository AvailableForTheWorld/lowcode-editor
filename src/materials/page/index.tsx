import { type CommonComponentProps } from '../../editor/interface'
import { useMaterialDrop } from '../../editor/hooks/useMaterialDrop'

function Page({ id, children }: CommonComponentProps) {
    const { canDrop, drop } = useMaterialDrop(['Button', 'Container'], id)
    return (
        <div
            ref={node => {
                drop(node)
            }}
            className="p-5 h-full box-border"
            style={{ border: canDrop ? '2px solid blue' : 'none' }}
        >
            {children}
        </div>
    )
}

export default Page
