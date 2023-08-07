$(document).ready(function(){
    // 콤마
    $('[data-comma]').length && comma();

    // 텝
    $('.tabBtns').length && tab();

    // 팝업
    $('.popupBox').length && popup();

    // 뉴스 상세페이지
    $('.newsDetailPage').length && newsDetailPage();
})

// 팝업
function popup(){
    $('.popupBox, .popupBox > div > div button').click(function(){
        $('.popupBox').css('display','none');
    })
    $('.popupBox > div').click(function(e){
        e.stopPropagation();
    })
}


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

// 뉴스 상세 페이지
function newsDetailPage(){
    $('.copy_url').click(function(){
        const currentURL = window.location.href;
        const tempInput = document.createElement('input');
        tempInput.value = currentURL;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
        alert('URL이 복사되었습니다.');
    })
    $('.kakao_invite').click(function(){
        alert('카카오톡 초대하기')
    })
}