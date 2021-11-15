/*
    let : Block Scope의 변수
*/

// let의 블록 범위
try{
    if(true){
        var i = 10;
        let a = 20;
    }
    console.log(j);
} catch(e){
    console.error('error:'+e);
}

// cf : var 함수범위
try{
    let f = function(){
        //var m = 20;
        let m = 20;
    }
    f();
    console.log(m);
} catch(e){
    console.error('error'+e);
}