(function(e) {
    function t(t) {
        for (var s, r, o = t[0], l = t[1], c = t[2], u = 0, m = []; u < o.length; u++)
            r = o[u],
            Object.prototype.hasOwnProperty.call(a, r) && a[r] && m.push(a[r][0]),
            a[r] = 0;
        for (s in l)
            Object.prototype.hasOwnProperty.call(l, s) && (e[s] = l[s]);
        d && d(t);
        while (m.length)
            m.shift()();
        return n.push.apply(n, c || []),
        i()
    }
    function i() {
        for (var e, t = 0; t < n.length; t++) {
            for (var i = n[t], s = !0, o = 1; o < i.length; o++) {
                var l = i[o];
                0 !== a[l] && (s = !1)
            }
            s && (n.splice(t--, 1),
            e = r(r.s = i[0]))
        }
        return e
    }
    var s = {}
      , a = {
        app: 0
    }
      , n = [];
    function r(t) {
        if (s[t])
            return s[t].exports;
        var i = s[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(i.exports, i, i.exports, r),
        i.l = !0,
        i.exports
    }
    r.m = e,
    r.c = s,
    r.d = function(e, t, i) {
        r.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: i
        })
    }
    ,
    r.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    r.t = function(e, t) {
        if (1 & t && (e = r(e)),
        8 & t)
            return e;
        if (4 & t && "object" === typeof e && e && e.__esModule)
            return e;
        var i = Object.create(null);
        if (r.r(i),
        Object.defineProperty(i, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var s in e)
                r.d(i, s, function(t) {
                    return e[t]
                }
                .bind(null, s));
        return i
    }
    ,
    r.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e["default"]
        }
        : function() {
            return e
        }
        ;
        return r.d(t, "a", t),
        t
    }
    ,
    r.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    r.p = "/";
    var o = window["webpackJsonp"] = window["webpackJsonp"] || []
      , l = o.push.bind(o);
    o.push = t,
    o = o.slice();
    for (var c = 0; c < o.length; c++)
        t(o[c]);
    var d = l;
    n.push([0, "chunk-vendors"]),
    i()
}
)({
    0: function(e, t, i) {
        e.exports = i("56d7")
    },
    "234a": function(e, t, i) {
        e.exports = i.p + "img/work-env-1.72287673.jpg"
    },
    5050: function(e, t, i) {},
    "56d7": function(e, t, i) {
        "use strict";
        i.r(t);
        var s = i("2b0e")
          , a = function() {
            var e = this
              , t = e._self._c;
            return t("div", {
                attrs: {
                    id: "app"
                }
            }, [t("router-view")], 1)
        }
          , n = []
          , r = {
            name: "App",
            data() {
                return {
                    preferredLang: this.$route.params.lang
                }
            }
        }
          , o = r
          , l = (i("6562"),
        i("2877"))
          , c = Object(l["a"])(o, a, n, !1, null, null, null)
          , d = c.exports
          , u = (i("14d9"),
        i("8c4f"))
          , m = function() {
            var e = this
              , t = e._self._c;
            return t("div", [t("section", {
                staticClass: "nav-wrapper",
                class: {
                    fixed: e.isNavFixed
                }
            }, [t("nav", {
                class: {
                    "hide-nav": e.foldNav
                }
            }, [t("h1", {
                staticClass: "logo-wrap",
                on: {
                    click: function(t) {
                        return e.updateNav(0, !0)
                    }
                }
            }, [t("router-link", {
                attrs: {
                    id: "logo",
                    to: "/en/#intro"
                }
            }, [t("img", {
                attrs: {
                    alt: "Recreate",
                    src: i("6f08")
                }
            })])], 1), t("div", {
                staticClass: "normal-nav"
            }, [t("p", {
                staticClass: "nav-right"
            }, [t("router-link", {
                attrs: {
                    to: "/zh"
                }
            }, [e._v("中文")])], 1), t("ul", {
                staticClass: "nav-items"
            }, [t("li", {
                staticClass: "nav-item",
                class: {
                    active: 0 === e.activatedNavItem
                },
                on: {
                    click: function(t) {
                        return e.updateNav(0, !0)
                    }
                }
            }, [t("router-link", {
                attrs: {
                    to: "/en/#intro"
                }
            }, [e._v("Intro")])], 1), t("li", {
                staticClass: "nav-item",
                class: {
                    active: 1 === e.activatedNavItem
                },
                on: {
                    click: function(t) {
                        return e.updateNav(1, !0)
                    }
                }
            }, [t("router-link", {
                attrs: {
                    to: "/en/#about"
                }
            }, [e._v("About")])], 1), t("li", {
                staticClass: "nav-item",
                class: {
                    active: 2 === e.activatedNavItem
                },
                on: {
                    click: function(t) {
                        return e.updateNav(2, !0)
                    }
                }
            }, [t("router-link", {
                attrs: {
                    to: "/en/#careers"
                }
            }, [e._v("Careers")])], 1), t("li", {
                staticClass: "nav-item",
                class: {
                    active: 3 === e.activatedNavItem
                },
                on: {
                    click: function(t) {
                        return e.updateNav(3, !0)
                    }
                }
            }, [t("router-link", {
                attrs: {
                    to: "/en/#contact"
                }
            }, [e._v("Contact")])], 1)])]), t("div", {
                staticClass: "nav-btn",
                on: {
                    click: function(t) {
                        return e.toggleMobileNav(t)
                    }
                }
            }, [t("a", {
                staticClass: "btn-lines"
            })])]), t("div", {
                staticClass: "mobile-nav",
                class: {
                    show: e.isShowMobileNav && e.foldNav
                }
            }, [t("ul", {
                staticClass: "mobile-nav-list"
            }, [t("li", {
                staticClass: "mobile-nav-item",
                on: {
                    click: function(t) {
                        return e.updateNav(0, !0)
                    }
                }
            }, [t("router-link", {
                attrs: {
                    to: "/en/#intro"
                }
            }, [e._v("Intro")])], 1), t("li", {
                staticClass: "mobile-nav-item",
                on: {
                    click: function(t) {
                        return e.updateNav(1, !0)
                    }
                }
            }, [t("router-link", {
                attrs: {
                    to: "/en/#about"
                }
            }, [e._v("About")])], 1), t("li", {
                staticClass: "mobile-nav-item",
                on: {
                    click: function(t) {
                        return e.updateNav(2, !0)
                    }
                }
            }, [t("router-link", {
                attrs: {
                    to: "/en/#careers"
                }
            }, [e._v("Careers")])], 1), t("li", {
                staticClass: "mobile-nav-item",
                on: {
                    click: function(t) {
                        return e.updateNav(3, !0)
                    }
                }
            }, [t("router-link", {
                attrs: {
                    to: "/en/#contact"
                }
            }, [e._v("Contact")])], 1), t("li", {
                staticClass: "mobile-nav-lang"
            }, [t("router-link", {
                attrs: {
                    to: "/zh"
                }
            }, [e._v("中文")])], 1)])])]), t("router-view", {
                attrs: {
                    careers: e.careers,
                    navClicked: e.isClickedTrigger,
                    currentNav: e.activatedNavItem
                },
                on: {
                    "update-scrolltops": e.updateScrollTops,
                    "child-mounted": e.loaded,
                    "update-nav": e.updateNav,
                    "reset-nav-clicked-trigger": e.resetClickedTrigger
                }
            }), t("footer", [t("p", {
                staticClass: "footer-con content"
            }, [e._v("© " + e._s((new Date).getFullYear()) + " Recreate Games. Source Technology Inc. All Rights Reserved.")])])], 1)
        }
          , p = []
          , h = i("7a6e");
        function v() {
            return document.documentElement.scrollTop || document.body.scrollTop || 0
        }
        const g = /^[\w-.]+@([\w-_]+\.)+[\w-]{2,4}$/
          , f = [{
            featureType: "all",
            elementType: "labels.text.fill",
            stylers: [{
                saturation: 36
            }, {
                color: "#000000"
            }, {
                lightness: 40
            }]
        }, {
            featureType: "all",
            elementType: "labels.text.fill",
            stylers: [{
                visibility: "off"
            }]
        }, {
            featureType: "all",
            elementType: "labels.text.stroke",
            stylers: [{
                visibility: "on"
            }, {
                color: "#000000"
            }, {
                lightness: 16
            }]
        }, {
            featureType: "all",
            elementType: "labels.icon",
            stylers: [{
                visibility: "off"
            }]
        }, {
            featureType: "administrative",
            elementType: "geometry.fill",
            stylers: [{
                color: "#000000"
            }, {
                lightness: 20
            }]
        }, {
            featureType: "administrative",
            elementType: "geometry.stroke",
            stylers: [{
                color: "#000000"
            }, {
                lightness: 17
            }, {
                weight: 1.2
            }]
        }, {
            featureType: "landscape",
            elementType: "geometry",
            stylers: [{
                color: "#000000"
            }, {
                lightness: 20
            }]
        }, {
            featureType: "poi",
            elementType: "geometry",
            stylers: [{
                color: "#000000"
            }, {
                lightness: 21
            }]
        }, {
            featureType: "road.highway",
            elementType: "geometry.fill",
            stylers: [{
                color: "#000000"
            }, {
                lightness: 17
            }]
        }, {
            featureType: "road.highway",
            elementType: "geometry.stroke",
            stylers: [{
                color: "#000000"
            }, {
                lightness: 29
            }, {
                weight: .2
            }]
        }, {
            featureType: "road.arterial",
            elementType: "geometry",
            stylers: [{
                color: "#000000"
            }, {
                lightness: 18
            }]
        }, {
            featureType: "road.local",
            elementType: "geometry",
            stylers: [{
                color: "#000000"
            }, {
                lightness: 16
            }]
        }, {
            featureType: "transit",
            elementType: "geometry",
            stylers: [{
                color: "#000000"
            }, {
                lightness: 19
            }]
        }, {
            featureType: "water",
            elementType: "geometry",
            stylers: [{
                color: "#000000"
            }, {
                lightness: 17
            }]
        }]
          , C = "AIzaSyA3lrAKy0_BTGQQMvY7mOweWAXA7ejcucw"
          , b = new h["a"](C);
        var _ = {
            name: "AppEn",
            data() {
                return {
                    isShowMobileNav: !1,
                    foldNav: !1,
                    isNavFixed: !1,
                    activatedNavItem: 0,
                    isClickedTrigger: !1,
                    navs: ["#intro", "#about", "#careers", "#contact"],
                    scrollingBinder: null,
                    careers: [{
                        id: 1,
                        position: "Concept Art Director",
                        place: "Shanghai, China",
                        time: "fulltime",
                        descri: "",
                        responsibility: "Responsible for visual style and concept design of the game\nDirect the concept design team and ensure team productivity\nResponsible for concept look-up,concept design, and integration of concept art assets\nWork with game producer and other team directors to ensure game quality\nProvide feedback and career advice for concept art team members\nCollaborate with other directors to develop and maintain game’s unique visual style",
                        required: "Solid fundamentals in art\nPerceptive to color, lighting, and texture\nStrong imagination and high aesthetic standards\nStrong communications skills and organizational management skills\nAbility to work under pressure\nExperience with a complete game development process",
                        plus: "",
                        materials: "Resume\nPersonal portfolio"
                    }, {
                        id: 2,
                        position: "Senior Character Concept Artist",
                        place: "Shanghai, China",
                        time: "fulltime",
                        descri: "",
                        responsibility: "Define game character style; produce character concept drawings\nCreate the concept design according to the art style set by Concept Art Director\nWork with 3D artists to create character assets in game\nProduce high-quality 3D character according to project needs\nFollow industry trends; ensure art quality",
                        required: "Familiar with animal anatomy\nSolid fundamentals in art; perceptive to color, lighting, and texture; high aesthetic standards\nAbility to learn art-related softwares fast\nAbility to collaborate and strong sense of responsibility\nAbility to design stylized cartoon characters",
                        plus: "Experience with a complete game development process\nFamiliar with at least one 3D software",
                        materials: "Resume\nPersonal portfolio"
                    }, {
                        id: 3,
                        position: "Outsource Manager",
                        place: "Shanghai, China",
                        time: "fulltime",
                        descri: "",
                        responsibility: "Coordinate with outsource artists and studios; push project progress\nManage risks with outsource artists and studios；solve problems during outsource production process",
                        required: "Experience with game or Internet-related project management\nAbility to understand game art styles and communicate with outsource teams\nUnderstand game art production process and provide effective feedbacks to outsource teams\nStrong communications skills and excellent organization and management skills\nAbility to work under pressure",
                        plus: "Experience with one or more outsource management project in game or film industry",
                        materials: "Resume"
                    }, {
                        id: 4,
                        position: "3D Artist Director",
                        place: "Shanghai, China",
                        time: "fulltime",
                        descri: "",
                        responsibility: "Collaborate with Concept Art Director; direct 3D artist team to produce 3D assets loyal to the concept designs\nResponsible for the management of 3D artist team; set and push asset production disciplines\nResponsible for the final visual effect in game\nEnsure style consistency in characters and environment asset styles\nFollow industry trends; maintain high artistic standards\nWork with the engineer team to optimize game performance\nProvide feedback and career advice to 3D artist team members",
                        required: "Familiar with the entire 3D asset production process\nAbility to push art and technical art team to fulfill target effects\nFamiliar with UNITY or UNREAL ENGINE; able to use art-related softwares proficiently\nWilling to explore new art styles; Independent and unique understanding of art\nFamiliar with 3D asset production process (modeling, bundling, rendering, and etc)\nExperience with a complete game development process",
                        plus: "",
                        materials: "Resume\nPersonal portfolio"
                    }, {
                        id: 5,
                        position: "Art Asset Management",
                        place: "Shanghai, China",
                        time: "fulltime",
                        descri: "",
                        responsibility: "Work with Art Directors to optimize art assets production pipeline\nWork with Concept Art Director, other art directors and the art team to set important milestones, objectives and requirements\nAssist with Concept Art Director to set schedule and priority\nCoordinate communication in art teams and synchronize work progress\nMaintain art team schedule, and ensure art assets are delivered on time\nAssist art teams to solve tools and pipelines related problems",
                        required: "Familiar with basic 3D softwares\nFamiliar with game or film production process\nAbility to promote art, technical art, and other teams to achieve target effects\nAbility to collaborate; strong sense of responsibility\nAbility to learn art-related softwares fast",
                        plus: "Experience with a complete game or film production process",
                        materials: "Resume"
                    }, {
                        id: 6,
                        position: "Senior Environment Concept Artist",
                        place: "Shanghai, China",
                        time: "fulltime",
                        descri: "",
                        responsibility: "Work with Concept Art Director to define visual style and effects in game; produce clear, detailed and executable concept design\nDesign and produce environment concept according to set game style\nProduce environment concept and design objects",
                        required: "Great imagination and strong ability to express environment and atmosphere\nGreat sense in color, lighting and space in environment design\nAbility to turn gameplay requirements into visual design\nCollect, research references and produce detailed sketch\nAbility to collaborate; strong sense of responsibility\nAbility to learn art-related softwares fast",
                        plus: "Experience with a complete game development process\nFamiliar with at least one 3D software",
                        materials: "Resume\nPersonal portfolio"
                    }, {
                        id: 7,
                        position: "Senior 3D Artist",
                        place: "Shanghai, China",
                        time: "fulltime",
                        descri: "",
                        responsibility: "Create art assets, from concept to final implementation in Unity\nCreate in-game ready, real-time 3D environment assets",
                        required: "Strong aesthetic sense\nDeep understanding of lighting and material\nHighly skilled one of 3D softwares.\nCan independently finish environment model creation, UV edit, material creation, texture baking\nFamiliar with Unity or Unreal Engine\nStrong debug ability and learning ability\nCan fill in the gaps within the concept art and produce assets that are true to the concept",
                        plus: "Experience with a complete console game development process\nExperience with shader production",
                        materials: "Resume\nPersonal portfolio"
                    }, {
                        id: 8,
                        position: "3D Animator",
                        place: "Shanghai, China",
                        time: "fulltime",
                        descri: "A game needs to be convincing across the timeline, the key of which is animations. No matter it is characters, objects, kinetics or particle effects, good animations can even make a teapot look alive. We hope you understand all kinds of classic expressions of animations, and express it with exceptional skills. This position not only requires you to utilize the animation skills you acquired from school or previous works, we also want you to make the animations better and the work more efficient with more advanced techniques.",
                        responsibility: "Create 2D/3D storyboards for early stages\nCreate 2D/3D character/object animations\nCreate rigging of 3D objects, and discuss the viability with engineer team\nParticipate in the motion capture processes",
                        required: "A passion for gaming\nFamiliar with linear and non-linear creation styles of animation\nFamiliar with the bindings of human/animal skeletons\nKnows how to deal with common technical problems such as volume collapse and expansion\nUnderstand state machine and mixed engine action mechanism\nStrong self-motivation and self-learning skills",
                        plus: "Took part in the complete creation process of an AAA game\nFamiliar with Unity or Unreal engines\nFamiliar with the optical or inertial motion capture process\nFamiliar with the particle or dynamics systems with any 3D tools",
                        materials: "Resume"
                    }, {
                        id: 9,
                        position: "Web Frontend Engineer (Interactive Streaming Platform)",
                        place: "Shanghai, China",
                        time: "fulltime",
                        descri: "",
                        responsibility: "",
                        required: "Bachelor’s degree or above in computer science or related fields, and 2+ years of frontend development experience is preferred\nProficient with HTML5, CSS3, or JavaScript and have a good understanding of web standards\nThorough understanding of React\nProficient with Node.js or other backend development languages and frameworks\nExperience in designing & developing mid-sized frontend projects independently\nStrong verbal and written communication skills, and collaborates well in a team environment",
                        plus: "Familiar with at least one of the following programming languages: Java, Go, Python\nFamiliar with real-time communication technologies such as WebRTC\nFamiliar with common network protocols such as RTMP, RTSP, HLS, etc.\nStrong technology and product sense. Good at innovating",
                        materials: "Resume"
                    }, {
                        id: 10,
                        position: "Web Backend Engineer (Interactive Streaming Platform)",
                        place: "Shanghai, China",
                        time: "fulltime",
                        descri: "",
                        responsibility: "",
                        required: "Bachelor’s degree or above in computer science or related technical fields, and 2+ years of backend development experience is preferred\nProficient with more than two mainstream programming languages: Go, C++, Java\nFamiliar with any database(SQL/MongoDB/Redis) system, understand its disaster tolerance principle, and able to fine-tune the performance\nExperience with popular public cloud services both domestic and international: Aliyun, AWS, GCP, etc.\nClose attention to code quality and R&D specifications\nStrong verbal and written communication skills, strong analytical thinking and troubleshooting skills, and great team player",
                        plus: "Participated in programming competition such as ACM-ICPC\nFamiliar with one or more scripting languages, and able to build complex systems\nFamiliar with video codec and related technologies\nFamiliar with real-time communication technologies such as WebRTC\nExperience with OpenStack, LXD, runC, Kubernetes, cloud native stack",
                        materials: "Resume"
                    }, {
                        id: 11,
                        position: "Client Engineer (Interactive Streaming Platform)",
                        place: "Shanghai, China",
                        time: "fulltime",
                        descri: "",
                        responsibility: "",
                        required: "Bachelor’s degree or above in computer science or related technical fields\nProficient with C++/C#，able to learn and use frameworks such as QT for client development\nKnow the general principles of video encoding and decoding, and able to learn and use libraries such as FFmpeg\nClose attention to code quality and R&D specifications\nStrong verbal and written communication skills, strong analytical thinking and troubleshooting skills, and great team player",
                        plus: "Participated in programming competition such as ACM-ICPC\nExperienced with medium or large sized projects development using QT and multimedia software\nDeep understanding of video coding and decoding\nFamiliar with real-time communication technologies such as WebRTC",
                        materials: "Resume"
                    }],
                    resizeBinder: null,
                    scrollTops: []
                }
            },
            beforeDestroy() {
                document.removeEventListener("scroll", this.scrollingBinder, !1),
                window.removeEventListener("resize", this.resizeBinder, !1),
                document.removeEventListener("click", this.hideMobileNav, !1)
            },
            mounted() {
                this.resizeBinder = this.foldMobileNav.bind(this),
                this.scrollingBinder = this.pageScrolling.bind(this),
                document.addEventListener("scroll", this.scrollingBinder, !1),
                window.addEventListener("resize", this.resizeBinder, !1),
                document.addEventListener("click", this.hideMobileNav, !1),
                this.foldMobileNav()
            },
            methods: {
                toggleMobileNav(e) {
                    e.stopPropagation(),
                    this.isShowMobileNav = !this.isShowMobileNav
                },
                hideMobileNav() {
                    this.isShowMobileNav && (this.isShowMobileNav = !1)
                },
                foldMobileNav() {
                    this.foldNav = window.innerWidth <= 800
                },
                pageScrolling() {
                    let e = v();
                    e > 0 && !this.isNavFixed ? this.isNavFixed = !0 : 0 === e && this.isNavFixed && (this.isNavFixed = !1)
                },
                loaded() {
                    let e = this.navs.findIndex(e=>e === this.$route.hash);
                    e > 0 && this.scrollTo(this.scrollTops[e])
                },
                updateScrollTops(e) {
                    this.scrollTops = e
                },
                scrollTo(e) {
                    document.documentElement.scrollTop = document.body.scrollTop = e
                },
                updateNav(e, t) {
                    this.isClickedTrigger = t || !1,
                    this.activatedNavItem = e,
                    t && this.$route.hash === this.navs[e] && this.scrollTo(this.scrollTops[e])
                },
                resetClickedTrigger() {
                    this.isClickedTrigger = !1
                }
            }
        }
          , y = _
          , w = Object(l["a"])(y, m, p, !1, null, null, null)
          , N = w.exports
          , k = function() {
            var e = this
              , t = e._self._c;
            return t("div", [t("section", {
                staticClass: "nav-wrapper",
                class: {
                    fixed: e.isNavFixed
                }
            }, [t("nav", {
                class: {
                    "hide-nav": e.foldNav
                }
            }, [t("h1", {
                staticClass: "logo-wrap",
                on: {
                    click: function(t) {
                        return e.updateNav(0, !0)
                    }
                }
            }, [t("router-link", {
                attrs: {
                    id: "logo",
                    to: "/zh/#intro"
                }
            }, [t("img", {
                attrs: {
                    alt: "Recreate",
                    src: i("6f08")
                }
            })])], 1), t("div", {
                staticClass: "normal-nav"
            }, [t("p", {
                staticClass: "nav-right"
            }, [t("router-link", {
                attrs: {
                    to: "/en"
                }
            }, [e._v("English")])], 1), t("ul", {
                staticClass: "nav-items"
            }, [t("li", {
                staticClass: "nav-item",
                class: {
                    active: 0 === e.activatedNavItem
                },
                on: {
                    click: function(t) {
                        return e.updateNav(0, !0)
                    }
                }
            }, [t("router-link", {
                attrs: {
                    to: "/zh/#intro"
                }
            }, [e._v("首页")])], 1), t("li", {
                staticClass: "nav-item",
                class: {
                    active: 1 === e.activatedNavItem
                },
                on: {
                    click: function(t) {
                        return e.updateNav(1, !0)
                    }
                }
            }, [t("router-link", {
                attrs: {
                    to: "/zh/#about"
                }
            }, [e._v("关于我们")])], 1), t("li", {
                staticClass: "nav-item",
                class: {
                    active: 2 === e.activatedNavItem
                },
                on: {
                    click: function(t) {
                        return e.updateNav(2, !0)
                    }
                }
            }, [t("router-link", {
                attrs: {
                    to: "/zh/#careers"
                }
            }, [e._v("招聘职位")])], 1), t("li", {
                staticClass: "nav-item",
                class: {
                    active: 3 === e.activatedNavItem
                },
                on: {
                    click: function(t) {
                        return e.updateNav(3, !0)
                    }
                }
            }, [t("router-link", {
                attrs: {
                    to: "/zh/#contact"
                }
            }, [e._v("联系我们")])], 1)])]), t("div", {
                staticClass: "nav-btn",
                on: {
                    click: function(t) {
                        return e.toggleMobileNav(t)
                    }
                }
            }, [t("a", {
                staticClass: "btn-lines"
            })])]), t("div", {
                staticClass: "mobile-nav",
                class: {
                    show: e.isShowMobileNav && e.foldNav
                }
            }, [t("ul", {
                staticClass: "mobile-nav-list"
            }, [t("li", {
                staticClass: "mobile-nav-item",
                on: {
                    click: function(t) {
                        return e.updateNav(0, !0)
                    }
                }
            }, [t("router-link", {
                attrs: {
                    to: "/zh/#intro"
                }
            }, [e._v("首页")])], 1), t("li", {
                staticClass: "mobile-nav-item",
                on: {
                    click: function(t) {
                        return e.updateNav(1, !0)
                    }
                }
            }, [t("router-link", {
                attrs: {
                    to: "/zh/#about"
                }
            }, [e._v("关于我们")])], 1), t("li", {
                staticClass: "mobile-nav-item",
                on: {
                    click: function(t) {
                        return e.updateNav(2, !0)
                    }
                }
            }, [t("router-link", {
                attrs: {
                    to: "/zh/#careers"
                }
            }, [e._v("招聘职位")])], 1), t("li", {
                staticClass: "mobile-nav-item",
                on: {
                    click: function(t) {
                        return e.updateNav(3, !0)
                    }
                }
            }, [t("router-link", {
                attrs: {
                    to: "/zh/#contact"
                }
            }, [e._v("联系我们")])], 1), t("li", {
                staticClass: "mobile-nav-lang"
            }, [t("router-link", {
                attrs: {
                    to: "/en"
                }
            }, [e._v("English")])], 1)])])]), t("router-view", {
                attrs: {
                    careers: e.careers,
                    navClicked: e.isClickedTrigger,
                    currentNav: e.activatedNavItem
                },
                on: {
                    "img-loaded": e.imgLoaded,
                    "update-scrolltops": e.updateScrollTops,
                    "update-nav": e.updateNav,
                    "reset-nav-clicked-trigger": e.resetClickedTrigger
                }
            }), t("footer", [t("p", {
                staticClass: "footer-con content"
            }, [e._v("© " + e._s((new Date).getFullYear()) + " Recreate Games. Source Technology Inc. 版权所有")])])], 1)
        }
          , T = []
          , S = {
            name: "AppZh",
            data() {
                return {
                    isShowMobileNav: !1,
                    foldNav: !1,
                    isNavFixed: !1,
                    activatedNavItem: 0,
                    isClickedTrigger: !1,
                    navs: ["#intro", "#about", "#careers", "#contact"],
                    scrollingBinder: null,
                    careers: [{
                        id: 0,
                        position: "游戏执行策划",
                        place: "上海",
                        time: "全职",
                        descri: "不同平台的游戏版本体验需要保持一致，但是根据每个平台的特性和玩家习惯进行合适的修改也非常重要。你将会负责将游戏从 PC 端向主机端和移动端的需求修改，以及项目管理，最大程度上让游戏在其他平台上也获得原生平台的质感。",
                        responsibility: "负责在移植游戏过程中提出针对平台特性的修改需求\n管理游戏开发进度",
                        required: "热爱游戏\n有负责游戏跨平台的经验，能够独立推动项目进展\n对PC、主机、移动端游戏有深刻理解（一个或以上）\n能够根据不同平台玩家特性对游戏需求进行优化和修改\n具备良好的沟通协调能力和组织能力，执行力强，有责任心，有较强的抗压能力",
                        plus: "参与过一款游戏的完整开发流程\n有游戏开发管理经验",
                        materials: "个人简历"
                    }, {
                        id: 1,
                        position: "概念设计总监",
                        place: "上海",
                        time: "全职",
                        descri: "游戏美术风格的明确性和统一性至关重要。你将会负责游戏概念设计团队的整体风格制定；概念设计团队产出的规范；以及对整体美术风格的把控，确保所有资产的风格统一。",
                        responsibility: "负责把握游戏整体视觉风格和概念设计\n整体负责并领导概念设计团队的工作，确保产出效率\n绘制气氛图，设计图并整合概念美术资源\n和制作人以及其他团队总监一同确保游戏最终质量\n为概念设计团队成员提供技术和职业规划上的指导\n和其他艺术总监一同持续定义并持续游戏独有的视觉风格",
                        required: "美术基础扎实，对色彩，光影和材质感觉敏锐，想象力丰富，具有较高的审美能力\n对美术有独立的理解和体会，并愿意持续探索美术新风格\n具备良好的沟通协调能力和组织能力，执行力强，有责任心，有较强的抗压能力\n参与过至少一款游戏的开发完整流程\n英语沟通能力强（书面、口语、听力）",
                        plus: "留学背景",
                        materials: "个人简历\n个人作品集"
                    }, {
                        id: 2,
                        position: "角色概念设计师",
                        place: "上海",
                        time: "全职",
                        descri: "好的角色的设计都对玩家代入感的生成有着至关重要的作用。你需要不断设计出符合游戏要求的人物形象与服饰、配饰。",
                        responsibility: "制定游戏角色风格，输出角色原画设计\n执行概念设计总监的概念设计精神\n与 3D 美术共同创造游戏中的角色资产\n根据项目需求，完成高品质的 3D 角色\n关注行业动态，保证美术品质领先",
                        required: "熟悉生物解剖结构\n美术基础扎实，对色彩和造型感觉敏锐，具有较高的审美能力\n具备协作精神，责任心强，擅长快速学习使用美术相关软件\n拥有卡通风格化角色设计能力",
                        plus: "参与过一款游戏的完整开发流程\n熟练使用至少一个 3D 软件",
                        materials: "个人简历\n个人作品集"
                    }, {
                        id: 6,
                        position: "场景概念设计师",
                        place: "上海",
                        time: "全职",
                        descri: "高质量的场景对于提升体验来说至关重要，我们需要用有限的性能表现出最佳的画面。你需要设计出符合游戏设定的场景，寻找合适的制作途径，最大化地体现游戏场景的可玩性和互动性。",
                        responsibility: "和概念设计总监一起定义游戏视觉风格和效果，产出明确、详细、实际可行的概念设计\n负责项目场景设计，输出符合游戏风格的场景\n独立绘制场景概念图，场景物件设计等",
                        required: "有较好的想象力和场景氛围表达能力\n对场景色彩和光影效果及空间感有良好的把控能力\n具有将游戏玩法需求转换成视觉设计的能力：收集参考、调研、绘制剪影、细化、产出\n美术基础扎实，对色彩和造型感觉敏锐\n具备协作精神，责任心强，擅长快速学习使用美术相关软件",
                        plus: "参与过一款游戏的完整开发流程\n熟练使用至少一个 3D 软件辅助设计",
                        materials: "个人简历\n个人作品集"
                    }, {
                        id: 4,
                        position: "3D 资产制作总监",
                        place: "上海",
                        time: "全职",
                        descri: "在优秀的概念设计出炉之后，3D 资产的执行至关重要。在 3D 资产制作团队中，美术规范的制定也将决定团队的产出效率。你将负责忠实地执行概念设计团队的设计意图，确保团队执行合理的美术规范，并且统一 3D 资产风格。",
                        responsibility: "与概念设计总监合作，领导 3D 团队制作出符合概念设计的 3D 资产\n负责 3D 美术团队的管理工作，制定并把控美术规范\n负责游戏最终视觉效果\n确保游戏中角色与场景风格统一\n关注行业动态，保证美术品质领先\n关注行业动态，保证美术品质领先\n为3D团队成员提供技术和职业规划上的指导",
                        required: "熟悉 3D 美术工作流程，能够推动美术，技术美术等团队实现目标效果\n熟悉 UNITY 或 UNREAL ENGINE，并熟练掌握常用美术软件工具\n熟悉 3D 资产制作的全部流程（建模、绑定、渲染等）\n对美术有独立的理解和体会，并愿意持续探索美术新风格\n英语沟通能力强（书面、口语、听力）\n参与过至少一款游戏的完整开发流程",
                        plus: "留学背景",
                        materials: "个人简历\n个人作品集"
                    }, {
                        id: 7,
                        position: "资深 3D 场景美术",
                        place: "上海",
                        time: "全职",
                        descri: "在游戏里，高质量的场景对于提升体验来说至关重要，我们需要用有限的性能表现出最佳的画面。你需要理解设计师的想法，寻找合适的制作途径，最大化地还原出概念场景。",
                        responsibility: "将概念设计制作成 Unity 中的可用资产\n产出可直接供游戏使用的实时 3D 场景资产",
                        required: "具有过硬的审美能力\n对灯光、材质有深刻的理解\n精通 3D 类设计软件\n能独立完成场景模型制作、UV 拆分、材质绘制、贴图烘焙\n具有 UNITY 或 UNREAL ENGINE 使用经验\n具有较强的故障排除能力和学习能力\n可以自己补全概念设计并产出符合风格的资产",
                        plus: "具有离线渲染器使用经验\n有参与次时代游戏制作的经历\n具有 SHADER 制作经验\n具备建筑类学科背景",
                        materials: "个人简历\n个人作品集"
                    }, {
                        id: 5,
                        position: "美术资产管理",
                        place: "上海",
                        time: "全职",
                        descri: "美术资产生产流程的管理至关重要。你需要和各美术部门总监一同制定并优化美术资产的生产流程，创造工具和规范，解决美术团队遇到的生产力问题，确保美术资产的按时产出。",
                        responsibility: "和各美术部门总监一同持续优化游戏美术资产的生产流程\n和概念设计总监、各美术部门总监和美术团队一起制定重要的时间节点，制定目标和要求\n帮助安排概念设计总监的时间表和优先级\n协调美术团队的沟通和同步所有人的工作进度\n维持美术团队的任务时间表，确保美术资产按计划产出\n帮助美术团队解决由美术工具和pipelines带来的生产力问题",
                        required: "掌握基本 3D 软件\n熟悉 3D 美术工作流程，能够推动美术，技术美术等团队实现目标效果\n具备协作精神，责任心强，擅长快速学习使用美术相关软件",
                        plus: "参与过一款游戏或影视作品的完整开发流程",
                        materials: "个人简历"
                    }, {
                        id: 8,
                        position: "3D 动画设计师",
                        place: "上海",
                        time: "全职",
                        descri: "游戏需要将画面从时间线上变得令人信服，这其中的关键便是动画。无论是角色、物体、动力学或粒子效果，优秀的动画甚至能将一个茶壶变得栩栩如生。我们希望你能够了解各种经典的动画表述方式，以及使用先进的技术将其表现出来。这个职位不止需要你在学校或之前你工作中所使用过的动画技法，我们还希望使用更多先进的技术改进动画效果或制作效率。",
                        responsibility: "创造早期动画 2D 或 3D 分镜草图\n为 2D 或 3D 角色创造角色动画或物体动画\n对 3D 物品实施绑定，并与工程团队协调方案可行性\n参与动作捕捉流程",
                        required: "热爱游戏\n熟悉线性和非线性动画创作流程\n熟悉人物角色和各种动物骨骼绑定\n了解如何处理体积塌陷，膨胀等动画常见技术问题\n了解行为树和引擎动作混合机制\n有极强的自驱和自学能力",
                        plus: "参与过一款 AAA 级游戏完整从早期到上线流程\n熟悉 Unity 或 Unreal 引擎\n熟悉光学或惯性动捕流程\n熟悉任何 3D 工具的粒子或动力学系统",
                        materials: "个人简历\n个人作品集"
                    }, {
                        id: 18,
                        position: "技术美术",
                        place: "上海",
                        time: "全职",
                        descri: "",
                        responsibility: "参与游戏材质、后处理以及特效的制作，优化渲染效果及效率，开发美术工具等",
                        required: "有成熟的移动平台开发及优化经验\n熟练掌握渲染管线、常用光照模型、毛发渲染、粒子效果、后处理等\n熟悉 Unity URP/HDRP \n有良好的 Shader 编写能力，能够制作各类渲染风格的材质\n2年以上 Unity/Unreal 使用经验\n有良好的审美\n优秀的沟通能力、自学能力\n热爱游戏",
                        plus: "熟悉 Houdini \n有程序化生成的相关制作经验\n可以根据需求开发美术所需的相关工具脚本\n完整参与过任意平台的游戏类产品并上线\n有良好编程基础",
                        materials: "个人简历\n个人作品（不限于视频、可执行程序）"
                    }, {
                        id: 26,
                        position: "3D 渲染美术",
                        place: "上海",
                        time: "全职",
                        descri: "",
                        responsibility: "参与游戏角色和场景的效果图渲染工作\n负责从灯光、材质、动作、渲染到后期修图的整体流程",
                        required: "精通 3D 类软件\n精通至少一款渲染器\n能独立完成从前期 3D 渲染到后期平面修图的完整工作\n有优秀的审美\n有良好的沟通协调能力，执行力强，有责任心",
                        plus: "热爱游戏，有大量游戏经验\n有 Unity 或 Unreal Engine 的使用经验\n有从事影视制作的经验\n有扎实的美术基础或绘画功底",
                        materials: "个人简历\n个人作品集"
                    }, {
                        id: 15,
                        position: "游戏音频设计师",
                        place: "上海",
                        time: "全职",
                        descri: "在游戏世界里，优秀的游戏音频设计对于提升玩家的游戏体验来说至关重要。游戏音频设计师需要根据我们的游戏风格，设计出高质量的音频。",
                        responsibility: "按照设计方案独立完成游戏音效制作\n通过录音设备、音频工作站（DAW）、效果器插件等软硬件设备，进行项目所需的录音创作编辑后期混音等\n负责在项目版本迭代中持续维护、调优，保证项目音频开发进度，解决游戏研发过程中产生的音频问题",
                        required: "熟练掌握 FMOD 的使用\n至少做过一款上线游戏\n三年以上游戏音频或影视、动漫音频专业经验，熟知游戏音频各细分工种职能、游戏音频体系各子系统内容，在其中一项或多项有所专长\n对行业及产品有清晰了解，熟悉游戏产品及声音开发流程\n热爱游戏行业，对国内外主流游戏有相当的熟悉和理解\n优秀的音乐审美和赏析能力\n良好的沟通能力",
                        plus: "作曲或录音专业相关教育背景\n有物理引擎动作游戏项目经验",
                        materials: "个人简历\n个人作品集"
                    }, {
                        id: 24,
                        position: "UI 设计师",
                        place: "上海",
                        time: "全职",
                        descri: "",
                        responsibility: "参与游戏 UI 的设计和制作，包括整体界面、图标、动效等\n配合工程师完成游戏界面的实现，保证最终效果与设计品质一致",
                        required: "有完整、独立的界面设计和执行经验\n精通设计类软件\n有优秀的审美\n有求知欲望和优秀的自学能力\n有良好的沟通协调能力，执行力强，有责任心",
                        plus: "热爱游戏，有大量游戏经验\n熟悉 3D 类软件\n有 Unity 或 Unreal Engine 的使用经验\n精通动画制作（2D、3D 皆可）\n有扎实的美术基础或手绘功底",
                        materials: "个人简历\n个人作品集"
                    }, {
                        id: 11,
                        position: "游戏动画工程师",
                        place: "上海",
                        time: "全职",
                        descri: "在游戏中动画质量同样重要，游戏动画工程师需要根据需求开发高级动画效果，增强游戏表现力。",
                        responsibility: "参与开发程序化角色动画、物理计算性能优化等",
                        required: "热爱游戏\n有良好的审美\n良好的数学和物理基础知识，对角色动作和物体运动有深刻的理解\n扎实的计算机学科基础知识\n拥有超过两年的 C# 编程经验和良好的编程习惯\n熟练掌握 Unity 引擎使用\n拥有计算机科学、数学或相关学士以上学位\n优秀的沟通能力、自学能力",
                        plus: "有程序化动画制作经验\n有 Havok 引擎使用经验\n有参与开发物理引擎经验\n有 Unity ECS 和 C# Job System 使用经验\n有 3D 动画制作经验\n拥有移动平台性能优化与兼容性调试经验\n完整参与过任意平台的游戏类产品并上线",
                        materials: "个人简历\n个人动画作品（不限于视频、代码、可执行程序）"
                    }, {
                        id: 12,
                        position: "图形图像工程师",
                        place: "上海",
                        time: "全职",
                        descri: "在游戏中性能和图像质量同样重要，图形图像工程师需要在满足性能的前提下将画质推到极限。你将会和工程师、设计师共同推进游戏的图形图像技术，分析目前业务需求，以建立和改进图形图像相关代码库。",
                        responsibility: "参与游戏渲染效果制作、优化游戏图形性能等",
                        required: "热爱游戏\n有良好的审美\n扎实的计算机学科基础知识\n良好的数学和物理功底\n对渲染管线、常用光照模型、毛发渲染、粒子效果、后处理等有深刻的理解\n有良好的 Shader 编程能力，能根据项目需求独立开发和优化视觉效果\n2 年以上 Unity/Unreal 使用经验\n拥有计算机科学、数学或相关学士以上学位\n优秀的沟通能力、自学能力",
                        plus: "熟悉任意一款 3D 软件\n拥有移动平台图像性能优化与兼容性调试经验\n完整参与过任意平台的游戏类产品并上线",
                        materials: "个人简历\n个人作品（不限于视频、可执行程序）"
                    }, {
                        id: 13,
                        position: "资深游戏服务器开发工程师",
                        place: "上海",
                        time: "全职",
                        descri: "资深游戏服务器工程师需要负责游戏服务器架构设计和开发，这需要你有多年的服务器实际项目经验。你将会和技术团队一同解决更深度的服务器线上问题，保证游戏稳定运行。资深游戏服务器工程师是团队可以依靠的技术人员。",
                        responsibility: "负责游戏战斗及网关服务器的架构设计，功能开发维护\n快速定位解决服务器线上问题，保证服务稳定运行\n分析服务器瓶颈，结合游戏性能及稳定性进行调优",
                        required: "大学本科及以上学历\n3年以上服务器开发经验，有上线游戏研发维护经验\n具有服务器性能瓶颈分析能力和优化经验\n熟练掌握 C++、Java、C# 及 Python 中的一种或者多种，有良好的编程习惯，配合团队编程规范的素养\n基础扎实，熟练掌握算法，数据结构相关知识，熟悉面对对象编程，具备合理运用设计模式的能力\n熟悉 Linux，有扎实的 Linux 编程环境经验，熟悉 TCP/IP 协议、UDP 协议、HTTP 协议\n熟练使用 NoSQL, 熟悉 NoSQL 数据设计模型\n能够熟练阅读英文技术文档\n较强的学习能力和责任心",
                        plus: "Unity3d 客户端开发经验，性能优化经验\nNoSQL 性能调优经验，数据迁移经验\nAWS 开发运维经验",
                        materials: "个人简历"
                    }, {
                        id: 14,
                        position: "游戏服务器开发工程师",
                        place: "上海",
                        time: "全职",
                        descri: "游戏服务器工程师需要负责游戏服务器架构业务逻辑的开发和运维。你将会和技术团队一同解决服务器线上问题，保证服务稳定运行。",
                        responsibility: "负责游戏战斗及网关服务器的架构业务逻辑开发维护\n快速定位解决服务器线上问题，保证服务稳定运行\n分析服务器瓶颈，结合游戏性能及稳定性进行调优",
                        required: "大学本科及以上学历\n1年以上游戏服务器开发经验\n熟练掌握 C++、Java、C# 及 Python 中的一种或者多种，有良好的编程习惯配合团队编程规范的素养\n基础扎实，熟练掌握算法，数据结构相关知识，熟悉面对对象编程和常用设计模式\n熟悉 Linux 使用和开发环境，熟悉 TCP/IP 协议、UDP 协议、HTTP 协议\n熟练使用 NoSQL, 熟悉 NoSQL 数据设计模型\n能够熟练阅读英文技术文档\n较强的学习能力和责任心",
                        plus: "上线游戏开发经验\nUnity3d 客户端开发经验\nAWS 开发运维经验",
                        materials: "个人简历"
                    }, {
                        id: 19,
                        position: "游戏客户端工程师",
                        place: "上海",
                        time: "全职",
                        descri: "工程实现是游戏成功的基石。开发工程师将会参与游戏开发的各种领域，如游戏逻辑、图形图像、用户界面、用人工智能改进游戏。开发工程师需要在各种硬件受限的情况下解决前人从未解决的难题，创造出健硕的工程并交付给百万人使用。",
                        responsibility: "",
                        required: "热爱游戏\n扎实的计算机学科基础知识，包括算法、数据结构和设计模式\n拥有超过两年的 C# 编程经验和良好的编程习惯\n熟练掌握 Unity 引擎使用\n广泛了解游戏开发的不同领域，如图形图像、玩法、测试方法等等\n拥有计算机科学、数学或相关学士以上学位\n优秀的沟通能力",
                        plus: "完整参与过任意平台的游戏类产品并上线\n拥有 3D 软件的模型、材质、动画等模块完整使用经验\n拥有移动平台性能优化与兼容性调试经验\n超过 2 年的 C++ 实际项目经验\n为开源项目社区如 Github 或 Bitbucket 贡献过代码",
                        materials: "个人简历\n个人项目代码样本"
                    }, {
                        id: 32,
                        position: "Xbox 游戏移植开发工程师",
                        place: "上海",
                        time: "全职",
                        descri: "工程实现是游戏成功的基石。XBOX 游戏移植开发工程师将会参与游戏的各个模块从 PC 平台到 XBOX 平台的移植工作，如游戏逻辑、图形图像、用户界面等。XBOX 游戏移植开发工程师需要在 XBOX 主机的软硬件限制下解决一系列兼容性问题，创造出健硕的工程并交付给百万人使用。",
                        responsibility: "负责游戏在 XBOX 平台的开发及移植工作\n负责游戏在 XBOX 平台上的性能监控及优化\n负责 XBOX 游戏业务逻辑开发\n协助美术/策划建立高效的游戏移植流程，完善并持续优化工具链",
                        required: "热爱游戏\n扎实的计算机学科基础知识，包括算法、数据结构和设计模式\n拥有超过两年的 C# 编程经验和良好的编程习惯熟练掌握 Unity 引擎使用\n广泛了解游戏开发的不同领域，如图形图像、玩法、测试方法等等\n拥有计算机科学、数学或相关学士以上学位\n一年以上的主机游戏移植工作经历\n优秀的沟通能力",
                        plus: "完整参与过其他平台的游戏类产品主机移植工作并上线\n拥有移动平台性能优化与兼容性调试经验\n超过 2 年的 C++ 实际项目经验\n为开源项目社区如 Github 或 Bitbucket 贡献过代码",
                        materials: "个人简历\n个人项目代码样本"
                    }, {
                        id: 21,
                        position: "视频编解码工程师",
                        place: "武汉/北京",
                        time: "全职",
                        descri: "这个职位需要创造一种跨平台解决方案，使视频质量更好的同时提供更小的尺寸。VR/AR 对于图像质量极高，目前我们可以回放双 4K 视频在 60 帧率，不远的未来还有 8K、12K、16K 视频。不只是帧率和分辨率的提升，还有色彩深度的加强。这些超高分辨率的视频将非常难以传输、存储和解压回放。为了实现完全沉浸式的体验，我们工程团队将面临各个方面严峻的技术挑战。",
                        responsibility: "",
                        required: "在图像编解码方向上有充足的经验，如 H.264/H.265/VP9/AV1\n有不同平台的编程经验，如 Windows, Linux, Android, iOS\n拥有 C/C++ 扎实的编程能力\n拥有 3 年以上相关行业从业经验\n优秀的分析，设计和 Debug 能力\n拥有计算机科学、数学或相关硕士以上学位\n参与过完整的任意平台应用软件开发",
                        plus: "计算机或数学相关博士学位\n拥有一款 VR/AR 设备并使用超过一年\n为开源项目社区如 Github 或 Bitbucket 贡献过代码",
                        materials: "个人简历\n个人项目代码样本"
                    }, {
                        id: 27,
                        position: "网络安全工程师",
                        place: "上海",
                        time: "全职",
                        descri: "",
                        responsibility: "定期进行安全风险评估、渗透测试、漏洞扫描，制定安全规程\n应急响应、调查取证安全事件，快速定位、解决安全问题",
                        required: "全日制本科及以上学历，3 年以上互联网企业的信息安全从业经验\n扎实的计算机基础知识，精通常见 web、系统安全漏洞原理、利用方式和解决方案\n熟练使用常用安全工具，熟悉内网渗透技术和安全解决方案\n熟悉 Windows 或 Linux 操作系统，至少熟悉一门编程语言，能够开发自动化的分析工具\n良好的沟通、协作能力",
                        plus: "拥有 CISSP、CISA、CISP、CIPT 证书\n有编写漏洞利用POC能力与Web漏洞扫描器开发经验",
                        materials: "个人简历"
                    }, {
                        id: 31,
                        position: "游戏测试经理",
                        place: "上海",
                        time: "全职",
                        descri: "该职位主要负责游戏 Party Animals 测试工作。",
                        responsibility: "理解和分析游戏模式，制定测试计划，共同确定并实现产品质量目标\n设计测试方法，编写测试用例，构建和管理测试用例库\n执行测试，分析和定位测试中遇到的问题，协助解决问题\n形成可读性强的测试报告，对游戏软件质量进行评估\n统计和分析用户反馈的问题，协助开发人员解决用户问题",
                        required: "熟悉 Steam 游戏平台或 XBOX, PlayStation 等主机平台\n扎实的计算机基础知识，熟悉游戏开发流程\n完整参与过任意平台游戏产品并上线\n有着丰富的多平台游戏软件性能测试和压力测试经验\n对游戏和软件质量充满热情\n拥有计算机科学、软件或相关学士以上学位",
                        plus: "有外包测试管理经验\n有任意平台游戏编程经验\n熟悉 Unity 引擎",
                        materials: "个人简历"
                    }, {
                        id: 23,
                        position: "产品测试工程师",
                        place: "武汉",
                        time: "全职",
                        descri: "该职位将会负责 VR/AR 应用软件上线测试，保证应用的每个版本在不同的平台保持优异的性能和稳定性。",
                        responsibility: "与产品⼈员沟通完善产品需求，参与需求分析和评审，协助制定测试方案和测试计划\n参与设计、执行测试用例，撰写测试报告\n负责产品发布前的实验室应用测试，包括部署测试及功能测试\n复现问题并验证功能，提出改进方案\n对异常测试结果及时记录和分析，及时反馈于研发",
                        required: "2 年及以上测试/开发工作经验\n了解系统的基本原理和测试方法，善于从使用者角度考虑问题，拥有用户思维\n具备良好的问题分析能力、团队协作能力、沟通能力和中英文文档撰写能力\n拥有计算机、自动化或相关学士以上学位",
                        plus: "掌握一种编程语言，如 C/C++、Java、Python 等\n白盒测试开展经验",
                        materials: "个人简历"
                    }, {
                        id: 28,
                        position: "Web 前端工程师（互动直播）",
                        place: "上海",
                        time: "全职",
                        descri: "",
                        responsibility: "",
                        required: "本科及以上学历，2 年以上前端工作经验\n扎实的前端基础（HTML5/CSS3/JavaScript），理解 web 标准\n精通 React 技术栈\n了解 Node.js 或其他后端开发语言及框架\n可独立完成中型前端项目的设计与开发，能够充分沟通理解需求并落地\n具有较强的沟通能力，分析和解决问题的能力，具备良好的团队合作精神",
                        plus: "熟悉一种及以上后端开发语言（Go/Java/Python）\n熟悉 WebRTC 等实时通讯技术\n熟悉主流网络流媒体协议，如 RTMP、RTSP、HLS等\n有优秀的技术 sense 和一定的产品 sense，善于创新拓展",
                        materials: "个人简历"
                    }, {
                        id: 29,
                        position: "Web 后端工程师（互动直播）",
                        place: "上海",
                        time: "全职",
                        descri: "",
                        responsibility: "",
                        required: "本科及以上学历，2 年以上后端工作经验，负责互动直播系统的后端搭建\n熟练掌握两种以上后端语言（Go/C++/Java）\n熟悉一种以上数据库基本操作（SQL/MongoDB/Redis），理解其容灾原理，具备定位其性能问题的能力\n具备使用 Aliyun、AWS 或 GCP 等国内、外主流公有云的经验\n重视代码质量及研发规范\n具有较强的沟通能力，分析和解决问题的能力，具备良好的团队合作精神",
                        plus: "有 ACM-ICPC 等程序设计竞赛参赛、获奖经历\n熟悉脚本语言，有搭建使用复杂系统的能力\n熟悉视频编解码以及相关技术\n熟悉 WebRTC 等实时通讯技术\n熟悉云计算/容器/云原生技术（OpenStack，LXD，runC，Kubernetes，cloud native stack）",
                        materials: "个人简历"
                    }, {
                        id: 30,
                        position: "客户端工程师（互动直播）",
                        place: "上海",
                        time: "全职",
                        descri: "",
                        responsibility: "",
                        required: "本科及以上学历\n熟练掌握 C++/C#，能够学习并使用 QT 等 framework 进行客户端开发\n了解视频编解码大致原理，能够学习并使用 FFmpeg 等 library 进行音视频处理\n重视代码质量及研发规范\n具有较强的沟通能力、分析和解决问题的能力，具备良好的团队合作精神",
                        plus: "有 ACM-ICPC 等程序设计竞赛参赛、获奖经历\n使用过 QT 开发过中型以上的项目，有多媒体类软件开发经验\n精通视频编解码以及相关技术\n熟悉 WebRTC 等实时通讯技术",
                        materials: "个人简历"
                    }, {
                        id: 16,
                        position: "商务拓展经理",
                        place: "上海",
                        time: "全职",
                        descri: "这个职务负责与国内外各个媒体和平台、主播洽谈合作，并促成最终合作，推动业务增长。规划和沟通能力对于该职位来说尤为重要，商务拓展经理需要能够自我驱动以及对游戏事业有足够的热情。",
                        responsibility: "市场拓展，对外商务合作与关系维护\n流量引入，内容输出，合作渠道维护\n与国内外各个媒体和平台、主播洽谈合作",
                        required: "热爱游戏，对游戏行业有足够的理解\n至少二年的游戏行业的商务拓展从业经验，熟悉国内外各个媒体平台和主播\n熟练使用办公软件 和 Photoshop\n极强的沟通能力，能与管理团队、合作伙伴以及其他团队保持良好的沟通\n能够促成跨团队、公司的集体合作\n在高压下解决问题的能力\n中文，英文流利\n本科以上学位",
                        plus: "留学经历\n托福 100+",
                        materials: "个人简历"
                    }, {
                        id: 10,
                        position: "品牌运营",
                        place: "上海",
                        time: "全职",
                        descri: "在游戏从内部推向市场的过程中，品牌运营的作用至关重要。品牌运营在游戏发布的各个阶段都需要让市场和玩家了解未来 Recreate games 所创作的产品。不仅是游戏发布上线运营后，品牌运营在上线前预热也同样重要。品牌运营将会和媒体一同将 Recreate games 游戏理念和产品传递给最终用户。",
                        responsibility: "在媒体和社交平台为游戏产品建立持久的品牌信息投放渠道\n与策划，美术团队共同创造营销信息资产\n与策划，外部团队共同制定广告投放策略和资产\n与玩家社群达成良好的伙伴关系\n评估信息和广告投放数据表现",
                        required: "热爱游戏\n拥有两年以上游戏或互联网品牌运营经验\n拥有完整从早期策划到最终落地的媒体策划和采购经验\n中文和英文流畅\n优秀的沟通和表达能力",
                        plus: "拥有两年以上数字广告投放和监测经验\n拥有两年以上社交网络营销经验",
                        materials: "个人简历"
                    }, {
                        id: 17,
                        position: "新媒体运营",
                        place: "上海",
                        time: "全职",
                        descri: "对于一个成功的游戏来说，发行前后的宣传和对玩家群体的维护至关重要。除了游戏本身的品质之外，游戏运营的成果离不开宣传策略的制定，热点的抓取，和对玩家市场的充分了解。新媒体运营需要深入掌握玩家和相关社群的动向，保证游戏的常时热度，以及在热点出现时敏锐的反应速度。",
                        responsibility: "负责各社交媒体的内容定期生产和发布\n维护各平台用户关系\n和平台主播、其他游戏厂商建立合作关系\n评估当前各平台数据表现\n制定短期和长期的游戏运营/宣传计划\n根据用户偏好和平台规则，给产品、美术团队提出内容生产建议",
                        required: "优秀的英文口语、写作、阅读能力\n优秀的沟通和表达能力\n对各新媒体/社交平台有深入了解\n熟练使用至少一种视频编辑软件和一种修图软件",
                        plus: "留学经历\n托福 100+\n数学、统计、产品、运营相关经历\n有社交媒体、短视频平台账号运营经验",
                        materials: "个人简历"
                    }],
                    resizeBinder: null,
                    scrollTops: [],
                    imgsLoaded: !1
                }
            },
            beforeDestroy() {
                document.removeEventListener("scroll", this.scrollingBinder, !1),
                window.removeEventListener("resize", this.resizeBinder, !1),
                document.removeEventListener("click", this.hideMobileNav, !1)
            },
            mounted() {
                this.resizeBinder = this.foldMobileNav.bind(this),
                this.scrollingBinder = this.pageScrolling.bind(this),
                document.addEventListener("scroll", this.scrollingBinder, !1),
                window.addEventListener("resize", this.resizeBinder, !1),
                document.addEventListener("click", this.hideMobileNav, !1),
                this.foldMobileNav()
            },
            methods: {
                toggleMobileNav(e) {
                    e.preventDefault(),
                    e.stopPropagation(),
                    this.isShowMobileNav = !this.isShowMobileNav
                },
                hideMobileNav() {
                    this.isShowMobileNav && (this.isShowMobileNav = !1)
                },
                foldMobileNav() {
                    this.foldNav = window.innerWidth <= 800
                },
                pageScrolling() {
                    let e = v();
                    e > 0 && !this.isNavFixed ? this.isNavFixed = !0 : 0 === e && this.isNavFixed && (this.isNavFixed = !1)
                },
                updateScrollTops(e) {
                    this.scrollTops = e
                },
                imgLoaded() {
                    let e = this.navs.findIndex(e=>e === this.$route.hash);
                    e > 0 && this.scrollTo(this.scrollTops[e])
                },
                scrollTo(e) {
                    document.documentElement.scrollTop = document.body.scrollTop = e
                },
                updateNav(e, t) {
                    this.isClickedTrigger = t || !1,
                    this.activatedNavItem = e,
                    t && this.$route.hash === this.navs[e] && this.scrollTo(this.scrollTops[e])
                },
                resetClickedTrigger() {
                    this.isClickedTrigger = !1
                }
            }
        }
          , A = S
          , E = Object(l["a"])(A, k, T, !1, null, "3e81135a", null)
          , R = E.exports
          , D = function() {
            var e = this
              , t = e._self._c;
            return t("main", [t("section", {
                staticClass: "intro",
                attrs: {
                    id: "intro"
                }
            }, [t("div", {
                staticClass: "bg-overlay"
            }, [t("video", {
                ref: "video",
                style: {
                    left: e.videoLeft
                },
                attrs: {
                    preload: "auto",
                    loop: "",
                    autoplay: "",
                    playsinline: "",
                    muted: ""
                },
                domProps: {
                    muted: !0
                }
            }, [t("source", {
                attrs: {
                    src: i("ea91"),
                    type: "video/mp4"
                }
            })])]), e._m(0)]), e._m(1), t("section", {
                staticClass: "careers",
                attrs: {
                    id: "careers"
                }
            }, [t("section", {
                staticClass: "content"
            }, [t("h1", {
                staticClass: "headline-l"
            }, [e._v("Careers")]), t("ul", {
                staticClass: "job-list"
            }, e._l(e.careers, (function(i, s) {
                return t("li", {
                    key: "career-" + s,
                    staticClass: "job-item"
                }, [e._m(2, !0), t("div", {
                    staticClass: "job-item-info"
                }, [t("span", {
                    staticClass: "job-name"
                }, [e._v(e._s(i.position))]), t("span", [e._v(e._s(i.place))]), t("span", [e._v(e._s(i.time))])]), t("router-link", {
                    staticClass: "job-link",
                    attrs: {
                        to: "/en/career/" + i.id
                    }
                })], 1)
            }
            )), 0)])]), e._m(3), t("section", {
                staticClass: "contact",
                attrs: {
                    id: "contact"
                }
            }, [t("div", {
                staticClass: "content"
            }, [e._m(4), t("div", {
                staticClass: "msg-form"
            }, [t("form", [t("p", {
                staticClass: "input-wrap"
            }, [t("label", {
                staticClass: "label",
                attrs: {
                    for: "name"
                }
            }, [e._v("Your Name ( required )")]), t("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model.trim",
                    value: e.userName,
                    expression: "userName",
                    modifiers: {
                        trim: !0
                    }
                }],
                staticClass: "input",
                class: {
                    warn: e.invalidation.name
                },
                attrs: {
                    autocomplete: "off",
                    id: "name",
                    type: "text",
                    required: "",
                    placeholder: "Your Name"
                },
                domProps: {
                    value: e.userName
                },
                on: {
                    blur: [function(t) {
                        return e.invalidationNameCheck()
                    }
                    , function(t) {
                        return e.$forceUpdate()
                    }
                    ],
                    input: function(t) {
                        t.target.composing || (e.userName = t.target.value.trim())
                    }
                }
            })]), t("p", {
                staticClass: "input-wrap"
            }, [t("label", {
                staticClass: "label",
                attrs: {
                    for: "email"
                }
            }, [e._v("Your Email Address ( required )")]), t("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model.trim",
                    value: e.emailAddr,
                    expression: "emailAddr",
                    modifiers: {
                        trim: !0
                    }
                }],
                staticClass: "input",
                class: {
                    warn: e.invalidation.email
                },
                attrs: {
                    autocomplete: "off",
                    id: "email",
                    type: "text",
                    required: "",
                    placeholder: "Your Email"
                },
                domProps: {
                    value: e.emailAddr
                },
                on: {
                    blur: [function(t) {
                        return e.invalidationEmailCheck()
                    }
                    , function(t) {
                        return e.$forceUpdate()
                    }
                    ],
                    input: function(t) {
                        t.target.composing || (e.emailAddr = t.target.value.trim())
                    }
                }
            })]), t("p", {
                staticClass: "input-wrap"
            }, [t("label", {
                staticClass: "label",
                attrs: {
                    for: "subject"
                }
            }, [e._v("Subject")]), t("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model.trim",
                    value: e.subject,
                    expression: "subject",
                    modifiers: {
                        trim: !0
                    }
                }],
                staticClass: "input",
                attrs: {
                    autocomplete: "off",
                    id: "subject",
                    type: "text",
                    placeholder: "Subject"
                },
                domProps: {
                    value: e.subject
                },
                on: {
                    input: function(t) {
                        t.target.composing || (e.subject = t.target.value.trim())
                    },
                    blur: function(t) {
                        return e.$forceUpdate()
                    }
                }
            })]), t("p", {
                staticClass: "input-wrap"
            }, [t("label", {
                staticClass: "label",
                attrs: {
                    for: "msg"
                }
            }, [e._v("Your Message ( required )")]), t("textarea", {
                directives: [{
                    name: "model",
                    rawName: "v-model.trim",
                    value: e.message,
                    expression: "message",
                    modifiers: {
                        trim: !0
                    }
                }],
                staticClass: "input",
                class: {
                    warn: e.invalidation.message
                },
                attrs: {
                    autocomplete: "off",
                    id: "msg",
                    placeholder: "Your Message"
                },
                domProps: {
                    value: e.message
                },
                on: {
                    blur: [function(t) {
                        return e.invalidationMsgCheck()
                    }
                    , function(t) {
                        return e.$forceUpdate()
                    }
                    ],
                    input: function(t) {
                        t.target.composing || (e.message = t.target.value.trim())
                    }
                }
            })]), t("div", {
                staticClass: "input-wrap"
            }, [t("p", {
                staticClass: "btn-submit",
                class: e.stateOfRequest,
                on: {
                    click: function(t) {
                        return e.send()
                    }
                }
            }, [t("span", {
                staticClass: "txt"
            }, [e._v("Send")]), e._m(5), e._m(6), e._m(7)]), t("span", {
                staticClass: "error-notice"
            }), t("p", {
                staticClass: "form-notice"
            }, [t("span", {
                staticClass: "notice notice-error",
                class: {
                    show: e.isShowNotice && "error" === e.stateOfRequest
                }
            }, [e._v("Something went wrong. Please try again later.")]), t("span", {
                staticClass: "notice notice-success",
                class: {
                    show: e.isShowNotice && "done" === e.stateOfRequest
                }
            }, [e._v("Thank you for your message.")])])])])])])])])
        }
          , x = [function() {
            var e = this
              , t = e._self._c;
            return t("div", {
                staticClass: "intro-con content"
            }, [t("h1", {
                staticClass: "headline-l"
            }, [e._v("Recreate Games "), t("br"), e._v(" Make it Amazing. ")])])
        }
        , function() {
            var e = this
              , t = e._self._c;
            return t("section", {
                staticClass: "about",
                attrs: {
                    id: "about"
                }
            }, [t("div", {
                staticClass: "content"
            }, [t("h1", {
                staticClass: "headline-s"
            }, [e._v("WE ARE PASSIONATE ABOUT"), t("br"), e._v("CREATING REALISTIC GAMES "), t("br"), e._v("THAT ARE IMMERSIVE AND MEMORABLE.")]), t("p", {
                staticClass: "paragraph"
            }, [e._v("Recreate games is a game studio owned by Source Technology with the goal of creating next-gen immersive entertainment products. Our investors include Matrix Partners, Bertelsmann and Zhen Fund.")]), t("p", {
                staticClass: "paragraph"
            }, [e._v("We pursue a small-team working approach. We believe that small teams can generate tremendous creative energy, and that the greatness of a product is not determined by team size, but by proficiency, enthusiasm and groundbreaking ideas.")])]), t("section", {
                staticClass: "about-2"
            }, [t("section", {
                staticClass: "content"
            }, [t("p", {
                staticClass: "headline-s"
            }, [e._v("Recreate next generation entertainment products")])])])])
        }
        , function() {
            var e = this
              , t = e._self._c;
            return t("span", {
                staticClass: "job-item-btn"
            }, [t("a", {
                staticClass: "btn-black"
            }, [e._v("Details")])])
        }
        , function() {
            var e = this
              , t = e._self._c;
            return t("section", {
                staticClass: "location"
            }, [t("div", {
                staticClass: "content"
            }, [t("h1", {
                staticClass: "headline-s"
            }, [e._v("Contact Us")])]), t("div", {
                staticClass: "location-map",
                attrs: {
                    id: "map"
                }
            })])
        }
        , function() {
            var e = this
              , t = e._self._c;
            return t("ul", {
                staticClass: "contact-info"
            }, [t("li", {
                staticClass: "contact-item"
            }, [t("h2", {
                staticClass: "headline-xs"
            }, [e._v("Player Support")]), t("p", {
                staticClass: "contact-title"
            }, [t("a", {
                attrs: {
                    href: "mailto:Support@recreate.games"
                }
            }, [e._v("Support@recreate.games")])]), t("p", {
                staticClass: "contact-desc"
            }, [e._v("All game related questions are welcome")])]), t("li", {
                staticClass: "contact-item"
            }, [t("h2", {
                staticClass: "headline-xs"
            }, [e._v("Business")]), t("p", {
                staticClass: "contact-title"
            }, [t("a", {
                attrs: {
                    href: "mailto:Business@recreate.games"
                }
            }, [e._v("Business@recreate.games")])]), t("p", {
                staticClass: "contact-desc"
            }, [e._v("Work with us in a partnership")])]), t("li", {
                staticClass: "contact-item"
            }, [t("h2", {
                staticClass: "headline-xs"
            }, [e._v("Employment")]), t("p", {
                staticClass: "contact-title"
            }, [t("a", {
                attrs: {
                    href: "mailto:Careers@recreate.games"
                }
            }, [e._v("Careers@recreate.games")])]), t("p", {
                staticClass: "contact-desc"
            }, [e._v("Join us to create top-notch games")])]), t("li", {
                staticClass: "contact-item"
            }, [t("h2", {
                staticClass: "headline-xs"
            }, [e._v("Media Report")]), t("p", {
                staticClass: "contact-title"
            }, [t("a", {
                attrs: {
                    href: "mailto:Media@recreate.games"
                }
            }, [e._v("Media@recreate.games")])]), t("p", {
                staticClass: "contact-desc"
            }, [e._v("Press and media contact")])])])
        }
        , function() {
            var e = this
              , t = e._self._c;
            return t("span", {
                staticClass: "loading-icon"
            }, [e._v("Sending"), t("i", {
                staticClass: "loading-ico"
            })])
        }
        , function() {
            var e = this
              , t = e._self._c;
            return t("span", {
                staticClass: "done-icon"
            }, [e._v("Done"), t("i", {
                staticClass: "done-ico"
            })])
        }
        , function() {
            var e = this
              , t = e._self._c;
            return t("span", {
                staticClass: "error-icon"
            }, [e._v("Error"), t("i", {
                staticClass: "error-ico"
            })])
        }
        ]
          , O = i("bc3a")
          , I = i.n(O);
        function P(e) {
            return I()({
                method: "post",
                url: "https://wekb0rx9b3.execute-api.ap-northeast-1.amazonaws.com/Prod/mailer",
                data: e,
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
        }
        var L = {
            name: "HomeEn",
            data() {
                return {
                    videoLeft: 0,
                    userName: "",
                    emailAddr: "",
                    subject: "",
                    message: "",
                    isShowNotice: !1,
                    pending: !1,
                    invalidation: {
                        name: !1,
                        email: !1,
                        message: !1
                    },
                    stateOfRequest: "",
                    activatedNav: 0,
                    scrollTops: [],
                    halfWindowHeight: 0,
                    scrollDebounceBinder: null,
                    scrollThrottleBinder: null,
                    getOffsetTopBinder: null,
                    videoPosBinder: null
                }
            },
            props: {
                careers: Array,
                navClicked: Boolean,
                currentNav: Number
            },
            rou(e, t, i) {
                console.log("before router enter", e, t),
                i()
            },
            beforeDestroy() {
                document.removeEventListener("scroll", this.scrollDebounceBinder, !1),
                document.removeEventListener("scroll", this.scrollThrottleBinder, !1),
                window.removeEventListener("resize", this.getOffsetTopBinder, !1),
                window.removeEventListener("resize", this.videoPosBinder, !1)
            },
            mounted() {
                this.scrollDebounceBinder = this.scrollDebounce(this.scrollHandle, 300),
                this.scrollThrottleBinder = this.scrollThrottle(this.activeNavItem, 300).bind(this),
                this.getOffsetTopBinder = this.getOffsetTop.bind(this),
                this.videoPosBinder = this.setVideoPos.bind(this),
                this.getOffsetTop(),
                document.addEventListener("scroll", this.scrollDebounceBinder, !1),
                document.addEventListener("scroll", this.scrollThrottleBinder, !1),
                window.addEventListener("resize", this.getOffsetTopBinder, !1),
                window.addEventListener("resize", this.videoPosBinder, !1),
                this.mapInit(),
                this.$refs.video.addEventListener("canplay", ()=>{
                    this.setVideoPos()
                }
                ),
                this.$emit("child-mounted")
            },
            methods: {
                setVideoPos() {
                    let e = window.innerWidth
                      , t = this.$refs.video.clientWidth;
                    this.videoLeft = (e - t) / 2 + "px"
                },
                mapInit() {
                    const e = {
                        lat: 31.299528299169058,
                        lng: 121.51672754091616
                    };
                    b.load().then((function(t) {
                        const i = new t.maps.StyledMapType(f,{
                            name: "Styled Map"
                        })
                          , s = new t.maps.Map(document.getElementById("map"),{
                            center: e,
                            zoom: 13,
                            fullscreenControl: !1,
                            zoomControl: !0,
                            mapTypeControlOptions: {
                                mapTypeIds: ["roadmap", "satellite", "hybrid", "terrain", "styled_map"]
                            },
                            scrollwheel: !1,
                            panControl: !1,
                            disableDoubleClickZoom: !1,
                            zoomControlOptions: {
                                style: 2,
                                position: 4
                            },
                            mapTypeControl: !1,
                            scaleControl: !1,
                            streetViewControl: !1
                        });
                        s.mapTypes.set("styled_map", i),
                        s.setMapTypeId("styled_map");
                        class a extends t.maps.OverlayView {
                            constructor(e, i) {
                                super(),
                                this.LatLng = new t.maps.LatLng(e,i),
                                this.div_ = null
                            }
                            onAdd() {
                                this.div_ = document.createElement("div"),
                                this.div_.className = "map-marker",
                                this.div_.innerHTML = '<div class="middle-dot"></div><div class="signal"></div><div class="signal2"></div>';
                                const e = this.getPanes();
                                e.overlayLayer.appendChild(this.div_)
                            }
                            draw() {
                                let e = this.getProjection().fromLatLngToDivPixel(this.LatLng);
                                e && (this.div_.style.left = e.x + "px",
                                this.div_.style.top = e.y + "px")
                            }
                            onRemove() {
                                this.div_ && (this.div_.parentNode.removeChild(this.div_),
                                this.div_ = null)
                            }
                        }
                        const n = new a(e.lat,e.lng);
                        n.setMap(s)
                    }
                    ))
                },
                invalidationNameCheck() {
                    this.invalidation.name = !this.userName
                },
                invalidationEmailCheck() {
                    this.invalidation.email = !g.test(this.emailAddr)
                },
                invalidationMsgCheck() {
                    this.invalidation.message = !this.message
                },
                send() {
                    let e = new FormData
                      , t = this.message;
                    this.pending || (this.invalidationNameCheck(),
                    this.invalidationEmailCheck(),
                    this.invalidationMsgCheck(),
                    this.invalidation.name || this.invalidation.email || this.invalidation.message || (t = `\n          From:\n          ${this.userName} ${this.emailAddr}\n\n          Subject:\n          ${this.subject}\n\n          Message:\n          ${t}\n\n\n          ----\n          This email was sent from recreate.games.`,
                    e.append("from", "hello@recreate.games"),
                    e.append("to", "hello@recreate.games"),
                    e.append("replyTo", this.emailAddr),
                    e.append("subject", `Recreate Games "${this.subject}"`),
                    e.append("body", t),
                    this.stateOfRequest = "loading",
                    this.pending = !0,
                    P(e).then(e=>{
                        0 === e.data.code ? this.success() : this.error()
                    }
                    ).catch(()=>{
                        this.error()
                    }
                    )))
                },
                showNotice() {
                    this.isShowNotice = !0,
                    setTimeout(()=>{
                        this.isShowNotice = !1,
                        this.resetBtn()
                    }
                    , 3e3)
                },
                success() {
                    this.stateOfRequest = "done",
                    this.showNotice(),
                    setTimeout(()=>{
                        this.resetForm()
                    }
                    , 2e3)
                },
                error() {
                    this.stateOfRequest = "error",
                    this.showNotice()
                },
                resetBtn() {
                    this.pending = !1,
                    this.stateOfRequest = ""
                },
                resetForm() {
                    this.resetBtn(),
                    this.userName = "",
                    this.emailAddr = "",
                    this.subject = "",
                    this.message = ""
                },
                getOffsetTop() {
                    let e = 0
                      , t = document.querySelector("#intro").clientHeight
                      , i = t + document.querySelector("#about").clientHeight
                      , s = i + document.querySelector("#careers").clientHeight + document.querySelector(".location").clientHeight;
                    this.scrollTops = [e, t, i, s],
                    this.halfWindowHeight = window.innerHeight / 2,
                    this.$emit("update-scrolltops", this.scrollTops)
                },
                scrollDebounce(e, t) {
                    let i = null;
                    return function() {
                        i && clearTimeout(i),
                        i = setTimeout(e, t)
                    }
                },
                scrollHandle() {
                    this.navClicked && this.$emit("reset-nav-clicked-trigger")
                },
                scrollThrottle(e, t) {
                    let i = Date.now()
                      , s = null;
                    return function() {
                        if (this.navClicked)
                            return !1;
                        let a = Date.now();
                        clearTimeout(s),
                        a - i >= t ? (i = a,
                        e()) : s = setTimeout(e, t)
                    }
                },
                activeNavItem() {
                    let e = v() + this.halfWindowHeight;
                    for (let t = 0; t < this.scrollTops.length; t++)
                        if (t < this.scrollTops.length - 1 && e > this.scrollTops[t] && e <= this.scrollTops[t + 1] || t === this.scrollTops.length - 1 && e > this.scrollTops[t]) {
                            this.activatedNav = t;
                            break
                        }
                    this.updateNavigation()
                },
                updateNavigation() {
                    this.activatedNav !== this.currentNav && this.$emit("update-nav", this.activatedNav)
                }
            }
        }
          , q = L
          , B = Object(l["a"])(q, D, x, !1, null, null, null)
          , M = B.exports
          , F = function() {
            var e = this
              , t = e._self._c;
            return t("main", [t("section", {
                staticClass: "intro",
                attrs: {
                    id: "intro"
                }
            }, [e._m(0), t("div", {
                staticClass: "intro-con content"
            }, [e._m(1), t("div", {
                staticClass: "right-con"
            }, [t("router-link", {
                staticClass: "btn-black",
                attrs: {
                    to: "/zh/#careers"
                },
                nativeOn: {
                    click: function(t) {
                        return e.updateNavigation(2, !0)
                    }
                }
            }, [t("span", {
                staticClass: "btn-txt"
            }, [e._v("职位列表")]), t("i", {
                staticClass: "arrow-right"
            })])], 1)])]), t("section", {
                attrs: {
                    id: "about"
                }
            }, [e._m(2), t("section", {
                staticClass: "work-env"
            }, [t("section", {
                staticClass: "content"
            }, [e._m(3), t("ul", {
                staticClass: "work-env-img"
            }, [t("li", {
                staticClass: "work-env-item"
            }, [t("img", {
                attrs: {
                    alt: "",
                    src: i("234a")
                },
                on: {
                    load: e.imgLoaded
                }
            })]), t("li", {
                staticClass: "work-env-item"
            }, [t("img", {
                attrs: {
                    alt: "",
                    src: i("78dd")
                },
                on: {
                    load: e.imgLoaded
                }
            })]), t("li", {
                staticClass: "work-env-item"
            }, [t("img", {
                attrs: {
                    alt: "",
                    src: i("e9cf")
                },
                on: {
                    load: e.imgLoaded
                }
            })]), t("li", {
                staticClass: "work-env-item"
            }, [t("img", {
                attrs: {
                    alt: "",
                    src: i("77c0")
                },
                on: {
                    load: e.imgLoaded
                }
            })])])])])]), t("section", {
                staticClass: "careers",
                attrs: {
                    id: "careers"
                }
            }, [t("section", {
                staticClass: "content"
            }, [t("h1", {
                staticClass: "headline-zh-s"
            }, [e._v("职位列表")]), t("p", {
                staticClass: "careers-subtitle"
            }, [e._v("游戏创作需要各行业的人才通力配合。为了打造顶级游戏体验，Recreate 需要招募各行业的顶级人才。我们相信将优秀的创作者聚集在一起，将产生出燎原的火焰")]), t("ul", {
                staticClass: "job-list-white"
            }, e._l(e.careers, (function(i, s) {
                return t("li", {
                    key: "career-zh-" + s,
                    staticClass: "job-item"
                }, [e._m(4, !0), t("div", {
                    staticClass: "job-item-info"
                }, [t("span", {
                    staticClass: "job-name"
                }, [e._v(e._s(i.position))]), t("span", [e._v(e._s(i.place))]), t("span", [e._v(e._s(i.time))])]), t("router-link", {
                    staticClass: "job-link",
                    attrs: {
                        to: "/zh/career/" + i.id
                    }
                })], 1)
            }
            )), 0)])]), e._m(5)])
        }
          , z = [function() {
            var e = this
              , t = e._self._c;
            return t("div", {
                staticClass: "bg-overlay"
            }, [t("div", {
                staticClass: "intro-zh-bg"
            })])
        }
        , function() {
            var e = this
              , t = e._self._c;
            return t("div", {
                staticClass: "left-con"
            }, [t("h1", {
                staticClass: "headline-zh-l"
            }, [e._v("招募热忱锋锐的灵魂"), t("br"), e._v("加入我们"), t("br"), e._v("创造令人铭记的游戏")]), t("p", [e._v("聚集那些雄心勃勃才华横溢的人，将梦想与幻想变为现实"), t("br"), e._v("创造令人惊叹的游戏体验，并让玩家沉醉其中")])])
        }
        , function() {
            var e = this
              , t = e._self._c;
            return t("section", {
                staticClass: "about content"
            }, [t("h1", {
                staticClass: "headline-zh-s"
            }, [e._v("我们是谁 / 奉行理念")]), t("div", {
                staticClass: "paragraph zh"
            }, [t("p", {
                staticClass: "p"
            }, [e._v("Recreate games 是 Source Technology 旗下游戏工作室，目标是创造下一代沉浸体验的娱乐产品。公司由 Matrix Partners、Bertelsmann、Zhen Fund 等基金投资。")]), t("p", {
                staticClass: "p"
            }, [e._v("我们认为游戏是种接近造物主的创造形式 – 创造一个世界，让玩家忘却现实而沉浸其中。游戏作为站在艺术和工程科学交叉路口的学科，成功的产品需要编剧、策划、美术、工程完美配合。我们相信精心努力的雕琢产品，是产品成功的关键。")])]), t("div", {
                staticClass: "paragraph zh"
            }, [t("p", {
                staticClass: "p"
            }, [e._v("Recreate 奉行小型团队作业，并相信小团队能产生巨大的能量。我们相信游戏成功因素不来自团队规模，而是因为精锐与充满热情的创作者以及前瞻的创意。")]), t("p", {
                staticClass: "p"
            }, [e._v("Recreate 重视公司员工自学与自我驱动能力，并给予所有可能支持。相信这样才是低沟通障碍，高效创作小型团队的基石。我们厌恶任何大公司会出现的疾病，不希望任何人成为某个环节的螺丝钉，我们希望打破职能边界，让员工与团队共同成长，保持探索欲与思路锐利是我们认为最重要的品质。")])])])
        }
        , function() {
            var e = this
              , t = e._self._c;
            return t("div", {
                staticClass: "work-env-txt"
            }, [t("h1", {
                staticClass: "headline-zh-s"
            }, [e._v("工作环境")]), t("p", {
                staticClass: "p"
            }, [e._v("Recreate 总部位于上海，我们为每位工作人员配备了 Haworth ZODY 人体工程学椅，升降桌，空气净化器，大楼整体新风系统，饮料，加班通勤补助。")]), t("p", {
                staticClass: "p"
            }, [e._v("除了硬件配置，在职员工还可以免费购买书籍，观看 Pluralsight 与 ABOUTCG 教程以及参加 GDC、Game Jam、Siggraph 等活动。我们非常重视自我学习和行业交流，并认为这是团队成长的关键。")])])
        }
        , function() {
            var e = this
              , t = e._self._c;
            return t("span", {
                staticClass: "job-item-btn"
            }, [t("a", {
                staticClass: "btn-white"
            }, [e._v("职位详情")])])
        }
        , function() {
            var e = this
              , t = e._self._c;
            return t("section", {
                staticClass: "contact",
                attrs: {
                    id: "contact"
                }
            }, [t("div", {
                staticClass: "content contact-con"
            }, [t("div", {
                staticClass: "left-con"
            }, [t("h1", {
                staticClass: "headline-zh-l"
            }, [e._v("Let’s Do Game"), t("br"), e._v("加入我们一展抱负"), t("br"), e._v("立刻联系")])]), t("div", {
                staticClass: "right-con"
            }, [t("a", {
                staticClass: "btn-black",
                attrs: {
                    href: "mailto:Careers@recreate.games"
                }
            }, [t("span", {
                staticClass: "btn-txt"
            }, [e._v("发送邮件")])])])]), t("ul", {
                staticClass: "content contact-list"
            }, [t("li", {
                staticClass: "contact-item"
            }, [t("h2", {
                staticClass: "headline-zh-l"
            }, [e._v("Player Support")]), t("p", {
                staticClass: "contact-title"
            }, [t("a", {
                attrs: {
                    href: "mailto:Support@recreate.games"
                }
            }, [e._v("Support@recreate.games")])])]), t("li", {
                staticClass: "contact-item"
            }, [t("h2", {
                staticClass: "headline-zh-l"
            }, [e._v("Business")]), t("p", {
                staticClass: "contact-title"
            }, [t("a", {
                attrs: {
                    href: "mailto:Business@recreate.games"
                }
            }, [e._v("Business@recreate.games")])])]), t("li", {
                staticClass: "contact-item"
            }, [t("h2", {
                staticClass: "headline-zh-l"
            }, [e._v("Employment")]), t("p", {
                staticClass: "contact-title"
            }, [t("a", {
                attrs: {
                    href: "mailto:Careers@recreate.games"
                }
            }, [e._v("Careers@recreate.games")])])]), t("li", {
                staticClass: "contact-item"
            }, [t("h2", {
                staticClass: "headline-zh-l"
            }, [e._v("Media Report")]), t("p", {
                staticClass: "contact-title"
            }, [t("a", {
                attrs: {
                    href: "mailto:Media@recreate.games"
                }
            }, [e._v("Media@recreate.games")])])])])])
        }
        ]
          , $ = {
            name: "HomeZh",
            data() {
                return {
                    activatedNav: 0,
                    scrollTops: [],
                    halfWindowHeight: 0,
                    imgLoadedNum: 0,
                    imgNeedPreload: 4,
                    scrollDebounceBinder: null,
                    scrollThrottleBinder: null,
                    getOffsetTopBinder: null
                }
            },
            props: {
                careers: Array,
                navClicked: Boolean,
                currentNav: Number
            },
            beforeDestroy() {
                document.removeEventListener("scroll", this.scrollDebounceBinder, !1),
                document.removeEventListener("scroll", this.scrollThrottleBinder, !1),
                window.removeEventListener("resize", this.getOffsetTopBinder, !1)
            },
            mounted() {
                this.scrollDebounceBinder = this.scrollDebounce(this.scrollHandle, 300),
                this.scrollThrottleBinder = this.scrollThrottle(this.activeNavItem, 300).bind(this),
                this.getOffsetTopBinder = this.getOffsetTop.bind(this),
                document.addEventListener("scroll", this.scrollDebounceBinder, !1),
                document.addEventListener("scroll", this.scrollThrottleBinder, !1),
                window.addEventListener("resize", this.getOffsetTopBinder, !1)
            },
            methods: {
                getOffsetTop() {
                    let e = 0
                      , t = document.querySelector("#intro").clientHeight
                      , i = t + document.querySelector("#about").clientHeight
                      , s = i + document.querySelector("#careers").clientHeight;
                    this.scrollTops = [e, t, i, s],
                    this.halfWindowHeight = window.innerHeight / 2,
                    this.$emit("update-scrolltops", this.scrollTops)
                },
                imgLoaded() {
                    this.imgLoadedNum++,
                    this.imgLoadedNum === this.imgNeedPreload && (this.getOffsetTop(),
                    this.fixScrollTop())
                },
                scrollDebounce(e, t) {
                    let i = null;
                    return function() {
                        i && clearTimeout(i),
                        i = setTimeout(e, t)
                    }
                },
                scrollHandle() {
                    this.navClicked && this.$emit("reset-nav-clicked-trigger")
                },
                scrollThrottle(e, t) {
                    let i = Date.now()
                      , s = null;
                    return function() {
                        if (this.navClicked)
                            return !1;
                        let a = Date.now();
                        clearTimeout(s),
                        a - i >= t ? (i = a,
                        e()) : s = setTimeout(e, t)
                    }
                },
                fixScrollTop() {
                    this.$emit("img-loaded", this.scrollTops)
                },
                activeNavItem() {
                    let e = v() + this.halfWindowHeight;
                    for (let t = 0; t < this.scrollTops.length; t++)
                        if (t < this.scrollTops.length - 1 && e > this.scrollTops[t] && e <= this.scrollTops[t + 1] || t === this.scrollTops.length - 1 && e > this.scrollTops[t]) {
                            this.activatedNav = t;
                            break
                        }
                    this.updateNavigation(this.activatedNav)
                },
                updateNavigation(e, t) {
                    (e !== this.currentNav || t) && this.$emit("update-nav", e, t)
                }
            }
        }
          , U = $
          , j = Object(l["a"])(U, F, z, !1, null, "0b624f16", null)
          , H = j.exports
          , W = function() {
            var e = this
              , t = e._self._c;
            return t("main", {
                staticClass: "career-wrap"
            }, [t("section", {
                staticClass: "career-top intro"
            }, [e._m(0), t("div", {
                staticClass: "content"
            }, [t("div", {
                staticClass: "left-con"
            }, [t("h1", {
                staticClass: "headline-semi-l"
            }, [e._v(e._s(e.career.position))])]), t("div", {
                staticClass: "right-con"
            }, [t("p", {
                staticClass: "career-btn-wrapper",
                on: {
                    click: e.scrollToApply
                }
            }, [t("router-link", {
                staticClass: "btn-black",
                attrs: {
                    to: "#apply"
                }
            }, [t("span", {
                staticClass: "btn-txt"
            }, [e._v("Apply Now")]), t("i", {
                staticClass: "arrow-right"
            })])], 1)])])]), t("section", {
                staticClass: "content"
            }, [t("div", {
                staticClass: "career-detail"
            }, [t("aside", {
                staticClass: "career-left-con"
            }, [t("h2", {
                staticClass: "career-title"
            }, [e._v(e._s(e.career.place))]), t("p", {
                staticClass: "career-title career-time"
            }, [e._v(e._s(e.career.time))])]), t("section", {
                staticClass: "career-right-con"
            }, [e.career.descri ? t("dl", {
                staticClass: "career-list"
            }, [t("dt", {
                staticClass: "career-title"
            }, [e._v("DESCRIPTION:")]), e._l(e.career.descri.split("\n"), (function(i) {
                return t("dd", {
                    key: "decri-" + i.index
                }, [e._v(e._s(i))])
            }
            ))], 2) : e._e(), e.career.responsibility ? t("dl", {
                staticClass: "career-list"
            }, [t("dt", {
                staticClass: "career-title"
            }, [e._v("RESPONSIBILITIES:")]), e._l(e.career.responsibility.split("\n"), (function(i, s) {
                return t("dd", {
                    key: "re-" + s,
                    staticClass: "career-item"
                }, [e._v(e._s(i))])
            }
            ))], 2) : e._e(), e.career.required ? t("dl", {
                staticClass: "career-list"
            }, [t("dt", {
                staticClass: "career-title"
            }, [e._v("REQUIRED:")]), e._l(e.career.required.split("\n"), (function(i, s) {
                return t("dd", {
                    key: "required-" + s,
                    staticClass: "career-item"
                }, [e._v(e._s(i))])
            }
            ))], 2) : e._e(), e.career.plus ? t("dl", {
                staticClass: "career-list"
            }, [t("dt", {
                staticClass: "career-title"
            }, [e._v("PLUS:")]), e._l(e.career.plus.split("\n"), (function(i, s) {
                return t("dd", {
                    key: "plus-" + s,
                    staticClass: "career-item"
                }, [e._v(e._s(i))])
            }
            ))], 2) : e._e(), e.career.materials ? t("dl", {
                staticClass: "career-list"
            }, [t("dt", {
                staticClass: "career-title"
            }, [e._v("MATERIALS:")]), e._l(e.career.materials.split("\n"), (function(i, s) {
                return t("dd", {
                    key: "m-" + s,
                    staticClass: "career-item"
                }, [e._v(e._s(i))])
            }
            ))], 2) : e._e()])]), t("section", {
                staticClass: "career-apply",
                attrs: {
                    id: "apply"
                }
            }, [e._m(1), t("section", {
                staticClass: "career-right-con"
            }, [t("form", [t("p", {
                staticClass: "input-wrap"
            }, [t("label", {
                staticClass: "label",
                attrs: {
                    for: "name"
                }
            }, [e._v("YOUR NAME *")]), t("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model.trim",
                    value: e.userName,
                    expression: "userName",
                    modifiers: {
                        trim: !0
                    }
                }],
                staticClass: "input",
                class: {
                    warn: e.invalidation.name
                },
                attrs: {
                    autocomplete: "off",
                    id: "name",
                    type: "text",
                    required: ""
                },
                domProps: {
                    value: e.userName
                },
                on: {
                    blur: [function(t) {
                        return e.invalidationNameCheck()
                    }
                    , function(t) {
                        return e.$forceUpdate()
                    }
                    ],
                    input: function(t) {
                        t.target.composing || (e.userName = t.target.value.trim())
                    }
                }
            })]), t("p", {
                staticClass: "input-wrap"
            }, [t("label", {
                staticClass: "label",
                attrs: {
                    for: "email"
                }
            }, [e._v("EMAIL ADDRESS *")]), t("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model.trim",
                    value: e.emailAddr,
                    expression: "emailAddr",
                    modifiers: {
                        trim: !0
                    }
                }],
                staticClass: "input",
                class: {
                    warn: e.invalidation.email
                },
                attrs: {
                    autocomplete: "off",
                    id: "email",
                    type: "email",
                    required: ""
                },
                domProps: {
                    value: e.emailAddr
                },
                on: {
                    blur: [function(t) {
                        return e.invalidationEmailCheck()
                    }
                    , function(t) {
                        return e.$forceUpdate()
                    }
                    ],
                    input: function(t) {
                        t.target.composing || (e.emailAddr = t.target.value.trim())
                    }
                }
            })]), t("p", {
                staticClass: "input-wrap"
            }, [t("label", {
                staticClass: "label",
                attrs: {
                    for: "mobile"
                }
            }, [e._v("MOBILE PHONE")]), t("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model.trim.number",
                    value: e.mobile,
                    expression: "mobile",
                    modifiers: {
                        trim: !0,
                        number: !0
                    }
                }],
                staticClass: "input",
                attrs: {
                    autocomplete: "off",
                    id: "mobile",
                    type: "number"
                },
                domProps: {
                    value: e.mobile
                },
                on: {
                    input: function(t) {
                        t.target.composing || (e.mobile = e._n(t.target.value.trim()))
                    },
                    blur: function(t) {
                        return e.$forceUpdate()
                    }
                }
            })]), t("p", {
                staticClass: "input-wrap"
            }, [t("label", [t("select", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.hearFrom,
                    expression: "hearFrom"
                }],
                staticClass: "select",
                on: {
                    change: function(t) {
                        var i = Array.prototype.filter.call(t.target.options, (function(e) {
                            return e.selected
                        }
                        )).map((function(e) {
                            var t = "_value"in e ? e._value : e.value;
                            return t
                        }
                        ));
                        e.hearFrom = t.target.multiple ? i : i[0]
                    }
                }
            }, e._l(e.positionOrigin, (function(i, s) {
                return t("option", {
                    key: s,
                    domProps: {
                        value: i
                    }
                }, [e._v(e._s(i))])
            }
            )), 0)])]), t("p", {
                staticClass: "input-wrap"
            }, [t("label", {
                staticClass: "label",
                attrs: {
                    for: "resume"
                }
            }, [e._v("CURRICULUM VITAE *")]), t("span", {
                staticClass: "file",
                class: {
                    warn: e.invalidation.resume
                }
            }, [t("span", {
                staticClass: "btn-upload"
            }, [e._v("CHOOSE FILE "), t("input", {
                ref: "resumeInput",
                staticClass: "file-input",
                attrs: {
                    id: "resume",
                    type: "file",
                    required: ""
                },
                on: {
                    change: function(t) {
                        return e.getResume(t)
                    }
                }
            })]), e.resume.length ? t("span", [e._v(e._s(e.resume[0].name + e.resume.length))]) : e._e(), e.resume.length ? t("span", {
                staticClass: "btn-delete",
                on: {
                    click: function(t) {
                        return e.delResume()
                    }
                }
            }, [e._v("X")]) : e._e()])]), t("p", {
                staticClass: "input-wrap"
            }, [t("label", {
                staticClass: "label",
                attrs: {
                    for: "letter"
                }
            }, [e._v("COVER LETTER")]), t("span", {
                staticClass: "file"
            }, [t("span", {
                staticClass: "btn-upload"
            }, [e._v("CHOOSE FILE "), t("input", {
                ref: "letterInput",
                staticClass: "file-input",
                attrs: {
                    id: "letter",
                    type: "file"
                },
                on: {
                    change: function(t) {
                        return e.getLetter(t)
                    }
                }
            })]), e.letter.length ? t("span", [e._v(e._s(e.letter[0].name))]) : e._e(), e.letter.length ? t("span", {
                staticClass: "btn-delete",
                on: {
                    click: function(t) {
                        return e.delLetter()
                    }
                }
            }, [e._v("X")]) : e._e()])]), t("p", {
                staticClass: "input-wrap"
            }, [t("label", {
                staticClass: "label",
                attrs: {
                    for: "attachment"
                }
            }, [e._v("EXTRA ATTACHMENTS")]), t("span", {
                staticClass: "file"
            }, [t("span", {
                staticClass: "btn-upload"
            }, [e._v("CHOOSE FILE "), t("input", {
                ref: "attachmentInput",
                staticClass: "file-input",
                attrs: {
                    id: "attachment",
                    type: "file"
                },
                on: {
                    change: function(t) {
                        return e.getAttachment(t)
                    }
                }
            })]), e.attachment.length ? t("span", [e._v(e._s(e.attachment[0].name))]) : e._e(), e.attachment.length ? t("span", {
                staticClass: "btn-delete",
                on: {
                    click: function(t) {
                        return e.delAttachment()
                    }
                }
            }, [e._v("X")]) : e._e()])]), t("div", {
                staticClass: "input-wrap"
            }, [t("p", {
                staticClass: "btn-submit",
                class: e.stateOfRequest,
                on: {
                    click: function(t) {
                        return e.send()
                    }
                }
            }, [t("span", {
                staticClass: "txt"
            }, [e._v("Send Application")]), e._m(2), e._m(3), e._m(4)]), t("p", {
                staticClass: "form-notice"
            }, [t("span", {
                staticClass: "notice notice-error",
                class: {
                    show: e.isShowNotice && "error" === e.stateOfRequest
                }
            }, [e._v("Something went wrong. Please try again later.")]), t("span", {
                staticClass: "notice notice-success",
                class: {
                    show: e.isShowNotice && "done" === e.stateOfRequest
                }
            }, [e._v("Thank you for your Application.")])])])])])])]), t("section", {
                staticClass: "career-bottom"
            }, [t("div", {
                staticClass: "content"
            }, [t("p", {
                staticClass: "career-title"
            }, [e._v("JOIN RECREATE")]), t("router-link", {
                staticClass: "btn-black",
                attrs: {
                    to: "/en/#careers"
                }
            }, [t("span", {
                staticClass: "btn-txt"
            }, [e._v("MORE POSITIONS")]), t("i", {
                staticClass: "arrow-right"
            })])], 1)])])
        }
          , G = [function() {
            var e = this
              , t = e._self._c;
            return t("div", {
                staticClass: "bg-overlay"
            }, [t("div", {
                staticClass: "intro-zh-bg"
            })])
        }
        , function() {
            var e = this
              , t = e._self._c;
            return t("aside", {
                staticClass: "career-left-con"
            }, [t("h2", {
                staticClass: "career-title"
            }, [e._v("APPLICATION")]), t("p", {
                staticClass: "career-title career-time"
            }, [e._v("YOU CAN ALSO SEND A RESUME EMAIL DIRECTLY IF YOU HAVE PROBLEMS USING THE APPLICATION FORM")]), t("p", [t("a", [e._v("Careers@recreate.games")])])])
        }
        , function() {
            var e = this
              , t = e._self._c;
            return t("span", {
                staticClass: "loading-icon"
            }, [e._v("Sending"), t("i", {
                staticClass: "loading-ico"
            })])
        }
        , function() {
            var e = this
              , t = e._self._c;
            return t("span", {
                staticClass: "done-icon"
            }, [e._v("Done"), t("i", {
                staticClass: "done-ico"
            })])
        }
        , function() {
            var e = this
              , t = e._self._c;
            return t("span", {
                staticClass: "error-icon"
            }, [e._v("Error"), t("i", {
                staticClass: "error-ico"
            })])
        }
        ]
          , X = {
            name: "CareerEn",
            data() {
                return {
                    careerId: this.$route.params.career,
                    career: {
                        id: null,
                        position: "",
                        place: "",
                        time: "",
                        descri: "",
                        responsibility: "",
                        required: "",
                        plus: "",
                        materials: ""
                    },
                    userName: "",
                    emailAddr: "",
                    mobile: "",
                    hearFrom: "",
                    resume: [],
                    letter: [],
                    attachment: [],
                    positionOrigin: ["Where did you hear about this position", "News", "Recruiting Website", "Search Engine", "ArtStation", "Wechat", "Friend", "Someone At Recreate", "Other"],
                    isShowNotice: !1,
                    pending: !1,
                    invalidation: {
                        name: !1,
                        email: !1,
                        resume: !1
                    },
                    stateOfRequest: ""
                }
            },
            props: {
                careers: Array
            },
            beforeMount() {
                document.documentElement.style.scrollBehavior = "auto"
            },
            mounted() {
                this.$emit("update-nav", null),
                this.career = this.careers.find(e=>e.id === Number(this.careerId)),
                this.hearFrom = this.positionOrigin[0],
                this.career || this.$router.push("/en/error"),
                this.resume = this.$refs.attachmentInput.files,
                this.letter = this.$refs.attachmentInput.files,
                this.attachment = this.$refs.attachmentInput.files
            },
            methods: {
                scrollToApply() {
                    document.querySelector("#apply").scrollIntoView()
                },
                backToCareers() {
                    this.$emit("update-nav", 2)
                },
                invalidationNameCheck() {
                    this.invalidation.name = !this.userName
                },
                invalidationEmailCheck() {
                    this.invalidation.email = !g.test(this.emailAddr)
                },
                invalidationResumeCheck() {
                    this.invalidation.resume = !this.resume.length
                },
                getResume(e) {
                    this.resume = e.target.files,
                    this.invalidationResumeCheck()
                },
                delResume() {
                    this.$refs.resumeInput.value = "",
                    this.$forceUpdate()
                },
                getLetter(e) {
                    this.letter = e.target.files
                },
                delLetter() {
                    this.$refs.letterInput.value = "",
                    this.$forceUpdate()
                },
                getAttachment(e) {
                    this.attachment = e.target.files
                },
                delAttachment() {
                    this.$refs.attachmentInput.value = "",
                    this.$forceUpdate()
                },
                send() {
                    let e = new FormData
                      , t = ""
                      , i = "";
                    this.pending || (this.invalidationNameCheck(),
                    this.invalidationEmailCheck(),
                    this.invalidationResumeCheck(),
                    this.invalidation.name || this.invalidation.email || this.invalidation.resume || (t = `Recreate Games ${this.userName} 网站投递简历`,
                    i = `\n          ${this.userName} 通过 Recreate.games 投递简历\n\n          Email:\n          ${this.emailAddr}\n\n          Mobile Phone:\n          ${this.mobile}\n\n          Apply For The Position:\n          ${this.career.position}\n\n          Hear About This position From:\n          ${this.hearFrom === this.positionOrigin[0] ? "" : this.hearFrom}\n\n          ----\n          This email was sent from recreate.games.`,
                    e.append("from", "hello@recreate.games"),
                    e.append("to", "careers@recreate.games"),
                    e.append("replyTo", "hr@recreategame.com"),
                    e.append("subject", t),
                    e.append("body", i),
                    this.resume.length && e.append("attachment", this.resume[0]),
                    this.letter.length && e.append("attachment", this.letter[0]),
                    this.attachment.length && e.append("attachment", this.attachment[0]),
                    this.stateOfRequest = "loading",
                    this.pending = !0,
                    P(e).then(e=>{
                        0 === e.data.code ? this.success() : this.error()
                    }
                    ).catch(()=>{
                        this.error()
                    }
                    )))
                },
                showNotice() {
                    this.isShowNotice = !0,
                    setTimeout(()=>{
                        this.isShowNotice = !1,
                        this.resetBtn()
                    }
                    , 3e3)
                },
                success() {
                    this.stateOfRequest = "done",
                    this.showNotice(),
                    setTimeout(()=>{
                        this.resetForm()
                    }
                    , 2e3)
                },
                error() {
                    this.stateOfRequest = "error",
                    this.showNotice()
                },
                resetBtn() {
                    this.pending = !1,
                    this.stateOfRequest = ""
                },
                resetForm() {
                    this.resetBtn(),
                    this.hearFrom = this.positionOrigin[0],
                    this.userName = "",
                    this.emailAddr = "",
                    this.mobile = "",
                    this.delResume(),
                    this.delLetter(),
                    this.delAttachment()
                }
            }
        }
          , V = X
          , Y = Object(l["a"])(V, W, G, !1, null, null, null)
          , J = Y.exports
          , Q = function() {
            var e = this
              , t = e._self._c;
            return t("main", [t("section", {
                staticClass: "career-top intro"
            }, [e._m(0), t("div", {
                staticClass: "content"
            }, [t("div", {
                staticClass: "left-con"
            }, [t("h1", {
                staticClass: "headline-zh-el"
            }, [e._v(e._s(e.career.position))])]), t("div", {
                staticClass: "right-con"
            }, [t("p", {
                staticClass: "career-btn-wrapper with-pt",
                on: {
                    click: e.scrollToApply
                }
            }, [t("router-link", {
                staticClass: "btn-black",
                attrs: {
                    to: "#apply"
                }
            }, [t("span", {
                staticClass: "btn-txt"
            }, [e._v("投递简历")]), t("i", {
                staticClass: "arrow-right"
            })])], 1)])])]), t("section", {
                staticClass: "content"
            }, [t("div", {
                staticClass: "career-detail"
            }, [t("aside", {
                staticClass: "career-left-con"
            }, [t("h2", {
                staticClass: "career-title-zh"
            }, [e._v(e._s(e.career.place) + ", 中国")]), t("p", {
                staticClass: "career-title career-time"
            }, [e._v(e._s(e.career.time))])]), t("section", {
                staticClass: "career-right-con"
            }, [e.career.descri ? t("dl", {
                staticClass: "career-list"
            }, [t("dt", {
                staticClass: "career-title-zh"
            }, [e._v("职位描述：")]), e._l(e.career.descri.split("\n"), (function(i) {
                return t("dd", {
                    key: "decri-" + i.index
                }, [e._v(e._s(i))])
            }
            ))], 2) : e._e(), e.career.responsibility ? t("dl", {
                staticClass: "career-list"
            }, [t("dt", {
                staticClass: "career-title-zh"
            }, [e._v("工作职责：")]), e._l(e.career.responsibility.split("\n"), (function(i, s) {
                return t("dd", {
                    key: "re-" + s,
                    staticClass: "career-item"
                }, [e._v(e._s(i))])
            }
            ))], 2) : e._e(), e.career.required ? t("dl", {
                staticClass: "career-list"
            }, [t("dt", {
                staticClass: "career-title-zh"
            }, [e._v("必要条件：")]), e._l(e.career.required.split("\n"), (function(i, s) {
                return t("dd", {
                    key: "required-" + s,
                    staticClass: "career-item"
                }, [e._v(e._s(i))])
            }
            ))], 2) : e._e(), e.career.plus ? t("dl", {
                staticClass: "career-list"
            }, [t("dt", {
                staticClass: "career-title-zh"
            }, [e._v("加分项：")]), e._l(e.career.plus.split("\n"), (function(i, s) {
                return t("dd", {
                    key: "plus-" + s,
                    staticClass: "career-item"
                }, [e._v(e._s(i))])
            }
            ))], 2) : e._e(), t("dl", {
                staticClass: "career-list"
            }, [t("dt", {
                staticClass: "career-title-zh"
            }, [e._v("需提交材料：")]), e._l(e.career.materials.split("\n"), (function(i, s) {
                return t("dd", {
                    key: "m-" + s,
                    staticClass: "career-item"
                }, [e._v(e._s(i))])
            }
            ))], 2)])]), t("section", {
                staticClass: "career-apply",
                attrs: {
                    id: "apply"
                }
            }, [e._m(1), t("section", {
                staticClass: "career-right-con"
            }, [t("form", [t("p", {
                staticClass: "input-wrap"
            }, [t("label", {
                staticClass: "label",
                attrs: {
                    for: "name"
                }
            }, [e._v("姓名 *")]), t("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model.trim",
                    value: e.userName,
                    expression: "userName",
                    modifiers: {
                        trim: !0
                    }
                }],
                staticClass: "input",
                class: {
                    warn: e.invalidation.name
                },
                attrs: {
                    autocomplete: "off",
                    id: "name",
                    type: "text",
                    required: ""
                },
                domProps: {
                    value: e.userName
                },
                on: {
                    blur: [function(t) {
                        return e.invalidationNameCheck()
                    }
                    , function(t) {
                        return e.$forceUpdate()
                    }
                    ],
                    input: function(t) {
                        t.target.composing || (e.userName = t.target.value.trim())
                    }
                }
            })]), t("p", {
                staticClass: "input-wrap"
            }, [t("label", {
                staticClass: "label",
                attrs: {
                    for: "email"
                }
            }, [e._v("邮箱 *")]), t("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model.trim",
                    value: e.emailAddr,
                    expression: "emailAddr",
                    modifiers: {
                        trim: !0
                    }
                }],
                staticClass: "input",
                class: {
                    warn: e.invalidation.email
                },
                attrs: {
                    autocomplete: "off",
                    id: "email",
                    type: "email",
                    required: ""
                },
                domProps: {
                    value: e.emailAddr
                },
                on: {
                    blur: [function(t) {
                        return e.invalidationEmailCheck()
                    }
                    , function(t) {
                        return e.$forceUpdate()
                    }
                    ],
                    input: function(t) {
                        t.target.composing || (e.emailAddr = t.target.value.trim())
                    }
                }
            })]), t("p", {
                staticClass: "input-wrap"
            }, [t("label", {
                staticClass: "label",
                attrs: {
                    for: "mobile"
                }
            }, [e._v("电话")]), t("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model.trim.number",
                    value: e.mobile,
                    expression: "mobile",
                    modifiers: {
                        trim: !0,
                        number: !0
                    }
                }],
                staticClass: "input",
                attrs: {
                    autocomplete: "off",
                    id: "mobile",
                    type: "number"
                },
                domProps: {
                    value: e.mobile
                },
                on: {
                    input: function(t) {
                        t.target.composing || (e.mobile = e._n(t.target.value.trim()))
                    },
                    blur: function(t) {
                        return e.$forceUpdate()
                    }
                }
            })]), t("p", {
                staticClass: "input-wrap"
            }, [t("label", [t("select", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.hearFrom,
                    expression: "hearFrom"
                }],
                staticClass: "select",
                on: {
                    change: function(t) {
                        var i = Array.prototype.filter.call(t.target.options, (function(e) {
                            return e.selected
                        }
                        )).map((function(e) {
                            var t = "_value"in e ? e._value : e.value;
                            return t
                        }
                        ));
                        e.hearFrom = t.target.multiple ? i : i[0]
                    }
                }
            }, e._l(e.positionOrigin, (function(i, s) {
                return t("option", {
                    key: s,
                    domProps: {
                        value: i
                    }
                }, [e._v(e._s(i))])
            }
            )), 0)])]), t("p", {
                staticClass: "input-wrap"
            }, [t("label", {
                staticClass: "label",
                attrs: {
                    for: "resume"
                }
            }, [e._v("简历 *")]), t("span", {
                staticClass: "file",
                class: {
                    warn: e.invalidation.resume
                }
            }, [t("span", {
                staticClass: "btn-upload"
            }, [e._v("CHOOSE FILE "), t("input", {
                ref: "resumeInput",
                staticClass: "file-input",
                attrs: {
                    id: "resume",
                    type: "file",
                    required: ""
                },
                on: {
                    change: function(t) {
                        return e.getResume(t)
                    }
                }
            })]), e.resume.length ? t("span", [e._v(e._s(e.resume[0].name + e.resume.length))]) : e._e(), e.resume.length ? t("span", {
                staticClass: "btn-delete",
                on: {
                    click: function(t) {
                        return e.delResume()
                    }
                }
            }, [e._v("X")]) : e._e()])]), t("p", {
                staticClass: "input-wrap"
            }, [t("label", {
                staticClass: "label",
                attrs: {
                    for: "letter"
                }
            }, [e._v("推荐信")]), t("span", {
                staticClass: "file"
            }, [t("span", {
                staticClass: "btn-upload"
            }, [e._v("CHOOSE FILE "), t("input", {
                ref: "letterInput",
                staticClass: "file-input",
                attrs: {
                    id: "letter",
                    type: "file"
                },
                on: {
                    change: function(t) {
                        return e.getLetter(t)
                    }
                }
            })]), e.letter.length ? t("span", [e._v(e._s(e.letter[0].name))]) : e._e(), e.letter.length ? t("span", {
                staticClass: "btn-delete",
                on: {
                    click: function(t) {
                        return e.delLetter()
                    }
                }
            }, [e._v("X")]) : e._e()])]), t("p", {
                staticClass: "input-wrap"
            }, [t("label", {
                staticClass: "label",
                attrs: {
                    for: "attachment"
                }
            }, [e._v("附件")]), t("span", {
                staticClass: "file"
            }, [t("span", {
                staticClass: "btn-upload"
            }, [e._v("CHOOSE FILE "), t("input", {
                ref: "attachmentInput",
                staticClass: "file-input",
                attrs: {
                    id: "attachment",
                    type: "file"
                },
                on: {
                    change: function(t) {
                        return e.getAttachment(t)
                    }
                }
            })]), e.attachment.length ? t("span", [e._v(e._s(e.attachment[0].name))]) : e._e(), e.attachment.length ? t("span", {
                staticClass: "btn-delete",
                on: {
                    click: function(t) {
                        return e.delAttachment()
                    }
                }
            }, [e._v("X")]) : e._e()])]), t("div", {
                staticClass: "input-wrap"
            }, [t("p", {
                staticClass: "btn-submit",
                class: e.stateOfRequest,
                on: {
                    click: function(t) {
                        return e.send()
                    }
                }
            }, [t("span", {
                staticClass: "txt"
            }, [e._v("提交申请")]), e._m(2), e._m(3), e._m(4)]), t("p", {
                staticClass: "form-notice"
            }, [t("span", {
                staticClass: "notice notice-error",
                class: {
                    show: e.isShowNotice && "error" === e.stateOfRequest
                }
            }, [e._v("出错了，请稍后再试。")]), t("span", {
                staticClass: "notice notice-success",
                class: {
                    show: e.isShowNotice && "done" === e.stateOfRequest
                }
            }, [e._v("感谢你的申请。")])])])])])])]), t("section", {
                staticClass: "career-bottom"
            }, [t("div", {
                staticClass: "content"
            }, [t("p", {
                staticClass: "career-title-zh"
            }, [e._v("加入 RECREATE")]), t("router-link", {
                staticClass: "btn-black",
                attrs: {
                    to: "/zh/#careers"
                }
            }, [t("span", {
                staticClass: "btn-txt"
            }, [e._v("更多职位")]), t("i", {
                staticClass: "arrow-right"
            })])], 1)])])
        }
          , K = [function() {
            var e = this
              , t = e._self._c;
            return t("div", {
                staticClass: "bg-overlay"
            }, [t("div", {
                staticClass: "intro-zh-bg"
            })])
        }
        , function() {
            var e = this
              , t = e._self._c;
            return t("aside", {
                staticClass: "career-left-con"
            }, [t("h2", {
                staticClass: "career-title-zh"
            }, [e._v("简历投递")]), t("p", {
                staticClass: "career-title career-time"
            }, [e._v("如果使用网页申请有任何问题，也可将通过邮箱投递简历")]), t("p", [t("a", [e._v("Careers@recreate.games")])])])
        }
        , function() {
            var e = this
              , t = e._self._c;
            return t("span", {
                staticClass: "loading-icon"
            }, [e._v("Sending"), t("i", {
                staticClass: "loading-ico"
            })])
        }
        , function() {
            var e = this
              , t = e._self._c;
            return t("span", {
                staticClass: "done-icon"
            }, [e._v("Done"), t("i", {
                staticClass: "done-ico"
            })])
        }
        , function() {
            var e = this
              , t = e._self._c;
            return t("span", {
                staticClass: "error-icon"
            }, [e._v("Error"), t("i", {
                staticClass: "error-ico"
            })])
        }
        ]
          , Z = {
            name: "CareerZh",
            data() {
                return {
                    careerId: this.$route.params.career,
                    career: {
                        id: null,
                        position: "",
                        place: "",
                        time: "",
                        descri: "",
                        responsibility: "",
                        required: "",
                        plus: "",
                        materials: ""
                    },
                    userName: "",
                    emailAddr: "",
                    mobile: "",
                    hearFrom: "",
                    resume: [],
                    letter: [],
                    attachment: [],
                    positionOrigin: ["你从哪得知该招聘职位", "新闻", "招聘网站", "搜索引擎", "ArtStation", "微信", "朋友", "已入职同事", "其他"],
                    isShowNotice: !1,
                    pending: !1,
                    invalidation: {
                        name: !1,
                        email: !1,
                        resume: !1
                    },
                    stateOfRequest: ""
                }
            },
            props: {
                careers: Array
            },
            beforeMount() {
                document.documentElement.style.scrollBehavior = "auto"
            },
            mounted() {
                this.$emit("update-nav", null),
                this.career = this.careers.find(e=>e.id === Number(this.careerId)),
                this.hearFrom = this.positionOrigin[0],
                this.career = this.careers.find(e=>e.id === Number(this.careerId)),
                this.career || this.$router.push("/zh/error"),
                this.resume = this.$refs.attachmentInput.files,
                this.letter = this.$refs.attachmentInput.files,
                this.attachment = this.$refs.attachmentInput.files
            },
            methods: {
                scrollToApply() {
                    document.querySelector("#apply").scrollIntoView()
                },
                invalidationNameCheck() {
                    this.invalidation.name = !this.userName
                },
                invalidationEmailCheck() {
                    this.invalidation.email = !g.test(this.emailAddr)
                },
                invalidationResumeCheck() {
                    this.invalidation.resume = !this.resume.length
                },
                getResume(e) {
                    this.resume = e.target.files,
                    this.invalidationResumeCheck()
                },
                delResume() {
                    this.$refs.resumeInput.value = "",
                    this.$forceUpdate()
                },
                getLetter(e) {
                    this.letter = e.target.files
                },
                delLetter() {
                    this.$refs.letterInput.value = "",
                    this.$forceUpdate()
                },
                getAttachment(e) {
                    this.attachment = e.target.files
                },
                delAttachment() {
                    this.$refs.attachmentInput.value = "",
                    this.$forceUpdate()
                },
                send() {
                    let e = new FormData
                      , t = ""
                      , i = "";
                    this.pending || (this.invalidationNameCheck(),
                    this.invalidationEmailCheck(),
                    this.invalidationResumeCheck(),
                    this.invalidation.name || this.invalidation.email || this.invalidation.resume || (t = `Recreate Games ${this.userName} 网站投递简历`,
                    i = `\n          ${this.userName} 通过 Recreate.games 投递简历\n\n          Email:\n          ${this.emailAddr}\n\n          Mobile Phone:\n          ${this.mobile}\n\n          Apply For The Position:\n          ${this.career.position}\n\n          Hear About This position From:\n          ${this.hearFrom === this.positionOrigin[0] ? "" : this.hearFrom}\n\n          ----\n          This email was sent from recreate.games.`,
                    e.append("from", "hello@recreate.games"),
                    e.append("to", "careers@recreate.games"),
                    e.append("replyTo", "hr@recreategame.com"),
                    e.append("subject", t),
                    e.append("body", i),
                    this.resume.length && e.append("attachment", this.resume[0]),
                    this.letter.length && e.append("attachment", this.letter[0]),
                    this.attachment.length && e.append("attachment", this.attachment[0]),
                    this.stateOfRequest = "loading",
                    this.pending = !0,
                    P(e).then(e=>{
                        0 === e.data.code ? this.success() : this.error()
                    }
                    ).catch(()=>{
                        this.error()
                    }
                    )))
                },
                showNotice() {
                    this.isShowNotice = !0,
                    setTimeout(()=>{
                        this.isShowNotice = !1,
                        this.resetBtn()
                    }
                    , 3e3)
                },
                success() {
                    this.stateOfRequest = "done",
                    this.showNotice(),
                    setTimeout(()=>{
                        this.resetForm()
                    }
                    , 2e3)
                },
                error() {
                    this.stateOfRequest = "error",
                    this.showNotice()
                },
                resetBtn() {
                    this.pending = !1,
                    this.stateOfRequest = ""
                },
                resetForm() {
                    this.resetBtn(),
                    this.hearFrom = this.positionOrigin[0],
                    this.userName = "",
                    this.emailAddr = "",
                    this.mobile = "",
                    this.delResume(),
                    this.delLetter(),
                    this.delAttachment()
                }
            }
        }
          , ee = Z
          , te = Object(l["a"])(ee, Q, K, !1, null, null, null)
          , ie = te.exports
          , se = function() {
            var e = this;
            e._self._c;
            return e._m(0)
        }
          , ae = [function() {
            var e = this
              , t = e._self._c;
            return t("section", {
                staticClass: "not-founded"
            }, [t("div", {
                staticClass: "content"
            }, [t("div", {
                staticClass: "error-con"
            }, [t("h1", {
                staticClass: "title"
            }, [e._v("404")]), t("p", {
                staticClass: "descri"
            }, [e._v("NOT FOUND")])])])])
        }
        ]
          , ne = {
            name: "Error",
            mounted() {
                document.querySelector(".nav-wrapper").className = "nav-wrapper fixed",
                this.$emit("update-nav", null)
            },
            props: {
                careers: Array
            }
        }
          , re = ne
          , oe = Object(l["a"])(re, se, ae, !1, null, null, null)
          , le = oe.exports;
        s["a"].use(u["a"]);
        const ce = new u["a"]({
            mode: "history",
            base: "/",
            linkActiveClass: "",
            linkExactActiveClass: "",
            routes: [{
                path: "/",
                name: "home",
                redirect: ()=>"/" + ue()
            }, {
                path: "/zh",
                component: R,
                beforeEnter: (e,t,i)=>{
                    me("zh"),
                    i()
                }
                ,
                children: [{
                    path: "/",
                    name: "home-zh",
                    component: H
                }, {
                    path: "career/:career",
                    name: "career-zh",
                    component: ie
                }, {
                    path: "error",
                    component: le
                }]
            }, {
                path: "/en",
                component: N,
                beforeEnter: (e,t,i)=>{
                    me("en"),
                    i()
                }
                ,
                children: [{
                    path: "/",
                    name: "home-en",
                    component: M
                }, {
                    path: "career/:career",
                    name: "career-en",
                    component: J
                }, {
                    path: "error",
                    component: le
                }]
            }, {
                path: "*",
                name: "NotFound",
                redirect: ()=>`/${ue()}/error`
            }],
            scrollBehavior(e, t, i) {
                if (e.name === t.name)
                    document.documentElement.style.scrollBehavior = "smooth";
                else if (de(),
                e.hash)
                    return {
                        selector: e.hash
                    };
                return document.documentElement.clientHeight,
                i || {
                    x: 0,
                    y: 0
                }
            }
        });
        function de() {
            document.documentElement.style.scrollBehavior = "initial"
        }
        function ue() {
            let e = localStorage.getItem("preferredLang") || navigator.language || navigator.userLanguage || navigator.browserLanguage || "en";
            return e = e.toLowerCase(),
            e = e.substr(0, 2),
            /(en)|(zh)/.test(e) || (e = "en"),
            e
        }
        function me(e) {
            let t = localStorage.getItem("preferredLang");
            t && localStorage === e || localStorage.setItem("preferredLang", e),
            document.documentElement.lang = e,
            de()
        }
        ce.onError(()=>{
            (void 0).push({
                path: `/${ue()}/error`
            })
        }
        );
        var pe = ce;
        s["a"].config.productionTip = !1,
        new s["a"]({
            render: e=>e(d),
            router: pe
        }).$mount("#app")
    },
    6562: function(e, t, i) {
        "use strict";
        i("5050")
    },
    "6f08": function(e, t, i) {
        e.exports = i.p + "img/Recreate.76d76b41.svg"
    },
    "77c0": function(e, t, i) {
        e.exports = i.p + "img/work-env-4.f55d93b2.jpg"
    },
    "78dd": function(e, t, i) {
        e.exports = i.p + "img/work-env-2.78776002.png"
    },
    e9cf: function(e, t, i) {
        e.exports = i.p + "img/work-env-3.83945ae1.jpg"
    },
    ea91: function(e, t, i) {
        e.exports = i.p + "media/T022.ea86d914.mp4"
    }
});
//# sourceMappingURL=app.6bafe326.js.map
