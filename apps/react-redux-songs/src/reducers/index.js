import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    {
      title: 'No Scrubs',
      duration: '4:05',
    },
    {
      title: 'Hey Makarina',
      duration: '2:05',
    },
    {
      title: 'All Star',
      duration: '3:!5',
    },
    {
      title: 'I want it that way',
      duration: '2:45',
    },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELCTED') {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
