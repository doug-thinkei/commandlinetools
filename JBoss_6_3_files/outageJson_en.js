/*
 * This file should only contain scheduled Portal outage messages.
 *
 * The syntax for an entry is:
 * message: the message to be displayed
 * start: a Date() obj of when the message should start/appear
 * end: a Date() obj of when the message should end/disappear
 *
 * Example outage message entry:
 * {
 * message: "Outage!!!",
 * start: new Date("April 13, 2012 11:13:00"),
 * end: new Date("October 13, 2012 11:13:00")
 * }
 *
 * Another example outage message entry:
 * {
 * 		 message: "Outage test!!!",
 * 		 start: new Date("April 13, 2001 11:13:00"),
 * 		 end: new Date("October 13, 2001 11:13:00")
 * 	 },
 * 	 {
 * 		 message: "I can't believe Portal still exists!!!",
 * 		 start: new Date("January 13, 3000 11:13:00"),
 * 		 end: new Date("December 13, 3000 11:13:00")
 * 	 }
 *
 * Please remember to terminate the array of messages *without* a comma!
 */

var portalOutageObj =
	[
{ 		
		 message: "Support Cases will be unavailable at times on January 18 for scheduled maintenance. \u003ca href=\"https://access.redhat.com/announcements/1320124\"\u003eMore details\u003c/a\u003e.",
		 start: new Date("January 14, 2015 01:00:00"),
		 end: new Date("January 18, 2015 05:00:00")
},
{ 		
		 message: "For more information on the GHOST glibc security vulnerability please refer to this \u003ca href=\"https://access.redhat.com/articles/1332213\"\u003eKnowledge Article\u003c/a\u003e.",
		 start: new Date("January 28, 2015 00:00:00"),
		 end: new Date("January 31, 2015 05:00:00")
},
{
		 message: "Portions of the Customer Portal will be unavailable at times on September 6 for scheduled maintenance. \u003ca href=\"https://access.redhat.com/site/announcements/1171973\"\u003eMore details\u003c/a\u003e.",
		 start: new Date("August 25, 2014 00:00:00"),
		 end: new Date("September 7, 2014 04:00:00")
},
{
		 message: "Upcoming Outage for RHN starting Sat 8 Nov, 2014 at 9PM ET. \u003ca href=\"https://access.redhat.com/announcements/1255673\"\u003eLearn more\u003c/a\u003e",
		 start: new Date("October 30, 2014 10:00:00"),
		 end: new Date("November 9, 2014 04:00:00")
}
    ];
