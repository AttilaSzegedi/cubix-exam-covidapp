
import Chart from 'chart.js/auto'

const countries=['Hungary','Slovakia','France','Slovenia','Austria','Romania']

const countryalldata= [
    {country:'Hungary',confirmed:''},
    {country:'Slovakia',confirmed:''},
    {country:'Slovenia',confirmed:''},
    {country:'France',confirmed:''},
    {country:'Austria',confirmed:''},
    {country:'Romania',confirmed:''},

];

export const getCountriesData= async () => {
for (let i=0; i<countries.length; i++){
const response = await fetch(`https://europe-central2-webuni-js-covid-exam.cloudfunctions.net/cases?country=${countries[i]}`);
    if (response.status !== 200) {
        throw 'Error loading Country data';
   }
    const jsonResponse = await response.json();
    
    
    const countryIndex = countryalldata.findIndex(countryalldata => countryalldata.country === jsonResponse.country);
    countryalldata[countryIndex].confirmed=jsonResponse.confirmed;
    
    
}
(async function() {
  const data =countryalldata;

  new Chart(
    document.getElementById('confirmed'),
    {
      type: 'bar',
      data: {
        labels: data.map(row => row.country),
        
        datasets: [
          {
            label: 'Cases per Countries',
            data: data.map(row => row.confirmed)
          }
        ]
      }
    }
  );
})();
console.log(countryalldata);
return countryalldata;


}



 