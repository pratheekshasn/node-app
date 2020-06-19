import { Node } from "./NodeModel";

export class Tree {
    public root: Node;
    public components: Node[];

    constructor() {
        this.components = [];
    }
}