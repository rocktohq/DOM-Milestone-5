// const flowers = document.getElementsByClassName('flower');

// for (const flower of flowers) {
//     flower.addEventListener('click', function (event) {
// console.log(flower.innerText);
// console.log(event.target.innerText);
// console.log(event.target.parentNode);

// Remove clicked child/element
//         event.target.parentNode.removeChild(event.target);
//     });
// }


// Best way to remove element
document.getElementById('flower-list').addEventListener('click', function (event) {
    // this.removeChild(event.target)
    event.target.parentNode.removeChild(event.target);
})

// Add new flower
document.getElementById('btn-add-flower').addEventListener('click', function () {
    const flowerList = document.getElementById('flower-list');
    const li = document.createElement('li');
    li.innerText = 'Newly added flower';
    li.classList.add('flower');

    flowerList.appendChild(li);
});