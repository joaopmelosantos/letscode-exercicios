class Person {
  constructor(firstName, lastName, age, gender, interests) {
    ;(this.firstName = firstName),
      (this.lastName = lastName),
      (this.age = age),
      (this.gender = gender),
      (this.interests = interests),
      (this.bio = `${this.firstName} ${this.lastName} is ${
        this.age
      } years old. They like ${this.interests.join(', ')}`)
  }
  greeting() {
    return `Hi! I'm ${this.firstName} ${this.lastName}`
  }
}

class Teacher extends Person {
  constructor(firstName, lastName, age, gender, interests, subject) {
    super(firstName, lastName, age, gender, interests), (this.subject = subject)
  }

  greeting() {
    return `Hello. My name is Mr(s). ${this.lastName}, and i teach ${this.subject}`
  }
}

class Student extends Person {
  constructor(firstName, lastName, age, gender, interests) {
    super(firstName, lastName, age, gender, interests)
  }
  greeting() {
    return `Yo! I'm ${this.firstName}`
  }
}
