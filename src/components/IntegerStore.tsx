import { observable, action } from 'mobx';

class IntegerStore {
    @observable integerValue: number;

    constructor() {
        this.integerValue = 1;
    }

    @action.bound
    incrementInteger() {
        this.integerValue++;
    }
}

export default IntegerStore;