# {{ page.title }}

Create a new file `app.js` with the following content:

{% highlight javascript %}
{% include code/more-custom-filters/app.js %}
{% endhighlight %}

Create a new file `index.html` with the following content:

{% highlight html %}
{% include code/more-custom-filters/index.html %}
{% endhighlight %}

## What You Should See

You should see a heading **I see skies of blue ...** on the display.

## What's Going On

In this example we create a filter named `wordLimit` which limits the number
or words displayed in a sentence.

Our filter requires two arguments:

* the maximum number of words to display
* an boolean indicating if we should append ellipses.

Notice that filter arguments are separated by the colon `:` character.

Our filter function is always passed the string as its first argument
followed by other provided arguments follow.

{% highlight javascript %}
function wordLimit(text, count, showElipses)
{% endhighlight %}

## Study Drills

1. Create a filter named `capWords` that has one argument `count`. It should
capitalize the first **count** words in the sentence. The function should
default to 1 word if the `count` argument is not provided.

