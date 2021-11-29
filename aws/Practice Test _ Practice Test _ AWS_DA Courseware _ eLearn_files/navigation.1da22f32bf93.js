var edx = edx || {},

    Navigation = (function() {
        var navigation = {

            init: function() {
                if ($('.accordion').length) {
                    navigation.loadAccordion();
                }
            },

            loadAccordion: function() {
                navigation.checkShowMenu();
                navigation.checkForCurrent();
                navigation.listenForClick();
                navigation.listenForKeypress();
            },

            checkShowMenu: function () {
                let courseIndex = $('.course-index');
                let showMenu = localStorage.getItem('showMenu');
                if (showMenu === 'true' || showMenu === null) {
                    courseIndex.removeClass('hide-container');
                    $('.accordion-show-btn').hide();
                } else {
                    courseIndex.addClass('hide-container');
                    $('.accordion-show-btn').show();
                }
            },

            getActiveIndex: function() {
                var index = $('.accordion .button-chapter:has(.active)').index('.accordion .button-chapter'),
                    button = null;

                if (index > -1) {
                    button = $('.accordion .button-chapter:eq(' + index + ')');
                }

                return button;
            },

            checkForCurrent: function() {
                var button = navigation.getActiveIndex();

                navigation.closeAccordions();

                if (button !== null) {
                    navigation.setupCurrentAccordionSection(button);
                }
            },

            listenForClick: function() {
                let courseIndex = $('.course-index');
                let accordionToggle = $('.accordion-mobile-toggle-btn');

                $('.accordion').on('click', '.button-chapter', function(event) {
                    event.preventDefault();

                    var $button = $(event.currentTarget),
                        section = $button.next('.chapter-content-container');

                    navigation.closeAccordions($button, section);
                    navigation.openAccordion($button, section);
                });

                $('.accordion-hide-btn').click(() => {
                   courseIndex.addClass('hide-container');
                    $('.accordion-show-btn').show();
                    localStorage.setItem('showMenu', false);
                });

                $('.accordion-show-btn').click(() => {
                    courseIndex.removeClass('hide-container');
                    $('.accordion-show-btn').hide();
                    localStorage.setItem('showMenu', true);
                });

                $('.course-index-mobile').click(() => {
                    if(courseIndex.css('display') === 'none') {
                        accordionToggle.addClass('fa-angle-down').removeClass('fa-angle-up');
                        $('body').addClass('body-darken');
                        courseIndex.addClass('show-container');
                    } else {
                        accordionToggle.addClass('fa-angle-up').removeClass('fa-angle-down');
                        $('body').removeClass('body-darken');
                        courseIndex.removeClass('show-container');
                    }
                });

                $("body").click(event => {
                // $('body').click((event) => {
                    if ($('body').hasClass('body-darken')
                        && !$(event.target).closest('.course-index').length
                        && !$(event.target).closest('.course-index-mobile').length) {
                        accordionToggle.addClass('fa-angle-up').removeClass('fa-angle-down');
                        $('body').removeClass('body-darken');
                        courseIndex.removeClass('show-container');
                    }
                });

                $(".page-header-search .search-form .search-button").click(() => {
                    let $headerSearch = $('.page-header-search');
                    if ($headerSearch.find('.search-input').val().trim()) {
                        $headerSearch.find('.search-form').submit();
                    }
                });
            },

            listenForKeypress: function() {
                $('.accordion').on('keydown', '.button-chapter', function(event) {
                    // because we're changing the role of the toggle from an 'a' to a 'button'
                    // we need to ensure it has the same keyboard use cases as a real button.
                    // this is useful for screenreader users primarily.
                    if (event.which == 32) { // spacebar
                        event.preventDefault();
                        $(event.currentTarget).trigger('click');
                    } else {
                        return true;
                    }
                });
            },

            closeAccordions: function(button, section) {
                var menu = $(section).find('.chapter-menu'),
                    toggle;

                $('.accordion .button-chapter').each(function(index, element) {
                    $toggle = $(element);

                    $toggle
                        .removeClass('is-open')
                        .attr('aria-expanded', 'false');

                    $toggle
                        .children('.group-heading')
                        .removeClass('active')
                        .find('.icon')
                            .addClass('fa-angle-right')
                            .removeClass('fa-angle-down');

                    $toggle
                        .next('.chapter-content-container')
                        .removeClass('is-open')
                        .find('.chapter-menu').not(menu)
                            .removeClass('is-open')
                            .slideUp();
                });
            },

            setupCurrentAccordionSection: function(button) {
                var section = $(button).next('.chapter-content-container');

                navigation.openAccordion(button, section);
            },

            openAccordion: function(button, section) {
                var $sectionEl = $(section),
                    firstLink = $sectionEl.find('.menu-item').first(),
                    $buttonEl = $(button);

                $buttonEl
                    .addClass('is-open')
                    .attr('aria-expanded', 'true');

                $buttonEl
                    .children('.group-heading')
                    .addClass('active')
                    .find('.icon')
                        .removeClass('fa-angle-right')
                        .addClass('fa-angle-down');

                $sectionEl
                    .addClass('is-open')
                    .find('.chapter-menu')
                        .addClass('is-open')
                        .slideDown();
            }
        };

        return {
            init: navigation.init
        };
    }());

edx.util = edx.util || {};
edx.util.navigation = Navigation;
edx.util.navigation.init();
