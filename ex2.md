---
title: Introducing Modules and Scope
layout: main
---

# {{ page.title }}

Create a file `index.html` with the following content:

{% highlight html %}
{% include code/ex2/index.html %}
{% endhighlight %}

Create another file `app.js` with the following content:

{% highlight javascript %}
{% include code/ex2/app.js %}
{% endhighlight %}

Don't worry about the few lines at the top of the JavaScript file, just copy
it for now and we'll discuss it later.

## What You Should See

You should see a heading 'Hello Angular!' on the screen.

## What's Going On

In the HTML we've given our application the name `app`.

In the JavaScript we've created an Angular **module** with the same name.

We pass a function to the app's `run()` method. This function is called a
**run block**.

Run blocks are used to kick start an application and you can have as many of
them as you need. 

Run blocks are passed a global **scope** object named `$rootScope`.
Anything you place in the global scope becomes available for use in your
application.


## Study Drills

1. Add a `person` object to `$rootScope` that has properties `firstName` and
`lastName` and display those on the screen.
2. Add a `colours` array to `$rootScope` that contains the names of a few colours
and display that array on the screen (no looping, just print it immediately).
3. Add another run block that sets some variables and display those as well.

---

[Previous Exercise](ex1.html) / [Next Exercise](ex3.html)

