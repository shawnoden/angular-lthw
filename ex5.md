---
title: Introducing Expressions
layout: main
---

# {{ page.title }}

Create a new file `index.html` with the following content:

{% highlight html %}
{% include code/ex5/index.html %}
{% endhighlight %}

Create another new file `app.js` with the following content:

{% highlight javascript %}
{% include code/ex5/app.js %}
{% endhighlight %}


## What You Should See

When you run your application you should see:

{% highlight text %}
First is 1
Last is 10
Difference is 9
First and last are not equal.
{% endhighlight %}


## What's Going On

In this exercise we are using `{% raw %}{{{% endraw %}` and `{% raw %}}}{% endraw %}` to evaluate
simple JavaScript expressions.

## Study Drills

1. Add variables `firstName` and `lastName` variables to the scope and output
the first name and last name together using a string contatenation expression.

---

[Previous Exercise](ex4.html) / [Next Exercise](ex6.html)

