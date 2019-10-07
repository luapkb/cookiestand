//need for stand alone funtion to opperate all random nmber methods pointed out by Chris S.
console.log('hello');

function random(min, max) {
    var random = Math.floor((Math.random() * max) + min);
    console.log(random + ' words');
    return random
}

var seattle = {
        // Properties 
        name: 'Seattle',
        minguest: 23,
        maxguest: 65,
        cookiesPerPerson: 6.3,
        open: 06,
        close: 20,
        hourlySales: [],
        totalPerDay: 0,
        hourOpen: ['6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
        // [i] = cookiesPerPerson * number
        sales: function() {
                for (var i = 0; i < this.hourOpen.length; i++) {
                    var num = (random(this.minguest, this.maxguest); this.hourlySales.push(num);
                        } // https://medium.com/@chrisburgin95/rewriting-javascript-sum-an-array-dbf838996ed0
                    for (var i = 0; i < this.hourlySales.length; i++) {
                        this.totalPerDay += ((this.hourlySales[i]) * this.cookiesPerPerson);
                        console.log(this.totalPerDay + 'total');
                    }
                    console.log(this.totalPerDay);
                },

                render: function() {
                    this.sales();
                    var storeData = document.getElementById('storeData');
                    var storeName = document.createElement('h3');
                    storeName.textContent = this.name;
                    storeData.appendChild(storeName);
                    var ulElement = document.createElement('ul');
                    for (var i = 0; i < this.hourOpen.length; i++) {
                        var listEliment = document.createElement('li');
                        listEliment.textContent = `${this.hourOpen[i]} : ${this.hourlySales[i]}`;
                        ulElement.appendChild(listEliment);
                    }
                    listElement = document.createElement('li');
                    listEliment.textContent = `total: ${this.totalPerDay}`;
                    ulElement.appendChild(listEliment);
                    storeData.appendChild(ulElement);

                }

            }
            // var cities = ['seattle', 'tokyo', 'dubai', 'paris', 'lima'];
            // for (var i = 0; i < cities.length; i++) {
            //     cities[i].render();
            // }
        seattle.render();
        //end seattle
        //end seattle
        var tokyo = {
            // Properties 
            name: 'Tokyo',
            minguest: 3,
            maxguest: 24,
            cookiesPerPerson: 1.2,
            open: 06,
            close: 20,
            hourlySales: [],
            totalPerDay: 0,
            hourOpen: ['6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
            // [i] = cookiesPerPerson * number
            sales: function() {
                for (var i = 0; i < this.hourOpen.length; i++) {
                    var num = random(this.minguest, this.maxguest);
                    this.hourlySales.push(num);
                } // https://medium.com/@chrisburgin95/rewriting-javascript-sum-an-array-dbf838996ed0
                for (var i = 0; i < this.hourlySales.length; i++) {
                    this.totalPerDay += Math.floor((this.hourlySales[i]) * this.cookiesPerPerson)
                    console.log(this.totalPerDay + 'total')
                }
                console.log(this.totalPerDay);
            },

            render: function() {
                this.sales();
                var storeData = document.getElementById('storeData');
                var storeName = document.createElement('h3');
                storeName.textContent = this.name;
                storeData.appendChild(storeName);
                var ulElement = document.createElement('ul');
                for (var i = 0; i < this.hourOpen.length; i++) {
                    var listEliment = document.createElement('li');
                    listEliment.textContent = `${this.hourOpen[i]} : ${this.hourlySales[i]}`;
                    ulElement.appendChild(listEliment);
                }
                listElement = document.createElement('li');
                listEliment.textContent = `total: ${this.totalPerDay}`;
                ulElement.appendChild(listEliment);
                storeData.appendChild(ulElement);

            }

        }
        tokyo.render();
        //end tokyo
        //end tokyo

        var dubai = {
            // Properties 
            name: 'dubai',
            minguest: 11,
            maxguest: 38,
            cookiesPerPerson: 3.7,
            open: 06,
            close: 20,
            hourlySales: [],
            totalPerDay: 0,
            hourOpen: ['6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
            // [i] = cookiesPerPerson * number
            sales: function() {
                for (var i = 0; i < this.hourOpen.length; i++) {
                    var num = random(this.minguest, this.maxguest);
                    this.hourlySales.push(num);
                } // https://medium.com/@chrisburgin95/rewriting-javascript-sum-an-array-dbf838996ed0
                for (var i = 0; i < this.hourlySales.length; i++) {
                    this.totalPerDay += Math.floor((this.hourlySales[i]) * this.cookiesPerPerson)
                    console.log(this.totalPerDay + 'total')
                }
                console.log(this.totalPerDay);
            },

            render: function() {
                this.sales();
                var storeData = document.getElementById('storeData');
                var storeName = document.createElement('h3');
                storeName.textContent = this.name;
                storeData.appendChild(storeName);
                var ulElement = document.createElement('ul');
                for (var i = 0; i < this.hourOpen.length; i++) {
                    var listEliment = document.createElement('li');
                    listEliment.textContent = `${this.hourOpen[i]} : ${this.hourlySales[i]}`;
                    ulElement.appendChild(listEliment);
                }
                listElement = document.createElement('li');
                listEliment.textContent = `total: ${this.totalPerDay}`;
                ulElement.appendChild(listEliment);
                storeData.appendChild(ulElement);

            }

        }
        dubai.render();
        //end dubai
        //end dubai

        var paris = {
            // Properties 
            name: 'paris',
            minguest: 20,
            maxguest: 38,
            cookiesPerPerson: 2.3,
            open: 06,
            close: 20,
            hourlySales: [],
            totalPerDay: 0,
            hourOpen: ['6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
            // [i] = cookiesPerPerson * number
            sales: function() {
                for (var i = 0; i < this.hourOpen.length; i++) {
                    var num = random(this.minguest, this.maxguest);
                    this.hourlySales.push(num);
                } // https://medium.com/@chrisburgin95/rewriting-javascript-sum-an-array-dbf838996ed0
                for (var i = 0; i < this.hourlySales.length; i++) {
                    this.totalPerDay += Math.floor((this.hourlySales[i]) * this.cookiesPerPerson)
                    console.log(this.totalPerDay + 'total')
                }
                console.log(this.totalPerDay);
            },

            render: function() {
                this.sales();
                var storeData = document.getElementById('storeData');
                var storeName = document.createElement('h3');
                storeName.textContent = this.name;
                storeData.appendChild(storeName);
                var ulElement = document.createElement('ul');
                for (var i = 0; i < this.hourOpen.length; i++) {
                    var listEliment = document.createElement('li');
                    listEliment.textContent = `${this.hourOpen[i]} : ${this.hourlySales[i]}`;
                    ulElement.appendChild(listEliment);
                }
                listElement = document.createElement('li');
                listEliment.textContent = `total: ${this.totalPerDay}`;
                ulElement.appendChild(listEliment);
                storeData.appendChild(ulElement);

            }

        }
        paris.render();
        //end paris
        //end paris

        var lima = {
            // Properties 
            name: 'lima',
            minguest: 2,
            maxguest: 16,
            cookiesPerPerson: 4.6,
            open: 06,
            close: 20,
            hourlySales: [],
            totalPerDay: 0,
            hourOpen: ['6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
            // [i] = cookiesPerPerson * number
            sales: function() {
                for (var i = 0; i < this.hourOpen.length; i++) {
                    var num = random(this.minguest, this.maxguest);
                    this.hourlySales.push(num);
                } // https://medium.com/@chrisburgin95/rewriting-javascript-sum-an-array-dbf838996ed0
                for (var i = 0; i < this.hourlySales.length; i++) {
                    this.totalPerDay += Math.floor((this.hourlySales[i]) * this.cookiesPerPerson)
                    console.log(this.totalPerDay + 'total')
                }
                console.log(this.totalPerDay);
            },

            render: function() {
                this.sales();
                var storeData = document.getElementById('storeData');
                var storeName = document.createElement('h3');
                storeName.textContent = this.name;
                storeData.appendChild(storeName);
                var ulElement = document.createElement('ul');
                for (var i = 0; i < this.hourOpen.length; i++) {
                    var listEliment = document.createElement('li');
                    listEliment.textContent = `${this.hourOpen[i]} : ${this.hourlySales[i]}`;
                    ulElement.appendChild(listEliment);
                }
                listElement = document.createElement('li');
                listEliment.textContent = `total: ${this.totalPerDay}`;
                ulElement.appendChild(listEliment);
                storeData.appendChild(ulElement);

            }

        }
        lima.render();