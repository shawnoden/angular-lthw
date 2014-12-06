# {{ page.title }}

Create a new file `app.js` with the following content:

{% highlight javascript %}
{% include code/image-handling/app.js %}
{% endhighlight %}

Create a new file `index.html` with the following content:

{% highlight html %}
{% include code/image-handling/index.html %}
{% endhighlight %}

## What You Should See

You should see a list of movie images and their titles.

## What's Going On

In this exercise we introduce the `ng-src` directive.

{% highlight html %}
<img ng-src="{{ movie.thumbnail }}">
{% endhighlight %}

Angular uses `ng-src` to ensure the browser only loads the image when the
expression `{% raw  %}{{ movie.thumbnail }}{% endraw %}` is evaluated.

## Study Drills



