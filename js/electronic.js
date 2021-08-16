function createTrackItem(index,name,duration){
  var trackItem = document.createElement('div');
  trackItem.setAttribute("class", "playlist-track-ctn");
  trackItem.setAttribute("id", "ptc-"+index);
  trackItem.setAttribute("data-index", index);
  document.querySelector(".playlist-ctn").appendChild(trackItem);

  var playBtnItem = document.createElement('div');
  playBtnItem.setAttribute("class", "playlist-btn-play");
  playBtnItem.setAttribute("id", "pbp-"+index);
  document.querySelector("#ptc-"+index).appendChild(playBtnItem);

  var btnImg = document.createElement('i');
  btnImg.setAttribute("class", "fas fa-play");
  btnImg.setAttribute("height", "40");
  btnImg.setAttribute("width", "40");
  btnImg.setAttribute("id", "p-img-"+index);
  document.querySelector("#pbp-"+index).appendChild(btnImg);

  var trackInfoItem = document.createElement('div');
  trackInfoItem.setAttribute("class", "playlist-info-track");
  trackInfoItem.innerHTML = name
  document.querySelector("#ptc-"+index).appendChild(trackInfoItem);

  var trackDurationItem = document.createElement('div');
  trackDurationItem.setAttribute("class", "playlist-duration");
  trackDurationItem.innerHTML = duration
  document.querySelector("#ptc-"+index).appendChild(trackDurationItem);
}

