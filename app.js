import './styles.scss';
import { initForm } from './forms';
import'zizi-card';
import { getCountriesData } from './getallcountry';

window.addEventListener('DOMContentLoaded', () => {

    initForm();
    
    getCountriesData();
    
    
});



