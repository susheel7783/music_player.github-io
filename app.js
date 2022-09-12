

const music = new Audio('audio/1.mp3');
  // music.play();



let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];

pop_song_right.addEventListener('click', () => {
	pop_song.scrollLeft +=330;
});
pop_song_left.addEventListener('click', () => {
	pop_song.scrollLeft -=330;
});


let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let item = document.getElementsByClassName('item')[0];


pop_art_right.addEventListener('click', ()=>{
	item.scrollLeft +=330;
});
pop_art_left.addEventListener('click', ()=>{
	item.scrollLeft -=330;
});






let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');

masterPlay.addEventListener('click', ()=>{
	if(music.paused || music.currentTime <= 0){
		music.play();
		wave.classList.add('active1');
		masterPlay.classList.remove('fa-play');
		masterPlay.classList.add('fa-pause');
	}
	else{
music.pause();
wave.classList.remove('active1');
masterPlay.classList.add('fa-play');
masterPlay.classList.remove('fa-pause');
	}
});





const makeAllPlays = () => {
	Array.from(document.getElementsByClassName('playListPlay')).forEach((el) => {
		el.classList.add('fa-circle-play');
        el.classList.remove('fa-circle-pause');
	});
}

const makeAllBackground = () => {
	Array.from(document.getElementsByClassName('songItem')).forEach((el) => {
		el.style.background = 'rgb(105, 105, 105, .0)';
	})
}







// for seek time
let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let play_dot = document.getElementById('play_dot');


music.addEventListener('timeupdate', () => {
	let music_curr = music.currentTime;
	let music_dur = music.duration;
	// console.log(music_dur);



let min1 = Math.floor(music_dur / 60);
let sec1 = Math.floor(music_dur % 60);

if(sec1 < 10){
	sec1 = `0${sec1}`;
}

currentEnd.innerText = `${min1}:${sec1}`;

let min2 = Math.floor(music_curr / 60);
let sec2 = Math.floor(music_curr % 60);
if(sec2 < 10){
	sec2 = `0${sec2}`;
}
currentStart.innerText = `${min2}:${sec2}`;


// for seek
let progressBar = parseInt((music_curr / music_dur) * 100);
seek.value = progressBar;
let seekbar = seek.value;
bar2.style.width = `${seekbar}%`;
play_dot.style.left = `${seekbar}%`;

});
seek.addEventListener('change', ()=>{
	music.currentTime = seek.value * music.duration /100;
});


let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementById('vol_bar');
let vol_dot = document.getElementById('vol_dot');



vol.addEventListener('change', () => {
	if(vol.value == 0){
		vol_icon.classList.remove('fa-volume-high');
		vol_icon.classList.remove('fa-volume-low');
		vol_icon.classList.add('fa-volume-off');
	}
if(vol.value > 0){
	vol_icon.classList.remove('fa-volume-high');
    vol_icon.classList.add('fa-volume-low');
    vol_icon.classList.remove('fa-volume-off');
}

if(vol.value > 50){
	vol_icon.classList.add('fa-volume-high');
    vol_icon.classList.remove('fa-volume-low');
	vol_icon.classList.remove('fa-volume-off');
}
//controlling vol
let vol_a = vol.value;
vol_bar.style.width = `${vol_a}%`;
vol_dot.style.left = `${vol_a}%`;


//changing volume by cursor
music.volume = vol_a / 100;
});

//for next and previous
let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', () =>{
	index -= 1;

	if(index < 1){
		index = Array.from(document.getElementsByClassName('songItem')).length;
	}
music.src = `audio/${index}.mp3`;
		poster_master_play.src = `image/${index}.jpg`;
		music.play();
		masterPlay.classList.remove('fa-play');
		masterPlay.classList.add('fa-pause');
        
		let songTitles = songs.filter((els) =>{
			return els.id ==index;
		});
		songTitles.forEach(elss =>{
			let { songName } = elss; 
			title.innerHTML = songName;
			
		});

		makeAllBackground();
		Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = "rgb(105, 105, 105, .1)";
		makeAllPlays();
		el.target.classList.add('fa-circle-pause');
		el.target.classList.remove('fa-circle-play');
        wave.classList.add('active1');

})

