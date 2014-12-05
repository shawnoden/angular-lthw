# {{ page.title }}

Create a new file `app.js` with the following content:

{% highlight javascript %}
{% include code/more-repeaters/app.js %}
{% endhighlight %}

Create a new file `index.html` with the following content:

{% highlight html %}
{% include code/more-repeaters/index.html %}
{% endhighlight %}

## What You Should See

You should see a grid of the 10 times tables:

<pre>
1   2   3   4   5   6   7   8   9   10
2   4   6   8   10  12  14  16  18  20
3   6   9   12  15  18  21  24  27  30
4   8   12  16  20  24  28  32  36  40
5   10  15  20  25  30  35  40  45  50
6   12  18  24  30  36  42  48  54  60
7   14  21  28  35  42  49  56  63  70
8   16  24  32  40  48  56  64  72  80
9   18  27  36  45  54  63  72  81  90
10  20  30  40  50  60  70  80  90  100
</pre>

Followed by a table of movie details:

<pre>
The Wizard of Oz    1939  * Family * Musical * Fantasy
Citizen Kane        1941  * Drama * Mystery
The Godfather       1972  * Drama
The Third Man       1949  * Mystery
A Hard Day's Night  1964  * Comedy * Musical
</pre>


## What's Going On

In this exercise we use an inline repeater array plus repeaters within repeaters.

In the **10 Times Table** the `tr` is repeated 10 times, and within each row
the `td` is repeated 10 times.

In the **Movies** table we see a list of movies where each movie has multiple
genres.

## Study Drills

1. 
