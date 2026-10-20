"use strict";

export const isAdult = (user) => {
  return user.age >= 20;
};

const createMessage = (user) => {
  if (isAdult(user)) {
    return `ようこそ、${user.name}さん`;
  } else {
    return `${user.name}さんはまだ未成年です。`;
  }
};

export default createMessage;
