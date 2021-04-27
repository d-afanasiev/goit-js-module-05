// // Представим что выше есть объявление класса User

// class ContentWriter extends User {
//   posts;

//   constructor({ email, posts }) {
//     super(email);
//     this.posts = posts;
//   }

//   addPost(post) {
//     this.posts.push(post);
//   }
// }

// const writer = new ContentWriter({ email: "mango@mail.com", posts: [] });
// console.log(writer); // { email: 'mango@mail.com', posts: [] }
// console.log(writer.email); // 'mango@mail.com'
// writer.addPost("post-1");
// console.log(writer.posts); // ['post-1']

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
class Admin extends User {
  // Пиши код ниже этой строки

  static AccessLevel = {
    BASIC: "basic",
    SUPERUSER: "superuser",
  };

  blacklistedEmails = [];
  accessLevel;

  constructor({ email, accessLevel }) {
    super(email);
    this.accessLevel = accessLevel;
  }

  blacklist(email) {
    this.blacklistedEmails.push(email);
  }

  isBlacklisted(email) {
    return this.blacklistedEmails.includes(email);
  }

  // Пиши код выше этой строки
}

const mango = new Admin({
  email: "mango@mail.com",
  accessLevel: Admin.AccessLevel.SUPERUSER,
});

console.log(mango.email); // mango@mail.com
console.log(mango.accessLevel); // superuser
mango.blacklist("poly@mail.com");
console.log(mango.blacklistedEmails); // 'poly@mail.com'
console.log(mango.isBlacklisted("mango@mail.com")); //  false
console.log(mango.isBlacklisted("poly@mail.com")); // true
