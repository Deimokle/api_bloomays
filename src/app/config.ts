import dotenv from 'dotenv'
dotenv.config()

export default {
  IS_PRODUCTION: process.env.NODE_ENV === 'production',
  PORT: process.env.PORT || '8080',
}
