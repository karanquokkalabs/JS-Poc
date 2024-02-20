let Title_Val = document.getElementById('title_value')
let SelectorType = document.getElementById('filedselector')
let OutputSection = document.getElementById('AllData')



let Sub = document.getElementById('AddBtn')

function Submit(){

    if(Title_Val.value !== ''){
        let Label = document.createElement('label')
        Label.classList.add('testLabel')
        Label.textContent=Title_Val.value
        
        console.log(OutputSection);
        OutputSection.append(Label)
    // alert(Title_Val.value)

        
    }
    else{
        alert('enter value')
    }   

    Title_Val.value = ''
    // alert(Title_Val.value)
    Title_Val.setAttribute('autofocus','')
    
}

// OutputSection