---
title: Nested Controllers
layout: main
---

# {{ page.title }}

Create a new file `app.js` with the following content:

{% highlight javascript %}
{% include code/ex4/app.js %}
{% endhighlight %}

Create a new file `index.html` with the following content:

{% highlight html %}
{% include code/ex4/index.html %}
{% endhighlight %}

## What You Should See

You should see a heading 'I'm Bigger' above another heading
'I'm Smaller and my parent is Bigger'.

## What's Going On

In this exercise we are nesting one controller inside another.

You can see that the child HTML block can access the scope of the parent HTML
block.

## Study Drills

1. Add a new variable `age` to both the parent and child controller and
display it in both the parent and child HTML div. What happens?
2. Add `childName` variable to the parent HTML div. What happens?

---

[Previous Exercise](ex3.html) / [Next Exercise](ex5.html)

