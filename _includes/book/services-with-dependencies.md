# {{ page.title }}

Create a new file `app.js` with the following content

{% highlight javascript %}
{% include code/services-with-dependencies/app.js %}
{% endhighlight %}

Create a new file `index.html` with the following content

{% highlight html %}
{% include code/services-with-dependencies/index.html %}
{% endhighlight %}

## What You Should See

You should see a heading 'Dumbledore the Wizard' on the display.

## What's Going On

First, we create a service `userService` which has no dependencies.

Next, we create a service `profileService` which dependes on the `userService`.

Lastly, we crate a controller `ServiceDependencyController` which depends
on the `profileService`.


## Study Drills

1. 




