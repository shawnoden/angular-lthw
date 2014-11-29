# {{ page.title }}

Create a new file `app.js` with the following content:

{% highlight javascript %}
{% include code/using-filters-inside-controllers/app.js %}
{% endhighlight %}

Create a new file `index.html` with the following content:

{% highlight html %}
{% include code/using-filters-inside-controllers/index.html %}
{% endhighlight %}

## What You Should See

You should the following output:

<pre>
ANGULAR
angular
3.14
12,345.679
$12,345.68
11/22/14 2:18 PM
Nov 22, 2014 2:18:12 PM
{ "name": "Fluffy", "type": "cat" }
Mon
123
</pre>

## What's Going On

In this exercise all of the filtering is being done in the the Controller
rather than in the HTML.

These are the same filters we used in the previous exercise.

Filters can be injected as dependencies into a controller using
`<filterName>Filter`.

## Study Drills

1. Create and display a $scope variable that formats the `now` variable similar to
**Saturday, November 22**
2. Create and display a $scope variable that contains a formatted version of
the `weekday` variable so that the first 3 characters are uppercase and the
remaining characters are lowercase.
 
