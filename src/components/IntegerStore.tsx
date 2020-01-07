import { observable, action } from 'mobx';

export class IntegerStore {
    @observable integerValue: number;

    constructor() {
        this.integerValue = 1;
    }

    @action.bound
    incrementInteger() {
        this.integerValue++;
    }
}