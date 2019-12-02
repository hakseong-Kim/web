$('#navigation li').live('click', function () {
    $('#navigation li').removeClass('selected');
    $(this).addClass('selected');

})


$(document).ready(function () {

    ///// 셀렉터 정리 ///// 
    $("*").css("border", "1px solid #ff0000");
    // 모든 속성의 border 를 1을 집어넣어라

    // $("#navigation2").css("background","yellow"); 
    // #navigation2의 id 에 대해서 background 색상을 적용

    $("#navigation2").css("color", "yellow");
    // li 태그 와, #navigation2의 i

    $("li.selected").css("font-size", "2rem");
    // li 태그안에 있는 .selected 클래스만 바꾸어라

    $("li#select").css("font-size", "2rem"); // li 태그안에 있는 .select id만 바꾸어라
    // 공백없이 같이 붙게 되버리면, 같은 속성중의 class 및 id 으로 판단을 함
    //$("div > a[target]").css("background","#AAA") // div 하위에 있는 a 태그 중에서target 속성이 되어있는 것을 찾아 백그라운드 색상을 CCC으로 잡는다.

    $("div > a[target='_blank']").css("background", "green")
    // div 하위에 있는 a 태그 중에서target 속성이 되어있는 것을 찾아 백그라운드 색상을 CCC으로 잡는다.

    // $("div > a[target!='_blank']").css("background","green") 
    // div 하위에 있고, a태그의 target 속성인데 _blank 이 아닌 경우 모두를 선택한다.
    // ^ => _blank 값으로 시작하는 요소, $ => _blank 값으로 끝나는 요소, * => _blank 을 포함하는 

    $("#siteUrl > li ").css("border", "5px solid #ff0000")
    //siteUrl class의 클래스를 가진 ul태그의 자식 li태그에 모두 사용한다.
    //$("ul.siteUrl > li ").css("border","5px solid #ff0000")
    //siteUrl class의 클래스를 가진 ul태그의 자식 li태그에 모두 사용한다.

    $("#navigation4 label + input").css("border", "5px solid #000000")
    // label태그를 제외하고 동등한 위치 및 그 하위에 있는 위치에 있는 input를 모두 찾는다
    // 부모와 자식관계에 있는 > 표시를 주의해야한다.

    $("#prev ~ div").css("background", "blue");
    //prev id를 제외를 하고 동등한위치 및 그 하위에 있는 위치에 있는 input를 모두 찾는다

    // ******** 기본 필터 ********
    // :animated 에니메이션이 동작중인 요소와 일치하는 요소를 반환한다.
    // :eq(index) index에 해당하는 요소를 반환
    // :even 짝수의 요소를 반환한다
    // :odd 홀수의 요소를 반환한다
    // :first 첫 번재 요소를 반환
    // :last 마지막 요소를 반환한다
    // :gt(index) index 보다 높은 index에 해당하는 요소를 모두 반환한다
    // :lt(index) index 보다 낮은 index에 해당하는 요소를 모두 반환한다
    // :header 모든 헤더 요소들을 반환한다(h1,h2,h3 ... )
    // :not(Selector) Sselector와 일치되는 요소를 제외한 나머지 요소를 반환한다.
    // :focus 현재 포커스가 위치한 요소를 모두 반환한다

    $("tr:eq(0) > td:eq(7)").css("background", "#111");
    // 두 번재 tr의 내부에 있는 8번째 td를 반환을 한다
    $("tr:eq(1) > td:gt(2)").css("background", "#111");
    // 두 번재 tr의 내부에 있는 3번째를 포함해 높은 요소를  반환을 한다
    $("tr:eq(2) > td:odd").css("background", "#111");
    // 세 번재 tr의 내부에 있는 홀수의 요소들을 반환을 한다
    $("tr:eq(3) > td:first").css("background", "#111");
    // 4 번재 tr의 내부에 있는 첫 번째 요소를 반환을 한다
    $("tr:eq(3) > td:last").css("background", "#111");
    // 4 번재 tr의 내부에 있는 마지막 요소를 반환을 한다.
     $("div:not(#navigation6, #navigation7, #navigation8)").css("background", "#AAA");
    // td 요소중에 클래스 명이 notSelect 인 항목을 제외한 요소의 집합을 선택한다.
    // 이 부분은 id는 설정이 안되는건지? => 되는구나

    // ******** 폼필터 ********
    // 폼 필터는 형식(text, checkbox, password, radio, file) 을 기반으로 하는 폼 요소를
    // 선택할 때 사용하는 필터로 기본필터랑 사용법은 비슷하다.

    $("#navigation7 :checked, :selected").css("border", "4px solid red");
    $("#navigation7 :checked, :selected").css("color", "blue");
    $("#navigation7 :selected").css("background", "red");


    $("#navigation8 tr:first").css("background","red");
    //navigation8 id의 첫번째 td에 백그라운드 색상을 적색으로 바꾼다.

    $("#navigation8 td:first-child").css("background", "red");
    $("#navigation8 td:last-child").css("background", "yellow");
    //마지막으로 쓴게 적용이 된다.

// 탐색 메서드까지만 공부를 한 상태이고, 별도로 정리를 또 해야한다.

    
    
})