$( document ).ready(function() {
    console.log( "ready!" );

    //Random number is given
    $('.btn').click(function() {

        var numberLength = 2;
        var randomNum = "";

        for (var i = 0; i < numberLength; i++) {
        var num = Math.floor(Math.random() * 50)

        if (i === 0 && num === 0)
            num++;
        
        randomNum = randomNum +num;
        }
        $('.btn').html(num).css({
            color: "red"
        });

    })

    //crystal values
    $('#crystal1').click(function() {
        var crystalLength = 1;
        var randomize = "";

        for (var i = 0; i < crystalLength; i++) {
        var crysnum = Math.floor(Math.random() * 10)

        randomize = parseInt(randomize) + parseInt(crysnum);
        crysnum++;
        $('#points').append('<div>',crysnum,'</div>')
        }   
    })

    $('#crystal2').click(function() {
        var crystalLength = 1;
        var randomize = "";

        for (var i = 0; i < crystalLength; i++) {
        var crysnum = Math.floor(Math.random() * 10)

        randomize = parseInt(randomize) + parseInt(crysnum);
        crysnum++;
        $('#points').append('<div>',crysnum,'</div>')
        }   
    })

    $('#crystal3').click(function() {
        var crystalLength = 1;
        var randomize = "";

        for (var i = 0; i < crystalLength; i++) {
        var crysnum = Math.floor(Math.random() * 10)

        randomize = parseInt(randomize) + parseInt(crysnum);
        crysnum++;
        $('#points').append('<div>',crysnum,'</div>')
        }   
    })

    $('#crystal4').click(function() {
        var crystalLength = 1;
        var randomize = "";

        for (var i = 0; i < crystalLength; i++) {
        var crysnum = Math.floor(Math.random() * 10)

        randomize = parseInt(randomize) + parseInt(crysnum);
        crysnum++;
        $('#points').append('<div>',crysnum,'</div>')
        }   
    })
    
        // var addCrys = function(){
        //     var div = document.createElement("div");
        //     $(div).attr("class", "ie-message");
        //     $.('body').append(div);

        //     var subDiv = document.createElement("div");
        //     $(subDiv).attr("class", "browser-list");
        //     $.(div).append(subDiv);
        // }





    
});
