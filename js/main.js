



let views = document.querySelectorAll('.view');
let home = document.querySelector('#home');


let loop;
let timeouts = [];





makeViews();
init();





function init() {
    makeHomeSentences();
    addClicksOnInstructors();
    showHomePage();
}

function switchLanguage(e) {
    if (firstLanguage === 'en') {
        firstLanguage = 'de',
            secondLanguage = 'en'
    } else {
        firstLanguage = 'en',
            secondLanguage = 'de'
    }

    makeViews();
    clearLoopAndTimeout();
    showView(0);
    init();
}




function clearLoopAndTimeout() {
    clearInterval(loop);
    timeouts.forEach(timeout => clearTimeout(timeout));
    timeouts = [];
}



function showHomePage() {
    home.classList.remove('hidden');

    let firstNavLink = document.querySelector('.mainNavLargeScreen ul li:first-child a');
    firstNavLink.style.color = '#b8761a';

    footerTop.style.paddingTop = '12rem';
}





// add and remove clicks

function addClicksOnInstructors() {
    let instructors = document.querySelectorAll('.instructorLargeScreen');
    instructors.forEach(instructor => instructor.addEventListener('click', showAndHideMoreInfoInstructor));
}

function removeClicksFromInstructors() {
    let instructors = document.querySelectorAll('.instructorLargeScreen');
    instructors.forEach(instructor => instructor.removeEventListener('click', showAndHideMoreInfoInstructor));
}





// show and hide elements

function hideAllViews() {
    views.forEach(view => view.classList.add('hidden'))
}

function showSpecificView(mainNavIndex) {
    views[mainNavIndex].classList.remove('hidden');
}

function showSpecificSectionsComponent(dataName) {
    let component = Array.from(allSectionsComponents).find(component => component.getAttribute('data-name') === dataName);
    component.classList.remove('hidden');
}

function hideAllSectionsComponents() {
    allSectionsComponents.forEach(component => component.classList.add('hidden'));
}



function showSpecificAboutUsComponent(dataName) {
    let component = Array.from(allAboutUsComponents).find(component => component.getAttribute('data-name') === dataName);
    component.classList.remove('hidden');
}

function hideAllAboutUsComponents() {
    allAboutUsComponents.forEach(component => component.classList.add('hidden'));
}



function hideAllInfoInstructors() {
    let allInfoInstructors = document.querySelectorAll('.instructorTextLargeScreen');
    allInfoInstructors.forEach(instructor => {
        instructor.classList.remove('absolutePositionMoreInfoInstructor');
        instructor.classList.remove('showMoreInfoInstructor');
        instructor.classList.add('hidden');
    });

    let allInstructors = document.querySelectorAll('.instructorLargeScreen');
    allInstructors.forEach(instructor => instructor.classList.remove('expandMoreInfoInstructor'));



}





// show view
function showView(arg) {

    hideMainNavSmallScreen();

    window.scrollTo({ top: 0 });

    let mainNavIndex;
    let dataName;
    let thisNavLink;

    if (arg && arg.target) {
        arg.stopPropagation();
        mainNavIndex = Number(this.getAttribute('data-id'));
        dataName = this.getAttribute('data-name');
        thisNavLink = this.querySelector('a');

    } else {
        mainNavIndex = arg;
        thisNavLink = document.querySelector(`.mainNavLargeScreen > ul > li[data-id="${mainNavIndex}"] > a`);
    }


    footerTop.style.paddingTop = '6rem';


    if (mainNavIndex === 0) {
        footerTop.style.paddingTop = '16rem';
    }

    if (mainNavIndex === 2) {
        hideAllSectionsComponents();
        showSpecificSectionsComponent(dataName);
    }

    if (mainNavIndex === 3 && !dataName) {
        showSpecificAboutUsComponent('school');
        showSpecificAboutUsComponent('team');

    } else if (dataName === 'school' || dataName === 'team') {
        hideAllAboutUsComponents();
        showSpecificAboutUsComponent(dataName);
    }

    selectNavLink(thisNavLink, mainNavIndex, dataName);
    hideAllViews();
    showSpecificView(mainNavIndex);

}



