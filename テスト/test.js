
$(function () {

    var inputs = $('input');
    var checked = inputs.filter(':checked').val();

    inputs.on('click', function () {
        if ($(this).val() === checked) {
            $(this).prop('checked', false);
            checked = "";
        } else {
            $(this).prop('checked', true);
            checked = $(this).val();
        }
    })

    var test1 = $('#add-checkbox-01');
    var test2 = $('#add-checkbox-02');
    var test3 = $('#add-checkbox-03');

    test1.on('click', function () {
        if (test1.prop('checked') === true) {
            sessionStorage.setItem('テスト１', true);
            if (sessionStorage.getItem('テスト２') === "true" || sessionStorage.getItem('テスト３') === "true") {
                sessionStorage.removeItem('テスト２');
                sessionStorage.removeItem('テスト３');
            }
        } else if (test1.prop('checked') === false) {
            sessionStorage.removeItem('テスト１');
        }
    })

    test2.on('click', function () {
        if (test2.prop('checked') === true) {
            sessionStorage.setItem('テスト２', true);
            if (sessionStorage.getItem('テスト１') === "true" || sessionStorage.getItem('テスト３') === "true") {
                sessionStorage.removeItem('テスト１');
                sessionStorage.removeItem('テスト３');
            }
        } else if (test2.prop('checked') === false) {
            sessionStorage.removeItem('テスト２');
        }
    })

    test3.on('click', function () {
        if (test3.prop('checked') === true) {
            sessionStorage.setItem('テスト３', true);
            if (sessionStorage.getItem('テスト１') === "true" || sessionStorage.getItem('テスト２') === "true") {
                sessionStorage.removeItem('テスト１');
                sessionStorage.removeItem('テスト２');
            }
        } else if (test3.prop('checked') === false) {
            sessionStorage.removeItem('テスト３');
        }
    })
});

//リロード処理
$(window).on('load', function () {

    if (sessionStorage.getItem('テスト１') === "true") {
        $('#add-checkbox-01').prop('checked', true);
    } else if (sessionStorage.getItem('テスト２') === "true") {
        $('#add-checkbox-02').prop('checked', true);
    } else if (sessionStorage.getItem('テスト３') === "true") {
        $('#add-checkbox-03').prop('checked', true);
    }


})