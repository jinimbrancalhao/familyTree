// Object literals

const gen1 = {
  name: 'John',
  parents: ['Sam', 'Amy'],
  childOf: function () {
    return `${this.name} has parents ${this.parents[0]} and ${this.parents[1]}`
  }
}

const gen2 = {
  name: 'James',
  parents: ['John', 'Stacey'],
  childOf: function () {
    return `${this.name} has parents ${this.parents[0]} and ${this.parents[1]}`
  }
}

const gen3 = {
  name: 'Adam',
  parents: ['James', 'Melissa'],
  childOf: function () {
    return `${this.name} has parents ${this.parents[0]} and ${this.parents[1]}`
  }
}

console.log(gen3.childOf())

// Class

class Family {
  constructor(name, parents = []) {
    this.name = name
    this.parents = parents
    this.childOf = function () {
      return `${this.name} has parents ${this.parents[0]} and ${this.parents[1]}`
    }
  }
}

let genOne = new Family('Dale', ['Shayne', 'May'])
let genTwo = new Family('George', ['Dale', 'Grace'])
let genThree = new Family('Bob', ['George', 'Amy'])
console.log(genTwo.childOf())
