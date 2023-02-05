 const list=document.getElementById('list-container');
function getElementById(elementId)
{
    const elementField=document.getElementById(elementId)
    const element=elementField.value
    const convElement=parseFloat(element)
    return convElement 
}
function setElementById(elementId,newValue)
{
    const elementField=document.getElementById(elementId);
    elementField.innerText=newValue
}



let selectbuttons=document.getElementsByClassName('select')
for(const selectButton of selectbuttons)
{
        //   const playerList=list.childNodes.length;
          
            selectButton.addEventListener('click',function(event)
            {
                 playerList=list.childNodes.length-3;
                 if (event.target.innerText === 'Select')
                 {
                    if(playerList<=5)
                    {
                        
                        const playerNameTag=event.target.parentNode.getElementsByTagName('h5')
                        const playerName=playerNameTag[0].innerText
                        console.log(playerName)
                        const listContainer=document.getElementById('list-container')
                        const li=document.createElement('li');
                        li.innerText=playerName
                        listContainer.appendChild(li)
                        // console.log(playerList)
    
                                
                        //Disable the button once clicked and modified some styles of the button
                        event.target.setAttribute('disabled', true);
                        event.target.classList.remove('shadow', 'hover:shadow-md', 'hover:shadow-teal-600')
                        event.target.classList.add("bg-black", 'text-gray-400');
                    }
                    else{
                        alert('you can select atmost five')
                    }
                 }
                 else if(event.target.innerText=='Calculate')
                 {
                    const unitCost=getElementById('unite-cost')
                    if(isNaN(unitCost))
                    {
                        alert('input a valid amount')
                    }
                    else{
                        const totalCost=unitCost*playerList
                        setElementById('total-cost',totalCost)
                    }
                  
                 }
                 else{
                    
                    const unitCost=getElementById('unite-cost')
                    const totalCost=unitCost*playerList
                    const managerCost=getElementById('manager-cost')
                    const coachCost= getElementById('coach-cost')
                    if(isNaN(managerCost&&coachCost))
                    {
                        alert('enter a valid amount')
                    }
                    else{
                        
                    const total=totalCost+managerCost+coachCost;
                    setElementById('total-expanse',total)
                    }

                 }

              
              

                 
            })


          
 
}
