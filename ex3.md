---
title: Introducing Controllers
layout: main
---

# {{ page.title }}

Create a new file `ex2/index.html` with the following content

{% highlight html %}
{% include code/ex2/index.html %}
{% endhighlight %}

and another new file `ex2/app.js` with the following content

{% highlight javascript %}
{% include code/ex2/app.js %}
{% endhighlight %}

Don't worry about the few lines at the top of the JavaScript file, just copy
it for now and we'll discuss it later.

## What You Should See

You should see a heading 'Hello Angular!' and the current date and time
on the screen.

## What's Going On

In this exercise we've given our application the name `controllerExample`.

We've also created a `<div>` and attached it to a **controller**.

Controllers are used to set up the **Angular Scope**. That's the `$scope`
variable you see in the code. Anything you put into `$scope` becomes accessible
within the corresponding controller in the HTML, in this example it means
the `name` variable and the `getTime()` function. 

## Study Drills

1. Add a `person` object to `$scope` that has properties `firstName` and
`lastName` and display those on the screen.
2. Add a `colours` array to `$scope` that contains the names of a few colours
and display that array on the screen (no looping, just print it immediately).

---

[Previous Exercise](ex1.html) / [Next Exercise](ex3.html)

