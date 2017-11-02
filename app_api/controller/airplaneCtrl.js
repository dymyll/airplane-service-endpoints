var mongoose = require("mongoose");
var ClimbData = mongoose.model('ClimbData');

module.exports.Climb = function(req, res, next){
    
    ClimbData.find({}, function(err, climbdatas) {
        if(err)
            {
                res.send(err);
                return console.error(err);
            }
        var output = "";
        
        climbdatas.forEach(function (climbdata) {
           console.log(climbdata.weight);
           output += "weight:" + climbdata.weight + "</br>";
           
        });
        res.send(output);
    });
        
}

  /*      
    for(var i = 0; i < climbdatas.length; i++){
        console.log(climbdatas[i].weight);
        output += climbdatas[i].weight;
    }
*/
 