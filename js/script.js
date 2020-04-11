const api = new Api();

const dataFromApi = api.getDataFromApi();
dataFromApi
    .then((res) => res.json())
    .then((result) => {
        
        const summed = result.reduce((acc, record) => {
            const { countryRegion, confirmed, deaths, recovered } = record;
          
            if (!acc[countryRegion]) {
                acc[countryRegion] = { confirmed: 0, deaths: 0, recovered: 0 };
            }
          
            acc[countryRegion].confirmed += confirmed;
            acc[countryRegion].deaths += deaths;
            acc[countryRegion].recovered += recovered;
          
            return acc;
          }, {});

          //массив стран  [country, {confirmed: 666, deaths: 666, recovered: 0}]
          let countriesData = Object.entries(summed);

          //перевод стран
          function translateRus() {
            countriesData.forEach(item => {
              item[0] = countriesRu[countriesData.indexOf(item)];
            });
          }
          translateRus();

          //Отображение статистики по конкретной стране
          function statCounty(country) {
            countriesData.forEach(item => {
              if (country === item[0]) {
                const tableCountries = document.querySelector('.rating__table-countries');
                tableCountries.insertAdjacentHTML('beforeend',`
                  <tr class="table__row">
                      <td class="table__title"><img class="table__logo-country" src="images/__logo-${country}.svg" alt="${country}"></td>
                      <td class="table__data">${item[1].confirmed}</td>
                      <td class="table__data">${item[1].deaths}</td>
                      <td class="table__data">${item[1].recovered}</td>
                  </tr>`
            )
              }
            });
          };
          statCounty("Россия");
          statCounty("Беларусь");
          statCounty("Украина");
          statCounty("Казахстан");


          //вычисление общего числа заразившихся
          const totalConfirmed = countriesData.reduce((acc, item) => acc + item[1].confirmed, 0)

          // let totalConfirmed = 0;
          // countriesData.forEach(function (item) {
          //   totalConfirmed += item[1].confirmed;
          //   return totalConfirmed;
          // })

          // const totalConfirmed = countriesData.reduce((acc, item) => {
          //   return acc + item[1].confirmed;
          // }, 0);

          //Отображение максимального числа заразившихся
          const totalNumber = document.querySelector('.total__number');
          const headerTotal = document.querySelector('.header__total');
          totalNumber.textContent = totalConfirmed.toLocaleString();
          headerTotal.textContent = totalConfirmed.toLocaleString();

          //сортировка стран по количеству заражённых
          sortConfirmed = countriesData.sort((a, b) => b[1].confirmed - a[1].confirmed)
          
          //Отображение топ-10 стран по количеству заражённых
          function topTenConfirmed() {
            for (let i = 0; i <= 10; i++) {
              const tableConfirmed =document.querySelector('.rating__table');
              tableConfirmed.insertAdjacentHTML('beforeend',`
                <tr class="table__row">
                    <td class="table__data">${sortConfirmed[i][0]}</td>
                    <td class="table__data">${sortConfirmed[i][1].confirmed}</td>
                    <td class="table__data">${sortConfirmed[i][1].deaths}</td>
                    <td class="table__data">${sortConfirmed[i][1].recovered}</td>
                </tr>`
              )
            }
          };
          topTenConfirmed();
          //console.log(CountiesEn.Spain);


          //сортировка стран по % смертности
          sortPerDeath = countriesData.sort((a, b) => (((b[1].deaths / b[1].confirmed) * 100) - ((a[1].deaths / a[1].confirmed) * 100)));

          //Присвоение стране % смертности
          const countryPerDeathsRec = sortPerDeath.map(function(item) {
            const perDeaths = ((item[1].deaths / item[1].confirmed) * 100).toFixed(2);
            const perRecovered = ((item[1].recovered / item[1].confirmed) * 100).toFixed(2);
            return [item[0], perDeaths, perRecovered]
        })

          // Отображение диаграмм стран по % смертей
          function diagramDeath() {
            const diagram = document.querySelector('.diagram')
              for (let i = 0; i < 10; i++) {
                diagram.insertAdjacentHTML('beforeend',`    
                  <div class="diagram__row">
                      <div class="diagram__caption">
                          <p class="diagram__country">${countryPerDeathsRec[i][0]}</p>
                          <p class="diagram__analytics">
                              Смертность
                              <span class="diagram__data diagram__data_type_dead">${countryPerDeathsRec[i][1]}%</span> •
                              Вылечилось
                              <span class="diagram__data diagram__data_type_healed">${countryPerDeathsRec[i][2]}%</span>
                          </p>
                      </div>
                      <div class="diagram__line">
                          <div class="diagram__visualisation diagram__visualisation_type_healed" style="width: ${countryPerDeathsRec[i][2]}%;"></div>
                          <div class="diagram__visualisation diagram__visualisation_type_dead" style="width: ${countryPerDeathsRec[i][1]}%;"></div>
                      </div>
                </div>`)

              }
          }
          diagramDeath();

        })