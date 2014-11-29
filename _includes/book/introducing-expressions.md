# {{ page.title }}

Create a new file `app.js` with the following content:

{% highlight javascript %}
{% include code/introducing-expressions/app.js %}
{% endhighlight %}

Create a new file `index.html` with the following content:

{% highlight html %}
{% include code/introducing-expressions/index.html %}
{% endhighlight %}

## What You Should See

When you run your application you should see:

{% highlight text %}
1 plus 2 is 3
HelloWorld
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
the first name and last name together using a string concatenation expression.
2. As you may know `Math.PI` is a built in JavaScript constant. Try display it
inside an expression in the HTML (it may not display what you expect).
Then assign Math.PI to a variable in the controller and then display that
variable inside an expression in the HTML.
