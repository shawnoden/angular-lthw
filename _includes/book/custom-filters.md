# {{ page.title }}

Create a new file `app.js` with the following content:

{% highlight javascript %}
{% include code/custom-filters/app.js %}
{% endhighlight %}

Create a new file `index.html` with the following content:

{% highlight html %}
{% include code/custom-filters/index.html %}
{% endhighlight %}

## What You Should See

You should see a heading **H3ll0 Angul@r** on the display.

## What's Going On

In this example `app.filter()` is used to add our new filter.

To create a filter you need to provide two arguments:

* a filter name
* a function to create the filter function

This example creates a filter named `leet` which does a primitive
[Leet conversion](http://en.wikipedia.org/wiki/Leet).

Our `leet` function however requires no arguments.


## Study Drills

1. Write a filter named `capitalize` that captialises the first letter of the
provided text.
2. Write a filter named `wordSort` that accepts a sentence and returns a new
sentence with the words in alphabetical order. This should be a simple filter
that does not consider punctuation.
3. Write a filter named `cleanWords` that accepts a sentence and converts
the following words: idiot=>genius, stupid=>friendly, JavaScript=>Zombies. 

