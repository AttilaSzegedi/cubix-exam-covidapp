export const addCard=(countrydata)=>{
  const container=document.getElementById('cards-container');
  
  
  container.insertAdjacentHTML('afterbegin', `
      <zizi-card title="${countrydata.country}">
          <div class="card-content">
              <div>Population: ${countrydata.population}</div>
              <div>Case number: ${countrydata.confirmed} </div>
              <div>Deaths number: ${countrydata.deaths} </div>
              <div>People Vaccinated number: ${countrydata.people_vaccinated} </div>
              <div>Vaccine Rate: ${countrydata.vaccinerate}  %</div>
              <div>
                 <button id="delete-card">Delete</button>
              </div>
          </div>
      </zizi-card>`)

      document.querySelector('#delete-card')
        .addEventListener('click', (e) => e.target.closest('zizi-card').remove());

}