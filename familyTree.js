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

console.log(gen2.childOf())
