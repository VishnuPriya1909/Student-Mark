var express=require('express');
const { config } = require('../model/database');
const router=express.Router();
 const connection=require('../model/database');


   router.get('/student',function(req,res)
   {
          console.log("Hello");
    // res.sendFile(__dirname+'/views/webpage.html');
    res.render("webpage",{er:' '});
    });
    router.post('/validate',function(req,res)
     {
       var email=req.body.Email;
       var pwd=req.body.Password;
      connection.query('select user_email from student_details where  user_email like ? ',[email],(err,results)=>
      {
        console.log(results);
        //  if(err) throw err;
          if(results)
          {
            
            connection.query('select User_password from student_details where user_email like ? and User_password like ? ',[email,pwd],(error,ans)=>
            {
                // if(error) throw error;
               if(ans.length!=0)
               {
                  console.log("Valid data ");
                    //   res.send(`<h2>Successful Login</h2><h3>User name: ${email} , Password: ${pwd}</h3>`);
                   connection.query('select student_scoresheet.*,student_details.Gender from student_scoresheet join student_details on student_scoresheet.rollno=student_details.rollno where student_details.user_email = ? ',[email],(err,result)=>
                    {
                        if(err) throw err;
                        if(result)
                        {
                           res.render("mark_sheet",{userdata: result});
                            //    console.log(result);
                        }
                    });  
                  }
                  else
                 {
          console.log("Invalid data");
          // res.send("<h2 style='color:green;text-align:center'>Invalid Data</h2> <h2 style='color:violet;text-align:center'>Signup to continue</h2>");
          res.render("webpage",{er:'Email is not available'});   
        }
             })
         }
      })
       })
      router.get('/signup',function(req,res)
       {
           console.log("welcome");
        // res.sendFile(__dirname+'/views/webpage_signup.html');
        res.render("webpage_signup");
       }
       )
       router.use('/signupValidate',function(req,res)
       {
           console.log('Data is validated');
             var username=req.body.Name1;
             var email=req.body.Email1;
             var roll=req.body.Roll_No1;
             var pwd=req.body.Password1;
             var gender=req.body.gender;
             var birth=req.body.Birth;
         connection.query('insert into student_details values(?,?,?,?,?,?)',[username,email,roll,pwd,gender,birth],(err,results)=>
        {
            // if(err) throw err;
         if(results)
        {
            console.log("values inserted");
            res.render("webpage",{er:' '});

        }
    })
   
})
router.get('/admin',function (req,res)
{
  // console.log("admin page");
     res.render("adminpage");
});
router.get('/adminlogin',function(req,res)
{
  console.log("admin login");
  res.render("admin_login",{e:' '});
})
router.post('/authenticate',function(req,res)
     {
        var em=req.body.Email;
        var pwd=req.body.Password;
          console.log(em);
       connection.query('select Email from admin_details where Email like ? ',[em],(err,results)=>
       {
         if (err) throw err;
         console.log(results);
           if(results.length>0)
           {

                 if(pwd=="123")
                  {
                    // console.log(results);
                       connection.query('select * from datevalue',(err,result)=>
                        {
                          if(result)
                           { 
                             res.render("Mark_Update",{user:result});
                           }
                        });
                  }
                     else
                     {
                      console.log("Invalid data");
                      res.render("admin_login",{e:'Email is not available'});
                     }
            }
            else
            {
             console.log("Invalid data");
             res.render("admin_login",{e:'Email is not available'});
            }
            
              })  
         });  
        router.use('/mark',function(req,res)
        { 
              var username=req.body.Name;
              var email=req.body.Email;
              var roll=req.body.rollno;
              var dep=req.body.Dep;
               var mark1=req.body.mark1;
               var mark2=req.body.mark2;
               var mark3=req.body.mark3;
               var da=req.body.day;
               var mo=req.body.mon;
               var year=req.body.yr;
               var date=year+"-"+mo+"-"+da; 
              console.log(date);
          connection.query('insert into student_scoresheet values(?,?,?,?,?,?,?,?)',[email,roll,date,mark1,mark2,mark3,username,dep],(err,results)=>
         {
             if(err) throw err;

           if(results)
          {
             res.render("admin_login",{e:'Marks upload Successfully'});
          }
      })    
 })
router.use(function(req,res)
{
    // res.sendFile(__dirname+'/views/404page.html');
    res.render("404page",{urls:req.headers.host+req.url});
});
               
module.exports=router;