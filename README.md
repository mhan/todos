Todos
=====

The obligatory todos example. This one uses (rake-pipeline)[https://github.com/livingsocial/rake-pipeline].

The Assetfile is pretty heavily commented, so if you'd like to know more about how to use
rake-pipeline in real life, you should check it out.

Building
--------

First, run `bundle` to install our dependencies. Then, `bundle exec rakep build` will assemble
the app according to the Assetfile. This will output a `public/` directory containing a static
web application. Rake-pipeline also includes a preview server, so while you're developing you
can run `bundle exec rakep server` and rake-pipeline will serve your app on port 9292.

By Yehuda Katz and Tom Dale
