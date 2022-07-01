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

exports.updateMovie = async (amendTitle,previousTitle) => {
    try {
      const response = await Movie.update(amendTitle,previousTitle);
    } catch (error) {
      console.log(error);
    }  
};

exports.deleteMovie = async (getRid) => {
  try {
    await Movie.delete(getRid);
    console.log("Movie removed");
  } catch (error) {
    console.log(error);
  }
};