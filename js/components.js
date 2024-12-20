


let app = document.getElementById('app');
let header = document.querySelector('header');
let main = document.querySelector('main');
let footer = document.querySelector('footer');


let mainHomeView = document.querySelector('main #home');
let mainSectionsView = document.querySelector('main #sections');
let mainSectionsNavigationView = document.querySelector('main #sectionsNavigation');
let mainAboutUsView = document.querySelector('main #aboutUs');
let mainAboutUsNavigationView = document.querySelector('main #aboutUsNavigation');
let mainContactView = document.querySelector('main #contact');


let firstLanguage = 'en';
let secondLanguage = 'de';


let allMainNavLinks;
let languageSwitcher;
let languageSwitcherSmallScreen;
let homeSentencesText;
let anyQuestionHolder;
let allSectionsComponents;
let allAboutUsComponents;
let chooseYourSectionImg;
let footerTop;
let findOutMoreBtn;
let anyQuestionBtn;
let sendUsMessageBtn;
let sendUsMessageHolderForm;
let sendUsMessageHolderInputs;
let sendUsMessageHolderTextarea;
let allContactLinks;
let allInstructorSmallScreen;
let allCloseInstructorModalButton;
let allInstructorModal;
let mainNavButtonSmallScreen;
let allMainNavButtonImgSmallScreen;
let mainNavSmallScreen;
let allMainNavListSmallScreen;
let allMainNavLinksSmallScreen;
let backToSections;









function makeMain(view) {
    view.innerHTML = mainString;
    mainString = '';
}



function makeViews() {
    header.innerHTML = '';
    mainHomeView.innerHTML = '';
    mainSectionsView.innerHTML = '';
    mainSectionsNavigationView.innerHTML = '';
    mainAboutUsView.innerHTML = '';
    mainContactView.innerHTML = '';
    footer.innerHTML = '';





    // header
    header.innerHTML += makeHeaderLargeScreen();
    header.innerHTML += makeHeaderSmallScreen();

    // footer
    footer.innerHTML += makeFooterTopAndBottom();

    // home view
    mainHomeView.innerHTML += makeHomeBackgroundHolder();
    mainHomeView.innerHTML += makeChooseYourSectionHolder();
    mainHomeView.innerHTML += makeHomeSentencesHolder();
    mainHomeView.innerHTML += makeAnyQuestionHolder();

    // sections view
    mainSectionsView.innerHTML += makeBackgroundHolder();
    mainSectionsView.innerHTML += makeChooseYourSectionHolder();

    // sections navigation view
    mainSectionsNavigationView.innerHTML += makeBackgroundHolder();
    mainSectionsNavigationView.innerHTML += makeSections();

    // about us view
    mainAboutUsView.innerHTML += makeBackgroundHolder();
    mainAboutUsView.innerHTML += makeAboutSchoolHolder();
    mainAboutUsView.innerHTML += makeOurTeamHolder();    

    // contact view
    mainContactView.innerHTML += makeBackgroundHolder();
    mainContactView.innerHTML += makeContactDetailsHolder();
    mainContactView.innerHTML += makeSendUsMessageHolder();
    mainContactView.innerHTML += makeFindUsHereHolder();





    homeSentencesText = document.querySelector('.homeSentenceHolder p');
    anyQuestionHolder = document.getElementById('anyQuestionHolder');
    allSectionsComponents = document.querySelectorAll('.sectionsComponent');
    allAboutUsComponents = document.querySelectorAll('.aboutUsComponent');
    footerTop = document.querySelector('.footerTop');
    sendUsMessageHolderForm = document.querySelector('.sendUsMessageHolder form');
    sendUsMessageHolderInputs = document.querySelectorAll('.sendUsMessageHolder input');
    sendUsMessageHolderTextarea = document.querySelector('.sendUsMessageHolder textarea');
    allInstructorModal = document.querySelectorAll('.instructorModalSmallScreen');
    allMainNavButtonImgSmallScreen = document.querySelectorAll('.mainNavButtonSmallScreen img');
    mainNavSmallScreen = document.querySelector('.mainNavSmallScreen');
    allMainNavLinksSmallScreen = document.querySelectorAll('.mainNavSmallScreen a');




    languageSwitcher = document.querySelector('.subMenuLanguage > li');
    languageSwitcher.addEventListener('click', switchLanguage);

    languageSwitcherSmallScreen = document.querySelectorAll('.languageSwitcherSmallScreen li');
    languageSwitcherSmallScreen.forEach(switcher => switcher.addEventListener('click', switchLanguage));

    allMainNavLinks = document.querySelectorAll('.mainNavLargeScreen li');
    allMainNavLinks.forEach(link => link.addEventListener('click', showView));

    chooseYourSectionImg = document.querySelectorAll('.chooseYourSectionImg');
    chooseYourSectionImg.forEach(img => img.addEventListener('click', showSectionInChooseYourSection));

    findOutMoreBtn = document.querySelector('.findOutMoreBtn');
    findOutMoreBtn.addEventListener('click', findOutMore);

    anyQuestionBtn = document.querySelector('.anyQuestionBtn');
    anyQuestionBtn.addEventListener('click', anyQuestion);

    sendUsMessageBtn = document.querySelector('.sendUsMessageBtn');
    sendUsMessageBtn.addEventListener('click', sendMessage);

    mainNavButtonSmallScreen = document.querySelector('.mainNavButtonSmallScreen');
    mainNavButtonSmallScreen.addEventListener('click',showAndHideMainNavSmallScreen);

    allInstructorSmallScreen = document.querySelectorAll('.instructorSmallScreen');
    allInstructorSmallScreen.forEach(instructor => instructor.addEventListener('click', showInstructorModal));

    allCloseInstructorModalButton = document.querySelectorAll('.closeInstructorModalButton');
    allCloseInstructorModalButton.forEach(closeBtn => closeBtn.addEventListener('click', hideInstructorModal));

    allMainNavListSmallScreen = document.querySelectorAll('.mainNavSmallScreen li');
    allMainNavListSmallScreen.forEach(link => link.addEventListener('click',showView));

    backToSections = document.querySelectorAll('.backToSections');
    backToSections.forEach(back => back.addEventListener('click', backToSectionsView));



}







