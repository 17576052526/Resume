//��ȡurl#������ַ���
function getUrlMark() {
    var l_href = location.href;
    var l_index = l_href.lastIndexOf('#');
    if (l_index == -1 || l_index == l_href.length - 1) { return null; }
    return l_href.substr(l_index + 1);
}
$(function () {
    //����url#����ʾ
    var l_mark = getUrlMark();
    $('.box').css('display', 'none');
    if (l_mark == null) { $('#index').css('display', 'block'); } else {
        if ($('#' + l_mark).length > 0) { $('#' + l_mark).css('display', 'block'); } else { $('#index').css('display', 'block'); }
        $('#nav li a').removeClass('navactive');
        $('#nav li a[href=#' + l_mark + ']').addClass('navactive');
    }
    //����Ŀ�����¼�
    $('#nav li a').click(function () {
        var href = $(this).attr('href');
        var id = href.substr(href.lastIndexOf('#') + 1);
        if (id == getUrlMark()) { return false; }
        $('.box').fadeOut(500);
        $('#' + id).fadeIn(500);
        $('#nav li a').removeClass('navactive');
        $(this).addClass('navactive');
    });
    //���ƶ������Ͻǲ˵�ͼ�굥���¼�
    $('.icon-box').click(function () {
        if ($('#nav').css('display') == 'none') {
            $('.head').addClass('head-navShow');
            $(this).addClass('icon1-box');
        } else {
            $('.head').removeClass('head-navShow');
            $(this).removeClass('icon1-box');
        }
    });
});
