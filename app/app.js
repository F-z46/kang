require('../less/app.less');

window.onload = function() {
    let person = ['kevin', 'mark', 'iven'];
    let ul = this.document.createElement('ul');
    person.map(v => {
        let li = this.document.createElement('li');
        li.textContent = v;
        ul.appendChild(li);
    })
    document.body.appendChild(ul);
}