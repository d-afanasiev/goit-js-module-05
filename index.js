// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class ContentWriter extends User {
//   // Тело класса ContentWriter
// }

// const writer = new ContentWriter("mango@mail.com");
// console.log(writer); // { email: 'mango@mail.com' }
// console.log(writer.email); // 'mango@mail.com'

class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
// Пиши код ниже этой строки

class Admin extends User {
  static AccessLevel = {
    BASIC: "basic",
    SUPERUSER: "superuser",
  };
}
