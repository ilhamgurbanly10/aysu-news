import { EDIT_BREAKING_NEWS, DELETE_BREAKING_NEWS, DELETE_SPONSORED_NEWS, EDIT_SPONSORED_NEWS, DELETE_TODAYS_TOP_HIGHLIGHTS, EDIT_TODAYS_TOP_HIGHLIGHTS, DELETE_POPULAR_NEWS, EDIT_POPULAR_NEWS, DELETE_MAIN_NEWS, EDIT_MAIN_NEWS } from "../types";

import Images from '../../components/Images';

import { admin01 } from '../../components/Images';

// breaking-news

const InitialBreakingNews = [
    {   
        id:1,
        title_en: 'Healthy rutine for your healthy lifestyle.',
        title_az: 'Sağlam həyat tərziniz üçün sağlam rutin.',
        title_de: 'Gesunde Routine für Ihren gesunden Lebensstil.',
        date: "15 Okt 2022",
        img: Images.breakingNewsImg01,
        to: "/"
    },
    {   
        id:2,
        title_en: 'Best tourism site all over the world.',
        title_az: 'Bütün dünyada ən yaxşı turizm saytı.',
        title_de: 'Beste Tourismus-Website auf der ganzen Welt.',
        date: "15 Okt 2022",
        img: Images.breakingNewsImg02,
        to: "/"
    },
    {   
        id:3,
        title_en: '5 unbelievable secret about choosing right fuirniture',
        title_az: 'Düzgün mebel seçməklə bağlı 5 inanılmaz sirr',
        title_de: '5 unglaubliche Geheimnisse über die Auswahl der richtigen Möbel',
        date: "15 Okt 2022",
        img: Images.breakingNewsImg03,
        to: "/"
    },
    {   
        id:4,
        title_en: 'Healthy rutine for your healthy lifestyle.',
        title_az: 'Sağlam həyat tərziniz üçün sağlam rutin.',
        title_de: 'Gesunde Routine für Ihren gesunden Lebensstil.',
        date: "15 Okt 2022",
        img: Images.breakingNewsImg01,
        to: "/"
    },
    {   
        id:5,
        title_en: 'Best tourism site all over the world.',
        title_az: 'Bütün dünyada ən yaxşı turizm saytı.',
        title_de: 'Beste Tourismus-Website auf der ganzen Welt.',
        date: "15 Okt 2022",
        img: Images.breakingNewsImg02,
        to: "/"
    },
    {   
        id:6,
        title_en: '5 unbelievable secret about choosing right fuirniture',
        title_az: 'Düzgün mebel seçməklə bağlı 5 inanılmaz sirr',
        title_de: '5 unglaubliche Geheimnisse über die Auswahl der richtigen Möbel',
        date: "15 Okt 2022",
        img: Images.breakingNewsImg03,
        to: "/"
    }
]

export const BreakingNewsReducer = (breakingNews = InitialBreakingNews , action) =>{
    switch (action.type){
        case DELETE_BREAKING_NEWS :
            return action.payload
        case EDIT_BREAKING_NEWS :
            return breakingNews +=  ` ${action.payload}`
        default :
            return breakingNews;
    }
}

// the-end-of-breaking-news



// sponsored-news

const InitialSponsoredNews = [
    {   
        id:1,
        type_en: 'TRAVEL',
        type_az: 'SƏYAHƏT',
        type_de: 'REISE',
        title_en: 'Top Most Beautiful Scenery in The World.',
        title_az: 'Dünyanın Ən Gözəl Mənzərəsi Burada.',
        title_de: 'Top Schönste Landschaft der Welt.',
        date: "19 Okt 2022",
        img: Images.sponsoredNewsImg01,
        adminName: "Aysu",
        adminImg: Images.admin01,
        adminTo: "/"
    },
    {   
        id:2,
        type_en: 'TRAVEL',
        type_az: 'SƏYAHƏT',
        type_de: 'REISE',
        title_en: 'Perfect Photo Clicking Idea You Must Know About.',
        title_az: 'Bilməli olduğunuz Mükəmməl Foto Klikləmə İdeyası.',
        title_de: 'Perfekte Foto-Klick-Idee, die Sie kennen müssen.',
        date: "19 Okt 2022",
        img: Images.sponsoredNewsImg02,
        adminName: "Aysu",
        adminImg: Images.admin01,
        adminTo: "/"
    },
    {   
        id:3,
        type_en: 'TRAVEL',
        type_az: 'SƏYAHƏT',
        type_de: 'REISE',
        title_en: 'Top Most Beautiful Scenery in The World.',
        title_az: 'Dünyanın Ən Gözəl Mənzərəsi Burada.',
        title_de: 'Top Schönste Landschaft der Welt.',
        date: "19 Okt 2022",
        img: Images.sponsoredNewsImg03,
        adminName: "Aysu",
        adminImg: Images.admin01,
        adminTo: "/"
    },
    {   
        id:4,
        type_en: 'TRAVEL',
        type_az: 'SƏYAHƏT',
        type_de: 'REISE',
        title_en: 'Perfect Photo Clicking Idea You Must Know About.',
        title_az: 'Bilməli olduğunuz Mükəmməl Foto Klikləmə İdeyası.',
        title_de: 'Perfekte Foto-Klick-Idee, die Sie kennen müssen.',
        date: "19 Okt 2022",
        img: Images.sponsoredNewsImg04,
        adminName: "Aysu",
        adminImg: Images.admin01,
        adminTo: "/"
    }
]

