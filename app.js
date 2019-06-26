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
            res.render("home.ejs",{getnews:getnews});
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
            res.render("home.ejs",{getnews:getnews});
        }
    })
})




app.listen(process.env.PORT,process.env.IP,function()
{
    console.log("Server has Started");
})