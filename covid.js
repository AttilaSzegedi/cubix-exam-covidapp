
export const loadData = async (country) => {
    try {
       
        const countrydata = await getCountryData(country);
        const countryvacine = await getCountryvacine(country, countrydata);
        
        countrydata.vaccinerate= Math.round( countrydata.people_vaccinated / countrydata.population* 100);
        countrydata.people_vaccinated=countrydata.people_vaccinated.toLocaleString();
        countrydata.population=countrydata.population.toLocaleString();
        countrydata.confirmed=countrydata.confirmed.toLocaleString();
        countrydata.deaths=countrydata.deaths.toLocaleString();

        return countrydata;
    } catch (e) {
        console.error('Error loading Country data', e);
        throw e;
    }
}




const getCountryData = async (country) => {
    const response = await fetch(`https://europe-central2-webuni-js-covid-exam.cloudfunctions.net/cases?country=${country}`);
      if (response.status !== 200) {
        throw 'Error loading Country data';
      }
         const jsonResponse = await response.json();
         
     const countrydata = {
            country:'',
            population:'',
            confirmed:'',
            deaths:'',
            people_vaccinated:'',
            vaccinerate:''
            };

            countrydata.country=jsonResponse.country;
            countrydata.population=jsonResponse.population;
            countrydata.confirmed=jsonResponse.confirmed;
            countrydata.deaths=jsonResponse.deaths;
           console.log(countrydata);
  return countrydata;
  
}


const getCountryvacine = async (country, countrydata) => {
    const response = await fetch(`https://europe-central2-webuni-js-covid-exam.cloudfunctions.net/vaccines?country=${country}`);
      if (response.status !== 200) {
        throw 'Error loading Country data';
      }
         const jsonResponse = await response.json();
         
     const countryvacine = {
            country:'',
            people_vaccinated:'',
            
            };

            countryvacine.country=jsonResponse.country;
            countryvacine.people_vaccinated=jsonResponse.people_vaccinated;
            countrydata.people_vaccinated=jsonResponse.people_vaccinated;
           
           
  return countrydata;
  
}