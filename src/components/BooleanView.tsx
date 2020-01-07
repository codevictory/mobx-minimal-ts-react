import * as React from 'react';
import { observer } from 'mobx-react';
import BooleanStore from './BooleanStore'

@observer
class BooleanView extends React.Component<{ boolStore: BooleanStore }> {
    render() {
        return(
            <div>
                <h3>Boolean View</h3>
                { 
                    this.props.boolStore.booleanValue ? (
                    <p>BooleanValue is:<br />TRUE</p> 
                    ) : (
                        <p>BooleanValue is: <br />FALSE</p>
                    )
                }
            </div>
        )
    }
}

export default BooleanView;