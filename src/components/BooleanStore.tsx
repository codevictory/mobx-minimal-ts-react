import { observable, action } from 'mobx'

class BooleanStore {
    @observable booleanValue: boolean;
    constructor() {
        this.booleanValue = true;
    }

    @action.bound
    changeValue() {
        this.booleanValue = !this.booleanValue;
    }
}

export default BooleanStore;