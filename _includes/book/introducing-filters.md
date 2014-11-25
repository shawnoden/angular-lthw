# {{ page.title }}

Create a new file `app.js` with the following content:

{% highlight javascript %}
{% include code/introducing-filters/app.js %}
{% endhighlight %}

Create a new file `index.html` with the following content:

{% highlight html %}
{% include code/introducing-filters/index.html %}
{% endhighlight %}

## What You Should See

You should the following output on the screen:

<pre>
ANGULAR
angular
3.14
12,345.679
$12,345.68
11/22/14 1:44 PM
Nov 22, 2014 1:44:01 PM
{ "name": "Fluffy", "type": "cat" }
Mon
MON
123
</pre>

## What's Going On

When displaying a value we can apply a filter using the pipe `|` character.

Arguments are passed to filters separated by a colon `:`, so one argument might
be `:100` and two arguments might be `:100:'new'`.

Angular has several built in filters.

* **uppercase** formats a string as upper case.
* **lowercase** formats a string as lower case.
* **number** formats a number. It takes an optional argument that indicates the
number of decimal places to display.
* **currency** formats a number in the local currency format.
* **date** formats a date object. It has one string argument that describes the
date format to use.
* **json** formats a variable as a JSON string (useful for debugging).
* **limitTo** returns a beginning or ending substring of a string.
It's argument is the number of characters to return. If a negative number is
provided it returns characters from the end of the string.

You'll notice that you can apply **multiple filters** by separating each
one with a pipe `|` character:

{% highlight html %}
{% raw %}
<p>{{ weekday | limitTo:3 | uppercase }}</p>
{% endraw %}
{% endhighlight %}


## Study Drills

1. This exercise only shows two possible date filters. Look up the
complete set of date filters and use date formatting filters and format
the `now` variable like this `Nov 22, 2014`
2. Create a variable with a `null` value and format it as JSON
3. Create a variable with an `undefined` value and format it as JSON
4. Create a variable with a date and format it as JSON
5. Format an integer to have five decimal places. What happens?
 

