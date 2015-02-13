/*global define, is_chrome_two*/
/*jslint browser: true*/

/**
 * This module triggers analytics on pages that have for some reason failed to
 * run basic analytics.
 *
 * @module analytics/failsafe
 * @author Michael Clayton <mclayton@redhat.com>
 * @copyright Red Hat 2014
 */
define([
    'underscore',
    'analytics/main',
    'analytics/attributes',
    'google_remarketing',
    'chrome_lib'
], function (
    _,
    paf,
    attributes,
    g_remark,
    lib
) {

    "use strict";

    var CLIENT_CHROME_DELAY = 350; // ms

    var run_if_absent = _.compose(run_if, negate(is_on_page));

    /**
     * This is underscore 1.7's implementation of negate.  We can't upgrade to
     * underscore 1.7 until browse.js is deprecated, so negate lives here for
     * now.
     */
    function negate(predicate) {
        return function () {
            return !predicate.apply(this, arguments);
        };
    }

    /**
     * This function tests to see whether basic analytics (a simple PAF
     * pageview report) has been run on the current page.  If it hasn't, it
     * runs it after a short delay.
     */
    function run_once() {
        if (is_chrome_two()) {
            // wait for the user status service to return, then send analytics
            // if they aren't on the page.
            lib.whenUserStatusReady(
                _.partial(_.delay, run_if_absent, CLIENT_CHROME_DELAY)
            );
        } else {
            run_if_absent();
        }
    }

    /**
     * Call the run function if the argument is true.
     */
    function run_if(should_run) {
        if (should_run) {
            run();
        }
    }

    /**
     * Run basic pageview analytics.
     */
    function run() {
        paf.init(['omniture', 'eloqua']);
        attributes.harvest();

        if (paf.auto_report_on()) {
            paf.report();
        }

        g_remark.add_tag();
    }

    /**
     * Predicate.  Tests to see if the PAF analytics code is in the body tag.
     */
    function is_on_page() {
        var body = document.getElementsByTagName('body')[0];
        return body.innerHTML.indexOf("analytics.init(['omniture'") >= 0;
    }

    return {
        run_once: run_once
    };

});

