class quize{
    constructor(){
       this.input = createInput("Name");
       this.button = createButton('Play');
       this.greeting = createElement('h2');
       this.title = createElement('h2');
    }
    
    
     display() {

     

        
        this.title.html("MyQuiz Gme");
        this.title.position(350, 50);

        this.question.html("Question:-What starts and enda with the letter 'E',but has only one letter?");
        this.questione.position(150, 80);
        this.option1.html("1:Everyone");
        this.option1.position(150,100);
        this.option2.html("2:Envelope");
        this.option2.position(150,100);

        this.input1.position(150,230);
     
    }
  
    
        }
        










