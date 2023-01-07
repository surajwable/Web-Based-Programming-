function welcome()
{
    var choice=0
    console.log("Welcome to my app");
    function indianwelcome()
    {
        console.log("namaste")
    }

    function USwelcome()
    {
        console.log("Howd")
    }

    function japanesewelcome()
    {
        console.log("konnichiwa")
    }

    do{
        console.log("********Menu*********")
        console.log("1.India\n2.us\n3.japan\n")
        switch(choice){

            case 1:
                return indianwelcome();
                break;
            case 2:

                return USwelcome();
                break;
            
            case 3:
               return japanesewelcome();
                break;
           
            default:
                 console.log("you have entered the wrong choice...!!")
                break;

        }
}while(choice!=4);
}
welcome();