// header component
// ==================================================================================================


function makeHeaderLargeScreen() {
    let lang = languages[firstLanguage];

    return `
        <div class="headerLargeScreen">
            <div class="logoLargeScreen">
                <img src="images/icons/logo icon.png" alt="music school logo">
                <div>
                    <span>Harmonious Heights</span>
                    <span>${lang.homeHeading}</span>
                </div>
            </div>

            <nav class="mainNavLargeScreen">
                <ul>
                    <li data-id="0" ><a href="#">${lang.nav.main.home}</a></li>
                    <li data-id="1" class="mainMenu"><a href="#">${lang.nav.main.sections}</a>
                        <ul class="subMenu sectionsSubMenu">
                            <li data-id="2" data-name="${lang.nav.sections.piano.dataId}"><a href="#">${lang.nav.sections.piano.title}</a></li>
                            <li data-id="2" data-name="${lang.nav.sections.guitar.dataId}"><a href="#">${lang.nav.sections.guitar.title}</a></li>
                            <li data-id="2" data-name="${lang.nav.sections.violin.dataId}"><a href="#">${lang.nav.sections.violin.title}</a></li>
                            <li data-id="2" data-name="${lang.nav.sections.musicTheory.dataId}"><a href="#">${lang.nav.sections.musicTheory.title}</a></li>
                            <li data-id="2" data-name="${lang.nav.sections.percussion.dataId}"><a href="#">${lang.nav.sections.percussion.title}</a></li>
                            <li data-id="2" data-name="${lang.nav.sections.vocalTraining.dataId}"><a href="#">${lang.nav.sections.vocalTraining.title}</a></li>
                        </ul>
                    </li>
                    <li data-id="3" class="mainMenu"><a href="#">${lang.nav.main.aboutUs}</a>
                        <ul class="subMenu aboutUsSubMenu">
                            <li data-id="3" data-name="${lang.nav.aboutUs.aboutTheSchool.dataId}"><a href="#">${lang.nav.aboutUs.aboutTheSchool.title}</a></li>
                            <li data-id="3" data-name="${lang.nav.aboutUs.ourTeam.dataId}"><a href="#">${lang.nav.aboutUs.ourTeam.title}</a></li>
                        </ul>             
                    </li>
                    <li data-id="4"><a href="#">${lang.nav.main.contact}</a></li>
                </ul>
            </nav>

            <div class="socialMediaAndLanguageSwitcher">
                <div class="socialMedia">
                    <a href="https://youtube.com">
                        <img src="images/icons/youtube icon.png" alt="Visit our YouTube channel">
                    </a>
                    <a href="https://twitter.com">
                        <img src="images/icons/twitter icon.png" alt="Follow us on Twitter for the latest updates.">
                    </a>
                    <a href="https://facebook.com">
                        <img src="images/icons/facebook icon.png" alt="Connect with us on Facebook to stay informed">
                    </a>
                </div>

                <nav class="languageSwitcher">
                    <ul>
                        <li><a class="mainMenuLanguage" href="#">
                            <span>${languages[firstLanguage].nav.main.language}</span></a>
                            <ul class="subMenuLanguage">
                                <li><a href="#">${languages[secondLanguage].nav.main.language}</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
                
            </div>
        </div>
        
    `;
}


