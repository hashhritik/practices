function getAPIData(){
    var request = new XMLHttpRequest()
    var name ="India"
    var input=document.getElementById("cname")
    if(input.value)
        name=input.value
    request.open("get","https://restcountries.com/v3.1/name/"+name)

    request.send()
    request.addEventListener("load",()=>{
        // console.log(request.responseText); //json format
        console.log(JSON.parse(request.responseText)); //js format
        
        var data =JSON.parse(request.responseText)
        data=data[0]
        // console.log(data.name.official);
        document.getElementById("name").innerHTML=data.name.official
        document.getElementById("capital").innerHTML=data.capital
        document.getElementById("flags").src=data.flags.svg
        document.getElementById("population").innerHTML=data.population
        document.getElementById("area").innerHTML=data.area
        document.getElementById("region").innerHTML=data.region
        document.getElementById("subregion").innerHTML=data.subregion
        document.getElementById("continents").innerHTML=data.continents
        document.getElementById("border").innerHTML=data.borders
        document.getElementById("timezones").innerHTML=data.timezones
        document.getElementById("independent").innerHTML=data.independent
        document.getElementById("unMember").innerHTML=data.unMember
        document.getElementById("landlocked").innerHTML=data.landlocked
        document.getElementById("maps").href =data.maps.googleMaps
        
    })
}
getAPIData()