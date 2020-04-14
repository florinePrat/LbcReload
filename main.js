var tampon = localStorage.getItem('tampon');
$(document).ready(function () {
    console.log(tampon);
    function getAdInformations (){
        // get title
        let title = $(".dgtty");
        console.log("title: ",title[0].textContent);
// get price
        let price = $("._386c2");
        console.log("price: ",price[0].textContent);
// get description
        let description = $(".content-CxPmi");
        console.log("description: ",description.text());

// get criteria
        let nbCriteria = $("._277XW").children().length;

        var criterias = [{'names': '', 'value' : ''}];

        for (let i=0; i<nbCriteria -1; i++){
            criterias.push({'names': '', 'value' : ''});
        }


        let allCriterias = $("._277XW").children();


        for (let i=0; i<nbCriteria; i++){
            criterias[i].names = allCriterias[i].innerText.split('\n')[0].toString();
            criterias[i].value = allCriterias[i].innerText.split('\n')[1].toString();
        }
        console.log('criterias: ', criterias);

// get pictures
        let divPicture = $("._3rUFH").children().children().children();
        console.log("pictures: ",divPicture);
    }


    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }


// delete add
    async function deleteAd(){
        await sleep(3000);
        $("._2_Cd_")[2].click()
    }


    if (!tampon){
        getAdInformations();
        deleteAd().then(r => console.log("ad clicked deleted"));
        tampon = true;
    }else{
        console.log("cooucou");
        console.log(window.location);
        console.log($(".select"));
    }
    console.log("cooucou");
    console.log(window.location);
    console.log($(".select"));

});




