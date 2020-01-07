import * as React from 'react'
import { observer } from 'mobx-react'
import { BooleanStore } from './BooleanStore';
import { IntegerStore } from './IntegerStore';
import BooleanView from './BooleanView';
import IntegerView from './IntegerView';

@observer
class MainView extends React.Component<{boolStore: BooleanStore, integerStore: IntegerStore}> {
    render() {
        return (
            <div>
                <h1>Mainview</h1>
                <button onClick={ () => { this.props.boolStore.changeValue(); this.props.integerStore.incrementInteger(); } }>Change values below</button>
                { 
                    this.props.boolStore.booleanValue ? (
                    <p>BooleanValue is:<br />TRUE</p> 
                    ) : (
                        <p>BooleanValue is: <br />FALSE</p>
                    )
                }
                <p>IntegerValue is: { this.props.integerStore.integerValue }</p>
                <br />
                <BooleanView boolStore={ this.props.boolStore } />
                <br />
                <IntegerView integerStore={ this.props.integerStore } />
                <br />
            </div>
        );
    }
}

export default MainView;
