var likeCounter = 0;
var titleNode = document.getElementById("postTitle");
var authorNode = document.getElementById("author");
var contentNode = document.getElementById("postContent");
var authorContent = 'Srishti Gupta';
var titleContent = "Everything you should know about 'module' & 'require' in Node.js";
var postsContent = 'Node.js treats each JavaScript file as a separate module. For instance, if you have a file containing some code and this file is named xyz.js, then this file is treated as a module in Node';

window.onload = function() {
    // Fill in post content
    authorNode.innerHTML = authorContent;
    titleNode.innerHTML = titleContent;
    contentNode.innerHTML = postsContent;
};

document.addEventListener("click",function(e) {
    if (hasClass(e.target, "saved")) {
      // When edit button is clicked
      e.target.classList.remove("saved");
      e.target.classList.add("unsaved");
      e.target.innerHTML = 'Save <i class="fa fa-save"></i>';
      titleNode.setAttribute("contenteditable", true);
      titleNode.classList.add("editable");
      contentNode.setAttribute("contenteditable", true);
      contentNode.classList.add("editable");
    }
    else if (hasClass(e.target, "unsaved")) {
        // When save button is clicked
        e.target.classList.remove("unsaved");
        e.target.classList.add("saved");
        e.target.innerHTML = 'Edit <i class="fa fa-edit"></i>';
        titleNode.setAttribute("contenteditable", false);
        titleNode.classList.remove("editable");
        contentNode.setAttribute("contenteditable", false);
        contentNode.classList.remove("editable");
        
        // Updating Session storage on Save to reflect correct data if only this page is refreshed
        sessionStorage.setItem("postTitle", titleNode.innerText);
        sessionStorage.setItem("postContent", contentNode.innerText);
    }
    else if (hasClass(e.target, "like-button")) {
        // When like button is clicked
        likeCounter++;
        e.target.innerHTML = '<i class="fa fa-thumbs-up"></i> Liked';
        if (likeCounter == 1) {
            document.getElementById("likeText").innerHTML = "1 person likes this!";
        } 
        else if (likeCounter > 1) {
            document.getElementById("likeText").innerHTML =
            likeCounter + " people like this!";
        }
    }
    else if (hasClass(e.target, "comment-button")) {
        // When Comment button is clicked
        var commentText = document.getElementById("commentBox").value.trim();
        if (commentText !== "") {
        // Following line of code displays latest comment on the top
          document.getElementById("commentsWrapper").innerHTML = "<p>" +commentText+ "</p>" + document.getElementById("commentsWrapper").innerHTML;
        }        
        document.getElementById("commentBox").value = "";
    }
}, false);

function hasClass(elem, className) {
  return elem.classList.contains(className);
}