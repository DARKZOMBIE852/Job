const marvel={
    render:()=>{
        const urlAPI ='https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=6630e1fbef63ae483e3bb0f65c1d4e34&hash=5d5500fa3ca486790bf8429776a05b98';
        const container=document.querySelector('#marvel-row');
        let contentHTML='';
        fetch(urlAPI)
        .then(res=>res.json())
        .then((json)=>{
            for(const hero of json.data.results){
                let urlHero = hero.urls[0].url;
                contentHTML+=`
                <div class="col-md-4">
                <a href="${urlHero}" target="_blank">
                    <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}" class="img-thumbnail">
                </a>
                <h1 class="title">${hero.name}</h1>
                </div>`;
            }
            container.innerHTML=contentHTML;
        })
    }
}
marvel.render();