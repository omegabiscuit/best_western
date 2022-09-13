import { useParams } from "react-router";
import { Button,TextField } from "@mui/material";

function Thread(props) {
    let { threadSlug } = useParams();
    const thread = props.thread
    return (
        <body>
            <div class="top-bar">
                <h1>My Forum</h1>
            </div>
            <div class="header">
                <h4 class="title">
                    Thread 1
                </h4>
                <div class="bottom">
                    <p class="timestamp">
                        {thread.timeStamp}
                    </p>
                    <p class="comment-count">
                        {thread.commentCount}
                    </p>
                </div>    
            </div>
            <TextField></TextField> 
            <br></br>
            <Button variant="contained" color="secondary">
                add comment
            </Button>
            <div class="comments">
                <div class="comment">
                    <div class="top-comment">
                        <p class="user">
                            Aaron
                        </p>
                        <p class="timestamp">
                            10/10/2020
                        </p>
                    </div>
                    <div class="comment-content">
                        Comment text here
                    </div>
                </div>    
            </div>
        </body>
    );
}

//TODO: What does this do?
export default Thread;