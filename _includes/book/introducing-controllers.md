# {{ page.title }}

Create a new file `app.js` with the following content:

{% highlight javascript %}
{% include code/introducing-controllers/app.js %}
{% endhighlight %}

Create a new file `index.html` with the following content:

{% highlight html %}
{% include code/introducing-controllers/index.html %}
{% endhighlight %}

## What You Should See

You should see a heading 'Hello Controller!' and the current date and time
on the screen.

## What's Going On

In this exercise we've created an Angular **controller** named
`HelloController`.

We've attached a `<div>` to that controller using the directive
`ng-controller="HelloController"`

Controllers are used to set up a new **Scope** object. You can see the new
`$scope` variable in the JavaScript code.

Anything you put into `$scope` becomes available to use within the
corresponding container in the HTML. In this exercise it means the
`greeting` and `user` variables and the `getTime()` function are available
for use. 

You can set up as many controllers as you need using the `app.controller()` 
method.

## Study Drills

1. Add a second controller to this application and display some variables.
2. What happens when you try to display variables from the first controller
within the second controller HTML block?
3. Add a **run block** to your application that sets some variables.
What happens when you try display those variables from inside your controller
HTML blocks?

