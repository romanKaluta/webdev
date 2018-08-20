
function setHoveredImg(pic, index) {
	pic.src = 'img/offers/hover' + index + '.png';
}

function setNormalImg(pic, index) {
	pic.src = 'img/offers/' + index + '.png';
}

function setSocialImg(pic, name, active) {
	pic.src = 'img/social_network/' + (active ? name + '_active' : name) + '.png';
}