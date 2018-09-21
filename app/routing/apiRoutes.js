var path = require('path');


var friends = require('../data/friends.js');


module.exports = function (app) {
    app.get('/api/friends', function (req, res) {
        res.json(friends);
    });

    app.post('/api/friends', function (req, res) {

        let userInput = req.body;
        let userResponse = userInput.scores;

        let mName = '';
        let mImg = '';
        let totalDiff = 10000;

        for (var i = 0; i < friends.length; i++) { 
            let diff = 0;
            for (var j = 0; j < userResponse.length; j++) {
                diff += Math.abs(friends[i].scores[j] - userResponse[j]);
            }
           
            if (diff < totalDiff) {        
                totalDiff = diff;
                maName = friends[i].name;
                mImg = friends[i].name;
            }
        }

        friends.push(userInput);

        res.json({
            status: 'OK',
            mName: mName,
            mImg: mImg
        });
    });
};