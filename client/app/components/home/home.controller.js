class HomeController {
  constructor() {
    this.name = 'home';
    this.numbers = [];
    for (let i = 1; i < 101; i++) {
      this.numbers.push(i);
    }
  }

  // need array 1-100
  // create element for each number
  // multiples of 3 marked & number replaced by 'Fizz'
  // multiples of 5 marked & number replaced by 'Buzz'
  // multiples of 3 & 5 marked & number replaced by 'FizzBuzz'
}

export default HomeController;
