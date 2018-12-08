module.exports = {
  apps: [
    {
      name: "notifier",
      script: "./bin/www",
      error_file: __dirname + "/../logs/notifier/err.log",
      out_file: __dirname + "/../logs/notifier/out.log",
      watch: true,
      merge_logs: true,
      exec_mode: "cluster",
      instances: 2,
      log_date_format: "YYYY-MM-DD HH:mm:ss.SSS",
      env: {
        PORT: 3000,
        NODE_ENV: "development"
      },
      env_production: {
        PORT: 80,
        NODE_ENV: "production"
      }
    }
  ]
};
