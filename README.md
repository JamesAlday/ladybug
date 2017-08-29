# Ladybug, Ladybug, Fly Away Home

by Jeff Moeller in [The Things We Leave Behind](http://www.drivethrurpg.com/product/191250/The-Things-We-Leave-Behind)

The homepage contains a countdown clock that uses [Flipclock](http://flipclockjs.com/). The code to initialize it is in [index page](index.html). I have it defaulted to 8pm 5 days from now. If you add an integer as a hash after the page, it will change the number of days. For example:

```
http://.../ladybug  --> 5 days
http://.../ladybug#2 --> 2 days
```

This way the GM can customize how much time remains on the countdown depending on when the PCs first visit the website.