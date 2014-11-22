---
title: Filtering Arrays
layout: main
---

# {{ page.title }}

Create a new file `app.js` with the following content:

{% highlight javascript %}
{% include code/ex8/app.js %}
{% endhighlight %}

Create a new file `index.html` with the following content:

{% highlight html %}
{% include code/ex8/index.html %}
{% endhighlight %}

## What You Should See

You should the following output:

<pre>
Blue Colours: [ "blue", "tardis blue" ]

Tech People: [ { "id": 4, "role": "tech", "name": "Ableton" }, { "id": 5, "role": "tech", "name": "Merrybob" } ]

Person by Id: [ { "id": 6, "role": "management", "name": "The Captain" } ]
</pre>

## What's Going On

Angular provides a special kind of filter called **filter**. This is used to
get a subset of elements out of an array.

In this exercise we use the filter inside a controller, but it could also be
used within the HTML, similar to other filters.

The first argument of the filter is the array.

The second argument of the filter may be a:

* **string** to perform a substring filter
* **object** to filter a on a particular property in an array of objects
* **function** to provide a customised filter for the array. 


## Study Drills

1. Write a filter that displays colours that contain the letter 'g';
2. Write an **object** filter to find the person with id 3
3. Write a **function** filter to find the colours that contain either 'red' or 'green'
4. Write a **function** filter to find people with odd ids

---

[Previous Exercise](ex7.html) / [Next Exercise](ex9.html)

