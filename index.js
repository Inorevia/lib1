exports.printMsg = function() {
    console.log("Thisfrom the mole");
  }

let a= 56;

exports.setVar=(v)=>{
    return new Promise((res,rej)=>{
        if(v<10){
            a=v;
            res("a has been set to " + v);
        }else{
            rej("v is to high (" + v+")");
        }
    })
}

exports.setVar2=(v)=>{
    this.setVar(v);
};

exports.getVar=()=>{
    return a;
}

const process =require('process');

process.emitWarning('thuis is a warning',"Application warning")


const EventEmitter = require('events');

const myEmitter = new EventEmitter();

function c3() {
    console.log('event in lib!');
  }

myEmitter.on('eventTwo', c3); // Register for eventOne

myEmitter.emit('eventTwo');

exports.setSetVar=(fct)=>{
    this.setVar=fct;
}

