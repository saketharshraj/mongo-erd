import createEngine, {
    DiagramModel,
    DefaultNodeModel,
    DefaultLinkModel,
} from '@projectstorm/react-diagrams';
import { CanvasWidget } from '@projectstorm/react-canvas-core';
import './App.css';

export default function Workspace() {
    // setup engine
    var engine = createEngine();

    // setup model
    var model = new DiagramModel();

    //3-A) create a default node
    const node1 = new DefaultNodeModel({
        name: 'user',
        color: 'rgb(0,192,255)',
    });

    node1.setPosition(100, 100);
    let port1 = node1.addOutPort('Out');

    const node2 = new DefaultNodeModel({
        name: 'transaction',
        color: 'rgb(0,192,255)',
    });
    node2.setPosition(200, 200);
    let port2 = node2.addOutPort('Out');

    const link = port1.link<DefaultLinkModel>(port2);
    link.addLabel('Hello World!');

    //4) add the models to the root graph
    model.addAll(node1, node2, link);

    //5) load model into engine
    engine.setModel(model);

    return (
        <div>
            <CanvasWidget className='canvas' engine={engine} />
        </div>
    );
}
