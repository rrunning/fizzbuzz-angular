class PickaclassController {
  constructor() {
    this.name = 'pickaclass';
    this.text = '';
    this.class = '';
  }
  $onChanges() {
    this.testNum(this.fizzNum);
    console.log(this.fizzNum);
  }
  testNum(num) {
    if (num % 15 === 0) {
      this.text = 'FizzBuzz';
      this.class = 'fizz-buzz';
    } else if (num % 3 === 0) {
      this.text = 'Fizz';
      this.class = 'fizz';
    } else if (num % 5 === 0) {
      this.text = 'Buzz';
      this.class = 'buzz';
    } else {
      this.text = num;
    }
  }
}

export default PickaclassController;