export const SponsoredNewsReducer = (sponsoredNews = InitialSponsoredNews , action) =>{
    switch (action.type){
        case DELETE_SPONSORED_NEWS :
            return action.payload
        case EDIT_SPONSORED_NEWS :
            return sponsoredNews +=  ` ${action.payload}`
        default :
            return sponsoredNews;
    }
}

// the-end-of-sponsored-news



// todays-top-highlights

const InitialTodaysTopHighlights = [
    {   
        id:1,
        type_en: 'TRAVEL',
        type_az: 'SƏYAHƏT',
        type_de: 'REISE',
        title_en: 'Traveling Makes You More Inteligent and More Energetic',
        title_az: 'Səyahət etmək sizi daha ağıllı və enerjili edir',
        title_de: 'Reisen macht Sie intelligenter und energiegeladener',
        text_en: 'You can customize the view Blog post with author simple mouse click and immediately see the result of your changes.',
        text_az: 'Siz müəllifin sadə siçan klikləməsi ilə Bloq yazısının görünüşünü fərdiləşdirə və dəyişikliklərinizin nəticəsini dərhal görə bilərsiniz.',
        text_de: 'Sie können die Ansicht des Blogbeitrags mit einem einfachen Mausklick anpassen und sehen sofort das Ergebnis Ihrer Änderungen.',
        date: "19 Okt 2022",
        img: Images.todaysTopHighlightsImg01,
        adminName: "Aysu",
        adminImg: Images.admin01,
        adminTo: "/"
    },
    {   
        id:2,
        type_en: 'TRAVEL',
        type_az: 'SƏYAHƏT',
        type_de: 'REISE',
        title_en: '12 Things to See and Find Out in Bergen, Norway',
        title_az: 'Norveçin Bergen şəhərində görmək və tapmaq üçün 12 şey',
        title_de: '12 Dinge zu sehen und herauszufinden in Bergen, Norwegen',
        text_en: 'You can customize the view Blog post with author simple mouse click and immediately see the result of your changes.',
        text_az: 'Siz müəllifin sadə siçan klikləməsi ilə Bloq yazısının görünüşünü fərdiləşdirə və dəyişikliklərinizin nəticəsini dərhal görə bilərsiniz.',
        text_de: 'Sie können die Ansicht des Blogbeitrags mit einem einfachen Mausklick anpassen und sehen sofort das Ergebnis Ihrer Änderungen.',
        date: "19 Okt 2022",
        img: Images.todaysTopHighlightsImg02,
        adminName: "Aysu",
        adminImg: Images.admin01,
        adminTo: "/"
    },
    {   
        id:3,
        type_en: 'TRAVEL',
        type_az: 'SƏYAHƏT',
        type_de: 'REISE',
        title_en: 'Healthy Daily Rutine For Your Healthy Lifestyle',
        title_az: 'Sağlam Həyat tərziniz üçün Sağlam Gündəlik Rejim',
        title_de: 'Gesunder Tagesablauf für Ihren gesunden Lebensstil',
        text_en: 'You can customize the view Blog post with author simple mouse click and immediately see the result of your changes.',
        text_az: 'Siz müəllifin sadə siçan klikləməsi ilə Bloq yazısının görünüşünü fərdiləşdirə və dəyişikliklərinizin nəticəsini dərhal görə bilərsiniz.',
        text_de: 'Sie können die Ansicht des Blogbeitrags mit einem einfachen Mausklick anpassen und sehen sofort das Ergebnis Ihrer Änderungen.',
        date: "19 Okt 2022",
        img: Images.todaysTopHighlightsImg03,
        adminName: "Aysu",
        adminImg: Images.admin01,
        adminTo: "/"
    },
    {   
        id:4,
        type_en: 'TRAVEL',
        type_az: 'SƏYAHƏT',
        type_de: 'REISE',
        title_en: 'Traveling Makes You More Inteligent and More Energetic',
        title_az: 'Səyahət etmək sizi daha ağıllı və enerjili edir',
        title_de: 'Reisen macht Sie intelligenter und energiegeladener',
        text_en: 'You can customize the view Blog post with author simple mouse click and immediately see the result of your changes.',
        text_az: 'Siz müəllifin sadə siçan klikləməsi ilə Bloq yazısının görünüşünü fərdiləşdirə və dəyişikliklərinizin nəticəsini dərhal görə bilərsiniz.',
        text_de: 'Sie können die Ansicht des Blogbeitrags mit einem einfachen Mausklick anpassen und sehen sofort das Ergebnis Ihrer Änderungen.',
        date: "19 Okt 2022",
        img: Images.todaysTopHighlightsImg04,
        adminName: "Aysu",
        adminImg: Images.admin01,
        adminTo: "/"
    },
    {   
        id:5,
        type_en: 'TRAVEL',
        type_az: 'SƏYAHƏT',
        type_de: 'REISE',
        title_en: '12 Things to See and Find Out in Bergen, Norway',
        title_az: 'Norveçin Bergen şəhərində görmək və tapmaq üçün 12 şey',
        title_de: '12 Dinge zu sehen und herauszufinden in Bergen, Norwegen',
        text_en: 'You can customize the view Blog post with author simple mouse click and immediately see the result of your changes.',
        text_az: 'Siz müəllifin sadə siçan klikləməsi ilə Bloq yazısının görünüşünü fərdiləşdirə və dəyişikliklərinizin nəticəsini dərhal görə bilərsiniz.',
        text_de: 'Sie können die Ansicht des Blogbeitrags mit einem einfachen Mausklick anpassen und sehen sofort das Ergebnis Ihrer Änderungen.',
        date: "19 Okt 2022",
        img: Images.todaysTopHighlightsImg05,
        adminName: "Aysu",
        adminImg: Images.admin01,
        adminTo: "/"
    },
    {   
        id:6,
        type_en: 'TRAVEL',
        type_az: 'SƏYAHƏT',
        type_de: 'REISE',
        title_en: 'Healthy Daily Rutine For Your Healthy Lifestyle',
        title_az: 'Sağlam Həyat tərziniz üçün Sağlam Gündəlik Rejim',
        title_de: 'Gesunder Tagesablauf für Ihren gesunden Lebensstil',
        text_en: 'You can customize the view Blog post with author simple mouse click and immediately see the result of your changes.',
        text_az: 'Siz müəllifin sadə siçan klikləməsi ilə Bloq yazısının görünüşünü fərdiləşdirə və dəyişikliklərinizin nəticəsini dərhal görə bilərsiniz.',
        text_de: 'Sie können die Ansicht des Blogbeitrags mit einem einfachen Mausklick anpassen und sehen sofort das Ergebnis Ihrer Änderungen.',
        date: "19 Okt 2022",
        img: Images.todaysTopHighlightsImg06,
        adminName: "Aysu",
        adminImg: Images.admin01,
        adminTo: "/"
    }
]

