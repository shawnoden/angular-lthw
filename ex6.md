---
title: Introducing Filters
layout: main
---

# {{ page.title }}

Create a new file `index.html` with the following content:

{% highlight html %}
{% include code/ex6/index.html %}
{% endhighlight %}

Create another new file `app.js` with the following content:

{% highlight javascript %}
{% include code/ex6/app.js %}
{% endhighlight %}


## What You Should See

You should the following output on the screen:

<pre>
ANGULAR HAS FILTERS
angular has filters
3.14
$3.14
11/22/14 8:06 AM
Nov 22, 2014 8:06:27 AM
</pre>

## What's Going On

When displaying a value we can apply a filter using the `|` character.

Angular has several built in filters such as the exercise here.

Arguments are passed to filters using a colon `:` followed by the argument.
Multiple arguments can be passed separated by colons.

The `number` filter has one integer argument that indicates the number of
decimal places to display.

The `date` filter has one string argument that indicates the date format to use.


## Study Drills

1. This exercise only shows some of the possible date filters. Look up the
complete set of date filters and use a date formatting filters and format
the `now` variable like this `Nov 22, 2014`; 

---

[Previous Exercise](ex5.html) / [Next Exercise](ex7.html)

