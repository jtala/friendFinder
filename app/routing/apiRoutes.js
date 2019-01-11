var friendsArray = require("../data/friends");


module.exports = (app) =>{

    app.get("/api/friends",(req,res)=>{
        res.json(friendsArray);
    });


    app.post("/api/friends",(req,res) =>{

        let friendsMatch = {
            name: "",
            photo: "",
            difference: 1000
        };

        let currentUser = req.body;
        let currentUserScore = currentUser.scores;
        let friendsDifference = 0;

    


        for (i = 0; i < friendsArray.length; i++) {

            friendsDifference = 0;

            for (j = 0; j < currentUserScore.length; j++) {
                friendsDifference += Math.abs(currentUserScore[j] - friendsArray[i].scores[j]);

                if (friendsDifference <= friendsMatch.difference) {
                    friendsMatch.name = friendsArray[i].name;
                    friendsMatch.photo = friendsArray[i].photo;
                    friendsMatch.difference = friendsDifference;
                }
            }
        }
        
        friendsArray.push(currentUser);
        res.json(friendsMatch);

    });
}