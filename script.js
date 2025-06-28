function opentextFAQ(content){
    const comp = document.getElementById(content)
    if(comp.style.display === ''){
        comp.style.display = 'block';
        comp.style.visibility = 'visible';
    }else if(comp.style.display === 'block'){
        comp.style.display = '';
        comp.style.visibility = 'hidden';
    }
}