function makeHeaderSmallScreen() {
    let lang = languages[firstLanguage];

    return `
        <div class="headerSmallScreen">
            <div class="logoHolderSmallScreen">
                <img src="images/icons/logo icon.png" alt="music school logo">
                <div>
                    <span>Harmonious Heights</span>
                    <span>${lang.homeHeading}</span>
                </div>
            </div>

            <div class="mainNavButtonHolderSmallScreen">
                <div class="mainNavButtonSmallScreen">
                    <img class="hiddenImg" src="images/icons/menu2.png" alt="close menu">
                    <img src="images/icons/menu1.png" alt="open menu">
                </div>

                <nav class="mainNavSmallScreen">
                    <ul>
                        <li data-id="0" ><a href="#">${lang.nav.main.home}</a></li>
                        <li data-id="1" class="mainMenu"><a href="#">${lang.nav.main.sections}</a></li>
                        <li data-id="3" class="mainMenu"><a href="#">${lang.nav.main.aboutUs}</a></li>
                        <li data-id="4"><a href="#">${lang.nav.main.contact}</a></li>

                        <div class="languageSwitcherSmallScreen">
                            <ul>
                                <li><a href="#">${languages[secondLanguage].nav.main.language}</a></li>
                            </ul>
                        </div>
                    </ul>
                </nav>
            </div>



        </div>
    `;
}





// main components
// ==================================================================================================



function makeHomeBackgroundHolder() {
    let lang = languages[firstLanguage];
    let homeHeading = lang.homeHeading;
    let homeText = lang.homeText;
    let findOutMore = lang.button.findOutMore;

    return `
        <div class="homeBackground">
            <div class="homeBackgroundContent">
                <h1>
                    <span class="headingWhite">${homeHeading}</span> <br>
                    <span class="headingGold">Harmonious Heights</span>
                </h1>
                <p>${homeText}</p>
                <button data-id="3" class="findOutMoreBtn btn">${findOutMore}</button>
            </div>
        </div>
    `;
}



function makeBackgroundHolder() {
    return `
        <div class="headerBackground"></div>
    `;
}



function makeChooseYourSectionHolder() {
    let lang = languages[firstLanguage];
    let chooseYourSection = lang.titles.chooseYourSection;

    let text = '';

    for (let key in lang.chooseYourSection) {

        let image = lang.chooseYourSection[key].image;
        let title = lang.chooseYourSection[key].title;
        let dataId = lang.chooseYourSection[key].dataId;

        text += `
            <a data-id="2" data-name="${dataId}" class="section chooseYourSectionImg" href="#">
                <img src="${image}" alt="section image">
                <h3 class="subTitle">${title}</h3>
            </a>
        `;
    }

    return `
        <div class="chooseYourSection marginTop">
            <h2 class="mainTitle">${chooseYourSection}</h2>
            <div class="sectionsHolder width1">
               ${text}
            </div>
        </div>
    `;
}



function makeHomeSentencesHolder() {
    return `
        <div class="homeSentences marginTop">
            <div class="homeSentenceHolder">
                <p></p>
            </div>
        </div>
    `;
}



function makeAnyQuestionHolder() {
    let lang = languages[firstLanguage];
    let anyQuestionText = lang.anyQuestionText;
    let contact = lang.button.contact;

    return `
        <div class="anyQuestion">
            <div class="anyQuestionHolder width1">
                <p>${anyQuestionText}</p>
                <button data-id="4" class="anyQuestionBtn btn">
                    <span>${contact}</span>
                </button>
            </div>
        </div>
    `;
}



