const calculateTemp = () =>{
    const numberTemp = document.getElementById('temp').value;
    const tempSelected = document.getElementById('temp_diff');
    const tempval = temp_diff.options[tempSelected.selectedIndex].value;
    let result;
    const celToFah = (cel) =>{
        return Math.round((cel * 9/5)+32);
    }
    const FahTocel =(fah)=>{
        return Math.round(((fah - 32)*5)/9) ;
    }
    if(tempval==='cel'){
        result = celToFah(numberTemp);
        document.getElementById('resultContainer').innerHTML=`=${result}°Fahrenheit`;
    }
    if(tempval==='fah'){
        result = FahTocel(numberTemp);
        document.getElementById('resultContainer').innerHTML=`=${result}°Celsius`;
    }
} 