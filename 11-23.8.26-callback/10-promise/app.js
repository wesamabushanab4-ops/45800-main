 //(f,g)=>{}
 function f(){
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            //===========================================
            let arr = [1, 2, 3, 4, 5];
            let index = Math.floor(Math.random()*10);
            if(index<5){
                console.log(arr[index]);
                console.log("f");
                resolve(arr[index]);
            }
            else{
                //throw new Error("Index is greater than 5");
                reject("error: Index is greater than 5");
            }
            //===========================================

            }, 3000);
    });

    return promise;
}

let successCallback= (data)=>{
    console.log(data);
}



let p=f();
p.then(successCallback).catch(err=>{
    console.log(err);
});
console.log("code continues");