window.onload = ()=>{
    let btn = document.querySelector('#btn');
    btn.addEventListener('click',BMI)
}

let BMI = ()=>{
    let height = document.querySelector('#height').value;
    let weight = document.querySelector('#weight').value;
    let result = document.querySelector('#Result');

if(height || isNaN(height)|| height<0){
    result.innerText="pls provide valid height";
    // return;

}else if(weight || isNaN(weight)|| weight<0){
    result.innerText="pls provide valid weight";
    // return;
}

    let bmi = (weight / ((height*height)/10000)).toFixed(1);
    if(bmi<18.5){
    result.innerText=`Under weight ${bmi}`;  
    } 
    else if(bmi >= 18.5  &&  bmi<24.9){
    result.innerText=`Normal ${bmi}`;  
    } 
   else if(bmi >= 25  &&  bmi<29.9){
    result.innerText=`Over weight ${bmi}`;  
    } 
   else if(bmi >= 30  &&  bmi<34.9){
    result.innerText=`Obasity (Class I) ${bmi}`;  
    } 
   else if(bmi >= 35  &&  bmi<39.9){
    result.innerText=`Obasity (Class II) ${bmi}`;  
    } else{
    result.innerText=` Extreme Obasity ${bmi}`;  

    }

}
