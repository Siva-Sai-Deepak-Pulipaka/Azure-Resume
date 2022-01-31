window.addEventListener('DOMContentLoaded',(event)=> {
    getVisitCount();
})
const functionApiUrl='https://getresumecounter555.azurewebsites.net/api/GetResumeCounter?code=Ds/eZVNUAB/CivFklO0WXdzvJBvirgkOMUoEn1rjXXsgfgpbW5N8xw==';
const localFunctionApi= 'http://localhost:7071/api/GetResumeCounter';
const getVisitCount = () => {
    let count = 30;
    fetch(functionApi).then(response =>{
        return response.json()
    }).then(response => {
        console.log("function API");
        count=response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}