function addItem(){
    $('js-shopping-list-form').submit(e => {
        let newShoppingItem = $('shopping-list-entry').text()
        $("ul").append($("li").attr("shopping-item").text(newShoppingItem))
    }
        
        
        )
}

$(addItem())