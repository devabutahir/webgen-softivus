// Viewport
/* ====================================================*/

(function (f) {
    f.fn.isInViewport = function c(d) {
        var a = this.get(0).getBoundingClientRect(), b = a.top, g = a.bottom, e = "" + this.get(0).offsetLeft + this.get(0).offsetTop + this.get(0).offsetHeight + this.get(0).offsetWidth; d = f.extend({ tolerance: 0, toleranceForLast: a.height, debug: !1 }, d); var a = d.tolerance, h = d.toleranceForLast; c.elementsAfterCurrent = c.elementsAfterCurrent || {}; c.elementsAfterCurrent[e] = c.elementsAfterCurrent[e] || this.nextAll(); a && (1 === c.elementsAfterCurrent[e].length && 0 > b && (b *= -1), c.elementsAfterCurrent[e].length ||
            (a = h)); d.debug && (console.log("---------------------------------------"), console.log("index: " + e), console.log("div: " + this.text().trim()), console.log("top: " + b), console.log("bottom: " + g), console.log("tolerance: " + a), console.log("tolerance for last element: " + h)); return a ? 0 <= b ? b <= a ? !0 : !1 : g > a ? !0 : !1 : 0 <= b ? !0 : !1
    }
})(jQuery);

