const express =require('express')
const server= express();
server.use(express.json()) ;
const db = require("./data/dataHelpers");
//*********************************************
//              *********   MVP  ***********
//*************  POST for adding projects.*****************/
server.post("/api/projects",async(req,res)=>{
   try{
      const newProject=req.body;
      console.log("Adding project", newProject)
      const id= await db.addProject(newProject)
      if(id>0){
        res.status(200).json({message:"new project added successfully"})

      }else{
         res.status(400).json({message:" id  is not there"})
      }
     
   }
   catch(error){
     res.status(500).json({message:error})
   }

});
//************POST for adding actions.********************** */
server.post("/api/actions",async(req,res)=>{
   console.log("Add action...")
   try{
       const newAction =req.body;
       console.log("Adding Action", newAction)
       const id=await db.addAction(newAction)
       if(id>0){
         res.status(200).json({message:"new action added"})

       }else{
        res.status(400).json({message:"can't get the id"})

       }
  } catch(error){
     res.status(500).json({message:error})
  }    
});
///***********GET for retrieving a project by its id that returns an object with all actions********** */
server.get("/api/projects/:id",async(req,res)=>{
   try{
      console.log("Get project ",req.params.id)
      const projects= await db.getProjectWithAction(req.params.id)
      const actions= await db.getActionByProjectID(req.params.id)
      
      console.log("Got project ",projects)
      if(projects.length > 0){
        const  project = projects[0]
        project.actions = actions;
        res.status(200).json(project)
      }else{
         res.status(400).json({message:"Project not found"})
      }
   }
   catch(error){
     res.status(500).json({message:"can't get the project "})
   }
  
  
  })
  
//********STRETCH CDRUD *************************************
server.get("/api/projects", async(req,res)=>{
   try{
      const projects =  await db.getProjects()
      console.log("Got projects as ", projects)
      res.status(200).json(projects)

   }    
   catch(error){
      res.status(500).json({message:"can't get the projects"})
   }

});


server.get("/api/actions",async(req,res)=>{
       try{
           const actions = await db.getActions()
           res.status(200).json({message:actions})
       }
       catch(error){
         res.status(500).json({message:error})

       }
});
server.put("/api/projects/:id",async(req,res)=>{
    try{
       console.log("Updating",req.params.id,req.body)
       const result =await db.updateProject(req.params.id,req.body)
       if(result>0){
          res.status(200).json(result)

       }else{
         res.status(400).json({message:"Project not found"}) 
       }
    }
    catch(error){
      res.status(500).json({message:error})
    }

})

server.put("/api/actions/:id",async(req,res)=>{
   try{
      console.log("Updating",req.params.id,req.body)
      const result =await db.updateAction(req.params.id,req.body)
      console.log(result);

      if(result>0){
         res.status(200).json(result)

      }else{
        res.status(400).json({message:"No rows updated"}) 
      }
   }
   catch(error){
     res.status(500).json({message:error})
   }

})

server.delete("/api/projects/:id",async(req,res)=>{
   try{
      console.log("deleting",req.params.id)
      const id =await db.deleteProject(req.params.id)
      if(id>0){
         res.status(200).json(id)

      }else{
        res.status(400).json({message:"Project not found"}) 
      }
   }
   catch(error){
     res.status(500).json({message:error})
   }

})

server.delete("/api/actions/:id",async(req,res)=>{
   try{
      console.log("deleting",req.params.id)
      const id =await db.deleteAction(req.params.id)
      if(id>0){
         res.status(200).json(id)
      }else{
        res.status(400).json({message:"No action deleted"}) 
      }
   }
   catch(error){
     res.status(500).json({message:error})
   }

})



const port= 8080;
server.listen(port, () => {
   console.log(`server is listening at the port:${port}`);
 });
