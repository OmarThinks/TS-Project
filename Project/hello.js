"use strict";
class Box {
    constructor() {
        this.contents = "";
    }
    set(value) {
        this.contents = value;
        return this;
    }
}
