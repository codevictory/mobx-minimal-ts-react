import * as React from "react"
import * as ReactDOM from "react-dom"
import MainView from "./components/MainView"
import { BooleanStore } from "./components/BooleanStore"
import { IntegerStore } from "./components/IntegerStore";

const app = document.getElementById("root");

const boolStore = new BooleanStore;
const integerStore = new IntegerStore;

ReactDOM.render(<MainView boolStore={boolStore} integerStore={integerStore} />, app)