const Ajv = require('ajv')
const ajv = new Ajv()

const user_info_schema = {
  type: 'object',
  required: ['username', 'password', 'nickname', 'create_at'],
  properties: {
    username: {
      type: 'string',
      minLength: 5,
      maxLength: 13
    },
    password: {
      type: 'string',
      minLength: 6,
      maxLength: 15
    },
    nickname: {
      type: 'string',
      maxLength: 2,
      maxLength: 10,
    }
  }
}

let user_info_validate = ajv.compile(user_info_schema)

module.exports = {
  user_info_validate
}
