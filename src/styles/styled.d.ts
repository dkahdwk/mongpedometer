import 'styled-components/native';

// styled-components안에 들어있는 DefaultTheme 형식 지정해주기
declare module 'styled-components/native' {
  export interface DefaultTheme {
    colors: {
      /**
       * @description #008def
       */
      primary: string;
      /**
       * @description #eff6fc
       */
      lightBlue: string;
      /**
       * @description #ff0000
       */
      red: string;
      /**
       * @description #a3aab6
       */
      darkBlue: string;
      /**
       * @description #1262d6
       */
      navy: string;
      /**
       * @description #ffe8e8
       */
      lightRed: string;
      /**
       * @description #fff
       */
      neutral0: string;
      /**
       * @description #f3f5f8
       */
      neutral10: string;
      /**
       * @description #e8eaee
       */
      neutral15: string;
      /**
       * @description #edeef0
       */
      neutral30: string;
      /**
       * @description #dfdfdf
       */
      neutral40: string;
      /**
       * @description #b0b0b0
       */
      neutral50: string;
      /**
       * @description #6d727a
       */
      neutral60: string;
      /**
       * @description #1e1e1e
       */
      neutral100: string;
    };
    families: {
      /**
       * @description weight: 100
       * */
      extraLight: string;
      /**
       *  @description weight: 200
       * */
      thin: string;
      /**
       *  @description weight: 300
       * */
      light: string;
      /**
       *  @description weight: 400
       * */
      regular: string;
      /**
       *  @description weight: 500
       * */
      medium: string;
      /**
       *  @description weight: 600
       * */
      semiBold: string;
      /**
       *  @description weight: 700
       * */
      bold: string;
      /**
       *  @description weight: 800
       * */
      black: string;
      /**
       *  @description weight: 900
       * */
      extraBold: string;
    };
  }
}
