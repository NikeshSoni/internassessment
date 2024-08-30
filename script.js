const nameVal = document.querySelector(".namedata");
const emailVal = document.querySelector(".email");
const massage = document.querySelector(".massage");

// console.log(typeof() );


function handle() {
    const data = nameVal.value;
    const emailValData = emailVal.value;
    const massageData = massage.value;  

    if (data == "" || emailValData == "" || massageData == "" ) {
        alert("All Input Feald Are Valid"); 
    }else{
        alert("user Created")
    }
    console.log(data , emailVal , massage);
    
    return data
    
}

// handle();