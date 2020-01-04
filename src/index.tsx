import * as React from "react"
import * as ReactDOM from "react-dom"
import BooleanView from "./components/BooleanView"
import { BooleanStore } from "./components/BooleanStore"

const app = document.getElementById("root");

const boolStore = new BooleanStore;

ReactDOM.render(<BooleanView boolStore={boolStore} />, app)