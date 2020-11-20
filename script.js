

var outcomes = ['It is certain', 'It is decidedly so', 'Without a doubt', 'Yes - Definitely', 'You may rely on it.', 'As I see it, yes.', 
'Most likely', 'Outlook good', 'Yes.', 'Signs point to yes.', 'Reply hazy, try again.', 'Ask again later', 'Better not tell you now', 'Cannot predict now', 'Concentrate and ask again',
'Don\'t count on it', 'My reply is no.', 'My sources say no.', 'Outlook not so good.', 'Very doubtful']


var random = Math.floor(Math.random() * outcomes.length);
var check = document.getElementById('check').value;

// once clicked, the text will appear - the text will stay - and a replay button will appear to reload the page
// if the input field is empty, an custom alert box will go off instructing the user to input a question.



function clickMe() {

    var check = document.getElementById('check').value;
    if (check == "" || check.length < 10 || !check.includes('?')) {

        document.getElementById("alert-background").style.display = "block";


    } else {
       
        document.getElementById('answer-1').innerHTML = outcomes[random];
        document.getElementById('answer-1').style.animation = "response 4s forwards";
        document.getElementById('replay').style.animation = "replay 10s forwards";
        document.getElementById('replay').style.visibility = "visible";
    }
}
 

function restart () {

    location.reload();

}


function closeMe() {

    document.getElementById("alert-background").style.display = "none";


}



