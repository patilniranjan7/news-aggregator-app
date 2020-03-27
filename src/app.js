
$(document).ready(function(){

    let url = "http://newsapi.org/v2/everything?q=bitcoin&from=2020-02-27&sortBy=publishedAt&apiKey=51b087659f6443508d667a6e7182f093"

    $.ajax({
        url:url,
        method:"GET",
        datatype:"Json",

        beforeSent:function()
        {
            $("#loader").show();
        },

        complete:function()
        {
            $("#loader").hide();
        },
        success:function(news){
            let output= "<br>";
            let latestNews = news.articles;
          //  console.log(latestNews[0].title);
            for(var i in latestNews){
                output +=`<div class="col l3  m6 s20">
                            <div class="card medium hoverable">
                            <a href="${latestNews[i].url}" class="article-link">
                                <div class="card-content">
                                        <div class="card-image">
                                            <img src="${latestNews[i].urlToImage}" alt="img" class="responsive-img">
                                        </div>
                                        <img class="article-img">
                                        <h2 class="article-title">
                                        <h6 class="article-title" style="color: black !important;" ><b>${latestNews[i].title}</b></h6>
                                        <p class="article-description" style="color: black !important;">${latestNews[i].description}--<span class="article-author" style="color: slateblue;">${latestNews[i].author}</span> </p>
                                </div>
                            </a>
              </div>
                               
                  </div>`;
            }
          // document.getElementById("")
            if(output !== ""){
                $("#newsResults").html(output);
            }

        },
        error:function(){
            $("#newsResults").html("some error occured");
        }
    });

    
    //let srch = $("#search").val();
    $("#search").on("keyup",function(e){
        if (event.keyCode === 13){
            console.log("click");
            let output= "";
             e.preventDefault();
             let srch = $("#search").val();
             let url = "http://newsapi.org/v2/everything?q="+srch+"&sortBy=publishedAt&apiKey=51b087659f6443508d667a6e7182f093";
             if( srch !== ""){ 
             $.ajax({
                       url:url,
                       method:"GET",
                       datatype:"json",  
                       beforeSent:function()
                       {
                           $("#loader").show();
                       },
               
                       complete:function()
                       {
                           $("#loader").hide();
                       },
                       success:function(news){
                                    let latestNews = news.articles;
                                      for(var i in latestNews){
                                        output +=`<div class="col l3  m6 s20">
                            
                                                  <div class="card medium hoverable">
                                                  <a href="${latestNews[i].url}" class="article-link">
                                                        <div class="card-content">
                                                                <div class="card-image">
                                                                    <img src="${latestNews[i].urlToImage}" alt="img" class="responsive-img">
                                                                </div>
                                                                <img class="article-img">
                                                                <h2 class="article-title">
                                                                <h6 class="article-title" style="color: black !important;" ><b>${latestNews[i].title}</b></h6>
                                                                <p class="article-description" style="color: black !important;">${latestNews[i].description}--<span class="article-author" style="color: slateblue;">${latestNews[i].author}</span> </p>
                                                        </div>
                                                    </a>
                                                </div>
                                                       
                                          </div>`;
                                    }
                             
                                    if(output !== ""){
                                        $("#newsResults").html(output);
                                    }
                                    else{
                                        output="No article was found based on the search.";
                                        $("#newsResults").html(output);
                                    }
                       }

               });

            }
                 else{
                console.log("please enter something");
               }
            }   
     });
});   