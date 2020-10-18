

$(function (){  
    let addition = $("li:first-child").html() 
    $('#js-shopping-list-form').submit(function(event) {
        event.preventDefault()
        console.log("Is it working")
        let newShoppingItem = $(':input').val()
        $("ul").append("<li>" + addition + "</li>")
        $("li:last-child").find(".shopping-item").text(newShoppingItem)
    })

    $("ul").on('click', '.shopping-item-toggle', function(e){
        console.log("bruh")
        e.stopPropagation();
        let clickedEl = $(this).parents("li").find(".shopping-item")
        clickedEl.toggleClass("shopping-item__checked")
      })
      $("ul").on('click', ".shopping-item-delete", function(e){
          e.stopPropagation()
          $(this).closest("li").remove()
      }) 
    
})

