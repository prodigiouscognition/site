var createPostModal = document.getElementById("createPostModal");

// Search for create post button
var createPostBtn   = document.getElementById("createPostBtn");

// Search close button
var closeCreatePost = document.getElementById("closeCreatePost");

// Open the modal
openModal = modal => {
    modal.style.display = "block";
};

// Close the modal
closeModal = modal => {
    modal.style.display = "none";
};

// Add events to the buttons
createPostBtn.addEventListener("click", () => openModal(createPostModal));
closeCreatePost.addEventListener("click", () => closeModal(createPostModal));

window.addEventListener("click", function(event) {
  if (event.target == createPostModal) {
    createPostModal.style.display = "none";
  }
});