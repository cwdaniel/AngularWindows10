// the below is the url of todays bing picture along with data things.
export const url = 'http://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=en-US';
export interface IBackgroundResponse {
    images: IBackgroundImagesResponse[];
    tooltips: IBackgroundToolTips;
}
export interface IBackgroundImagesResponse {
    startdate: string;
    fullstartdate: string;
    enddate: string;
    url: string;
    urlbase: string;
    copyright;
    copyrightlink;
    quiz;
    wp: boolean;
    hsh: string;
    drk: number;
    top: number;
    bot: number;
    hs: IBackgroundhsResponse[];
}
export interface IBackgroundhsResponse {
    something: string;
}
export interface IBackgroundToolTips {
    loading: string;
    previous: string;
    next: string;
    walle: string;
    walls: string;
}
const aDemoJson = {
    'images': [
        {
            'startdate': '20171004',
            'fullstartdate': '201710040700',
            'enddate': '20171005',
            'url': '/az/hprichbg/rb/AldrinsBoot_EN-US10647003933_1920x1080.jpg',
            'urlbase': '/az/hprichbg/rb/AldrinsBoot_EN-US10647003933',
            'copyright': 'Buzz Aldrin\'s boot on lunar soil, Apollo 11 mission (© NASA)',
            'copyrightlink': 'http://www.bing.com/search?q=apollo+11&form=hpcapt&filters=HpDate:%2220171004_0700%22',
            'quiz': '/search?q=Bing+homepage+quiz&filters=WQOskey:%22HPQuiz_20171004_AldrinsBoot%22&FORM=HPQUIZ',
            'wp': false,
            'hsh': 'b5dd15e1bd21999820596135657c6811',
            'drk': 1,
            'top': 1,
            'bot': 1,
            'hs': [

            ]
        }
    ],
    'tooltips': {
        'loading': 'Loading...',
        'previous': 'Previous image',
        'next': 'Next image',
        'walle': 'This image is not available to download as wallpaper.',
        'walls': 'Download this image. Use of this image is restricted to wallpaper only.'
    }
};
