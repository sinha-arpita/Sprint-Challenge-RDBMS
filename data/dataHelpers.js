const knex =require("knex")
const dbConfig= require("../knexfile")
const db = knex(dbConfig.development);

module.exports ={

    getProjects:()=>{
        console.log("Getting projects")
        return db('projects')
    },
    

    addProject:(project)=>{
      return db('projects')
      .insert(project)
      .then(id =>{
          return id[0];
      });

    },

    getActions:()=>{
        return db("actions")
    },

    getActionByID:(id)=>{
        return db('actions')
        .where({id})
        .first()//return the first matching

    },

    getActionByProjectID:(id)=>{
        return db('actions').where("project_id", id)
    },


     addAction:(action)=>{
         return db('actions')
         .insert(action)
         .then(id =>{
             return id[0];
         })
     },
    
    getProject:(id)=>{
       console.log("Get project ", id) 
       return db.select("projects.id","project_name","project_description","project_completed").from("projects").
         where("projects.id", id);
       

    },
    getProjectWithAction:(id)=>{
      console.log("With actions",id)
      return db.select("projects.id","project_name","project_description","project_completed")
      .from("projects").where("id",id)
    },

    updateProject:(id,changes)=>{
        return db('projects')
        .where({id})
        .update(changes)
    },
    updateAction:(id,changes)=>{
        return db('actions')
        .where({id})
        .update(changes)
    },
    deleteProject:(id)=>{
        return db('projects')
        .where("id",id)
        .del()
    },
    deleteAction:(id)=>{
        return db('actions')
        .where("id",id)
        .del()
    }
   
}

