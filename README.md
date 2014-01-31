# Introducing whatsUp.js
A jQuery plugin written to make wrangling upcoming events easier.

whatsUp.js leverages Date.js for date handling.

## How Do I Use It?
Include jQuery 1.10+, date.js, and whatsUp.js and bind then initialize the plugin by binding it to an element.

```html
 <script src="js/vendor/date.js"></script>
 <script src="js/vendor/whatsup.js"></script>
 <script>
  $(document).ready(function(){
    $("ul.dates").whatsUp();
  });
 </script>
```
Hide the list items with CSS. The plugin will add a custom class to the item to show it. Here is what is being done in the demo
```css
 ul.dates li {display: none; }
 ul.dates li.on {display: block; }
```

### example output
Here we are targetting an unordered list and outputting the next 5 events, and rewriting the date to each list item in a different format than what the data-date attribute owns.

```html
 <ul class="dates">
  <li data-date="01-Jan-2014"><span class="date"></span>...</li>
  <li data-date="02-Jan-2014"><span class="date"></span>...</li>
  <li data-date="05-Jan-2014"><span class="date"></span>...</li>
</ul>
```

```html
	<script>
	  $("ul.dates").whatsUp({
	    items :           'li', // list items
	    output:           'default', //default, dateWindow
	    dateWindow :      7, // size of dateWindow
	    howMany:          5, // how many events to show
	    debug:            false, // will console.log stuff
	    rewrite:          true, // will inject a fancy date
	    rewriteTarget:    'span.date', // target of fancy date
	    rewriteFormat:  	'MMMM dS yyyy', // format of fancy date
	    visibleClass:     'on' // class to add to list item
	  });
	</script>
```

The plugin will itterate through list items looking for a `data-date` attribute eg `data-date="01-Nov-2014"` by default. It will show you the next 5 events from today's date. There are many options you can set. You can even define a date window from today's date to show a certain number of events. The plugin can handle multiple date formats. Suggested format: `01-Nov-2014`

## Changelog
* _01.31.14 - v1.0.0 - 4kb_
	* Initial release

## Credits
@_josephwatkins