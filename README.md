# Introducing whatsUp.js
A jQuery plugin written to make wrangling upcoming events easier.

whatsUp.js leverages Date.js for date handling.

## How Do I Use It?
Include jQuery 1.7+ and whatsUp.js and bind then initialize the plugin by binding it to an element.

```html
 <script src="js/vendor/date.js"></script>
 <script src="js/vendor/whatsup.js"></script>
 <script>
  $(document).ready(function(){
    // Target your .container, .wrapper, .post, etc.
    $("ul.dates").whatsUp();
  });
 </script>
```

The plugin will itterate through list items looking for a `data-date` attribute eg `data-date="01-Nov-2014"` by default. It will show you the next 5 events from today's date. There are many options you can set. You can even define a date window from today's date to show a certain number of events. The plugin can handle multiple date formats. Suggested format: `01-Nov-2014`

## Changelog
* _01.31.14 - v1.0.0 - 4kb_
	* Initial release

## Credits
@_josephwatkins