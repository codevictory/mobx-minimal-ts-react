import { observable } from 'mobx'

export class BooleanStore {
    @observable booleanValue: boolean;
    constructor() {
        this.booleanValue = true;
    }

    changeValue = () => {
        this.booleanValue = !this.booleanValue;
        console.log("kikkeli");
    }
}