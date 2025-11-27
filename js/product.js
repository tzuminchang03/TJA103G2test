// 上稿器(summernote)
document.addEventListener("DOMContentLoaded", function () {
  $("#summernote").summernote({
    placeholder: "請輸入商品介紹...",
    tabsize: 2,
    height: 200,
  });
});

// 圖片預覽
const uploadImg = document.getElementById("uploadImg");
const previewImg = document.getElementById("previewImg");

uploadImg.addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    previewImg.src = URL.createObjectURL(file);
  }
});
// 商品類型切換
const btn_mattress_el = document.getElementById("btn_mattress");
const btn_frame_el = document.getElementById("btn_frame");
const product_type = document.getElementById("product_type");
const mattress_functions_el = document.querySelectorAll(
  ".mattress_functions input"
);
const frame_functions_el = document.querySelectorAll(".frame_functions input");

// 點擊床墊按鈕
btn_mattress_el.addEventListener("click", function () {
  this.classList.add("active");
  btn_frame_el.classList.remove("active");
  document.getElementById("mattress_material").classList.remove("d-none");
  document.getElementById("frame_material").classList.add("d-none");
  product_type.value = "mattress";
  // 啟用床墊
  mattress_functions_el.forEach((mf) => (mf.disabled = false));
  // 停用床架
  frame_functions_el.forEach((ff) => {
    ff.checked = false;
    ff.disabled = true;
  });
});

// 點擊床架按鈕
btn_frame_el.addEventListener("click", function () {
  this.classList.add("active");
  btn_mattress_el.classList.remove("active");
  document.getElementById("frame_material").classList.remove("d-none");
  document.getElementById("mattress_material").classList.add("d-none");
  product_type.value = "frame";
  // 停用床墊
  mattress_functions_el.forEach((mf) => {
    mf.checked = false;
    mf.disabled = true;
  });
  // 啟用床架
  frame_functions_el.forEach((ff) => (ff.disabled = false));
  // mattress_functions_el.disabled = true;
  // frame_functions_el.disabled = false;
});

/* 無尺寸按鈕 */

document.querySelectorAll(".btn-nosize").forEach((btn) => {
  btn.addEventListener("click", function () {
    const group = btn.closest(".size_group");
    const qty = group.querySelector(".product_stock");
    const price = group.querySelector(".product_price");

    const isDisabled = qty.disabled;

    if (!isDisabled) {
      qty.value = "";
      price.value = "";
      qty.disabled = true;
      price.disabled = true;
      btn.classList.add("btn-primary");
      btn.classList.remove("btn-outline-secondary");
      btn.textContent = "無尺寸";
    } else {
      qty.disabled = false;
      price.disabled = false;
      btn.classList.remove("btn-primary");
      btn.classList.add("btn-outline-secondary");
      btn.textContent = "無尺寸";
    }
  });
});

// 上架 / 下架切換
let btn_on_el = document.getElementById("btn_on");
let btn_off_el = document.getElementById("btn_off");

btn_on_el.addEventListener("click", function () {
  btn_on_el.classList.toggle("active", true);
  btn_off_el.classList.toggle("active", false);
});
btn_off_el.addEventListener("click", function () {
  btn_off_el.classList.toggle("active", true);
  btn_on_el.classList.toggle("active", false);
});
