import { DefaultTheme } from "react-atomize";

const theme = {
    ...DefaultTheme,
    colors:{
        // gradient:'linear-gradient( 0deg, #8C50FC, #FECE45)',
        gradient:'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(254,217,249,1) 100%)',
        
        primary100:'#FECE45',
        primary90:'#945EF9',
        primary80:'#9D6DF6',
        primary70:'#A67CF5',
        primary60:'#AF8BF2',
        primary50:'#B799EF',
        primary40:'#C1A9EE',
        primary30:'#C9B7EB',
        primary20:'#D3C7EA',
        primary10:'#DBD5E7',
        primary05:'#DFDCE5',
      
        secondary100:'#0077cc',
        secondary90:'#0077cc',
        secondary80:'#0077cc',
        secondary70:'#0077cc',
        secondary60:'#0077cc',
        secondary50:'#0077cc',
        secondary40:'#0077cc',
        secondary30:'#0077cc',
        secondary20:'#0077cc',
        secondary10:'#0077cc',
        secondary05:'#0077cc',
      
        black100:'#070D10',
        black90:'#1F2427',
        black80:'#383D3F',
        black70:'#505557',
        black60:'#6A6D6F',
        black50:'#828587',
        black40:'#9B9E9F',
        black30:'#B4B5B6',
        black20:'#CDCECF',
        black10:'#E5E6E6',
        black05:'#F8F9FC',
      
        darkening30:'rgba(0,0,0,.3)',
        darkening40:'rgba(0,0,0,.4)',
        darkening50:'rgba(0,0,0,.5)',
        darkening60:'rgba(0,0,0,.6)',
      
        sucess:'#0BB07B',
        error:'#DD2727',
        warning:'#FECE45',
        info:'#448AFF',
        white:'#FFFFFF',
        transparent:'rgba(255,255,255,.0)'
    },
    textSize:{
        size: {
            F8:'8px',
            F10:'10px',
            F12:'12px',
            F16:'16px',
            F20:'20px',
            F24:'24px',
            F32:'32px',
            F48:'48px',
            F64:'64px',
            F72:'72px',
            F80:'80px',
            F100:'100px',
            F120:'120px'
        },
        height: {
            F8:'12px',
            F10:'14px',
            F12:'16px',
            F16:'20px',
            F20:'24px',
            F24:'32px',
            F32:'40px',
            F48:'56px',
            F64:'72px',
            F72:'80px',
            F80:'96px',
            F100:'116px',
            F120:'132px'
        }
    },
    // setting font family
    fontFamily: {
        ...DefaultTheme.fontFamily,
        primary: `'Montserrat', sans-serif;`
    }
}

export default theme;
