;'use strict';
var board = function (data) {
    var detial = data;
    var cardNum = data.length;

    /* init */
    var init = function (data) {
        // call create card
        createCard();        
    };

    /* board create cards */ 
    var createCard = function () {
        var boardDiv = document.getElementById("board");

        for ( var i = 1; i <= cardNum; i++) {  
            var newCard = document.createElement("div");
            newCard.classList.add("card");
            newCard.id="card"+i;
            boardDiv.append(newCard);
        } 
        createDetial(detial);  
    }; 

    /* card create title & date */ 
    var createDetial = function (detial) {
        var x = "";
        for ( var i = 1; i <= cardNum; i++){

            //create H4 & p area
            var cardDiv = document.getElementById("card"+i); 
            var newTitle = document.createElement("h4"); 
            var newDate = document.createElement("p"); 
            var newBtnAlert = document.createElement("button"); 
            var newBtnText = document.createElement("button"); 
            var newBtnDelete = document.createElement("button"); 
            cardDiv.append(newTitle, newDate, newBtnAlert, newBtnText, newBtnDelete); 
           
            
            // append content text
            x = (i - 1); 
            var cardTitle = detial[x].title;
            var cardDate = detial[x].date;
            var titleContent = document.createTextNode(cardTitle); 
            var dateContent = document.createTextNode(cardDate);
            newTitle.appendChild(titleContent);            
            newDate.appendChild(dateContent);              
            add(newBtnAlert, "alert", "btnAlert", "Alert");            
            add(newBtnText, "text", "btnText", "detail");            
            add(newBtnDelete, "delete", "btnDelete", "delete");                  
          
            
            // Button add id, class, content, attribute 
            function add(addItem, addId, addClass, addContent) {
                addItem.id = addId + i;
                var itemContent = document.createTextNode(addContent); 
                addItem.appendChild(itemContent); 
                addItem.classList.add(addClass);
                addItem.setAttribute("onclick","btnClick(this.id)");
            }
        }
    }; 
    
    /* get button type */
    this.getClassName = function (idNum) {
        var btnId = document.getElementById(idNum);
        var thisBtn = btnId.className;
        return thisBtn;
    }

    /* get card title */
    this.getTitle = function (idNum) {
        var btnId = document.getElementById(idNum);
        var cardId = btnId.parentElement;
        var thisTitle = cardId.querySelector("h4").textContent;
        return thisTitle;
    }

    /* get card title & date & today*/
    this.getDetial = function (idNum) {
        var btnId = document.getElementById(idNum);
        var cardId = btnId.parentElement;
        var thisTitle = cardId.querySelector("h4").textContent;
        var thisDate = cardId.querySelector("p").textContent;
        var today = new Date();
        var totalDetial = [thisTitle, thisDate, today];
        return totalDetial;
    }

    /* delete card */
    this.deleteCard = function (idNum) {
        var boradArea = document.getElementById("board");
        var btnId = document.getElementById(idNum);
        if (btnId){
            var cardId = btnId.parentElement;
            var num = idNum.match(/\d+/);
            if(num != null){
                boradArea.removeChild(cardId);
                var deletNo = (num[0] - 1);
                Data.splice(deletNo, 1);
            } 
        } else {
            while (boradArea.hasChildNodes()) {
                boradArea.removeChild(boradArea.lastChild);
              }
        }
    }

    init.call(this, data);
}


/* data detial */
  var cardData = function (data) {
    var data = [
        { 
            title: 'Javascript',
            date: '2019.02.01'
        },
        {
            title: 'Html',
            date: '2019.02.02'
        }
    ];
    return data;
  }
      
/* new this board */
    var Board = new board(cardData());




