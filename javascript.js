
        document.addEventListener("keydown",(e)=>{
            if(e.key == "Enter"){
                myFunction();
            }
        })
        function myFunction(){
            let input1 = Number(document.getElementById("input1").value);
            let input2 = Number(document.getElementById("input2").value);
            let operator = document.getElementById("operator").value;
            let result;
            let output;
            switch(operator){
                case "+":{
                   result = input1 + input2;
                   break;
                }
                case "-":{
                   result = input1 - input2;
                   break;
                }
                case "*":{
                   result = input1 * input2;
                   break;
                }
                case "/":{
                   result = input1 / input2;
                   break;
                }
                default:{
                    output = "Please Enter a Valid input"
                    break
                }

            }
            output = `Your Entered ${input1} and ${input2} and Your Operator is ${operator} So cal is ${result}` 
            document.getElementById("output").style.display = "flex";
            document.getElementById("output").innerHTML = output
        }
