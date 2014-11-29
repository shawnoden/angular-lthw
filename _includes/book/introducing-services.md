# {{ page.title }}

Create a new file `app.js` with the following content

{% highlight javascript %}
{% include code/introducing-services/app.js %}
{% endhighlight %}

Create a new file `index.html` with the following content

{% highlight html %}
{% include code/introducing-services/index.html %}
{% endhighlight %}

## What You Should See

You should see a heading 'Rumpelstiltskin' on the display.

## What's Going On

Controllers are used to manage a part of your HTML page.

Service should be used to do the work required by your application.

In general you should try to keep your Controllers small and move the code
to Services.

`app.factory()` is used to add a service to a module.

In this exercise we create a service named `userService`.

{% highlight javascript %}
app.factory('userService', function(){
  // userService code here
});
{% endhighlight %}

We also create a controller that uses `userService`.

{% highlight javascript %}
app.controller('UserController', ['$scope', 'userService', function($scope, userService){
  // UserController code here
}]);
{% endhighlight %}

Notice that the second argument of `app.controller()` is an array. The last element
of the array is the actual controller function. Any elements before that are
things that the controller needs. These are called **dependencies** and are
passed into the controller function.


## Study Drills

1. Add another service to the application named `calcService`. It should have
two functions `add(a,b)` and `multiply(a,b)`. Add `calcService` as another
dependency on the controller then modify the HTML and controller to
call those functions and display their result.

