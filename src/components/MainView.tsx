import * as React from 'react'
import { observer } from 'mobx-react'
import { BooleanStore } from './BooleanStore';
import { IntegerStore } from './IntegerStore';

@observer
class MainView extends React.Component<{boolStore: BooleanStore, integerStore: IntegerStore}> {
    render() {
        return (
            <div>
                <button onClick={ () => { this.props.boolStore.changeValue(); this.props.integerStore.incrementInteger(); } }>Change values below</button>
                { 
                    this.props.boolStore.booleanValue ? (
                    <p>BooleanValue is:<br />TRUE</p> 
                    ) : (
                        <p>BooleanValue is: <br />FALSE</p>
                    )
                }
                <p>IntegerValue is: { this.props.integerStore.integerValue }</p>
            </div>
        )
    }
}

export default MainView
