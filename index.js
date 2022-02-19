const result = (n)=>{

    let arr = [0,1]
    for(let i = 2; i < n; i++){
        let num1 = arr[i-1]
        let num2 = arr[i-2]
        arr.push(num1+num2)
    }
    return arr;
    }

console.log(result(20));