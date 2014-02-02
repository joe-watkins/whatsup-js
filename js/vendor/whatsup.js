/*!
* whatsUp
* Author: Joe Watkins - joe-watkins.io
* Licensed under the MIT license
* 
*/
(function($){
 
    $.fn.whatsUp = function(options) {

        var defaults = {
          wrapper:          this,
          items:            "li",
          dataSelector:     "date",
          output:           "default", // default,dateWindow
          dateWindow:       true,
          dateWindowStart:  null,
          dateWindowEnd:    null,
          howMany:          5,
          fakeDate:         null,
          debug:            false,
          rewrite:          false,
          rewriteTarget:    null,
          rewriteFormat:    "MMMM dS yyyy",
          visibleClass:     "on"
        }
             
        var options =  $.extend(defaults, options);
        var o = options;

          // run code
          var $dates = o.wrapper.find(o.items);

          // if using fakeDate
          if(o.fakeDate != null){
            var today = Date.parse(o.fakeDate),
                dateWindow = Date.parse(o.fakeDate).add(o.dateWindow).days();
          }else{
            var today = Date.today();
                //dateWindow = Date.today().add(o.dateWindow).days();
          }

          // if using dateWindow
          if(o.output == 'dateWindow'){
            dateWindowStart = Date.parse(o.dateWindowStart);
            dateWindowEnd = Date.parse(o.dateWindowEnd);
          }

          $dates.each(function(index, item){
            var itemDate = Date.parse($(this).data(o.dataSelector));

            // rewrite the given date to a target
            if(o.rewrite == true){
              $(this).find(o.rewriteTarget).text(itemDate.toString(o.rewriteFormat));
            }

            // default output
            if(o.output == 'default'){
              var visibleEvents = $(o.wrapper).find('li.'+o.visibleClass).length;
              
              // add class to today's event if there is a match
              var dateMatch = Date.compare(today, itemDate);
              if(dateMatch == 0){
                $(this).addClass(o.visibleClass);
              }

              // add active class to further events
              if(visibleEvents < o.howMany){
                if(!itemDate.isBefore(today)){ // the event isn't after window
                    $(this).addClass(o.visibleClass);
                }
              }
              
            } // default

            // date window
            if(o.output == 'dateWindow'){
              if(!itemDate.isBefore(dateWindowStart) // the event isn't before today
                && !itemDate.isAfter(dateWindowEnd)){ // the event isn't after window
                  $(this).addClass(o.visibleClass);
              }
            }// dateWindow

            // what the heck is going on? check console.
            if(o.debug === true){
              testDates(today,itemDate,dateWindow);
            }
            
          }); // each

          // check to make sure we o.howMany visible
          var shownEvents = o.wrapper.find('.'+o.visibleClass).length,
              eventDiff = o.howMany - shownEvents;

              for (var i = 0; i < eventDiff; i++) {
                o.wrapper.find('.on').last().next().addClass('on');
              } 

            // kill unused events from dom
            o.wrapper.find(o.items+':not(.'+o.visibleClass+')').remove();
        

          function testDates(today,itemDate,dateWindow){
            console.log('today: '+today);
            console.log('item date: '+itemDate);
            console.log('date window: '+dateWindow);
            console.log('in window? '+itemDate.between(today, dateWindow)); // true|false
            console.log('is after today? '+itemDate.isAfter(today)); // true|false
            console.log('________________________________________');
          } // testdates
      
    }; // $.fn

}(jQuery));