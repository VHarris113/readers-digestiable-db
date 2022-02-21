const Book = require("./Book");
const Author = require("./Author");
const Genre = require("./Genre");

// Books have many Authors
Book.belongsTo(Author, {
    foreignKey: "author_id",
    onDelete: "CASCADE",
});

Book.hasMany(Author, {
    foreignKey: "author_id",
    onDelete: "CASCADE",
});

// Books have many Genres
Book.hasMany(Genre, {
    
})
// Genre has many Books
// Author has many Books