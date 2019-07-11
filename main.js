function songDecoder(song){
  // ...
    countOfWubApperance = (song.match(/WUB/g,) || []).length;
      
        if(countOfWubApperance => 1 && song.length > 3)
	  {
	       originalSong = song.replace(/WUB/g, ' ');
	            originalSong = originalSong.replace(/\s\s+/g, ' ');
		         return originalSong.trim();
			   }
			   }
