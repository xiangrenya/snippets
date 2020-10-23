function checkEmail(email: string) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    return reg.test(email);
}

function checkPhone(phone: string) {
    var reg = /^1\d{10}$/;
    return reg.test(phone);
}