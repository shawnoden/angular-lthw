---
title: Introducing Controllers
layout: main
---

# {{ page.title }}

Create a new file `index.html` with the following content:

{% highlight html %}
{% include code/ex3/index.html %}
{% endhighlight %}

Create another new file `app.js` with the following content:

{% highlight javascript %}
{% include code/ex3/app.js %}
{% endhighlight %}

## What You Should See

You should see a heading 'Hello Controller!' and the current date and time
on the screen.

## What's Going On

In this exercise we've created a `<div>` and attached it to a **controller**
named `HelloController`.

Controllers are used to set up a new **Scope** object. You can see the new
`$scope` variable in the JavaScript code.

Anything you put into `$scope` becomes accessible within the corresponding
container in the HTML. In this exercise it means the `name` variable and
the `getTime()` function. 

You can call the `app.controller()` function as many times as you need to add
extra controllers.

## Study Drills

1. Add a second controller to this application and display some variables.
2. What happens when you try to access variables from the first controller
within the second controller HTML block?
3. Add a **run block** to your application that sets some variables.
What happens when you try access those variables from inside your controllers?
  
---

[Previous Exercise](ex2.html) / [Next Exercise](ex4.html)

