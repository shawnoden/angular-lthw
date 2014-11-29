# {{ page.title }}

Create a new file `app.js` with the following content

{% highlight javascript %}
{% include code/introducing-dependency-injection/app.js %}
{% endhighlight %}

Create a new file `index.html` with the following content

{% highlight html %}
{% include code/introducing-dependency-injection/index.html %}
{% endhighlight %}

## What You Should See

You should see a heading 'A, B, C'.

## What's Going On

In this example we've created three services named `aService`, `bService`
and `cService'.

We've also created a controller named `DependencyController`.

The second argument to the controller is an array.

The last element of the array is the controller function.

The other elements of the array are things the controller needs.
These are called **dependencies**. In other words, the controller
*depends* on them.

You can have as many dependencies as required.

## Angular Built-In Dependencies

Angular has some built-in dependencies that you can use.

Angular's built in dependencies start with a **$**.

### $scope

$scope creates a scope for you to use inside controllers.

### $window

$window is a replacement for the global window scope. So rather than writing

    window.alert('Hi');

You would instead write:

    $window.alert('Hi');

### $location

$location is the replacement for the global location scope.

## Study Drills


