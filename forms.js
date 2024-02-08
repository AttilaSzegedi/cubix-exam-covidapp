import { loadData } from "./covid";
import { addCard } from "./card";


export const initForm = () => {
    
    const loadingIndicator=document.getElementById('loading-indicatior');
    const errorMassage=document.getElementById('error-massage');
    const submit=document.getElementById('submit');
    const form= document.getElementById('form');
    form.addEventListener('submit',  async e =>{
     
      const country= document.getElementById('country-input').value;
      console.log(country);
      submit.style.disable=true;
      e.preventDefault();
      loadingIndicator.style.display='block';
        
      try {
        const countrydata = await loadData(country);
        addCard(countrydata);
        form.reset();
        
      } catch (error) {
        errorMassage.style.display='block';
         setTimeout(() => errorMassage.style.display = 'none', 5000);
      }
    
      loadingIndicator.style.display='none';
      submit.style.disable=false;
    });
    
    
    
}