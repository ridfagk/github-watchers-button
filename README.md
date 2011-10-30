##GitHub Watchers - a button for showing the number of people watching a repository on GitHub

These days we have share and follower buttons for almost everything, except GitHub. This projects provides a customizable JavaScript button (that uses the GitHub API) for pulling in the watcher counts for links to any repositories you may have on your page. 

##Screenshots

<img src='http://www.blarnee.com/images/screenshots_gitwa.jpg'/>


##Getting Started

The bookmarklet supports three size modes and all you need to do to start using it is include github-watchers.js (or github-watchers-nologo.js for a smaller version without the GitHub logo) and simply select the class below you would like GitHub Watchers to size your button with.

The three size modes supported which can be set via classes on any link are:

<ul>
<li><code>gitwatch</code> - standard size. Works best for blog posts and share button-like toolbars.</li>
<li><code>gitwatch large</code> - largest variation. Best for project homepages.</li>
<li><code>gitwatch small</code> - less wide than the standard size. Excludes the 'watchers' text.</li>
</ul>

##Sample Code

<pre>
&lt;a href=&quot;YOUR REPOSITORY URL&quot; target=&quot;_blank&quot; class=&quot;gitwatch&quot;&gt;YOUR FALLBACK LINK TEXT&lt;/a&gt;
&lt;script type=&quot;text/javascript&quot; src=&quot;github-watchers.js&quot;&gt;&lt;/script&gt;
</pre>

and when populated, this might look like:

<pre>
&lt;a href=&quot;http://github.com/addyosmani/todomvc&quot; target=&quot;_blank&quot; class=&quot;gitwatch&quot;&gt;Watch us on GitHub&lt;/a&gt;
&lt;script type=&quot;text/javascript&quot; src=&quot;github-watchers.js&quot;&gt;&lt;/script&gt;
</pre>

##Versions
<ul>
	<li>Standard (github-watchers.js) - uses an embedded GitHub logo (5.6KB minified)</li>
	<li>No-logo variation (github-watchers-nologo.js) - no embedded logo (2.6KB minified)</li>
</ul>

<strong>Note:</strong> The official Twitter retweet button is currently 19KB minified (even when optimized) so the filesizes for the above aren't *too* bad in comparison. 

##Customization

Should you wish to further customize the button, there are two parts of the code you may wish to look at:

<ul>
	<li><code>gitwatch.text</code> - this allows you to customize the 'watchers' text displayed on the button</li>
	<li><code>gitwatch.styles</code> - you can modify the CSS/3 styles used for the button here (thanks to @necolas for his optimizations)</li>
</ul>

In the future, depending on whether this button gets widely used, multiple theming options and easier customization via -data attributes may also be added.

##Changelog
<ul>
<li>Added watchers capability from API</li>
<li>Stripped non-cross browser offline storage implem</li>
<li>Cleaned up some of the previous code</li>
<li>Added cross-browser styling</li>
<li>Added window/doc to IIFE</li>
<li>Moving towards jsHint compatability</li>
</ul>

##Futher work

There are a number of further optimizations that are possible on the code for the GitHub Watchers button and I'm going to see just how much smaller we can get it trimmed down to. I may also try getting a button builder such as http://twitter.com/about/resources/tweetbutton together in the near future.

One thing I would like to get in is support for 'watching' a repository without the need to launch a new window or navigate to the repository directly. I believe this should be possible based on http://developer.github.com/v3/repos/watching/ and I'll work on baking this into the next version of the button.



 
