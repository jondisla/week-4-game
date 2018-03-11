// $( document ).ready(function() {
//     console.log( "ready!" );

//     //Random number is given
//     $('.btn').click(function() {

//         var numberLength = 2;
//         var randomNum = "";

//         for (var i = 0; i < numberLength; i++) {
//         var num = Math.floor(Math.random() * 50)

//         if (i === 0 && num === 0)
//             num++;
        
//         randomNum = randomNum +num;
//         }
//         $('.btn').html(num).css({
//             color: "red"
//         });

//     })

//     //crystal values
//     $('#crystal1').one(function() {
//         var crystalLength = 1;
//         var randomize = "";

//         for (var i = 0; i < crystalLength; i++) {
//         var crysnum = Math.floor(Math.random() * 10)

//         randomize = parseInt(randomize) + parseInt(crysnum);
//         crysnum++;
//         $('#points').append('<div>',crysnum,'</div>')
//         }   
//     })

//     $('#crystal2').click(function() {
//         var crystalLength = 1;
//         var randomize = "";

//         for (var i = 0; i < crystalLength; i++) {
//         var crysnum = Math.floor(Math.random() * 10)

//         randomize = parseInt(randomize) + parseInt(crysnum);
//         crysnum++;
//         $('#points').append('<div>',crysnum,'</div>')
//         }   
//     })

//     $('#crystal3').click(function() {
//         var crystalLength = 1;
//         var randomize = "";

//         for (var i = 0; i < crystalLength; i++) {
//         var crysnum = Math.floor(Math.random() * 10)

//         randomize = parseInt(randomize) + parseInt(crysnum);
//         crysnum++;
//         $('#points').append('<div>',crysnum,'</div>')
//         }   
//     })

//     $('#crystal4').click(function() {
//         var crystalLength = 1;
//         var randomize = "";

//         for (var i = 0; i < crystalLength; i++) {
//         var crysnum = Math.floor(Math.random() * 10)

//         randomize = parseInt(randomize) + parseInt(crysnum);
//         crysnum++;
//         $('#points').append('<div>',crysnum,'</div>')
//         }   
//     })
    
        // var addCrys = function(){
        //     var div = document.createElement("div");
        //     $(div).attr("class", "ie-message");
        //     $.('body').append(div);

        //     var subDiv = document.createElement("div");
        //     $(subDiv).attr("class", "browser-list");
        //     $.(div).append(subDiv);
        // }
// });

//You will be given a random number at the start of the game.
// clicking each of the four crystals you will add a specific amount of points to your total score
//You win the game by matching your total score to random number, you lose the game if your total score goes above the random number
//The value of each crystal is hidden from you until you click on it
//Each time the game starts, the game will change the values of each crystal

var numbers = [1,2,3,4,5];

document.onclick = randNums;
function randNums(){
    for (var i = 4; i < numbers.length; i++){
    var random = Math.floor(Math.random() * 10);
        // console.log(random1)
    $('#crystals').on('click', function(){
        console.log(random)
    
        })
    }
}

randNums()
