import model from "../model/model.js";


function hashchange() {
        let hash= location.hash;
        console.log(hash)
        let pageName=hash.replace("#","");
        model.loadPageContent(pageName);
        // let contentName = pageName + "Content";
        // model.loadPageContent(contentName);
    }


function initlisteners (){
    $(window).on("hashchange", hashchange)
}






function initApp (){
    initlisteners();
}

$(document).ready(function(){
    // model.loadPageContent("home");
    hashchange()
    initApp();
})