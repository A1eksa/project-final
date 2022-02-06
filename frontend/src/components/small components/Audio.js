import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import AudioPlayer from 'material-ui-audio-player';

const muiTheme = createMuiTheme({});

const src = [
  'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
  'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.wav',
];

<ThemeProvider theme={muiTheme}>
  <AudioPlayer
    elevation={1}
    width='100%'
    variation='default'
    spacing={3}
    download={true}
    autoplay={true}
    order='standart'
    preload='auto'
    loop={true}
    src={src}
  />
</ThemeProvider>;
