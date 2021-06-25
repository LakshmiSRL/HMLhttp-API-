var request= new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload=function()
{
    var data =JSON.parse(this.response);
    console.log(data);
    
    var countries =data.filter(function foo(element){
        return  element.region==="Asia";
   });

   console.log(countries);


   var population =data.filter(function foo(element){
        return element.population<200000
   });

   console.log(population);
   

  data.forEach(element=> {
    console.log(element.name+""+element.capital+""+element.flag); 
  })

  
    var res =data.reduce(function foo(accumulator,element){
    return accumulator+element.population;
    },0);

    console.log(res);
}  

     



