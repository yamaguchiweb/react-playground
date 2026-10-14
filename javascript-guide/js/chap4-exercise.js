"use strict";

const calculateTicketPrice = (age) => {
  if (age <= 12) {
    return 500;
  } else if (age >= 13 && age <= 18) {
    return 1000;
  } else {
    return 1800;
  }
};

console.log(`${calculateTicketPrice(11)}円です。`);
console.log(`${calculateTicketPrice(12)}円です。`);
console.log(`${calculateTicketPrice(13)}円です。`);
console.log(`${calculateTicketPrice(18)}円です。`);
console.log(`${calculateTicketPrice(19)}円です。`);
console.log(`${calculateTicketPrice(20)}円です。`);

const sumArray = (numbers) => {
  let sumValue = 0;
  for (const num of numbers) {
    sumValue += num;
  }
  return sumValue;
};

console.log(sumArray([1, 2, 3, 4, 5]));
console.log(sumArray([10, -5, 3]));
console.log(sumArray([]));

const createUser = (lastName, firstName) => {
  return {
    lastName: lastName,
    firstName: firstName,
    getFullName() {
      return `${this.lastName} ${this.firstName}`;
    },
  };
};

const user1 = createUser("Yamada", "Taro");
console.log(user1.getFullName());
