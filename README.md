#this is crud based api 

#i followed extended MVC pattern with my customized error handling  classes;
#used library such as winston , dotenv,nodemon,bodyparser,http-stats-codes


 #api routes as follows 


/api/v1/problems/:id   ===> for add problem   (post)
/api/v1/problems/      ===>get all problem  (get)
/api/v1/problems.:id    ===>get problrm by id  (get)
/api/v1/problems/:id    ====> delete all problem  (delete)
/api/v1/problems/:id     ====>update problem   (put)



response will be in json only



ping controllers is for testing purpose only;