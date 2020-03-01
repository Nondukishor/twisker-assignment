'use strict'

class Login {
  get rules() {
    return {
      'email': 'required|email',
      "password":"required"
    }
  }
  get messages() {
    return {
      'email.required':'You must provide a email address.',
      'email.email': 'You must provide a valid email address.',
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

module.exports = Login
