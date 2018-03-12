$( document ).ready(function() {
    console.log( "ready!" );
var ramResult;
var win;
var lost;


$('.btn').click(function() {
    ramResult = Math.floor(Math.random() * 50 + 1);
    $('.btn').html(ramResult)

})

// document.onclick = randNums;
function randNums(){
    for (var i = 0; i < 1; i++){

    var random = Math.floor(Math.random() * 5 + 1);
    console.log(random)

    var random2 = Math.floor(Math.random() * 12 + 1);
    console.log(random2)

    var random3 = Math.floor(Math.random() * 8 + 1);
    console.log(random3)    

    var random4 = Math.floor(Math.random() * 3 + 1);
    console.log(random4)
    
    $('#crystal1').on("click", function(){
        console.log($(this).attr(random2))
    })
    $('#crystal2').on("click", function(){
        console.log($(this))
    })
    $('#crystal3').on("click", function(){
        console.log($(this))
    })
    $('#crystal4').on("click", function(){
        console.log($(this))
    })


        }
    }randNums()
})
