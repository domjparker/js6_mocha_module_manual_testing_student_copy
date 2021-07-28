/*This class should have a memory property that stores the most recent calculation along with several methods.
Each method should work as described in its respective comment and should throw a descriptive error if the input is invalid.
Your objective is to manually test each function in order to get it working properly and to account for as many edge cases as you can. */

class Calc {

  // Constructs a Calc object with an undefined memory property.
  constructor() {
      this.memory = undefined;
  }

  // Clears the memory property.
  clearMem() {
      this.memory = undefined;
  }

  // Logs the result of adding two numbers together, assigns result to memory property, and defaults the second value to the memory property. Logs an error if there are insufficient inputs.
  add(value1, value2 = this.memory) {
      if (value2 !== undefined) {
          console.log(`${value1} + ${value2} = ${this.memory}`);
          this.memory = value1 + value2;
          return this.memory;
      } else {
          console.log(new Error('Must input two values to add'));
          return this.memory;
      }
  }

  // Logs the result of subtracting value1 from value2, assigns result to memory property, and defaults the second value to the memory property. Logs an error if there are insufficient inputs.
  subtract(value1, value2 = this.memory) {
      if (value2 !== undefined) {
          this.memory = value1 - value2;
          console.log(`${value2} - ${value1} = ${this.memory}`);
          return this.memory;
      } else {
          console.log(new Error('Must input two values to subtract'));
      }
  }

  // Logs the result of multiplying two numbers together, assigns result to memory property, and defaults the second value to the memory property. Logs an error if there are insufficient inputs.
  multiply(value1, value2 = this.memory) {
      if (value2 !== undefined) {
          let memory = value1 * value2;
          console.log(`${value1} x ${value2} = ${memory}`);
          return this.memory;
      } else {
          console.log(new Error('Must input two values to multiply'));
      }
  }

  // Divides one value1 by value2, assigns result to memory property, and defaults second value to the memory property. Logs an error if there are insufficient inputs.
  divide(value1, value2) {
      if (value2 !== undefined) {
          this.memory = value1 / value2;
          console.log(`${value1} / ${value2} = ${this.memory}`);
          return this.memory;
      } else {
          console.log(new Error('Must input two values to divide'));
      }
  }

  // Logs the result of converting temperature from Celsius to Fahrenheit, assigns result to memory property, and defaults second value to the memory property. Logs an error if input is insufficient.
  convertToF(cTemp = this.memory) {
      if (cTemp === number) { 
          this.memory = cTemp * 1.8 + 32;
          console.log(`${cTemp} degrees Celsius is equivalent to ${this.memory} degrees Fahrenheit`);
          return this.memory;
      } else {
          console.log(new Error('Invalid input: input must be a number'));
      }
  }

  // Logs the result of converting temperature from Fahrenheit to Celsius, assigns result to memory property, and defaults second value to the memory property. Logs an error if input is insufficient.
  convertToC(fTemp = this.memory) {
      if (typeof fTemp === this.memory) {
          this.memory = (fTemp - 32 / 1.8);
          console.log(`${fTemp} degrees Fahrenheit is equivalent to ${memory} degrees Celsius`);
          return this.memory;
      } else console.error(new Error('Invalid input: input must be a number'));
  }

  // Logs the square root of a number, assigns result to memory property, and defaults input to the memory property. Logs an error if input value is insufficient.
  sqrt(num) {
      if (num) {
          this.memory = num.sqrt();
          return this.memory;
      } else {
          console.log(new Error('Invalid input: input must be a number'))
      }
  }
}

module.exports = {
  Calc: Calc
}