var listAudio = [
 {
    name:"3cmTck",
    file:"assets/mp3/Electronic/3cmTck_Eddie_Mize.mp3",
    duration:"03:10"
  },
  {
    name:"A Dark and Quiet Place",
    file:"assets/mp3/Electronic/A_Dark_and_Quiet_Place_Eddie_Mize.mp3",
    duration:"04:10"
  },
  {
    name:"A Freak Can",
    file:"assets/mp3/Electronic/A_Freak_Can_Eddie_Mize.mp3",
    duration:"02:27"
  },  
  {
    name:"A Soft Rethink",
    file:"assets/mp3/Electronic/A_Soft_Rethink_Eddie_Mize.mp3",
    duration:"04:20"
  },
  {
    name:"A Thought 2 Far",
    file:"assets/mp3/Electronic/A_Thought_2_Far_Eddie_Mize.mp3",
    duration:"03:19"
  },
  {
    name:"Alone with my Dark Thoughts",
    file:"assets/mp3/Electronic/Alone_with_my_Dark_Thoughts_Eddie_Mize_PM.mp3",
    duration:"04:18"
  },
  {
    name:"Are You Sh-tting Me",
    file:"assets/mp3/Electronic/AreYouSh-ttingMe_Eddie_Mize.mp3",
    duration:"02:10"
  },
  {
    name:"Brain Race Stat",
    file:"assets/mp3/Electronic/Brain_Race_Stat_Eddie_Mize.mp3",
    duration:"02:52"
  },
  {
    name:"Caribbean_Paradise",
    file:"assets/mp3/Electronic/Caribbean_Paradise_Eddie_Mize.mp3",
    duration:"04:28"
  },
  {
    name:"Caught in the Groove",
    file:"assets/mp3/Electronic/Caught_in_the_Groove_Eddie_Mize.mp3",
    duration:"03:08"
  },
  {
    name:"Center of the Mind",
    file:"assets/mp3/Electronic/Center_of_the_Mind_Eddie_Mize.mp3",
    duration:"02:40"
  },
  {
    name:"Chaostic",
    file:"assets/mp3/Electronic/Chaostic_Eddie_Mize.mp3",
    duration:"02:31"
  },
  {
    name:"Chase Scene",
    file:"assets/mp3/Electronic/Chase_Scene_Eddie_Mize.mp3",
    duration:"03:42"
  },
  {
    name:"Chyll",
    file:"assets/mp3/Electronic/Chyll_Eddie_Mize.mp3",
    duration:"03:48"
  },
  {
    name:"Circular Thought",
    file:"assets/mp3/Electronic/Circular_Thought_Eddie_Mize.mp3",
    duration:"04:52"
  },
  {
    name:"Club Fuut",
    file:"assets/mp3/Electronic/ClubFuut_Eddie_Mize.mp3",
    duration:"04:30"
  },
  {
    name:"Cogs of the Wheel",
    file:"assets/mp3/Electronic/Cogs_of_the_Wheel_Eddie_Mize.mp3",
    duration:"04:08"
  },
  {
    name:"Contemplate",
    file:"assets/mp3/Electronic/Contemplate_Eddie_Mize.mp3",
    duration:"03:20"
  },
  {
    name:"Cool Night Drive",
    file:"assets/mp3/Electronic/Cool_Night_Drive_Eddie_Mize.mp3",
    duration:"03:27"
  },
  {
    name:"DDRev",
    file:"assets/mp3/Electronic/DDRev_Eddie_Mize.mp3",
    duration:"02:59"
  },
  {
    name:"Deep Down",
    file:"assets/mp3/Electronic/Deep_Down_Eddie_Mize.mp3",
    duration:"02:33"
  },
  {
    name:"Driving to WHERE",
    file:"assets/mp3/Electronic/Driving_to_WHERE_Eddie_Mize.mp3",
    duration:"02:25"
  },
  {
    name:"Dwell Time",
    file:"assets/mp3/Electronic/Dwell_Time_Eddie_Mize.mp3",
    duration:"03:01"
  },
  {
    name:"Feeling it",
    file:"assets/mp3/Electronic/Feeling_it_Eddie_Mize.mp3",
    duration:"04:40"
  },
  {
    name:"Focused Fiasco",
    file:"assets/mp3/Electronic/Focused_Fiasco_Eddie_Mize.mp3",
    duration:"05:03"
  },
  {
    name:"Fond Memories",
    file:"assets/mp3/Electronic/Fond_Memories_Eddie_Mize.mp3",
    duration:"04:55"
  },
  
  {
    name:"Funk Off",
    file:"assets/mp3/Electronic/Funk_Off_Eddie_MizeM.mp3",
    duration:"04:02"
  },
  {
    name:"Gamers Delight",
    file:"assets/mp3/Electronic/GamersDelight_Eddie_Mize.mp3",
    duration:"03:33"
  },
  {
    name:"Glide",
    file:"assets/mp3/Electronic/Glide_Eddie_Mize.mp3",
    duration:"5:50"
  },
  {
    name:"Hermans Revenge",
    file:"assets/mp3/Electronic/Hermans_Revenge_Eddie_Mize.mp3",
    duration:"04:08"
  },
  {
    name:"In Recent Memory",
    file:"assets/mp3/Electronic/In_Recent_Memory_Eddie_Mize.mp3",
    duration:"04:12"
  },
  {
    name:"Invited To Vibe",
    file:"assets/mp3/Electronic/InvitedToVibe_Eddie_Mize.mp3",
    duration:"06:16"
  },
  {
    name:"Island Lyfe",
    file:"assets/mp3/Electronic/Island_Lyfe_Eddie_Mize.mp3",
    duration:"03:22"
  },
  {
    name:"Kaos Prynciple",
    file:"assets/mp3/Electronic/Kaos_Prynciple_Eddie_Mize.mp3",
    duration:"02:56"
  },  
  {
    name:"Longboat",
    file:"assets/mp3/Electronic/Longboat_Eddie_Mize.mp3",
    duration:"03:32"
  },
  {
    name:"Lounge Act",
    file:"assets/mp3/Electronic/Lounge_Act_Eddie_Mize.mp3",
    duration:"03:16"
  },
  {
    name:"Luner Tick",
    file:"assets/mp3/Electronic/Luner_Tick_Eddie_Mize.mp3",
    duration:"03:16"
  },
  {
    name:"Manic Response",
    file:"assets/mp3/Electronic/Manic_Response_Eddie_Mize.mp3",
    duration:"03:08"
  },
  {
    name:"Mental Coastline",
    file:"assets/mp3/Electronic/Mental_Coastline_Eddie_Mize.mp3",
    duration:"03:08"
  },
  {
    name:"Mental Scar Tissue",
    file:"assets/mp3/Electronic/Mental_Scar_Tissue_Eddie_Mize.mp3",
    duration:"03:08"
  },
  {
    name:"Minds Eye Blind",
    file:"assets/mp3/Electronic/Minds_Eye_Blind_Eddie_Mize.mp3",
    duration:"03:13"
  },
  {
    name:"Mourn in Anger",
    file:"assets/mp3/Electronic/Mourn_in_Anger_Eddie_Mize.mp3",
    duration:"05:09"
  },
  {
    name:"MyndWerks",
    file:"assets/mp3/Electronic/MyndWerks_Eddie_Mize.mp3",
    duration:"04:40"
  },
  {
    name:"Near the Edge",
    file:"assets/mp3/Electronic/Near_the_Edge_Eddie_Mize.mp3",
    duration:"02:58"
  },
  {
    name:"New Day Dreamin",
    file:"assets/mp3/Electronic/New_Day_Dreamin_Eddie_Mize.mp3",
    duration:"05:40"
  },
  {
    name:"Off Kilter",
    file:"assets/mp3/Electronic/Off_Kilter_Eddie_Mize.mp3",
    duration:"02:58"
  },
  {
    name:"Ominous Sky",
    file:"assets/mp3/Electronic/OminousSky_Eddie_Mize.mp3",
    duration:"02:47"
  },
  {
    name:"Prepare",
    file:"assets/mp3/Electronic/Prepare_Eddie_Mize.mp3",
    duration:"05:22"
  },
  {
    name:"R3l4X",
    file:"assets/mp3/Electronic/R3l4X_Eddie_Mize.mp3",
    duration:"06:04"
  },  
  {
    name:"Recurring_Dream_PM",
    file:"assets/mp3/Electronic/Recurring_Dream_PM_Eddie_Mize.mp3",
    duration:"03:48"
  },
  {
    name:"Reexaminator",
    file:"assets/mp3/Electronic/Reexaminator_Eddie_Mize.mp3",
    duration:"04:18"
  },
  {
    name:"REM State",
    file:"assets/mp3/Electronic/REM_State_Eddie_Mize.mp3",
    duration:"04:34"
  },
  {
    name:"Route to Host",
    file:"assets/mp3/Electronic/Route_to_Host_Eddie_Mize.mp3",
    duration:"04:34"
  },
  {
    name:"Run and Hide",
    file:"assets/mp3/Electronic/Run_and_Hide_Eddie_Mize.mp3",
    duration:"05:10"
  },
  {
    name:"Scream to Me",
    file:"assets/mp3/Electronic/Scream_to_Me.mp3",
    duration:"05:10"
  },
  {
    name:"Slow Burn Sequence",
    file:"assets/mp3/Electronic/Slow_Burn_Sequence_Eddie_Mize.mp3",
    duration:"05:00"
  },
  {
    name:"Slow Roll",
    file:"assets/mp3/Electronic/Slow_Roll_Eddie_Mize.mp3",
    duration:"03:57"
  },
  {
    name:"Sticks and Soft Stones",
    file:"assets/mp3/Electronic/Sticks_and_Soft_Stones_Eddie_Mize.mp3",
    duration:"04:10"
  },
  {
    name:"Stranger Than Friction",
    file:"assets/mp3/Electronic/Stranger_Than_Friction_Eddie_Mize.mp3",
    duration:"02:58"
  },
  {
    name:"Tactical Melody",
    file:"assets/mp3/Electronic/Tactical_Melody_Eddie_Mize.mp3",
    duration:"02:40"
  },
  {
    name:"The Elephant in the Roomba",
    file:"assets/mp3/Electronic/The_Elephant_in_the_Roomba_Eddie_Mize.mp3",
    duration:"03:28"
  },   
  {
    name:"The Thrill of Flight",
    file:"assets/mp3/Electronic/The_Thrill_of_Flight_Eddie_Mize.mp3",
    duration:"04:40"
  },
  {
    name:"The Voices in my Head",
    file:"assets/mp3/Electronic/The_Voices_in_my_Head_Eddie_Mize.mp3",
    duration:"03:10"
  },
  {
    name:"They Are Coming",
    file:"assets/mp3/Electronic/They_Are_Coming_Eddie_Mize.mp3",
    duration:"04:02"
  },
  {
    name:"Thought Police",
    file:"assets/mp3/Electronic/Thought_Police_Eddie_Mize.mp3",
    duration:"02:52"
  },
  {
    name:"Too Much Caffeine",
    file:"assets/mp3/Electronic/Too_Much_Caffeine_Eddie_Mize.mp3",
    duration:"03:42"
  },
  {
    name:"Visual Noise",
    file:"assets/mp3/Electronic/Visual_Noise_Eddie_Mize.mp3",
    duration:"04:33"
  },
  {
    name:"Way Out There",
    file:"assets/mp3/Electronic/Way_Out_There_Eddie_Mize.mp3",
    duration:"03:23"
  },
  {
    name:"Weird and 3rd",
    file:"assets/mp3/Electronic/Weird_and_3rd_Eddie_Mize.mp3",
    duration:"04:52"
  },
  {
    name:"When Your Up",
    file:"assets/mp3/Electronic/WhenYourUp_Eddie_Mize.mp3",
    duration:"02:58"
  },
  {
    name:"Wobble Thot",
    file:"assets/mp3/Electronic/WobbleThot_Eddie_Mize.mp3",
    duration:"04:05"
  } 
]

