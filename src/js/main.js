let Title_Val = document.getElementById('title_value')
let SelectorType = document.getElementById('filedselector')
let OutputSection = document.getElementById('AllData')
let UL_parent= document.createElement('ol')



let Sub = document.getElementById('AddBtn')

function Submit(){

    if(Title_Val.value !== ''){

        let Label = document.createElement('label')
        Label.classList.add('testLabel')
        Label.textContent=Title_Val.value

        
        let Ul_child = document.createElement('li')
        Ul_child.append(Label)
        UL_parent.append(Ul_child)
    }


    else{
        alert('enter value')
    }   

            
    OutputSection.append(UL_parent)

    Title_Val.value = ''
    Title_Val.setAttribute('autofocus','')
    
};



// OutputSection