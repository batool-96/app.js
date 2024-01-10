class Artist {
    constructor(id, name, genre, bio) {
       this.id = id;
       this.name = name;
       this.genre = genre;
       this.bio = bio;
    }
   
    showInfo() {
       console.log(`ID: ${this.id}, Name: ${this.name}, Genre: ${this.genre.name}, Bio: ${this.bio}`);
    }
   }

   class Genre {
    constructor(id, name) {
       this.id = id;
       this.name = name;
    }
   
    showInfo() {
       console.log(`ID: ${this.id}, Name: ${this.name}`);
    }
   }
   class Album {
    constructor(id, title, artist, genre, songs) {
       this.id = id;
       this.title = title;
       this.artist = artist;
       this.genre = genre;
       this.songs = songs;
    }
   
    showInfo() {
       console.log(`ID: ${this.id}, Title: ${this.title}, Artist: ${this.artist.name}, Genre: ${this.genre.name}`);
       console.log("Songs:");
       this.songs.forEach(song => song.showInfo());
    }
   
    addSong(song) {
       this.songs.push(song);
    }
   }
   class Song {
    constructor(id, title, playcount) {
       this.id = id;
       this.title = title;
       this.playcount = playcount;
    }
   
    play() {
       this.playcount++;
    }
   
    getPlayCount() {
       return this.playcount;
    }
   
    showInfo() {
       console.log(`ID: ${this.id}, Title: ${this.title}, Play Count: ${this.playcount}`);
    }
   }
   class RecordLabel {
    constructor(id, name, headOfficeAddress, albums) {
       this.id = id;
       this.name = name;
       this.headOfficeAddress = headOfficeAddress;
       this.albums = albums;
    }
   
    showInfo() {
       console.log(`ID: ${this.id}, Name: ${this.name}, Head Office Address: ${this.headOfficeAddress}`);
       console.log("Albums:");
       this.albums.forEach(album => album.showInfo());
    }
   }
   class User {
    constructor(id, name, playedSongs) {
       this.id = id;
       this.name = name;
       this.playedSongs = playedSongs;
    }
   
    playSong(song) {
       this.playedSongs.push(song);
       song.play();
    }
   
    showInfo() {
       console.log(`ID: ${this.id}, Name: ${this.name}`);
    }
   
    showPlayedSongs() {
       console.log("Played Songs:");
       this.playedSongs.forEach(song => song.showInfo());
    }
   }
   // app.js
const genre1 = new Genre(1, "Jazz");
const genre2 = new Genre(2, "Pop ");

const artist1 = new Artist(1, "Adel", genre1, "Jazz");
const artist2 = new Artist(2, "Dua lipa", genre2, " pop ");

const song1 = new Song(1, "Someone Like You");
const song2 = new Song(2, "Hello");
const song3 = new Song(3, "Set Fire To The Rain");

const album1 = new Album(1, "21", artist1, genre1);
album1.addSong(song1);
album1.addSong(song3);

const album2 = new Album(2, "25", artist2, genre2);
album2.addSong(song2);

const recordLabel = new RecordLabel(1, " Columbia Records", "XL Recordings");
recordLabel.albums.push(album1);
recordLabel.albums.push(album2);

const user1 = new User(1, " D");
user1.playSong(song1);
user1.playSong(song3);



// Display information
genre1.displayInfo();
console.log("\n");
genre2.displayInfo();
console.log("\n");
artist1.displayInfo();
console.log("\n");
artist2.displayInfo();
console.log("\n");
album1.displayInfo();
console.log("\n");
album2.displayInfo();
console.log("\n");
recordLabel.displayInfo();
console.log("\n");
user1.displayInfo();
