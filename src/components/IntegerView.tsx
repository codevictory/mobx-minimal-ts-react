import * as React from 'react';
import { observer } from 'mobx-react';
import { IntegerStore } from './IntegerStore'

@observer
class IntegerView extends React.Component<{ integerStore: IntegerStore }> {
    render() {
        return(
            <div>
                <h3>Integer View</h3>
                <p>IntegerValue is: { this.props.integerStore.integerValue }</p>
            </div>
        )
    }
}

export default IntegerView;