module.exports = {


    //

    init: function (developerId,isTestMode,isEnable)
    {
        var self = this;
        cordova.exec(
            function (result) {
                console.log('setUp succeeded.' + result);

                if (typeof result == "string") {


                }
                else {
                    //if (result["event"] == "onXXX") {
                    //	//result["message"]
                    //	if (self.onXXX)
                    //		self.onXXX(result);
                    //}
                }
            },
            function (error) {
                console.log('setUp failed.');
            },
            'adsdkCordovaInterface',
            'init',
            [developerId,isTestMode,isEnable]
        );
    }





};