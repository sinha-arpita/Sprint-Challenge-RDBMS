// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/myprojects.sqlite3'
    },
  useNullAsDefault:true,
  },
  migration:{
         directory:"./migration"
  },
  seeds:{
    directory:"./seeds"


  }
};
