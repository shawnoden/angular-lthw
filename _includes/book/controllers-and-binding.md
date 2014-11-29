# {{ page.title }}

Create a new file `app.js` with the following content:

{% highlight javascript %}
{% include code/controllers-and-binding/app.js %}
{% endhighlight %}

Create a new file `index.html` with the following content:

{% highlight html %}
{% include code/controllers-and-binding/index.html %}
{% endhighlight %}

## What You Should See

When you first run the program you should see:

    The cube of [Enter a number] is 0

If you enter a number then the cube of that number should automatically
be calculated.


## What's Going On

The `ng-model="num"` creates a new variable `num` in the controller's scope.

The `<input>` is then **bound** to this `num` variable so if the input is
changed then the num variable is updated.

If the `num` variable is used in any expression in the view then that will
also be automatically updated.


## Study Drills

1. Create a `times(n,m)` function in the controller that multiplies two
numbers together. Change the program so that it has the `input` field at the
top of the page and underneath shows the 1 to 10 times table for the
entered number. For example, if the number 3 was entered then it would
display something like: 1 x 3 = 3, 2 x 3 = 6, 3 x 3 = 9, etc.


