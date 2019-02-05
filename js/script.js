// Solution goes here
$('#send').click((e) => {
    e.preventDefault()
    let name = $('#display-name').val();
    let pass= $( "#pass" ).val();
    let passConfirm = $('#pass-confirm').val();
    let email = $('#email').val();
    let emailValidator = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$");
    if(name && pass && passConfirm && email){
        if(name.length >= 5 && pass.length >= 5 && passConfirm.length >= 5 && email.length >= 5){
            $('#mistake').css("display", "none");
            $('input').css("outline", "1px solid green")
            if(emailValidator.test(email) === false){
                $('#email').css("outline", "1px solid red");
                $('#mistake').css("display", "block");
            }
            if(pass !== passConfirm){
                $('#pass').css("outline", "1px solid red");
                $('#pass-confirm').css("outline", "1px solid red");
                $('#mistake').css("display", "block");
            }
        }
            else{
                $('#mistake').css("display", "block");
                $('input').css("outline", "1px solid red");
                alert("minimum character length 5 characters");
            }
        
    }else{
        $('#mistake').css("display", "block");
        if(!name){$('#display-name').css("outline", "1px solid red")}
        if(!pass){$('#pass').css("outline", "1px solid red")}
        if(!passConfirm){$('#pass-confirm').css("outline", "1px solid red")}
        if(!email){$('#email').css("outline", "1px solid red")}
    }
})
$('#reset').click(()=>{
    $('input').val('');
})