var html_node = document.getElementsByTagName('html')[0];
var div = document.createElement('div');
div.setAttribute('id', 'slow-notice');
div.setAttribute('style', 'text-align: center; width: 100%; position: absolute; z-index: 99999; top: 0px;');
var slowLoad = window.setTimeout(function () {
    var div2 = document.createElement('div');
    var ct = document.createElement('center');
    var t1 = document.createTextNode("The website is taking a long time to load.");
    var br = document.createElement('br');
    var t2 = document.createTextNode("You can reload this page by ");
    var a = document.createElement('a');
    a.setAttribute('href', document.URL);
    a.innerHTML = 'CLICK HERE';
    var dismiss = document.createElement('span');
    dismiss.innerHTML = '[x] dismiss';
    dismiss.setAttribute('class', 'dismiss');
    dismiss.setAttribute('style', 'float: right; margin-right: 3px; cursor: pointer;');
    dismiss.onclick = function () {
        html_node.removeChild(div);
        document.body.style = 'margin-bottom: 30px;';
    };
    document.body.style = 'margin-bottom: 30px;margin-top: 45px;';
    var dismiss_container = document.createElement('div');
    dismiss_container.appendChild(dismiss);
    dismiss_container.setAttribute('class', 'dismiss-container');
    div2.setAttribute('style', 'text-align: center; width: 320px; background: #F0DE7D; height: 45px;');
    div.appendChild(ct);
    ct.appendChild(div2);
    div2.appendChild(t1);
    div2.appendChild(br);
    div2.appendChild(t2);
    div2.appendChild(a);
    div2.appendChild(dismiss_container);
    html_node.appendChild(div);
}, 5000);

window.addEventListener('load', function () {
    try {
        document.body.style = 'margin-bottom: 30px;';
        window.clearTimeout(slowLoad);
        html_node.removeChild(div);
    } catch (e) {
    }
});