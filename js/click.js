var btnClick = function (options) {
    var thisBtnId = options;
    var cardTitle;
    var btnClassName;

    /* get button class name then choose function */
    var btnType = function (options) {
        btnClassName = Board.getClassName(thisBtnId);

        switch (btnClassName) {
            case "btnAlert":
                AlertTitle();
                break;
            case "btnText":
                createTable(thisBtnId);
                break;
            case "btnDelete":
                Board.deleteCard(thisBtnId);
                break;
        }  
    }
    
    /* transfer button ID to Board and alert title */
    var AlertTitle = function (options) {
        cardTitle = Board.getTitle(thisBtnId);
        alert(cardTitle);
    }
    
    btnType.call(this, options);
}



