import { Allotment } from 'allotment'
import 'allotment/dist/style.css'
import { Header, Material, EditArea, Setting } from '../components'

export default function LowcodeEditor() {
    return (
        <div className="h-screen flex flex-col">
            <div className="h-22">
                <Header></Header>
            </div>
            <Allotment className="h-full">
                <Allotment.Pane preferredSize={240} maxSize={300} minSize={200}>
                    <Material></Material>
                </Allotment.Pane>
                <Allotment.Pane>
                    <EditArea></EditArea>
                </Allotment.Pane>
                <Allotment.Pane preferredSize={300} maxSize={500} minSize={300}>
                    <Setting></Setting>
                </Allotment.Pane>
            </Allotment>
        </div>
    )
}
