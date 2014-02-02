# Introducing whatsUp.js
A jQuery plugin written to make wrangling upcoming events easier. Let's say you have a list of events outputted to the page and you only want to show the next 5 upcoming events from today's date.... whatsUp.js to the rescue.

whatsUp.js leverages Date.js for date handling.

Visit the [demo page](http://codepen.io/joe-watkins/full/sKmEb)

## How Do I Use It?
Create a list of dates
```html
 <ul class="dates">
  <li data-date="01-Jan-2014"><span class="date"></span>...</li>
  <li data-date="02-Jan-2014"><span class="date"></span>...</li>
  <li data-date="05-Jan-2014"><span class="date"></span>...</li>
 </ul>
```

Hide the list items with CSS. The plugin will add a custom class to the item to show it. Here is what is being done in the demo
```css
 ul.dates li {display: none; }
 ul.dates li.on {display: block; }
```

Include jQuery 1.10+, date.js, and whatsUp.js - initialize the plugin by binding it to an element.

```html
 <script src="js/vendor/date.js"></script>
 <script src="js/vendor/whatsup.js"></script>
 <script>
  $(document).ready(function(){
    $("ul.dates").whatsUp();
  });
 </script>
```

### Default Output
Here we are targeting an unordered list and outputting the next 5 events, and rewriting the date to each list item in a different format than what the data-date attribute owns.

```html
	<script>
	  $("ul.dates").whatsUp({
	    items :           'li', // list items
	    output:           'default', //default, dateWindow
	    howMany:          5, // how many events to show
	    rewrite:          true, // will inject a fancy date
	    rewriteTarget:    'span.date', // target of fancy date
	    rewriteFormat:  	'MMMM dS yyyy', // format of fancy date
	    visibleClass:     'on' // class to add to list item
	  });
	</script>
```

The plugin will iterate through list items looking for a `data-date` attribute eg `data-date="01-Nov-2014"` by default. It will show you the next 5 events from today's date. There are many options you can set. You can even define a date window from today's date to show a certain number of events. The plugin can handle multiple date formats. Suggested format: `01-Nov-2014`

### Date Window Output
You can also simply define a date window to show events. If an event's date is within the given date window it will be shown.

```html
	<script>
	  $("ul.dates").whatsUp({
	    output:           'dateWindow', //default, dateWindow
	    dateWindowStart:  '01-Jan-2014',
	    dateWindowEnd:  '05-Mar-2014'
	  });
	</script>
```

Trigger the dateWindow output by changing the ```output``` to ```dateWindow``` then define a dates in ```dateWindowStart``` and ``` dateWindowEnd``` options. The ```howMany``` option has no effect in this case.

## Changelog
* _02.02.14 - v1.2.0 - 4kb_
	* Added dateWindow functionality
* _01.31.14 - v1.0.0 - 4kb_
	* Initial release

## Credits
@_josephwatkins