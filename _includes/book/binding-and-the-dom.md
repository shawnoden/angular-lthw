# {{ page.title }}

Create a new file `index.html` with the following content:

{% highlight html %}
{% include code/binding-and-the-dom/index.html %}
{% endhighlight %}

## What You Should See

When you first run the program you should see an input field prompting for
a colour plus the message 'Your colour is'.

If you enter the name of a colour, such as red, blue, or olive then the
text should update to show what you entered as well as change colour.


## What's Going On

The `ng-model="colour"` makes a `colour` variable available for us to use.

We display this variable and we also use it to set a CSS colour style.


## Study Drills

1. Add another input field for entering a font size number. Change the program
so that the text font size changes as well as the colour.


