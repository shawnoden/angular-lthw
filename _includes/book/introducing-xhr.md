# {{ page.title }}

Create a new file `movies.json` with the following content:

{% highlight javascript %}
{% include code/introducing-xhr/movies.json %}
{% endhighlight %}

Create a new file `app.js` with the following content:

{% highlight javascript %}
{% include code/introducing-xhr/app.js %}
{% endhighlight %}

Create a new file `index.html` with the following content:

{% highlight html %}
{% include code/introducing-xhr/index.html %}
{% endhighlight %}

## What You Should See

You should see the movie details listed on the screen:

<pre>
The Wizard of Oz    1939  * Family * Musical * Fantasy
Citizen Kane        1941  * Drama * Mystery
The Godfather       1972  * Drama
The Third Man       1949  * Mystery
A Hard Day's Night  1964  * Comedy * Musical
</pre>


## What's Going On

To perform an XHR request we need to use the Angular `$http` module.

In this exercise we inject both the `$scope` and the `$http` modules  into the
controller:

{% highlight javascript %}
app.controller('movieController', ['$scope', '$http', function($scope, $http){
{% endhighlight %}

Our controller then fetches the `movies.json` file and then stores the result in
the `$scope.movies` variable.

Angular knows about this variable because if its usage in the HTML page
and detects when it changes and then renders the movie list.

## Study Drills

1. 


