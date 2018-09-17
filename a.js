define(['./a.utils.js'], function(aUtil) {
    var a = {
        printDate: function(date) {
            console.log(aUtil.getInitDate(date))
        }
    }
    return a;
})