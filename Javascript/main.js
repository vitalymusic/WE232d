// console.log("Javascript 2");
// window.alert("Javascript 2");
// document.write("Javascript 2");
// console.log("Javascript 2");
// window.close();
// document.getElementById() - camelCase 

// {

// }


// Типы данных
    // Primitive
    // int - целые числа
    // "text" - String;
    // float, double - дробные числа
    // boolean  - true/false

    //  Array = [int,string,float,boolean]
    // array[1]
    // Objects = {
        // length:10,
        // width:"text"
        // sayHello:function(){

        // }
    // }


    // var let - создание переменных


    var number1 = 10.04;
    // var number1 = "text";

    let text1 = "<h1>My first Text</h1>";
    let text2 = '<h2>My second Text</h2>';
    let text3 = `<p>My paragraph</p>`;
    let bool1 = true;


    let cars = ["Volvo","BMW","Mercedes"];
    let carObject = {
        name:"Ford",
        model:"Tourneo",
        engine:"1.8tdi"
        };

    
    
    
        // document.write(text1,text2,text3,bool1,cars[0],carObject.name,carObject.model);
        // console.log(text1,text2,text3,bool1,cars,carObject);


        // Math operators
        // +-*/ % ^2 ** ++ -- 

        // Prisvaivanije
        // = *= /+ += -=


        let answer = number1*20/(10+5-3)^2;
        answer = ++number1;
        answer = --number1;

        // answer = 6%4;
        answer = number1;
        answer += 20;
        // answer += 20; answer = answer+20 
        answer -= 15;
        answer *= 10;
        answer /= 5;



        // document.write(answer.toFixed(2).toString());
        // console.log(answer.toString(2));


        // Summa rabot = (4.5x5x2.5)*15.30

        let width = 4.5,length = 5,height=2.5;
        let squareMeterPrice = 15.30;

        let summ = (width+length)*2*height*squareMeterPrice;


        // document.write("<h1>Price for all workd is: "+summ.toFixed(2)+"</h1>");
        document.write(`
        <div class="container">
            <h1>Price for all workd is: ${summ.toFixed(2)}</h1>
        </div>
        `);

        let name = prompt("Enter Your name?");
        document.write(`
        <div class="container">
            <h1>Hello, Your name is: ${name}!</h1>
        </div>
        `);


        let images = [
            "https://play-lh.googleusercontent.com/RslBy1o2NEBYUdRjQtUqLbN-ZM2hpks1mHPMiHMrpAuLqxeBPcFSAjo65nQHbTA53YYn",
            "https://miro.medium.com/v2/resize:fit:5120/1*l4xICbIIYlz1OTymWCoUTw.jpeg"
        ];

        document.write(`
        <div class="images">
               <a href="${images[0]}"><img src="${images[0]}" width="200px"></a> 
               <a href="${images[1]}"><img src="${images[1]}" width="200px"></a> 
        </div>
        `);


        // let out = "<div class=\"images\">";
        // out += "<a href=\""+images[0]+"\"><img src=\""+images[0]+"\" width=\"200px\"></a>";
        // out += "<a href=\""+images[1]+"\"><img src=\""+images[1]+"\" width=\"200px\"></a>";
        // out +=" </div>";


        // Vivod strok na stranicu
       
        let inp1 = +prompt("Vvedite pervoje znachenije"),
            inp2 = +prompt("Vvedite vtoroje znachenije");



        document.write(inp1+inp2);

        




















