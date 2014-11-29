# {{ page.title }}

Create a file `app.js` with the following content:

{% highlight javascript %}
{% include code/introducing-modules-and-scope/app.js %}
{% endhighlight %}

Create a new file `index.html` with the following content:

{% highlight html %}
{% include code/introducing-modules-and-scope/index.html %}
{% endhighlight %}

## What You Should See

You should see a heading 'Hello Angular!' on the screen.

## What's Going On

In the HTML we've given our application the name `app`.

{% highlight html %}
<html ng-app="app">
{% endhighlight %}

In the JavaScript we've created an Angular **module** with the same name.

{% highlight javascript %}
var app = angular.module('app', []);
{% endhighlight %}

We pass a function to the app's `run()` method. This function is called a
**run block**.

Run blocks are used to kick start an application and you can have as many of
them as you need. 

Run blocks are passed a global **scope** object named `$rootScope`.
Anything you place in the global scope becomes available for use in your
application.


## Study Drills

1. Add a `person` object to `$rootScope` that has properties `firstName` and
`lastName` and display those on the screen.
2. Add a `colours` array to `$rootScope` that contains the names of a few colours
and display that array on the screen (no looping, just print it immediately).
3. Add another run block that sets some variables and display those as well.

