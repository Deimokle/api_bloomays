module.exports = {
  apps: [
    {
      name: 'api',
      script: './build/src/app/app.js',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
}
