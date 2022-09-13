import logo from './logo.svg';
//import './App.css';
import { Link } from '@mui/material';

function App(props) {
  const threads = props.threads
  const listItems = threads.map((thread) =>
      <li class="row">
        <Link href={thread.id}>
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
          <p>
            <ol>{listItems}</ol>
          </p>
      </div>
  );
}

export default App;
