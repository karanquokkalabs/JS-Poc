let Title_Val = document.getElementById('title_value')
let SelectorType = document.getElementById('filedselector')
let OutputSection = document.getElementById('list_data')
let SubBtnDiv = document.getElementById('AllData')
let UL_parent= document.createElement('ol')

UL_parent.classList.add('ps-0')


let SubBtn = SubBtnDiv.querySelector('button.submit_btn')
// .classList.add('d-none')  



let Sub = document.getElementById('AddBtn')

function Submit(){

    if(Title_Val.value.trim() !== ''){
        

        let Label = document.createElement('label');
        Label.classList.add('form-label');
        Label.setAttribute('for',Title_Val.value);
        Label.textContent=Title_Val.value

        let LabelInput = document.createElement('input')
        LabelInput.classList.add('form-control')
        LabelInput.setAttribute('id',Title_Val.value);

        LabelInput.type=SelectorType.value

        
        let Ul_child = document.createElement('li')
        Ul_child.append(Label)
        Ul_child.append(LabelInput)

        Ul_child.setAttribute('class','mb-4')
        
        UL_parent.append(Ul_child)
        
    }


    else{
        alert('First Enter The Value')
    }   


    OutputSection.append(UL_parent)
    Title_Val.value = ''
    


let childs = OutputSection.getElementsByTagName('li').length
let OutPutDiv = document.querySelector('.Watch_Form')
console.log(childs);

// let childs = OutputSection.children.length

// console.log(OutPutDiv);
    if(childs >= 1){
        SubBtn.classList.remove('d-none')       
        OutPutDiv.classList.remove('d-none')       
    }
    else{
        alert('Error')
    }
    
    
    
            

    
    
    
    
    
    

};



// OutputSection
