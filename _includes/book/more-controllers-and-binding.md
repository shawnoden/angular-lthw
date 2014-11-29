# {{ page.title }}

Create a new file `app.js` with the following content:

{% highlight javascript %}
{% include code/more-controllers-and-binding/app.js %}
{% endhighlight %}

Create a new file `index.html` with the following content:

{% highlight html %}
{% include code/more-controllers-and-binding/index.html %}
{% endhighlight %}

## What You Should See

When the application first runs you should see a **0** and four buttons
labelled **+1**, **+10**, **-10**, **-1**.

## What's Going On

In this example we introduce a new **directive** `ng-click`.

`ng-click` is used to bind click events to functions in the controller
`$scope`.

## Study Drills

1. 

