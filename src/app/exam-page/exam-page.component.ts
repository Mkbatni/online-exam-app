import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service.service';
import { Questions } from '../questions.model';

@Component({
  selector: 'app-exam-page',
  templateUrl: './exam-page.component.html',
  styleUrls: ['./exam-page.component.css']
})

export class ExamPageComponent implements OnInit {

  constructor(public serv:HttpServiceService) { }

  questionArray:Array<Questions> = [];
  eachQuestonArray:Array<Questions> = [];
  cntr:number = 0;

  hasAllArray:Array<Questions> = []
  outputArr:Array<any> = [];

  submitLock:boolean = true;
  nxt:string = ""
  strtTxt:string = "Start"
  strtBtn:boolean = false;
  submitTxt:string = "";
  finalResultMSG:string = "";
  ngOnInit(): void {
  
    this.getValue();
   /*  this.serv.loadQuestion().subscribe(result => this.questionArray = result,error => console.log("error happend",error),
    ()=> console.log("completed")); */
  }



getValue()
  {
    this.serv.loadQuestion().subscribe(result => this.questionArray = result,error => console.log("error happend",error),
    ()=> console.log("completed"));
  

  }



  getStart()
  {
   /*  for (let index = 0; index < this.questionArray.length; index++) {
      this.hasAllArray.push(this.questionArray[index])
      
    } */
    
    this.hasAllArray = [...this.questionArray];
    this.eachQuestonArray.push(this.hasAllArray[0]);
   this.nxt = "Next";
   this.strtTxt = "";

  }

  
  submitForm(ref:any)
  {
  
if (this.cntr == this.hasAllArray.length - 1)
{
  this.nxt = "";
  this.submitTxt = "Submit";
  this.submitLock = false;
return;
}

  let tmp = ref.answer
if(tmp != this.eachQuestonArray[0].correctAns)
{
  let obj= {
    question : this.eachQuestonArray[0].question,
    correctAns : this.eachQuestonArray[0].correctAns,
    userAns : tmp
  }
     
      this.outputArr.push(obj); 
}

console.log(" it was a correct answer" + this.cntr +  "  : "+  this.hasAllArray.length);
this.eachQuestonArray.pop();

  this.eachQuestonArray.push(this.hasAllArray[++this.cntr]);


  

    
  }


outPutList:Array<any> = [];
  submitAll()
  {
  //RESULT PASS 3/1O
  let  tmpTotal:number = (1 -  this.outputArr.length / this.hasAllArray.length ) * 100 ;

  if (tmpTotal >= 70)
{
 
  this.finalResultMSG = "Congradulation you passed. your Score is: " + tmpTotal.toFixed(2) + "." + 
  "\nYou missed: " +  this.outputArr.length + " out of " + this.hasAllArray.length + " Questions.";
  
}
else{
  this.finalResultMSG = "Sorry you failed the Test your SCore is: " + tmpTotal.toFixed(2)+ "." + 
  "\nYou missed: " +  this.outputArr.length + " out of " + this.hasAllArray.length + " Questions.";
}
   this.outPutList = [...this.outputArr];
  
  }


}
