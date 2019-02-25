var createTable = function (options) {
    var thisBtnId = options;
    var cardDetial;

    /* init */
    var init = function (options) {
        textDetial();
    }
   /* text detial */
    var textDetial = function () {

            //create a new tr
            cardDetial = Board.getDetial(thisBtnId);
            var detialLength = cardDetial.length;
            var table = document.getElementById("cardTable");
            var newTr = document.createElement("tr");
            table.append(newTr);

            // text detail in each new td
            for (var i = 0; i < detialLength; i++){
                var newTd = document.createElement("td")
                var detialWrite = document.createTextNode(cardDetial[i]);
                newTd.appendChild(detialWrite);     
                newTr.append(newTd);
            }
        } 
    init.call(this, options);
}