next.addEventListener('click', () =>{
	index++;
if(index > Array.from(document.getElementsByClassName('songItem')).length){
		index = 1;
	}

	music.src = `audio/${index}.mp3`;
		poster_master_play.src = `image/${index}.jpg`;
		music.play();
		masterPlay.classList.remove('fa-play');
		masterPlay.classList.add('fa-pause');

		let songTitles = songs.filter((els) =>{
			return els.id ==index;
		});
		songTitles.forEach(elss =>{
			let { songName } = elss; 
			title.innerHTML = songName;

		});

		makeAllBackground();
		Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = "rgb(105, 105, 105, .1)";
		makeAllPlays();
		el.target.classList.add('fa-circle-pause');
		el.target.classList.remove('fa-circle-play');
        wave.classList.add('active1');

})





 const songs = [
 {
 	id: '1',
  songName: 'On My Way<br><div class="subtitle">Alen Walker</div>',
     poster: "image/1.jpg",
 },
 {
 	id: '2',
  songName: 'You are the shadow to my Life<br><div class="subtitle">Alen Walker</div>',
     poster: "image/2.jpg",
 },
 {
 	id: '3',
  songName: 'On and On<br><div class="subtitle">Alen Walker</div>',
     poster: "image/3.jpg",
 },
 {
 	id: '4',
  songName: 'Joker Tune<br><div class="subtitle">Alen Walker</div>',
     poster: "image/4.jpg",
 },
 {
 	id: '5',
  songName: 'Nice Tune<br><div class="subtitle">Alen Walker</div>',
     poster: "image/5.jpg",
 },
 {
 	id: '6',
  songName: 'English Tune<br><div class="subtitle">Alen Walker</div>',
     poster: "image/6.jpg",
 },
 {
 	id: '7',
  songName: 'tum sath ho<br><div class="subtitle">Alen Walker</div>',
     poster: "image/7.jpg",
 },
 {
 	id: '8',
  songName: 'suna hai<br><div class="subtitle">Alen Walker</div>',
     poster: "image/8.jpg",
 },
 {
 	id: '9',
  songName: 'dilber<br><div class="subtitle">Alen Walker</div>',
     poster: "image/9.jpg",
 },
 {
 	id: '10',
  songName: 'duniya<br><div class="subtitle">Alen Walker</div>',
     poster: "image/10.jpg",
 },
 {
 	id: '11',
  songName: 'lagdi lahore di<br><div class="subtitle">Alen Walker</div>',
     poster: "image/11.jpg",
 },
 {
 	id: '12',
  songName: 'putt Jatt <br><div class="subtitle">Alen Walker</div>',
     poster: "image/12.jpg",
 },
 {
 	id: '13',
  songName: 'baarishen<br><div class="subtitle">Alen Walker</div>',
     poster: "image/13.jpg",
 },
 {
 	id: '14',
  songName: 'vaste<br><div class="subtitle">Alen Walker</div>',
     poster: "image/14.jpg",
 },
 {
 	id: '15',
  songName: 'kutti mohabbate <br><div class="subtitle">Alen Walker</div>',
     poster: "image/15.jpg",
 },
 {
 	id: '16',
  songName: 'meri Jindagi hai<br><div class="subtitle">Alen Walker</div>',
     poster: "image/16.jpg",
 },
 {
 	id: '17',
  songName: 'batao yaad hai<br><div class="subtitle">Alen Walker</div>',
     poster: "image/17.jpg",
 },
 {
 	id: '18',
  songName: 'mere dhole judaiyan<br><div class="subtitle">Alen Walker</div>',
     poster: "image/18.jpg",
 },
 {
 	id: '19',
  songName: 'Insane vic musicy<br><div class="subtitle">Alen Walker</div>',
     poster: "image/19.jpg",
 },
 {
 	id: '20',
  songName: 'nothing<br><div class="subtitle">Alen Walker</div>',
     poster: "image/20.jpg",
 }
 ]

Array.from(document.getElementsByClassName('songItem')).forEach((e, i) =>{
e.getElementsByTagName('img')[0].src = songs[i].poster;
e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;

});


let index=0;
let poster_master_play = document.getElementById('poster_master_play');
let download_music = document.getElementById('download_music');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playListPlay')).forEach((e)=>{
	e.addEventListener('click', (el)=>{
		index = el.target.id;
		// console.log(index);
		music.src = `audio/${index}.mp3`;
		poster_master_play.src = `image/${index}.jpg`;

		music.play();

		masterPlay.classList.remove('fa-play');
		masterPlay.classList.add('fa-pause'); 
		download_music.href = `audio/${index}.mp3`;
         

		let songTitles = songs.filter((els) =>{
			return els.id ==index;
		});
		songTitles.forEach(elss =>{
			let { songName } = elss; 
			title.innerHTML = songName;
			download_music.setAttribute('download', songName);

		});

		makeAllBackground();
		Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = "rgb(105, 105, 105, .1)";
		makeAllPlays();
		el.target.classList.add('fa-circle-pause');
		el.target.classList.remove('fa-circle-play');
       wave.classList.add('active1');
	});
});


let shuffle = document .getElementsByClassName('shuffle')[0];

