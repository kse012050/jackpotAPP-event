$(document).ready(function(){
    // 콤마
    $('[data-comma]').length && comma()

    // 텝
    $('.tabBtns').length && tab()
})


// 콤마
function comma(){
    $('[data-comma]').html(addCommas($('[data-comma]').html()));
}

// 숫자 ',' 찍기
function addCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// 텝
function tab(){
    $('.tabBtns > *').first().addClass('active');
    // $('.tabContents > *').first().addClass('active');
    $('.tabBtns > *').click(function(){
        $('.tabBtns > *, .tabContents > *').removeClass('active');
        $(this).addClass('active');
        // $('.tabContents > *').eq($(this).index()).addClass('active');
    })
}