function makeAboutSchoolHolder() {
    let lang = languages[firstLanguage];

    let aboutTheSchoolArray = lang.aboutTheSchool;

    let dataId = lang.nav.aboutUs.aboutTheSchool.dataId;
    let aboutTheSchool = lang.titles.aboutTheSchool;

    let text = '';

    aboutTheSchoolArray.forEach(el => text += `<p class="width1">${el}</p>`)

    return `
        <div data-name="${dataId}" class="aboutUsComponent aboutTheSchool marginTop marginBottom">
            <h2 class="mainTitle">${aboutTheSchool}</h2>
            ${text}
            <img class="width1" src="images/background/bg7.jpeg" alt="school image">
        </div>
    `;
}


function makeOurTeamHolder() {
    let lang = languages[firstLanguage];

    let text1 = '';
    let text2 = '';

    for (key in lang.ourTeam) {

        let classPosition = lang.ourTeam[key].classPosition;
        let dataRow = lang.ourTeam[key].dataRow;
        let img = lang.ourTeam[key].img;
        let name = lang.ourTeam[key].name;
        let section = lang.ourTeam[key].section;
        let about = lang.ourTeam[key].about;
        let bacisInfo = lang.ourTeam[key].basicInfo;

        text1 += `
            <div class="instructorHolderLargeScreen">   
                <div data-row="${dataRow}" class="instructorLargeScreen ${classPosition}">
                    <div class="instructorImgLargeScreen">
                        <img src="${img}" alt="instructor image">
                        <h3>${name}</h3>
                        <h4>${section}</h3>
                    </div>
                    <div class="instructorTextLargeScreen hidden">
                        <p>${about}</p>
                    </div>
                </div>
            </div>
        `;

        text2 += `
            <div class="instructorSmallScreen">
                <div class="instructorImgSmallScreen">
                    <img src="${img}" alt="instructor image">
                    <h3>${name}</h3>
                    <h4>${section}</h3>
                </div>
            </div>

            <div class="instructorModalSmallScreen width1">
                <div class="instructorModalTopSmallScreen">
                    <img src="${img}" alt="instructor image">

                    <div class="instructorModalTopNameSmallScreen">
                        <h3>${name}</h3>
                        <p>${bacisInfo}</p>
                    </div>
                </div>

                <div class="instructorModalBottomSmallScreen">
                    <p>${about}</p>
                </div>

                <button class="closeInstructorModalButton">X</button>
            </div>
    `;

    }

    return `
        <div data-name="${lang.nav.aboutUs.ourTeam.dataId}" class="aboutUsComponent ourTeam marginTop">
            <h2 class="mainTitle">${lang.titles.ourTeam}</h2>

            <div class="teamHolderLargeScreen width1">
                ${text1}
            </div>

            <div class="teamHolderSmallScreen width1">
                ${text2}
            </div>
        </div>
    `;
}



function makeSections() {
    let lang = languages[firstLanguage];

    let text = '';

    for (let key in lang.sections) {

        let id = lang.sections[key].id;
        let dataId = lang.sections[key].dataId;
        let title = lang.sections[key].title;
        let description = lang.sections[key].description;
        let startDate = lang.sections[key].startDate;
        let instructorName = lang.sections[key].instructorName;
        let instructorDescription = lang.sections[key].instructorDescription;
        let image = lang.sections[key].image;

        let descriptionTitle = lang.sectionsTitles.description;
        let startDateTitle = lang.sectionsTitles.startDate;
        let instructorTitle = lang.sectionsTitles.instructor;


        text += `
            <div id="${id}" data-name="${dataId}" class="sectionsComponent oneSection marginTop width1 hidden">
                <img data-id="1" class="backToSections" src="images/icons/back.png" alt="back">
                <div class="oneSectionContent">
                    <div class="oneSectionText">
                        <div class="oneSectionTextMainTitle">
                            <h2>${title}</h2>
                        </div>

                        <div class="oneSectionTextOneSectionTitle">
                            <h4 class="oneSectionTitle">${descriptionTitle}</h4>
                            <p>${description}</p>

                            <h4 class="oneSectionTitle">${startDateTitle}</h4>
                            <p>${startDate}</p>

                            <h4 class="oneSectionTitle">${instructorTitle}</h4>
                            <p>${instructorName}${instructorDescription}</p>
                        </div> 
                    </div>

                    <div class="oneSectionImage">
                        <img src="${image}" alt="section instrument image">
                    </div>
                </div>


            </div>
            
        `;
    }

    return text;
}



