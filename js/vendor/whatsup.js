/*!
* whatsUp
* Author: Joe Watkins - joe-watkins.io
* Licensed under the MIT license
* 
*/
(function($){
 
    $.fn.whatsUp = function(options) {

        var defaults = {
          wrapper:       this,
          items:          "li",
          dataSelector:   "date",
          output:         "default", // default,dateWindow
          dateWindow:     7,
          howMany:        5,
          fakeDate:       "",
          debug:          false,
          rewrite:        false,
          rewriteTarget:  "",
          rewriteFormat:  "MMMM dS yyyy",
          visibleClass:   "on"
        }
             
        var options =  $.extend(defaults, options);
        var o = options;

          // run code
          var $dates = o.wrapper.find(o.items);

          if(o.fakeDate != ""){
            var today = Date.parse(o.fakeDate),
                dateWindow = Date.parse(o.fakeDate).add(o.dateWindow).days();
          }else{
            var today = Date.today(),
                dateWindow = Date.today().add(o.dateWindow).days();
          }

          $dates.each(function(index, item){
            var itemDate = Date.parse($(this).data(o.dataSelector));

            if(o.rewrite == true){
              $(this).find(o.rewriteTarget).text(itemDate.toString(o.rewriteFormat));
            }

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

            if(o.output == 'dateWindow'){
              if(today.between(today, dateWindow) // today is in window
                && !itemDate.isBefore(today) // the event isn't before today
                && !itemDate.isAfter(dateWindow)){ // the event isn't after window
                  $(this).addClass(o.visibleClass);
              }
            }// dateWindow

            // what the heck is going on? check console.
            if(o.debug === true){
              testDates(today,itemDate,dateWindow);
            }
            
          }); // each

          // TODO DEAL WITH MIN / MAX

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