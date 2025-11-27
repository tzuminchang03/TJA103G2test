// 首頁標籤
// 床墊、床架
let tag_mattress_el = document.getElementById("tag_mattress");
let tag_frame_el = document.getElementById("tag_frame");
tag_mattress_el.addEventListener("click", function () {
  this.classList.toggle("active");
});
tag_frame_el.addEventListener("click", function () {
  this.classList.toggle("active");
});