function showSectionInChooseYourSection(e) {
    let dataName = this.getAttribute('data-name');
    let dataId = this.getAttribute('data-id');

    hideAllViews();
    showSpecificView(dataId);

    hideAllSectionsComponents();
    showSpecificSectionsComponent(dataName);
}

function findOutMore() {
    showView(3);
}

function anyQuestion() {
    showView(4);
}

function backToSectionsView() {
    showView(1);
}





// select navigation link
function selectNavLink(thisNavLink, mainNavIndex, dataName) {
    let allNavLinks = document.querySelectorAll('.mainNavLargeScreen a');
    allNavLinks.forEach(link => link.style.color = '#fff');

    let allMainNavLinks = document.querySelectorAll('.mainNavLargeScreen > ul > li > a');

    allMainNavLinksSmallScreen.forEach(link => link.style.color = '#fff');

    thisNavLink.style.color = '#b8761a';
    thisNavLink.style.transition = 'color 0.5s ease';

    if (mainNavIndex === 2) {
        allMainNavLinks[1].style.color = '#b8761a';
    }

    if (dataName === 'school' || dataName === 'team') {
        allMainNavLinks[2].style.color = '#b8761a';
    }
}







// scroll up
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

// cover on header if scrollY > 0
window.addEventListener('scroll', function () {
    let header = document.querySelector('header');

    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});








// home - home sentences

function makeHomeSentences() {
    let lang = languages[firstLanguage];

    showAllSentencesOnce();

    loop = setInterval(() => {
        showAllSentencesOnce();
    }, 4500 * lang.homeSentences.length);

}

function showAllSentencesOnce() {
    let lang = languages[firstLanguage];

    for (let i = 0; i < lang.homeSentences.length; i++) {
        let timeout1 = setTimeout(() => {
            homeSentencesText.textContent = lang.homeSentences[i];
            homeSentencesText.style.transform = 'translateX(0px)';
            homeSentencesText.style.transition = 'transform 1.5s ease-out';

            let timeout2 = setTimeout(() => {
                homeSentencesText.style.transform = 'translateX(-700px)';
                homeSentencesText.style.transition = 'transform 1.5s ease-in';
            }, 3000);

            timeouts.push(timeout2);

        }, 4500 * i);

        let timeout3 = setTimeout(() => {
            homeSentencesText.style.transform = 'translateX(700px)';
            homeSentencesText.style.transition = 'none';
        }, 4500 * (i + 1) - 100);

        timeouts.push(timeout1, timeout3);
    }
}




// about us - our team

let allExpandedInstructors = [];

window.addEventListener('resize', function () {
    allExpandedInstructors = [];
    hideAllInfoInstructors();
})


function showAndHideMoreInfoInstructor(e) {
    let thisInstructor = this;

    if (thisInstructor.classList.contains('expandMoreInfoInstructor')) {
        hideMoreInfoInstructor(thisInstructor);
    } else {
        checkAllExpandedInstructors(thisInstructor);
        setTimeout(() => {
            showMoreInfoInstructor(thisInstructor);
        }, 50);
    }
}

function hideMoreInfoInstructor(thisInstructor) {
    let thisInstructorText = thisInstructor.querySelector('.instructorTextLargeScreen');

    thisInstructorText.classList.remove('absolutePositionMoreInfoInstructor');
    thisInstructor.classList.remove('expandMoreInfoInstructor');
    thisInstructorText.classList.remove('showMoreInfoInstructor');
    thisInstructorText.classList.add('hidden');
}

function showMoreInfoInstructor(thisInstructor) {
    allExpandedInstructors.push(thisInstructor);

    let thisInstructorText = thisInstructor.querySelector('.instructorTextLargeScreen');

    removeClicksFromInstructors();
    thisInstructor.classList.add('absolutePositionMoreInfoInstructor');
    thisInstructor.classList.add('expandMoreInfoInstructor');
    thisInstructorText.classList.remove('hidden');

    setTimeout(() => {
        thisInstructorText.classList.add('showMoreInfoInstructor');
        addClicksOnInstructors();
    }, 300);
}

function checkAllExpandedInstructors(thisInstructor) {
    let thisInstructorDataRow = thisInstructor.getAttribute('data-row');
    let instructorInSameRow = allExpandedInstructors.find(el => el.getAttribute('data-row') === thisInstructorDataRow);

    if (instructorInSameRow) {
        hideMoreInfoInstructor(instructorInSameRow);
        allExpandedInstructors = allExpandedInstructors.filter(el => el.getAttribute('data-row') !== thisInstructorDataRow);
    } else {
        allExpandedInstructors.push(thisInstructor);
    }
}


