window.addEventListener("load",function init() {

    // handle hiệu hứng của thanh tìm kiếm trên menu
    let searchBox = document.getElementsByClassName("search-box"); // thanh tìm kiếm
    searchBox = searchBox[0]; 
    let input = searchBox.childNodes[3].childNodes[1]; // input element trong searchBox
    // handle click event - khi click vào thanh tìm kiếm sẽ thêm class vào thanh tìm kiếm
    //, tạo ra bảng hint box về lịch sử cũng như gợi ý tìm kiếm 
    //và khi click chỗ khác thì xoá class và xoá bảng hint box
    window.addEventListener("click",function focusHandler(e) {
        let hintBox = document.getElementsByClassName("hint-box");
        //nếu click vào input hoặc hintBox
        if(e.target == input || e.target == hintBox[0]){
            // nếu không có hint Bõ thì tạo
            if(hintBox.length == 0){
                hintBox = document.createElement("div");
                searchBox.classList.add("search-box-focus");
                hintBox.classList.add("hint-box");
                searchBox.append(hintBox);
            }
        }else{
            // xoá hint box
            searchBox.classList.remove("search-box-focus");
            Array.from(hintBox).forEach(element => {
                element.remove();
            });
        }
    })

    // ------------------------------------------------------------------------------------------------------------

    
})