function songDecoder(song){
  // ...
    countOfWubApperance = (song.match(/WUB/g,) || []).length;
      console.log(countOfWubApperance);
        
	  if(countOfWubApperance => 1 && song.length > 3)
	    {
	         originalSong = song.replace(/WUB/g, ' ');
		      //originalSong = song.replace(/  +/g, ' ' );
		           return originalSong.trim();
			     }
			       /*else if (song.length <= 3)
			         {
				      song.trim();
				           return song;
					     }*/
					       /*else if(countOfWubApperance > 1)
					         {
						      originalSong= song.replace(/WUB/, ' ');
						           return originalSong;
							     }*/
							     }
