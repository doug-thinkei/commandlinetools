/* jshint browser: true */
/* global define */

/**
 * This module automatically removes & appends the element and its children to the selector specified (in value)
 *
 * For example...
 *
 *     <div data-annex=".header" class="foo">
 *         Some content...
 *     </div>
 *
 * @module data-annex
 * @author Mark Caron <mcaron@redhat.com>
 * @copyright Red Hat 2014
 */

(function (global) {

define([
    "jquery"
],
function main($) {

    function init() {
        $('[data-annex]').each(function() {
            var el = $(this),
                annexVal = el.attr('data-annex'),
                annexEls = $(annexVal);

            if ( annexEls.length > 0 ) {
                annexEls.append(  el.removeAttr('data-annex').remove()  );
            }
        });
    }

    return {
        init: init
    };

});

})(window);
