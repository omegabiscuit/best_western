import { Link } from '@mui/material';
import Header from './components/Header';
import { ThemeProvider, createTheme} from '@mui/material/styles';
import {ListItem, ListItemText} from '@mui/material';
const theme = createTheme({
  spacing:8
});

function App(props) {
  const threads = props.threads
  const listItems = threads.map((thread) =>
      <li class="row">
        <ListItem button='true' component={Link} href={thread.id}>
          <ListItemText primary={thread.title} secondary={
            <div>
              <div>{thread.timeStamp}</div>
              <div>{thread.commentCount} comments</div>
            </div>
          }/>
        </ListItem>
      </li>
  );
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
          <div class="top-bar">
            <Header/>
          </div>
          <div style={{marginTop: 80}}>
            <p>
              <ol>{listItems}</ol>
            </p>
          </div>
      </div>
      </ThemeProvider>
  );
}

export default App;
