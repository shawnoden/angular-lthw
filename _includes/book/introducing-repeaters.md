# {{ page.title }}

Create a new file `app.js` with the following content:

{% highlight javascript %}
{% include code/introducing-repeaters/app.js %}
{% endhighlight %}

Create a new file `index.html` with the following content:

{% highlight html %}
{% include code/introducing-repeaters/index.html %}
{% endhighlight %}

## What You Should See

You should see a bulleted list of movie names:

<pre>
* The Wizard of Oz (1939) - Family
* Citizen Kane (1941) - Drama
* The Godfather (1972) - Drama
* The Third Man (1949) - Mystery
* A Hard Day's Night (1964) - Comedy
</pre>


## What's Going On

In this exercise we introduce the `ng-repeat` directive.

`ng-repeat` is used for looping over arrays.

The tag that has the `ng-repeat` directive, and everything it contains,
is repeated for each item in the array. 

## Study Drills

1. 
