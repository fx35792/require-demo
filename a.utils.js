define(['./utils.js'], function(util) {
    var aUtil = {
        getInitDate: function(date) {
            return util.getFunctionDate(date, 1)
        }
    }
    return aUtil;
})