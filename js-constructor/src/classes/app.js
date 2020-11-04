import {Site} from "./site";
import {Sitebar} from "./sitebar";

export class App {
    constructor(model) {
        this.model = model
    }

    init() {
        const site = new Site('#site');

        site.render(this.model)

        const updateCallback = newBlock => {
            this.model.push(newBlock)
            site.render(this.model)
        }

        new Sitebar('#panel', updateCallback)

    }
}