shuffle.addEventListener('click',()=>{
	let a = shuffle.innerHTML;
	switch(a){
		case "next":
		shuffle.classList.add('fa-repeat');
		shuffle.classList.remove('fa-music');
		shuffle.classList.remove('fa-shuffle');
		shuffle.innerHTML = 'repeat';
		break;
		case "repeat":
		shuffle.classList.remove('fa-repeat');
		shuffle.classList.remove('fa-music');
		shuffle.classList.add('fa-shuffle');
		shuffle.innerHTML = 'random';
		break;

		case "random":
		shuffle.classList.remove('fa-repeat');
		shuffle.classList.add('fa-music');
		shuffle.classList.remove('fa-shuffle');
		shuffle.innerHTML = 'next';
		break;

	}
});


// play type next ,repeat and random
const next_music = ()=> {
	if(index == songs.length){
		index = 1;
	}
	else{
		index++;
	}
	music.src = `audio/${index}.mp3`;
		poster_master_play.src = `image/${index}.jpg`;

		music.play();

		masterPlay.classList.remove('fa-play');
		masterPlay.classList.add('fa-pause'); 
		download_music.href = `audio/${index}.mp3`;
         

		let songTitles = songs.filter((els) =>{
			return els.id ==index;
		});
		songTitles.forEach(elss =>{
			let { songName } = elss; 
			title.innerHTML = songName;
			download_music.setAttribute('download', songName);

		});

		makeAllBackground();
		Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = "rgb(105, 105, 105, .1)";
		makeAllPlays();
		el.target.classList.add('fa-circle-pause');
		el.target.classList.remove('fa-circle-play');
       wave.classList.add('active1');
}

const repeat_music = ()=> {
	index;
	music.src = `audio/${index}.mp3`;
		poster_master_play.src = `image/${index}.jpg`;

		music.play();

		masterPlay.classList.remove('fa-play');
		masterPlay.classList.add('fa-pause'); 
		download_music.href = `audio/${index}.mp3`;
         

		let songTitles = songs.filter((els) =>{
			return els.id ==index;
		});
		songTitles.forEach(elss =>{
			let { songName } = elss; 
			title.innerHTML = songName;
			download_music.setAttribute('download', songName);

		});

		makeAllBackground();
		Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = "rgb(105, 105, 105, .1)";
		makeAllPlays();
		el.target.classList.add('fa-circle-pause');
		el.target.classList.remove('fa-circle-play');
       wave.classList.add('active1');
}

const random_music = ()=> {
	if(index == songs.length){
		index = 1;
	}
	else{
		index = Math.floor((Math.random() * songs.length)+1);
	}
	music.src = `audio/${index}.mp3`;
		poster_master_play.src = `image/${index}.jpg`;

		music.play();

		masterPlay.classList.remove('fa-play');
		masterPlay.classList.add('fa-pause'); 
		download_music.href = `audio/${index}.mp3`;
         

		let songTitles = songs.filter((els) =>{
			return els.id ==index;
		});
		songTitles.forEach(elss =>{
			let { songName } = elss; 
			title.innerHTML = songName;
			download_music.setAttribute('download', songName);

		});

		makeAllBackground();
		Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = "rgb(105, 105, 105, .1)";
		makeAllPlays();
		el.target.classList.add('fa-circle-pause');
		el.target.classList.remove('fa-circle-play');
       wave.classList.add('active1');
}


music.addEventListener('ended', ()=>{
	// index++;
	let b =shuffle.innerHTML;
	switch (b) {
		case 'repeat':
		repeat_music();
		break;
	
	case 'next':
	next_music();
	break;

	case 'random':
	random_music();
	break;

}

});

// search data start
let search_results = document.getElementsByClassName('search_results')[0];
songs.forEach(element => {

const {id, songName, poster} = element;
// console.log(songName);
let card = document.createElement('a');
card.classList.add('card');
card.href = "#"+id;
card.innerHTML = `<img src="${poster}" alt="">
						<div class="content">
							${songName}
							
						</div>`
						;
search_results.appendChild(card);
});

let input = document.getElementsByTagName('input')[0];

input.addEventListener('keyup', ()=>{
	let input_value = input.value.toUpperCase();
	let items = search_results.getElementsByTagName('a');

for(let index = 0; index<items.length; index++){
	let as = items[index].getElementsByClassName('content')[0];
	let text_value = as.textContent || as.innerHTML;

if(text_value.toUpperCase().indexOf(input_value) > -1){
	items[index].style.display = "flex";
}
else{
	items[index].style.display = "none";
}

if(input.value == 0){
	search_results.style.display = "none";
}
else{
	search_results.style.display = "";
}
}

})


// search data end


