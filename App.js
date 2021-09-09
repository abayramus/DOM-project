 // internal js 
        // isEven function should be called ONLY WHEN USER CLICKS ON Check Number button
        function isEven(){

            /*
            We have some document methods that we must use to get the elements
            For example querySelector, getElementById(id);getElementByClass(class);
            document.getElementById('input-box');-> returns the mathing element whose is is input-box 
            
            */ 
            // const num = 11;
            const targetElement = document.getElementById('input-box');//<input id="input-box" type="text">
            console.log(`TARGET : ${targetElement}`)
            //to ge the value of an input we must use value 
            const num = document.getElementById('input-box').value;
            console.log(`NUMBER ${num}`);
            if(num%2===0){
                alert(num + " is even")
            }else{
                alert(num + " is odd")
                // document.write('Stop clicking')
            }
        }
