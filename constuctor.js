//start global variables start
var storeDataEl = document.getElementById('storeData');
var xandzTotals = 0;

function random(min, max) {
  var random = Math.floor((Math.random() * max) + min);
  console.log(random + ' words');
  return random;
}
//
var hourOpen = ['6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19'];

//end global variables
//constructor objects.
function CookieStore(location, minGuest, maxGuest, meanSale) {
  this.name = location,
  this.minGuest = minGuest,
  this.maxGuest = maxGuest,
  this.meanSale = meanSale,
  this.hourlySale = [],
  this.dailySale = 0,
  CookieStore.allStores.push(this);
  this.renderShopRow();
}
CookieStore.allStores = [];
//populate hourlySale and dailySale
CookieStore.prototype.sales = function() {
  for (var i = 0; i < hourOpen.length; i++) {
    var num = Math.floor((random(this.minGuest, this.maxGuest) * this.meanSale));
    console.log(num + 'listen to me');
    this.dailySale += num;
    this.hourlySale.push(num);
    xandzTotals += num;
    console.log(xandzTotals + 'xandzTotals');
    console.log(this.dailySale + 'this dailySale');
  }
};

//populate hourlySale and dailySale
//create headerRow
var renderHeaderRow = function() {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'location';
  trEl.appendChild(thEl);

  for (var i = 0; i < hourOpen.length; i++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = hourOpen[i];
    trEl.appendChild(tdEl);
  }
  var tdElem = document.createElement('td');
  tdElem.textContent = 'total';
  trEl.appendChild(tdElem);
  storeDataEl.appendChild(trEl);
};
renderHeaderRow();
//create headerRow
//create ShopRow from class lecture
CookieStore.prototype.renderShopRow = function() {
  this.sales();
  console.log(this.hourlySale);
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = this.name;
  trEl.appendChild(tdEl);
  for (var i = 0; i < hourOpen.length; i++) {
    console.log(this.hourlySale);
    tdEl = document.createElement('td');
    tdEl.textContent = this.hourlySale[i];
    console.log(this.hourlySale[i]);
    trEl.appendChild(tdEl);
  }
  tdEl = document.createElement('td');
  tdEl.textContent = this.dailySale;
  trEl.appendChild(tdEl);
  storeDataEl.appendChild(trEl);
};

////footer function
var renderFooterrow = function() {
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  var grandtotal = 0;
  tdEl.textContent = 'totals:';
  trEl.appendChild(tdEl);
  for (var i = 0; i < hourOpen.length; i++) {
    var storesHourlyTotals = 0;
    for (var j = 0; j < CookieStore.allStores.length; j++) {
      storesHourlyTotals += CookieStore.allStores[j].hourlySale[i];
    }
    grandtotal += storesHourlyTotals;
    console.log('grandtotal', grandtotal);
    tdEl = document.createElement('td');
    tdEl.textContent = storesHourlyTotals;
   trEl.appendChild(tdEl);
   storeDataEl.appendChild(trEl);
  }
  tdEl = document.createElement('td');
  tdEl.textContent = grandtotal;
  trEl.appendChild(tdEl);
};


var storeEssentials = document.getElementById('storeEssentials');
storeEssentials.addEventListener('submit', storGenerator);

function storGenerator(event) {
  storeEssentials.preventDefault();
  var minGuest = event.target.MinGuest.value;
  var maxGuest = event.target.MaxGuest.value;
  var meanSale = event.target.MeanSale.value;
  var name = event.target.city.value;
  ////instantiate new cookiestore
  console.log('event.target.MinGust.value:', event.target.minGust.value);

  new CookieStore(minGuest, maxGuest, meanSale, name);

  console.log('allStores', allStores);

}



function initExistingShops() {
  new CookieStore('Seattle', 23, 65, 6.3);
  new CookieStore('Tokyo', 3, 24, 1.2);
  new CookieStore('Dubai', 11, 38, 3.7);
  new CookieStore('Paris', 20, 38, 2.3);
  new CookieStore('Lima', 2, 16, 4.6);
}
initExistingShops();
renderFooterrow();


var addStore = document.getElementById('form-addStore');
addStore.addEventListener('submit', addNewStore);

//create store
function addNewStore(event) {
  event.preventDefault();
  console.log(event, 'event');
  var minGuest = event.target.minGuest.value;
  var maxGuest = event.target.maxGuest.value;
  var meanSale = event.target.unitsPerPerson.value;
  var name = event.target.loc_name.value;

  var footer = storeDataEl.lastChild;
  storeDataEl.removeChild(footer);
  new CookieStore(name, minGuest, maxGuest, meanSale);
  console.log('event.target.minGuest.value', event.target.minGuest.value);
  renderFooterrow();

  event.target.minGuest.value = null;
  event.target.maxGuest.value = null;
  event.target.unitsPerPerson.value = null;
  event.target.loc_name.value = null;

}
//output to the table on sales.html
