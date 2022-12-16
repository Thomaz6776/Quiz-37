class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Nome:");
    this.input2 = createInput("Nº da Opção:");
    this.button = createButton('Enviar Teste');
    this.button2 = createButton('Reiniciar Teste');
    this.question = createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    //this.button2.hide();
    this.input2.hide();
  }

  display(){
    this.title.html("Meu Questionário");
    this.title.position(350, 0);

    this.question.html("Teste de IQ: - Se  `RATO´  é  1234 , então, o que é  `OTRA´  " );
    this.question.position(150, 80);
    this.option1.html("1: 1234 " );
    this.option1.position(150, 100);
    this.option2.html("2: 4312" );
    this.option2.position(150, 120);
    this.option3.html("3: 1245" );
    this.option3.position(150, 140);
    this.option4.html("4: 2314" );
    this.option4.position(150, 160);

    this.input1.position(150, 230);
    this.input2.position(350, 230);
    this.button.position(190, 300);
    this.button2.position(360, 300);

    this.button.mousePressed(()=>{
      this.title.hide();
      this.input1.hide();
      this.input2.hide();
      this.button.hide();
      contestant.name = this.input1.value();
      contestant.answer = this.input2.value();
      contestantCount+=1;
      contestant.index = contestantCount;
      contestant.update();
      contestant.updateCount(contestantCount);
    });

    this.button2.mousePressed(()=>{
      contestant.updateCount(0)
      quiz.update(0)
      var ref = database.ref("contestants")
      ref.remove()
    })
  }
}
