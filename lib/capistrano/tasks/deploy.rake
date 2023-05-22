# lib/capistrano/tasks/deploy.rake

namespace :deploy do
  desc 'Build and restart Next.js application'
  task :restart do
    on roles(:app) do
      execute 'npm run build'
      execute 'pm2 restart ecosystem.config.js --env production'
    end
  end
end

after 'deploy:publishing', 'deploy:restart'
