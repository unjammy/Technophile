
class Phone {

  constructor(phoneNumber) {
    this.phoneNumber = phoneNumber;
  }

  callPhone(phoneNumber){
    return this.phoneNumber + " calls " + phoneNumber;
  }

}

module.exports = Phone;