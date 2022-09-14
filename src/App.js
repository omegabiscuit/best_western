import { Link } from '@mui/material';
import Header from './components/Header';

function App(props) {
  const threads = props.threads
  const listItems = threads.map((thread) =>
      <li class="row">
        <Link href={thread.id} underline="hover">
          <h4 class="title">
            {thread.title}
          </h4>
          <div class="bottom">
            <p class="timestamp">
              {thread.timeStamp}
            </p>
            <p class="comment-count">
              {thread.commentCount}
            </p>
          </div>
        </Link>
      </li>
  );
  return (
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
  );
}

export default App;
