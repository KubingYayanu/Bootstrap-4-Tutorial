$(function () {

    //#region Components - Alert
    $('.close-alert').click(function (e) {
        //bootstrap js alert('close')
        $('.alert').alert('close');
    });

    //bootstrap js 'close.bs.alert' event, fire on alert closing
    $('.alert').on('close.bs.alert', function () {
        console.log('close alert');
    });

    //bootstrap js 'closed.bs.alert' event, fire on alert closed
    $('.alert').on('closed.bs.alert', function () {
        console.log('closed alert');
    });
    //#endregion Components - Alert
    
});