function makeContactDetailsHolder() {
    let lang = languages[firstLanguage];
    let contactDetails = lang.titles.contactDetails;

    let text = '';

    for (let key in lang.contactDetails) {

        let title = lang.contactDetails[key].title;
        let image = lang.contactDetails[key].image;
        let href = lang.contactDetails[key].href;

        text += `
            <div>
                <img src="${image}" alt="contact icon">
                <a ${href}">${title}</a>
            </div>
        `;
    }

    return `
        <div class="contactComponent marginTop marginBottom width1">
            <div class="contactDetailsHolder">
                <h2 class="mainTitle">${contactDetails}</h2>
                <div class="contacts">
                    ${text}
                </div>
            </div>
        </div>
        `;
}



function makeSendUsMessageHolder() {
    let lang = languages[firstLanguage];

    let name = lang.sendUsMessage.placeholder.nameInput;
    let email = lang.sendUsMessage.placeholder.emailInput;
    let typeYourMessage = lang.sendUsMessage.placeholder.textarea;

    let sendMessage = lang.button.sendMessage;
    let sendUsMessage = lang.titles.sendUsMessage;

    return `
        <div class="contactComponent marginTop marginBottom">
            <div class="sendUsMessageHolder">
                <h2 class="mainTitle">${sendUsMessage}</h2>
                <form>
                    <input type="text" placeholder="${name}" required>
                    <input type="email" placeholder="${email}" required>
                    <textarea rows="5" placeholder="${typeYourMessage}" required></textarea> 
                    <button type="button" class="btn sendUsMessageBtn">${sendMessage}</button>
                </form>
            </div>
        </div>
    `;
}



function makeFindUsHereHolder() {
    let lang = languages[firstLanguage];
    let findUsHere = lang.titles.findUsHere;

    return `
        <div class="contactComponent marginTop">
            <div class="findUsHereHolder">
                <h2 class="mainTitle">${findUsHere}</h2>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537353153166!3d-37.81627997975161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577e76c256e1ef7!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1673498827925!5m2!1sen!2sau"
                    width="600"
                    height="450"
                    style="border:0;"
                </iframe>
            </div>
        </div>
    `;
}









// footer component
// ==================================================================================================


function makeFooterTopAndBottom() {
    let lang = languages[firstLanguage];

    let contact = lang.titles.contact;
    let operatingHours = lang.titles.operatingHours;
    let followUs = lang.titles.followUs;

    let footerText = lang.footer.footerText;


    let text1 = ''

    for (let key in lang.footer.contact) {

        let text = lang.footer.contact[key].text;
        let image = lang.footer.contact[key].image;

        text1 += `
            <p>
                <img src="${image}" alt="map icon">
                ${text}
            </p>
        `;

    }


    let text2 = '';

    for (let key in lang.footer.operatingHours) {

        let text = lang.footer.operatingHours[key].text;
        let image = lang.footer.operatingHours[key].image;

        text2 += `
            <p>
                <img src="${image}" alt="operating hours icon">
                ${text}
            </p>
        `;

    }


    return `
         <div class="footerTopAndBottom marginTop">
            <div class="footerTop width2">
                <div class="contact">
                    <h4>${contact}</h4>
                    <div class="contactHolder">
                        ${text1}
                    </div>
                </div>
    
                <div class="operatingHours">
                    <h4>${operatingHours}</h4>
                    <div class="operatingHoursHolder">
                        ${text2}
                    </div>
                </div>

                <div class="socialMedia socialMediaFooter">
                    <h4>${followUs}</h4>
                    <div class="socialMediaFooterHolder">
                        <a href="https://youtube.com">
                            <img src="images/icons/youtube icon.png" alt="youtube.com">
                        </a>
                        <a href="https://twitter.com">
                            <img src="images/icons/twitter icon.png" alt="twitter.com">
                        </a>
                        <a href="https://facebook.com">
                            <img src="images/icons/facebook icon.png" alt="facebook.com">
                        </a>
                    </div>
                </div>
            </div>



            <div id="footerBottom">
                <p>${footerText}</p>
            </div>
        </div>
    `;

}