function sendMessage(e) {
    let lang = languages[firstLanguage];
    let sendMessage = lang.button.sendMessage;
    let error = lang.button.error;
    let loading = lang.button.loading;
    let success = lang.button.success;

    if (sendUsMessageHolderForm.checkValidity()) {

        sendUsMessageBtn.textContent = loading;
        sendUsMessageBtn.classList.add('sendUsMessageLoading');

        setTimeout(() => {
            sendUsMessageBtn.classList.remove('sendUsMessageLoading');
            sendUsMessageBtn.classList.add('sendUsMessageSuccess');
            sendUsMessageBtn.textContent = success;

            setTimeout(() => {
                sendUsMessageBtn.classList.remove('sendUsMessageSuccess');
                sendUsMessageBtn.textContent = sendMessage;

                sendUsMessageHolderInputs.forEach(input => input.value = '');
                sendUsMessageHolderTextarea.value = '';
            }, 3000);
        }, 2000);

    } else {

        sendUsMessageBtn.textContent = error;
        sendUsMessageBtn.classList.add('sendUsMessageError');

        setTimeout(() => {
            sendUsMessageBtn.textContent = sendMessage;
            sendUsMessageBtn.classList.remove('sendUsMessageError');
        }, 2000);
    }
}



function showInstructorModal(e) {
    let thisModal = this.nextElementSibling;
    thisModal.style.transform = 'scale(1)';
    thisModal.style.transition = 'transform 0.5s ease';
}

function hideInstructorModal(e) {
    allInstructorModal.forEach(modal => {
        modal.style.transform = 'scale(0)';
        modal.style.transition = 'transform 0s';
    });
}



function showAndHideMainNavSmallScreen(e) {
    mainNavButtonSmallScreen.removeEventListener('click', showAndHideMainNavSmallScreen);

    let img1 = allMainNavButtonImgSmallScreen[0];

    if (img1.className === 'hiddenImg') {
        showMainNavSmallScreen();
    } else {
        hideMainNavSmallScreen();
    }

    setTimeout(() => {
        mainNavButtonSmallScreen.addEventListener('click', showAndHideMainNavSmallScreen);
    }, 500);
}


function showMainNavSmallScreen() {
    mainNavButtonSmallScreen.removeEventListener('click', showAndHideMainNavSmallScreen);

    let img1 = allMainNavButtonImgSmallScreen[0];
    let img2 = allMainNavButtonImgSmallScreen[1];

    // show open main nav button images small screen
    img1.className = '';
    img2.className = 'hiddenImg';

    img2.style.opacity = '0';
    img2.style.transition = 'opacity 0.5s ease';

    setTimeout(() => {
        img1.style.opacity = '1';
        img1.style.transition = 'opacity 1s ease';
    }, 200);

    // show main nav small screen
    mainNavSmallScreen.style.visibility = 'visible';
    mainNavSmallScreen.style.opacity = '1';
    mainNavSmallScreen.style.transition = 'opacity 0.5s ease';

    // add event
    mainNavButtonSmallScreen.addEventListener('click', showAndHideMainNavSmallScreen);
}

function hideMainNavSmallScreen() {
    mainNavButtonSmallScreen.removeEventListener('click', showAndHideMainNavSmallScreen);

    let img1 = allMainNavButtonImgSmallScreen[0];
    let img2 = allMainNavButtonImgSmallScreen[1];

    // show close main nav button images small screen
    img1.className = 'hiddenImg';
    img2.className = '';

    img1.style.opacity = '0';
    img1.style.transition = 'opacity 0.5s ease';

    setTimeout(() => {
        img2.style.opacity = '1';
        img2.style.transition = 'all 1s ease';
    }, 200);

    // hide main nav small screen
    mainNavSmallScreen.style.visibility = 'hidden';
    mainNavSmallScreen.style.opacity = '0';
    mainNavSmallScreen.style.transition = 'opacity 0s ease';

    // add event
    mainNavButtonSmallScreen.addEventListener('click', showAndHideMainNavSmallScreen);
}
