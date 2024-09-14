#! /usr/bin/env node

//OBJECT ORIENTED PROGRAM

import inquirer from "inquirer";

import chalk from "chalk";

class Person {
      
private  _personality : string;

constructor(){
    this._personality = "mysterious";
} 
 
userInput(input:string){
    if (input.includes('Talk to others with friendly behaviour')){
        this._personality = "Jolly";
    }
    else if (input.includes('Keep your words to your self')){
        this._personality = "Introverted";
    }
}

get personality(){return this._personality}}

class Main {
    public async main(){
    const ans = await inquirer.prompt({
        name : "person",
        message : chalk.blue("Talk about your behaviour?"),
        type : "list",
        choices : [
            "1 : Talk to others with friendly behaviour",
            "2 : keep quite and don't talk to others"
        ]
    })

    let myPerson = new Person()
    myPerson.userInput(ans.person);
    console.log(`You are ${myPerson.personality}`);
}}

const myObject = new Main();
myObject.main();