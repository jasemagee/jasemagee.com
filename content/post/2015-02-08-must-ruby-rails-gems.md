---
author: jasemagee
categories:
- Uncategorized
date: "2015-02-08T16:18:00Z"
guid: https://jasemagee.com.testing.reformsoft.default.jmagee.uk0.bigv.io/?p=113
id: 113
image: /wp-content/uploads/2016/05/sidekiq-340x210.png
title: Must have Ruby on Rails Gems
url: /2015/02/must-ruby-rails-gems/
---
These are some of my most regularly used Ruby Gems when I’m working with Rails.

### [Better Errors](https://github.com/charliesome/better_errors "Better Errors") {#better-errors1}

As the name suggests, Better Errors takes Rack errors and makes them better. You don’t even have to make any code changes.

<div class="row">
  <div class="col s12 m6">
    <h4>
      Standard
    </h4> 
    <div class="center-align"><img class="responsive-img" src="/wp-content/uploads/2016/05/rails_norm_error.png" /></div>
  </div>
  
  <div class="col s12 m6">
    <h4>
      Better Errors
    </h4>   
      <div class="center-align"><img class="responsive-img" src="/wp-content/uploads/2016/05/better_errors.png" /></div>
  </div>
</div>

### [Sidekiq](https://github.com/mperham/sidekiq "Sidekiq") {#sidekiq2}

Sidekiq is a background task processor, similar to Cron, but for Ruby. All you need to do is write the tasks method and tell Sidekiq to execute it asynchronously. Sidekiq also comes with a decent dashboard, these screenshots are from the Gamely Digests Discourse Sidekiq.

<div class="row">
  <div class="col s12 m6">
    <div class="center-align"><img class="responsive-img" src="/wp-content/uploads/2016/05/sidekiq.png" /></div>
  </div>
  
  <div class="col s12 m6">
    <div class="center-align"><img class="responsive-img" src="/wp-content/uploads/2016/05/sidekiq2.png" /></div>
  </div>
</div>

### [Capistrano](http://capistranorb.com/ "Capistrano") {#capistrano3}

Capistrano extends the Rake DSL to provide ways to run scripts on servers. It’s main usage is for deploying apps onto servers. On jotter.io and data.gg I have it set up so running this command…

<div class="highlighter-rouge">
  <pre class="highlight"><code>cap production deploy
</code></pre>
</div>

will upload the latest version to my server, run any migrations and restart the app on the server. I can also deploy a staging version or rollback to the previous version if something goes wrong.

On the server the directory structure looks like this…

<div class="highlighter-rouge">
  <pre class="highlight"><code>/path/to/app/current/ (symbolic link to the very latest release in the releases folder)
/path/to/app/releases/ (contains the last couple of releases)
/path/to/app/repo/ (git repository)
/path/to/app/shared/ (has things like pids, logs, etc.)
</code></pre>
</div>

### [Devise](https://github.com/plataformatec/devise "Devise") {#devise4}

Devise is user authentication for Rails. Devise will setup all the parts necessary for users to register, login, reset passwords, etc. If you know your project needs use logins, Devise is a no-brainer. You’re always going to want to modify the way the forms look so Devise provides a command to generate all the views for you to change. For everything else, Devise has a massive [‘How-to’](https://github.com/plataformatec/devise/wiki/How-Tos "Devise How Tos") section on their Wiki.

### [Simple Form](https://github.com/plataformatec/simple_form "Simple Form") {#simple-form5}

Simple Form is a tool to help you make forms in Rails. Rails comes with its own way to do forms but I’ve never been happy with it. Simple Form is very similar for the basics.

<pre><code class="language-Ruby">&lt;%= simple_form_for @user do |f| %&gt;
  &lt;%= f.input :username %&gt;
  &lt;%= f.input :password %&gt;
  &lt;%= f.button :submit %&gt;
&lt;% end %&gt;
</code></pre>

Simple Form really shines for me when it comes to associations and configuration. Associations can be done as simply as this…

<pre><code class="language-Ruby">&lt;%= simple_form_for @user do |f| %&gt;
  &lt;%= f.input :email %&gt;
  &lt;%= f.association :app_acount %&gt;
&lt;% end %&gt;
</code></pre>

Part of the install process adds some configuration files allowing you to set the input types, internationalization, what classes to apply to what components by default, priority countries in country picker drop-downs and much more.