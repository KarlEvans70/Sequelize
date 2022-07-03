const Movie = require("./table");

exports.addMovie = async (movieObj) => {
  try {
    const response = await Movie.create(movieObj);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

exports.listMovie = async () => {
  try {
    const response = await Movie.findAll();
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

exports.updateMovie = async (title, newActor) => {
    try {
      const response = await Movie.update({actor: newActor}, {
        where: {
          title  
        }
      })
      console.log(`${title} actor changed to ${newActor}`)
        } catch (error) {
      console.log(error);
    }  
};

exports.deleteMovie = async (title) => {
  try {
    await Movie.destroy({
        where: {
            title 
        }});
   console.log("Movie removed");    
     } catch (error) {
    console.log(error);
}};
