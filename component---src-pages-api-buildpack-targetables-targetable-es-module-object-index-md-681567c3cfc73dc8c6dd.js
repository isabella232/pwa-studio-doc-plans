(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[1775],{82996:function(t,e,n){"use strict";n.r(e),n.d(e,{_frontmatter:function(){return p},default:function(){return u}});var a=n(22122),o=n(19756),m=(n(15007),n(64983)),r=n(99536),d=n(19339),l=["components"],p={},i={_frontmatter:p},s=r.Z;function u(t){var e=t.components,n=(0,o.Z)(t,l);return(0,m.mdx)(s,(0,a.Z)({},i,n,{components:e,mdxType:"MDXLayout"}),(0,m.mdx)("h1",{id:"targetableesmoduleobject"},"TargetableESModuleObject"),(0,m.mdx)(d.Z,{mdxType:"Docs"}),(0,m.mdx)("h2",{id:"examples"},"Examples"),(0,m.mdx)("p",null,"Code examples for the ",(0,m.mdx)("inlineCode",{parentName:"p"},"TargetableESModuleObject")," class."),(0,m.mdx)("h3",{id:"export-three-button-styles-in-a-mapping"},"Export three button styles in a mapping"),(0,m.mdx)("p",null,"Pass in import statements to the ",(0,m.mdx)("inlineCode",{parentName:"p"},"add()")," function to import that module into the target file and add it to the exported object."),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-js"},'// Create a TargetableESModuleObject linked to the `button.js` file\nconst buttons = targetable.esModuleArray("path/to/buttons.js");\n\n// Add import statements\nbuttons.add("import Primary from \'./path/to/Primary\'");\nbuttons.add("import { Button as Simple } from \'./path/to/simple\'");\nbuttons.add("import Secondary from \'./path/to/Standard\'");\n')),(0,m.mdx)("p",null,"The file linked to the ",(0,m.mdx)("inlineCode",{parentName:"p"},"TargetableESModuleObject"),' class must be a module that export an empty object.\nWithout the module, the loader has nothing to "load" and will not execute.\nCode editors and linters may also complain if the module is missing.'),(0,m.mdx)("p",null,"After the transforms above, ",(0,m.mdx)("inlineCode",{parentName:"p"},"./path/to/button.js")," enters the bundle as:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-js"},"import Primary from './path/to/Primary');\nimport { Button as Simple } from './path/to/simple');\nimport { Secondary } from './path/to/Standard');\n\nexport default { Primary, Simple, Secondary };\n")))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-api-buildpack-targetables-targetable-es-module-object-index-md-681567c3cfc73dc8c6dd.js.map