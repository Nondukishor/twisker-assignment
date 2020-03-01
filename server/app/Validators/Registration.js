'use strict'

class Registration {
  get rules() {
    return {
      'username':'required',
      'email': 'required|email|unique:users',
      "password":"required"
    }
  }
  get messages() {
    return {
      'username.required':'You must provide a user name',
      'email.required':'You must provide a email address.',
      'email.email': 'You must provide a valid email address.',
      'email.unique': 'This email is already registered.',
      'password.required': 'You must provide a password'
    }
  }
  get sanitizationRules() {
    return {
      "id": "escape"
    }
  }
  async fails (errorMessages) {
    return this.ctx.response.status(422).send({
      success:false,
      type:'danger',
      message:errorMessages[0].message
    })
  }
}

module.exports = Registration
