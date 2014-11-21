---
title: A Good First Program
layout: main
---

# {{ page.title }}

<div class="alert alert-info">
  <span class="label label-info">Tip</span>
  For each exercise you should create a directory with the same name as the
  exercise and place all of your files there. For example, for this
  exercise create a directory named 'ex1'.
</div>

Create a new file `index.html` with the following content

{% highlight html %}
{% include code/ex1/index.html %}
{% endhighlight %}

## What You Should See

You should see a text field asking for your name plus a heading 'Gudday'.

If you enter some characters into the text field then the heading should
immediately update with the text you enter.

## Terminology

You'll see the program has `ng-app` and `ng-model` attributes. Anything
starting with `ng-` in Angular is called a **directive**.

## What's Going On

The `ng-app` directive on the `<html>` tag designates the root element of an
application and is usually placed on the `<html>` or `<body>` tag.

The `ng-model` directive makes a variable available that contains the value
of the input element.

## Study Drills

1. Change the program so it asks for and displays a first name and last name
2. Find out what happens if you use a variable name that doesn't exist, like `{% raw  %}{{ blah }}{% endraw %}`.

---

[Previous Exercise](ex0.html) / [Next Exercise](ex2.html)

