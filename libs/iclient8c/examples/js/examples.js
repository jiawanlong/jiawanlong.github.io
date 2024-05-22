var loadedScript, dataCount = 0;
var isFile = document.location.toString().match(/file:\/\//);
var editor;

$(document).ready(function () {
    var url = location.href,isAutoClickTab = false,isAutoClickExample = false;
    if (url.lastIndexOf("#") > -1) {
        var exampleId = url.substring(url.lastIndexOf('#') + 1, url.length);
        //�ж�url���Ƿ����ê��
        if (exampleId) {
            //��ê�������Ӧ�ķ���
            var a = $("a[data-name='" + exampleId + "']");
            var parentId = a.parents(".tab-pane").attr("id");
            addFunc(a);
            setTimeout(function(){
                isAutoClickTab = true;
                $("#myTab a[href='#" + parentId + "']").click();
                isAutoClickExample = true;
                a.click();
            },0);
        } else {
            //��ê����Ĭ�ϴ򿪵�һ������
            openDefalutExam();
        }
    } else {
        openDefalutExam();
    }

    function openDefalutExam() {
        setTimeout(function(){
            isAutoClickExample = true;
            $("#myTab li a").first().click();
        },0);
    }

    //��ӵ����¼�
    $('#myTab').click(function (e) {
        if(isAutoClickTab){
            isAutoClickTab = false;
            return;
        }
        e = e || window.event;
        var target = e.target || e.srcElement;
        var eid = target.hash;
        isAutoClickExample = false;
        $(eid + " .span10 li a").first().click();
    });
    //��ӵ����¼�
    $('#myTabContent').click(function (e) {
        if(isAutoClickExample){
            isAutoClickExample = false;
            return;
        }
        e = e || window.event;
        var target = e.target || e.srcElement;
        addFunc(target);
        //��ֹ�����ð��
        if (typeof e.preventDefault === 'function') {
            e.preventDefault();
            e.stopPropagation();
        } else {
            e.returnValue = false;
            e.cancleBubble = true;
        }
    });

    //�ж��Ƿ�Ϊ���ش�
    if (!isFile) {
        $(window).resize(function () {
            var width = $('#container-main').width();
            $("#mapContent").width(width * 0.62);
            $("#code_area").width(width * 0.37);
        });

        $("#code_area").css("display", "block");
        $("#drag").css("display", "block");
        $("#mapContent").css("width", "62%");
        $("#container-main").css("border", "1px solid #3473b7");

        codeChange();
        initCode();
        dragCode();
    }
});


//���ؾ���İ�����
function addFunc(srcEle) {
    activeExample(srcEle);
    if (!isFile) {
        setTimeout(function () {
            initCode();
        }, 200);
    }
    //��ѡ�е�ͼ����������ӵ�url��
    var urlName = $(srcEle).data("name");
    if (location.href.lastIndexOf('#') > 0) {
        location.href = location.href.substring(0, location.href.lastIndexOf('#')) + '#' + urlName;
    }
    else {
        location.href = location.href + '#' + urlName;
    }
}
function activeExample(srcEle) {
    updateClassName(srcEle);
    var $srcEle = $(srcEle);
    $('#sourceCode').prop('url', './' + $srcEle.data("name") + '.html');
    $('#skip').prop('href', './' + $srcEle.data("name") + '.html');
    runExample($srcEle);
}
function updateClassName(ele) {
    /*��Ҫ����ȷ�Ķ�λ*/
    $('.tab-content').find('> .tab-pane  ul > .active').removeClass('active');
    $(ele).parent().addClass('active');
}

function attachScript(url, id) {
    $("#examplesIframe").attr("src", url);
}
function attachDetails(name) {
    var details = DemoDescription[name];
    if (!details.title) {
        details.title = "��������";
    }
    if (!details.desc) {
        details.desc = "�Ա�����������";
    }
    if (!details.oper) {
        details.oper = "��ϸ�Ĳ���˵��";
    }
    $('h3 #demo-title').text(details.title);
    $('#desc').text(details.desc);
    $('#oper').text(details.oper);
}
function runExample(srcEle) {
    var url = './' + srcEle.data("name") + '.html';
    attachScript(url, srcEle.data("name") + "_script");
    attachDetails(srcEle.data("name"));
}