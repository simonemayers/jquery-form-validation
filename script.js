$(document).ready(function(){
    $('#submit').on('click', function(event){
        this.innerHTML = "button clicked";
        let name = $("#name"); 
        let email = $("#email"); 
        let number = $("#phone"); 
        let message = $("#message-area"); 
        let required = [name, email, number]; 
        for(i =0; i<required.length; i++){
            if(!required[i][0].value){
                $(message).html("Please Fill Out Required Fields"); 
                $(message).addClass("warning");
                $(required[i]).prev().addClass("warning")
            } else if (required[i][0].value){
                $(message).removeClass("warning"); 
                $(required[i]).prev().removeClass("warning")
            }
        }
        if($("label.warning").length === 0){
            $("#form").css("display", "none");
            $("h2").html("Thanks for your feedback!")
        }



    })




});
