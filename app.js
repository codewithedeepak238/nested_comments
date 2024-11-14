let commentContainer = document.getElementById("comment-container");
let reset = document.getElementById("reset");



function createInputBox() {
    let div = document.createElement("div");
    div.setAttribute("class", "comment-details");

    div.innerHTML += `
    <div class="bg-gray-100 rounded-lg p-[2%] flex space-between gap-[15px]">
                    <div><img class="rounded-[50%] w-[50px]" src="profile.jpg" alt=""></div>
                    <div class="flex flex-col">
                        <input id="user" class="rounded-none mb-[5%] p-[2%]" type="text" placeholder="Username" class="input" />
                        <textarea maxlength="50" name="commentText" id="commentText" class="rounded-none mb-[5%] h-[50px] p-[2%]" type="text" placeholder="Add comment here"></textarea>
                        <button class="btn my-[2%] submit">Post</button>
                        <button class="btn my-[2%] cancel">Cancel</button>
                    </div>
                </div>`;

    return div;
}

function addReply(user, text) {
    let div = document.createElement("div");
    div.setAttribute("class", "all-comment");

    div.innerHTML += `
    <div class="my-[2%] bg-gray-100 rounded-lg p-[2%] flex space-between gap-[15px]">
                        <div><img class="rounded-[50%] w-[50px]" src="profile.jpg" alt=""></div>
                        <div>
                            <div>
                                <p class="text-xl font-[600]">${user}</p>
                                <p>${text}</p>
                            </div>
                            <div class="mt-[10px] flex gap-[10px]">
                                <button class="reply border-[1px] border-black rounded-[3px] px-[5px]">Reply</button>
                                <button class="edit border-[1px] border-black rounded-[3px] px-[5px]">Edit</button>
                                <button class="delete border-[1px] border-black rounded-[3px] px-[5px]">Delete</button>
                            </div>
                        </div>
                    </div>`;

    return div;
}

commentContainer.addEventListener("click", function (e) {
    let replyClicked = e.target.classList.contains("reply");
    let submitClicked = e.target.classList.contains("submit");
    let cancelClicked = e.target.classList.contains("cancel");
    let deleteClicked = e.target.classList.contains("delete");
    let editClicked = e.target.classList.contains("edit");
    let closestCard = e.target.closest(".all-comment");

    if (replyClicked) {
        closestCard.appendChild(createInputBox());
    }

    if (cancelClicked) {
        const commentDetails = e.target.closest(".comment-details");
        commentDetails.remove();
    }

    if (editClicked) {
        let card = closestCard.children[0];

    }

    if (deleteClicked) {
        closestCard.remove();
    }

    if (submitClicked) {
        const commentDetails = e.target.closest(".comment-details");
        let user = document.getElementById("user");
        let commentText = document.getElementById("commentText")
        if (user.value && commentText.value) {
            closestCard.appendChild(addReply(user.value, commentText.value));
            commentDetails.remove();
        }
    }
});



reset.addEventListener("click", function(){
    commentContainer.innerHTML = `<div class="all-comment">
                    <div class="bg-gray-100 rounded-lg p-[2%] flex space-between gap-[15px]">
                        <div><img class="rounded-[50%] w-[50px]" src="profile.jpg" alt=""></div>
                        <div>
                            <div>
                                <p class="text-xl font-[600]">John Doe</p>
                                <p>Welcome! You can reply to the comments. But you can't delete the initial comment.</p>
                            </div>
                            <div class="mt-[10px]">
                                <button class="reply border-[1px] border-black rounded-[3px] px-[5px]">Reply</button>
                            </div>
                        </div>
                    </div>
                    <div class="all-comment">
                        <div class="my-[2%] bg-gray-100 rounded-lg p-[2%] flex space-between gap-[15px]">
                            <div><img class="rounded-[50%] w-[50px]" src="profile.jpg" alt=""></div>
                            <div>
                                <div>
                                    <p class="text-xl font-[600]">User 1</p>
                                    <p>You can reply nested or delete any comment. You can edit the existing comments.</p>
                                </div>
                                <div class="mt-[10px] flex gap-[10px]">
                                    <button class="reply border-[1px] border-black rounded-[3px] px-[5px]">Reply</button>
                                    <button class="edit border-[1px] border-black rounded-[3px] px-[5px]">Edit</button>
                                    <button class="delete border-[1px] border-black rounded-[3px] px-[5px]">Delete</button>
                                </div>
                            </div>
                        </div>
                        <div class="all-comment">
                            <div class="my-[2%] bg-gray-100 rounded-lg p-[2%] flex space-between gap-[15px]">
                                <div><img class="rounded-[50%] w-[50px]" src="profile.jpg" alt=""></div>
                                <div>
                                    <div>
                                        <p class="text-xl font-[600]">User 2</p>
                                        <p>Refresh & see the changes persist. You can reset the comments to the initial state</p>
                                    </div>
                                    <div class="mt-[10px] flex gap-[10px]">
                                        <button class="reply border-[1px] border-black rounded-[3px] px-[5px]">Reply</button>
                                        <button class="edit border-[1px] border-black rounded-[3px] px-[5px]">Edit</button>
                                        <button class="delete border-[1px] border-black rounded-[3px] px-[5px]">Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`
})