for (var i = 0; i < listAudio.length; i++) {
    createTrackItem(i,listAudio[i].name,listAudio[i].duration);
}
var indexAudio = 0;

function loadNewTrack(index){
  var player = document.querySelector('#source-audio')
  player.src = listAudio[index].file
  document.querySelector('.title-song').innerHTML = listAudio[index].name
  this.currentAudio = document.getElementById("myAudio");
  this.currentAudio.load()
  this.toggleAudio()
  this.updateStylePlaylist(this.indexAudio,index)
  this.indexAudio = index;
}

var playListItems = document.querySelectorAll(".playlist-track-ctn");

for (let i = 0; i < playListItems.length; i++){
  playListItems[i].addEventListener("click", getClickedElement.bind(this));
}

function getClickedElement(event) {
  for (let i = 0; i < playListItems.length; i++){
    if(playListItems[i] == event.target){
      var clickedIndex = event.target.getAttribute("data-index")
      if (clickedIndex == this.indexAudio ) { // alert('Same audio');
          this.toggleAudio()
      }else{
          loadNewTrack(clickedIndex);
      }
    }
  }
}

document.querySelector('#source-audio').src = listAudio[indexAudio].file
document.querySelector('.title-song').innerHTML = listAudio[indexAudio].name


var currentAudio = document.getElementById("myAudio");

