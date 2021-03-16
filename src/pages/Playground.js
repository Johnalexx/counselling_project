import React from 'react'

function Playground() {
    return (
        <div>
            <div class="talk-bubble">
                        <div class="talktext">
                            <p>CSS Talk Bubble configured by classes. Defaults to square shape, no triangle. Height is auto-adjusting to the height of the text.</p>
                        </div>
                        </div>
                        <div class="talk-bubble tri-right left-top">
                        <div class="talktext">
                            <p>This one adds a right triangle on the left, flush at the top by using .tri-right and .left-top to specify the location.</p>
                        </div>
                        </div>
                        <div class="talk-bubble tri-right left-in">
                        <div class="talktext">
                            <p>This talk-bubble uses .left-in class to show a triangle on the left slightly indented. Still a blocky square.</p>
                        </div>
                        </div>
                        <div class="talk-bubble tri-right round btm-left">
                        <div class="talktext">
                            <p>And now using .round we can smooth the sides down. Also uses .btm-left to show a triangle at the bottom flush to the left.</p>
                        </div>
                        </div>
                        <div class="talk-bubble tri-right border round btm-left-in">
                        <div class="talktext">
                            <p>Now we add a border and it looks like a comic. Uses .border .round and .btm-left-in</p>
                        </div>
                        </div>
                        <div class="talk-bubble tri-right border btm-right-in">
                        <div class="talktext">
                            <p>Now flipped the other way and square. Uses .border and .btm-right-in</p>
                        </div>
                        </div>
                        <div class="talk-bubble tri-right btm-right">
                        <div class="talktext">
                            <p>Flush to the bottom right. Uses .btm-right only.</p>
                        </div>
                        </div>
                        <div class="talk-bubble tri-right round right-in">
                        <div class="talktext">
                            <p>Moving our way back up the right side indented. Uses .round and .right-in</p>
                        </div>
                        </div>
                        <div class="talk-bubble tri-right round border right-top">
                        <div class="talktext">
                            <p>And finally on the right flush at the top. Uses .round .border and .right-top</p>
                        </div>
                        </div>
        </div>
    )
}

export default Playground
