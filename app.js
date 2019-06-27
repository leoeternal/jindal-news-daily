var express=require("express");
var request=require("request");
var bodyParser=require("body-parser");

var app=express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req, res) {
    res.redirect("/in");
})


app.get("/in",function(req,res)
{
    var url="https://newsapi.org/v2/top-headlines?country=in&apiKey=4e54e27fba6a485197eca60dab5b9df8&pageSize=50";
    request({url:url,json:true},function(err,getnews)
    {
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.render("india.ejs",{getnews:getnews});
        }
    })
});

app.get("/:id",function(req,res)
{
    var id=req.params.id;
    var url="https://newsapi.org/v2/top-headlines?country="+id+"&apiKey=4e54e27fba6a485197eca60dab5b9df8&language=en"
    request({url:url,json:true},function(err, getnews) {
        if(err)
        {
            console.log(err);
        }
        else
        {
            if(id=="ar")
            {
            res.render("argentina.ejs",{getnews:getnews});    
            }
            else if(id=="in")
            {
                res.render("home.ejs",{getnews:getnews});
            }
            else if(id=="au")
            {
                res.render("australia.ejs",{getnews:getnews});
            }
            else if(id=="br")
            {
                res.render("brazil.ejs",{getnews:getnews});
            }
            else if(id=="bg")
            {
                res.render("bulgaria.ejs",{getnews:getnews});
            }
            else if(id=="de")
            {
                res.render("germany.ejs",{getnews:getnews});
            }
            else if(id=="gr")
            {
                res.render("greece.ejs",{getnews:getnews});
            }
            else if(id=="id")
            {
                res.render("indonesia.ejs",{getnews:getnews});
            }
            else if(id=="ie")
            {
                res.render("ireland.ejs",{getnews:getnews});
            }
            else if(id=="il")
            {
                res.render("isarel.ejs",{getnews:getnews});
            }
            else if(id=="mx")
            {
                res.render("mexico.ejs",{getnews:getnews});
            }
            else if(id=="nz")
            {
                res.render("newzeland.ejs",{getnews:getnews});
            }
            else if(id=="ng")
            {
                res.render("nigeria.ejs",{getnews:getnews});
            }
            else if(id=="ru")
            {
                res.render("russia.ejs",{getnews:getnews});
            }
        }
    })
});
app.get("/food/item",function(req,res)
{
    var url="https://newsapi.org/v2/everything?q=food&apiKey=4e54e27fba6a485197eca60dab5b9df8&pageSize=10";
    request({url:url,json:true},function(err,getnews)
    {
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.render("food.ejs",{getnews:getnews});
        }
    })
});


app.post("/food/item/dish",function(req, res) {
    var dish=req.body.dish;
    var url="https://api.edamam.com/search?q="+dish+"&app_id=1b911604&app_key=5fea85508aacb14effbd5f75818bc9a5";
    request({url:url,json:true},function(err, getdish) {
        if(err)
        {
            console.log(err);
        }
        else if(getdish.body.hits.length==0)
        {
            res.render("error.ejs");
        }
        else
        {
            res.render("fooddish.ejs",{getdish:getdish,dish:dish});
        }
    })
})


app.get("/weather/:id",function(req, res) {
    var location=req.params.id;
    var geocodeURL="https://api.mapbox.com/geocoding/v5/mapbox.places/"+encodeURIComponent(location)+".json?access_token=pk.eyJ1IjoibGVvbWVzc2kxMjMiLCJhIjoiY2p4M2V4b2FsMGJjaDN5b2EyaW9ndHFzNCJ9.ELBMrXNLxiI5Pn758e6vEg";
    request({url:geocodeURL,json:true},function(err, latlon) {
        if(err)
    
        {
            console.log(err);
        }
        else
        {
            var latitude=latlon.body.features[0].center[1];
            var longitude=latlon.body.features[0].center[0];
            var placename=latlon.body.features[0].place_name;
            var url="https://api.darksky.net/forecast/21c183c6a34c91a6384a579f8e203ab7/"+latitude+","+longitude+"?units=si"
            request({url:url,json:true},function(err, getweather) {
                if(err)
                {
                    console.log(err);
                }
                else
                {
                 
                    res.render("weather.ejs",{getweather:getweather,placename:placename});
                    
                }
            })
        }
    })
})

