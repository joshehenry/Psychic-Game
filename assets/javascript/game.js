window.addEventListener("keypress", checkKeyPress);

var wins = 0
var rguess = 5
var losses = 0
var totalguesses = 0

window.addEventListener("key", checkKeyPress);




function checkKeyPress(key) {
    
    
     {
    
        if (key.keyCode == "106") {

            wins++;
    
        document.getElementById("wins").innerText = ("Wins: " + wins++); 

        document.getElementById("Guesses").innerText = ("Guesses: " + totalguesses++);
    }

    
        if (key.keyCode == "111") {

            wins++;
    
            document.getElementById("wins").innerText = ("Wins: " + wins++); 
            document.getElementById("Guesses").innerText = ("Guesses So Far: " + totalguesses++);
        }
    
        if (key.keyCode == "115") {

            wins++;
    
            document.getElementById("wins").innerText = ("Wins: " + wins++); 
            document.getElementById("Guesses").innerText = ("Guesses So Far: " + totalguesses++);
        }
    
        if (key.keyCode == "104") {
            
            wins++;
    
            document.getElementById("wins").innerText = ("Wins: " + wins++); 
            document.getElementById("Guesses").innerText = ("Guesses So Far: " + totalguesses++);
        }
    
        else if
        
         (key.keyCode !== "106", "111", "115", "104") { 

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
    