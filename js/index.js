window.onload = function () {
    $(".wx").mouseover(function () {
        $(this).attr("src", "../images/wx_icon1.png");
        $(".app_show1").fadeToggle();
    })
    $(".wx").mouseout(function () {
        $(this).attr("src", "../images/wx_icon.png");
        $(".app_show1").fadeToggle();
    })
    $(".wb").mouseover(function () {
        $(this).attr("src", "../images/wb_icon1.png");
        $(".app_show2").fadeToggle();
    })
    $(".wb").mouseout(function () {
        $(this).attr("src", "../images/wb_icon.png");
        $(".app_show2").fadeToggle();
    })
    $(".oa").mouseover(function () {
        $(this).attr("src", "../images/oa_icon1.png");
        $(".app_show3").fadeToggle();
    })
    $(".oa").mouseout(function () {
        $(this).attr("src", "../images/oa_icon.png");
        $(".app_show3").fadeToggle();
    })
    // $(".txt li").addClass("display_n");
    // if ($(".txt li").classname = ".display_n") {
    //     $(".txt").click(function(){
    //         $(".txt li").toggleClass("display_b");
    //     })
        
    // }
    // else{
    //     $(".txt").click(function(){
    //         $(".txt li").addClass("display_n");
    //     })
    // }
    // $(".a1 a").mouseover(function(){
    //     $(".a1 div").show(500);
    // })
    // $(".a1 a").mouseout(function(){
    //     $(".a1 div").hide(500);
    // })
    // $(".a2 a").mouseover(function(){
    //     $(".a2 div").fadeToggle();
    // })
    // $(".a2 a").mouseout(function(){
    //     $(".a2 div").fadeToggle();
    // })
    // $(".a3 a").mouseover(function(){
    //     $(".a3 div").fadeToggle();
    // })
    // $(".a3 a").mouseout(function(){
    //     $(".a3 div").fadeToggle();
    // })
    // $(".a4 a").mouseover(function(){
    //     $(".a4 div").fadeToggle();
    // })
    // $(".a4 a").mouseout(function(){
    //     $(".a4 div").fadeToggle();
    // })
    // $(".a5 a").mouseover(function(){
    //     $(".a5 div").fadeToggle();
    // })
    // $(".a5 a").mouseout(function(){
    //     $(".a5 div").fadeToggle();
    // })
    // $(".a6 a").mouseover(function(){
    //     $(".a6 div").fadeToggle();
    // })
    // $(".a6 a").mouseout(function(){
    //     $(".a6 div").fadeToggle();
    // })
}