app.get("/:id/:id2",function(req, res) {
    var id=req.params.id;
    var category=req.params.id2;
    var url="https://newsapi.org/v2/top-headlines?country="+id+"&apiKey=4e54e27fba6a485197eca60dab5b9df8&language=en&category="+category;
    request({url:url,json:true},function(err, getnews) {
        if(err)
        {
            console.log(err);
        }
        else
        {
           if(id=="ar")
            {
            res.render("argentina.ejs",{getnews:getnews});    
            }
            else if(id=="in")
            {
                res.render("india.ejs",{getnews:getnews});
            }
            else if(id=="au")
            {
                res.render("australia.ejs",{getnews:getnews});
            }
            else if(id=="br")
            {
                res.render("brazil.ejs",{getnews:getnews});
            }
            else if(id=="bg")
            {
                res.render("bulgaria.ejs",{getnews:getnews});
            }
            else if(id=="de")
            {
                res.render("germany.ejs",{getnews:getnews});
            }
            else if(id=="gr")
            {
                res.render("greece.ejs",{getnews:getnews});
            }
            else if(id=="id")
            {
                res.render("indonesia.ejs",{getnews:getnews});
            }
            else if(id=="ie")
            {
                res.render("ireland.ejs",{getnews:getnews});
            }
            else if(id=="il")
            {
                res.render("isarel.ejs",{getnews:getnews});
            }
            else if(id=="mx")
            {
                res.render("mexico.ejs",{getnews:getnews});
            }
            else if(id=="nz")
            {
                res.render("newzeland.ejs",{getnews:getnews});
            }
            else if(id=="ng")
            {
                res.render("nigeria.ejs",{getnews:getnews});
            }
            else if(id=="ru")
            {
                res.render("russia.ejs",{getnews:getnews});
            }
        }
    })
})







app.post("/search",function(req, res) {
    var search=req.body.q;
    var url="https://newsapi.org/v2/everything?q="+search+"&apiKey=4e54e27fba6a485197eca60dab5b9df8&language=en&pageSize=50"
    request({url:url,json:true},function(err, getnews) {
        if(err)
        {
            console.log(err);
        }
        else if(getnews.body.articles.length==0)
        {
            res.render("error.ejs");
        }
        else
        {
            res.render("home.ejs",{getnews:getnews,search:search});
        }
    })
})

app.post("/weatherany/location",function(req,res)
{
       var location=req.body.search;
    var geocodeURL="https://api.mapbox.com/geocoding/v5/mapbox.places/"+encodeURIComponent(location)+".json?access_token=pk.eyJ1IjoibGVvbWVzc2kxMjMiLCJhIjoiY2p4M2V4b2FsMGJjaDN5b2EyaW9ndHFzNCJ9.ELBMrXNLxiI5Pn758e6vEg";
    request({url:geocodeURL,json:true},function(err, latlon) {
        if(err)
        {
            console.log(err);
        }
        else if(latlon.body.features.length==0)
        {
            res.render("error.ejs");
        }
        else
        {
            var latitude=latlon.body.features[0].center[1];
            var longitude=latlon.body.features[0].center[0];
            var placename=latlon.body.features[0].place_name;
            var url="https://api.darksky.net/forecast/21c183c6a34c91a6384a579f8e203ab7/"+latitude+","+longitude+"?units=si"
            request({url:url,json:true},function(err, getweather) {
                if(err)
                {
                    console.log(err);
                }
                else
                {
                    res.render("weather.ejs",{getweather:getweather,placename:placename});
                    
                }
            })
        }
    })
})

app.get("/food",function(req, res) {
    var url="https://newsapi.org/v2/everything?q=food&apiKey=4e54e27fba6a485197eca60dab5b9df8&language=en&pageSize=20";
    request({url:url,json:true},function(err, getnews) {
        if(err)
        {
            console.log(err);
        }
        else
        {
            console.log(getnews.body.articles[0].author);
            res.render("food.ejs",{getnews:getnews});
        }
    })
})

app.listen(process.env.PORT,process.env.IP,function()
{
    console.log("Server has Started");
})