currentAudio.load()

currentAudio.onloadedmetadata = function() {
      document.getElementsByClassName('duration')[0].innerHTML = this.getMinutes(this.currentAudio.duration)
}.bind(this);

var interval1;

function toggleAudio() {

  if (this.currentAudio.paused) {
    document.querySelector('#icon-play').style.display = 'none';
    document.querySelector('#icon-pause').style.display = 'block';
    document.querySelector('#ptc-'+this.indexAudio).classList.add("active-track");
    this.playToPause(this.indexAudio)
    this.currentAudio.play();
  }else{
    document.querySelector('#icon-play').style.display = 'block';
    document.querySelector('#icon-pause').style.display = 'none';
    this.pauseToPlay(this.indexAudio)
    this.currentAudio.pause();
  }
}

function pauseAudio() {
  this.currentAudio.pause();
  clearInterval(interval1);
}

var timer = document.getElementsByClassName('timer')[0]

var barProgress = document.getElementById("myBar");


var width = 0;

function onTimeUpdate() {
  var t = this.currentAudio.currentTime
  timer.innerHTML = this.getMinutes(t);
  this.setBarProgress();
  if (this.currentAudio.ended) {
    document.querySelector('#icon-play').style.display = 'block';
    document.querySelector('#icon-pause').style.display = 'none';
    this.pauseToPlay(this.indexAudio)
    if (this.indexAudio < listAudio.length-1) {
        var index = parseInt(this.indexAudio)+1
        this.loadNewTrack(index)
    }
  }
}


function setBarProgress(){
  var progress = (this.currentAudio.currentTime/this.currentAudio.duration)*100;
  document.getElementById("myBar").style.width = progress + "%";
}


function getMinutes(t){
  var min = parseInt(parseInt(t)/60);
  var sec = parseInt(t%60);
  if (sec < 10) {
    sec = "0"+sec
  }
  if (min < 10) {
    min = "0"+min
  }
  return min+":"+sec
}

var progressbar = document.querySelector('#myProgress')
progressbar.addEventListener("click", seek.bind(this));


function seek(event) {
  var percent = event.offsetX / progressbar.offsetWidth;
  this.currentAudio.currentTime = percent * this.currentAudio.duration;
  barProgress.style.width = percent*100 + "%";
}

// function forward(){
//   this.currentAudio.currentTime = this.currentAudio.currentTime + 5
//   this.setBarProgress();
// }

// function rewind(){
//   this.currentAudio.currentTime = this.currentAudio.currentTime - 5
//   this.setBarProgress();
// }


function next(){
  if (this.indexAudio <listAudio.length-1) {
      var oldIndex = this.indexAudio
      this.indexAudio++;
      updateStylePlaylist(oldIndex,this.indexAudio)
      this.loadNewTrack(this.indexAudio);
  }
}

function previous(){
  if (this.indexAudio>0) {
      var oldIndex = this.indexAudio
      this.indexAudio--;
      updateStylePlaylist(oldIndex,this.indexAudio)
      this.loadNewTrack(this.indexAudio);
  }
}

function updateStylePlaylist(oldIndex,newIndex){
  document.querySelector('#ptc-'+oldIndex).classList.remove("active-track");
  this.pauseToPlay(oldIndex);
  document.querySelector('#ptc-'+newIndex).classList.add("active-track");
  this.playToPause(newIndex)
}

function playToPause(index){
  var ele = document.querySelector('#p-img-'+index)
  ele.classList.remove("fa-play");
  ele.classList.add("fa-pause");
}

function pauseToPlay(index){
  var ele = document.querySelector('#p-img-'+index)
  ele.classList.remove("fa-pause");
  ele.classList.add("fa-play");
}


function toggleMute(){
  var btnMute = document.querySelector('#toggleMute');
  var volUp = document.querySelector('#icon-vol-up');
  var volMute = document.querySelector('#icon-vol-mute');
  if (this.currentAudio.muted == false) {
     this.currentAudio.muted = true
     volUp.style.display = "none"
     volMute.style.display = "block"
  }else{
    this.currentAudio.muted = false
    volMute.style.display = "none"
    volUp.style.display = "block"
  }
}