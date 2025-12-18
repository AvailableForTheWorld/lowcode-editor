import { useDrag } from 'react-dnd'

export interface MaterialItemProps {
    name: string
}

export default function MaterialItem({ name }: MaterialItemProps) {
    const [, drag] = useDrag({
        type: name,
        item: {
            type: name
        }
    })
    return (
        <div
            ref={node => {
                drag(node)
            }}
            className="border-dashed border border-black py-2 px-2.5 m-2.5 cursor-move inline-block bg-white hover:bg-[#ccc]"
        >
            {name}
        </div>
    )
}
