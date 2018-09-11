window.addEventListener("keypress", checkKeyPress);

var wins = 0
var rguess = 5
var losses = 0
var totalguesses = 0

window.addEventListener("key", checkKeyPress);




function checkKeyPress(key) {
    
    console.log(key);
    
     {
    
        if (key.key == "j") {

            wins++;
    
        document.getElementById("wins").innerText = ("Wins: " + wins++); 

        document.getElementById("Guesses").innerText = ("Guesses: " + totalguesses++);
    }

    
        if (key.key == "o") {

            wins++;
    
            document.getElementById("wins").innerText = ("Wins: " + wins++); 
            document.getElementById("Guesses").innerText = ("Guesses So Far: " + totalguesses++);
        }
    
        if (key.key == "s") {

            wins++;
    
            document.getElementById("wins").innerText = ("Wins: " + wins++); 
            document.getElementById("Guesses").innerText = ("Guesses So Far: " + totalguesses++);
        }
    
        if (key.key == "h") {
            
            wins++;
    
            document.getElementById("wins").innerText = ("Wins: " + wins++); 
            document.getElementById("Guesses").innerText = ("Guesses So Far: " + totalguesses++);
        }
    
        else if
        
         (key.key !== "j", "o", "s", "h") { 

            losses++;
            
            document.getElementById("losses").innerText = ("Losses: " + losses++);
            document.getElementById("GR").innerText = ("Guesses Remaining: " + rguess--);  
            document.getElementById("Guesses").innerText = ("Guesses So Far: " + totalguesses++);


            }

            if (rguess == -1)


            {
                rguess = -1; 
                

                alert("Sorry try again!");
                window.location.reload();
                
            }
        }
    
        }
    