export const TodaysTopHighlights = (todaysTopHighlights = InitialTodaysTopHighlights , action) =>{
    switch (action.type){
        case DELETE_TODAYS_TOP_HIGHLIGHTS :
            return action.payload
        case EDIT_TODAYS_TOP_HIGHLIGHTS :
            return todaysTopHighlights +=  ` ${action.payload}`
        default :
            return todaysTopHighlights;
    }
}

// the-end-of-todays-top-highlights



// sider-links

const InitialSiderLinks = [
    {   
        id:1,
        to: "/",
        content_az: "Həyat Tərzi",
        content_en: "Lifestyle",
        content_de: "Lebensstil",
        len: "05"
    },
    {   
        id:2,
        to: "/",
        content_az: "Ruhlandırma",
        content_en: "Inspiration",
        content_de: "Inspiration",
        len: "08"
    },
    {   
        id:3,
        to: "/",
        content_az: "Moda",
        content_en: "Fashion",
        content_de: "Mode",
        len: "09"
    },
    {   
        id:4,
        to: "/",
        content_az: "Fotoqrafiya",
        content_en: "Photography",
        content_de: "Fotografie",
        len: "11"
    },
    {   
        id:5,
        to: "/",
        content_az: "Səyahət",
        content_en: "Travel",
        content_de: "Reise",
        len: "04"
    },
    {   
        id:6,
        to: "/",
        content_az: "Biznes",
        content_en: "Business",
        content_de: "Geschäft",
        len: "07"
    }
]

export const SiderLinksReducer = (siderLinks = InitialSiderLinks , action) =>{
    switch (action.type){
        case DELETE_TODAYS_TOP_HIGHLIGHTS :
            return action.payload
        case EDIT_TODAYS_TOP_HIGHLIGHTS :
            return siderLinks +=  ` ${action.payload}`
        default :
            return siderLinks;
    }
}

