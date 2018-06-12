document.querySelector('main').addEventListener('click', function(el) {
    if(el.target.classList.contains('pkm-container')) {
        let name = el.target.querySelector('h2').innerHTML;
        let xhttp;
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if(this.readyState == 4 && this.status == 200) {
                const main = document.querySelector('main');
                const divs = document.querySelectorAll('div');
                const response = JSON.parse(this.responseText);

                for(let i = 0; i < divs.length; i++) {
                    divs[i].remove();
                }

                let renderDiv = document.createElement('div');
                renderDiv.classList.add('pkm-container');
                renderDiv.classList.add('solo');

                let name = document.createElement('h2');
                name.innerHTML = response.name;
                renderDiv.appendChild(name);

                let power = document.createElement('p');
                power.innerHTML = response.power;
                renderDiv.appendChild(power);

                let level = document.createElement('p');
                level.innerHTML = response.level;
                renderDiv.appendChild(level);

                main.appendChild(renderDiv);
            }
        }
        xhttp.open("GET", '/pokemon/' + name, true);
        xhttp.send();
    }
});

document.querySelector('[data-action="home"]').addEventListener('click', function() {
    let xhttp;

    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {

        if(this.readyState == 4 && this.status == 200 || this.readyState == 4 && this.status == 304) {
            const main = document.querySelector('main');
            const divs = document.querySelectorAll('div');
            const pokemons = JSON.parse(this.responseText);

            for(var i = 0; i < divs.length; i++) {
                divs[i].remove();
            }

            for(var i = 0; pokemons.pokemons.length; i++) {
                let renderDiv = document.createElement('div');
                renderDiv.classList.add('pkm-container');

                let name = document.createElement('h2');
                name.innerHTML = pokemons.pokemons[i].name;
                renderDiv.appendChild(name);

                let power = document.createElement('p');
                power.innerHTML = pokemons.pokemons[i].power;
                renderDiv.appendChild(power);

                let level = document.createElement('p');
                level.innerHTML = pokemons.pokemons[i].level;
                renderDiv.appendChild(level);

                main.appendChild(renderDiv);
            }
        }
    }

    xhttp.open("GET", '/pokemons', true);
    xhttp.send();
});
