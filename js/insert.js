var Data = cardData();
var sendBtn = document.getElementById('send');
var addNEwCard = function (newData) {
       
    /* get input value */
    sendBtn.addEventListener("click", function(){
            
        //push input text to cardData's array
        var titleText = document.getElementById('titleInput').value;
        var dateText = document.getElementById('dateInput').value;
        Data.push({
            title: titleText, 
            date: dateText
        });

        // clear old card area and new a new board
        Board.deleteCard(Data);
        new board(Data);
     
        //clear the input value
        var input = document.getElementsByClassName('input');
        for (var i = 0; i < 2; i++){
            input[i].value = "";
        }
        
    }); 

} 
addNEwCard();

    



       


