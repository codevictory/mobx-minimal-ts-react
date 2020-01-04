import * as React from 'react'
import { observer } from 'mobx-react'
import { BooleanStore } from './BooleanStore';

@observer
class BooleanView extends React.Component<{boolStore: BooleanStore}> {
    render() {
        return (
            <div>
                <button onClick={this.props.boolStore.changeValue}>Change boolean</button>
                { 
                    this.props.boolStore.booleanValue ? (
                    <p>BooleanStore.booleanValue is:<br />TRUE</p> 
                    ) : (
                        <p>BooleanStore.booleanValue is: <br />FALSE</p>
                    )
                }
            </div>
        )
    }
}

export default BooleanView
