
import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const ColorfulButtonMeta: ComponentMetadata = {
  "group": 'Vue',
  "category": 'element-ui',
  "componentName": "ColorfulButton",
  "title": "ColorfulButton",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "lowcode-vue-material-demo",
    "version": "0.1.0",
    "exportName": "ColorfulButton",
    "main": "src/index.tsx",
    "destructuring": true,
    "subName": ""
  },
  "configure": {
    "props": [
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "type",
            "zh-CN": "类型"
          },
          "tip": "type | 类型"
        },
        "name": "type",
        "description": "类型",
        "setter": {
          "componentName": "RadioGroupSetter",
          "props": {
            "dataSource": [
              {
                "label": "primary",
                "value": "primary"
              },
              {
                "label": "success",
                "value": "success"
              },
              {
                "label": "warning",
                "value": "warning"
              }
            ],
            "options": [
              {
                "label": "primary",
                "value": "primary"
              },
              {
                "label": "success",
                "value": "success"
              },
              {
                "label": "warning",
                "value": "warning"
              }
            ]
          },
          "initialValue": "primary"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "color",
            "zh-CN": "color"
          }
        },
        "name": "color",
        "setter": {
          "componentName": "RadioGroupSetter",
          "props": {
            "dataSource": [
              {
                "label": "string",
                "value": "string"
              }
            ],
            "options": [
              {
                "label": "string",
                "value": "string"
              }
            ]
          },
          "initialValue": "string"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "style",
            "zh-CN": "style"
          }
        },
        "name": "style",
        "setter": {
          "componentName": "RadioGroupSetter",
          "props": {
            "dataSource": [
              {
                "label": "object",
                "value": "object"
              }
            ],
            "options": [
              {
                "label": "object",
                "value": "object"
              }
            ]
          },
          "initialValue": "object"
        }
      }
    ],
    "supports": {},
    "component": {}
  }
};
const snippets: Snippet[] = [
  {
    "title": "ColorfulButton",
    "screenshot": "",
    "schema": {
      "componentName": "ColorfulButton",
      "props": {}
    }
  }
];

export default {
  ...ColorfulButtonMeta,
  snippets
};
