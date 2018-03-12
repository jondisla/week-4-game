$( document ).ready(function() {
    console.log( "ready!" );
var ramResult;
var win;
var lost;
var adding = 0;


$('.btn').click(function() {
    ramResult = Math.floor(Math.random() * 50 + 1);
    $('.btn').html(ramResult)

})

// document.onclick = randNums;
function randNums(){
    for (var i = 0; i < 1; i++){

    var random = Math.floor(Math.random() * 5 + 1);
    var r1 = random.toString().toLowerCase();
    console.log(random)
    var r2 = random.toString().toLowerCase();
    

    var random2 = Math.floor(Math.random() * 12 + 1);
    console.log(random2)
    var r2 = random2.toString().toLowerCase();

    var random3 = Math.floor(Math.random() * 8 + 1);
    console.log(random3) 
    var r3 = random3.toString().toLowerCase();   

    var random4 = Math.floor(Math.random() * 3 + 1);
    console.log(random4)
    var r4 = random4.toString().toLowerCase();
    
    $('#crystals').on("click", function(){
        $('#points').attr(r1);
        $('#points').attr(r2);
        adding += parseInt(r1, r2)
        console.log(adding)
    })
    $('#crystal2').on("click", function(){
        $('#points').attr(r2);
    })
    $('#crystal3').on("click", function(){
        $('#points').attr(r3);
    })
    $('#crystal4').on("click", function(){
        $('#points').attr(r4);
    })
    // adding += parseInt(r1) + parseInt(r2) + parseInt(r3) + parseInt(r4);
    // console.log(adding)

        }
    
    }
    randNums()
})
