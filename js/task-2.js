class Storage {
    #items

    constructor(items) {
        this.#items = items;
    }

    getItems() {
        return this.#items
    }

    addItem(newItem) {
        return this.#items.push(newItem)
    }

    removeItem(itemToRemove) {
        if (this.#items.find((item) => item === itemToRemove)) {
            return this.#items.splice(this.#items.indexOf(this.#items.find((item) => item === itemToRemove)), 1)
        } else {
            return
        }
    }
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem("Scaner");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]