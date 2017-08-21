let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');


function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
    if(answer.value=='' || attempt==''){
        setHiddenFields();
    }
    
    if(!validateInput(input)){
        return false;
    }
    else{
        attempt.value++;
    }
    
    if(getResults(input.value)){
        setMessage("You Win! :)");
        showAnswer(true);
        showReplay();
    }
    else{
        if(attempt.value>=10){
            setMessage("You Lose! :(");
            showAnswer(false);
            showReplay();
        }
    }
}

//implement new functions here
function setHiddenFields(){
    answer.value = Math.floor((Math.random() * 9999));
    while(answer.value.length<4){
        answer.value = "0"+answer.value;
    }
    console.log(answer.value);
    attempt.value = 0;
}

function setMessage(message){
    document.getElementById('message').innerHTML=message;
}

function validateInput(input){
<<<<<<< HEAD
    if(input.value.length<4){
=======
    if(input.lenght<4){
>>>>>>> parent of 5873dc7... respuesta 4
        document.getElementById('message').innerHTML = "Guesses must be exactly 4 characters long.";
        return false;
    }
    return true;
}

function getResults(input){
    let correct = 0;
    let final = '';
    
    for(var i=0;i<4;i++){
        if(answer.value[i]==input[i]){
            final = final+'<span class="glyphicon glyphicon-ok">' + input[i] + '</span>';
            correct++;
        }
        else{
            final = final +input[i];
        }
        //console.log(answer.value[i]+" "+input[i]);

    }
     
    resultado = '<div class="row"><span class="col-md-6">' + final + '</span><div class="col-md-6">';
    document.getElementById('results').innerHTML = document.getElementById('results').innerHTML+resultado;
    if(correct==4){
            return true;
    }
    return false;
}

function showAnswer (result){
    document.getElementById('code').innerHTML = answer.value;
    if(result==true){
        document.getElementById("code").className+=' success';
    }
    else{
        document.getElementById("code").className+= ' failure';
        
    }
}

function showReplay(){
    document.getElementById("guessing-div").style.display = 'none';
    document.getElementById("replay-div").style.display = 'block';
}