// the-end-of-sider-links



// popular-news

const InitialPopularNews = [
    {   
        id:1,
        title_en: 'Top Most Beautiful Scenery in The World.',
        title_az: 'Dünyanın Ən Gözəl Mənzərəsi Burada.',
        title_de: 'Top Schönste Landschaft der Welt.',
        date: "19 Okt 2022",
        img: Images.siderPostImg01
    },
    {   
        id:2,
        title_en: 'Perfect Photo Clicking Idea You Must Know About.',
        title_az: 'Bilməli olduğunuz Mükəmməl Foto Klikləmə İdeyası.',
        title_de: 'Perfekte Foto-Klick-Idee, die Sie kennen müssen.',
        date: "19 Okt 2022",
        img: Images.siderPostImg02
    },
    {   
        id:3,
        title_en: 'Whats In Trend in Now Woman Fashion.',
        title_az: 'Qadın Modasında İndi Trenddə Olanlar.',
        title_de: 'Was in der heutigen Damenmode im Trend liegt.',
        date: "19 Okt 2022",
        img: Images.siderPostImg03
    },
    {   
        id:4,
        title_en: 'Top Most Beautiful Scenery in The World.',
        title_az: 'Dünyanın Ən Gözəl Mənzərəsi Burada.',
        title_de: 'Top Schönste Landschaft der Welt.',
        date: "19 Okt 2022",
        img: Images.siderPostImg04
    }
]

export const PopularNewsReducer = (popularNews = InitialPopularNews , action) =>{
    switch (action.type){
        case DELETE_POPULAR_NEWS :
            return action.payload
        case EDIT_POPULAR_NEWS :
            return popularNews +=  ` ${action.payload}`
        default :
            return popularNews;
    }
}

// the-end-of-popular-news



// main-news

const InitialMainNews = [
    {   
        id:1,
        type_en: 'Fashion',
        type_az: 'Moda',
        type_de: 'Mode',
        title_en: "What’s In Trend In Women's Fashion Summer?",
        title_az: 'Qadın Yay Modasında Trend Nədir?',
        title_de: 'Was ist im Damenmode-Sommer im Trend?',
        text_en: 'You can customize the view Blog post with author simple mouse click and immediately see the result of your changes.',
        text_az: 'Siz müəllifin sadə siçan klikləməsi ilə Bloq yazısının görünüşünü fərdiləşdirə və dəyişikliklərinizin nəticəsini dərhal görə bilərsiniz.',
        text_de: 'Sie können die Ansicht des Blogbeitrags mit einem einfachen Mausklick anpassen und sehen sofort das Ergebnis Ihrer Änderungen.',
        date: "20 Sep 2022",
        img: Images.mainNewsImg01,
        adminName: "Aysu",
        adminImg: Images.admin01,
        adminTo: "/"
    },
    {   
        id:2,
        type_en: 'Travel',
        type_az: 'Səyahət',
        type_de: 'Reise',
        title_en: "Traveling Makes You More Interesting",
        title_az: 'Səyahət etmək sizi daha maraqlı edir',
        title_de: 'Reisen macht Sie interessanter',
        date: "20 Sep 2022",
        img: Images.mainNewsImg02,
        adminName: "Aysu",
        adminImg: Images.admin01,
        adminTo: "/"
    },
    {   
        id:3,
        type_en: 'Food',
        type_az: 'Qida',
        type_de: 'Lebensmittel',
        title_en: "Top 10 Healthy Food",
        title_az: 'Top 10 Sağlam Qida',
        title_de: 'Die 10 besten gesunden Lebensmittel',
        date: "20 Sep 2022",
        img: Images.mainNewsImg03,
        adminName: "Aysu",
        adminImg: Images.admin01,
        adminTo: "/"
    },
    {   
        id:4,
        type_en: 'Business',
        type_az: 'Biznes',
        type_de: 'Geschäft',
        title_en: "What Makes a Leader?",
        title_az: 'Nə Lider edə bilir?',
        title_de: 'Was macht eine Führungskraft aus?',
        date: "20 Sep 2022",
        img: Images.mainNewsImg04,
        adminName: "Aysu",
        adminImg: Images.admin01,
        adminTo: "/"
    }
]

export const MainNewsReducer = (mainNews = InitialMainNews , action) =>{
    switch (action.type){
        case DELETE_MAIN_NEWS :
            return action.payload
        case EDIT_MAIN_NEWS :
            return mainNews +=  ` ${action.payload}`
        default :
            return mainNews;
    }
}

// the-end-of-main-news


