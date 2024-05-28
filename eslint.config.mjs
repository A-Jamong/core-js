import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  pluginJs.configs.recommended,
  {
    languageOptions:
    {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    rules:{
      // 사용안하는 변수에도 에러 아니고 워닝으로 띄울거야 
      "no-unused-vars":'warn'
    }
  },
];