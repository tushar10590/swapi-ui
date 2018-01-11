
export  function fetchPlanetData(){
    return new Promise((resolve,reject)=>{
        var planetsDetail = []
        var planetLink = 'https://swapi.co/api/planets/'
        fetch(planetLink)
        .then((data)=>{
            data.json().then((row)=>{
                              
                 for(var c=1; c<=row.count;c++)
                {
                    fetch(`https://swapi.co/api/planets/${c}/`)
                        .then((planet)=>{
                            planet.json().then((p)=>{
                                
                                
                                planetsDetail.push( { 'population':p.population,'url':p.url,'name':p.name })
                                
                            })
                        })
                       
                }
               
                resolve(planetsDetail)
            })
        })
        .catch((err)=>{
            
            reject(err)
        })

    })
}

export  function fetchPersonsData(){

    return new Promise((resolve, reject)=>{
        var users = {}
        fetch('https://swapi.co/api/people/').then((data)=>{

            data.json().then((dat)=>{
                
                for(let c =1; c<=dat.count; c++){
                        fetch(`https://swapi.co/api/people/${c}/`)
                        .then((user)=>{
                            user.json().then((u)=>{
                               
                                users[u.name] = u.birth_year
                            })
                        })
                        .catch(()=>{
                           
                        })
                        
                }
                resolve(users)
                
            })
        })
        .catch((err)=>{
            
            resolve(err)
        })

    })

    
}

export function getPlanetDetail(url){
    return new Promise((resolve, reject)=>{
        fetch(url).then((data)=>{
            data.json().then((planetDetail)=>{
                
                resolve(planetDetail)
            })
        })
        .catch((err)=>{
            reject(err);
        })
    })
}