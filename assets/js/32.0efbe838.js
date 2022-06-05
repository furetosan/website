(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{234:function(e,t,s){"use strict";s.r(t);var a=s(6),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"getting-started"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[e._v("#")]),e._v(" Getting started")]),e._v(" "),s("p",[e._v("Paving the way to your first AssemblyScript module.")]),e._v(" "),s("h2",{attrs:{id:"setting-up-a-new-project"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-a-new-project"}},[e._v("#")]),e._v(" Setting up a new project")]),e._v(" "),s("p",[e._v("Make sure that a "),s("a",{attrs:{href:"https://nodejs.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("recent version of Node.js"),s("OutboundLink")],1),e._v(" and its package manager "),s("strong",[e._v("npm")]),e._v(" (that comes with Node.js) are installed, then switch to a new directory and initialize a new Node.js module as usual:")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" init\n")])])]),s("p",[e._v("Install the AssemblyScript compiler. Let's assume that it is not required in production and make it a development dependency:")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" --save-dev assemblyscript\n")])])]),s("p",[e._v("Once installed, the compiler provides a handy scaffolding utility to quickly set up a new project, here in the current directory:")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("npx asinit "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v("\n")])])]),s("p",[e._v("The "),s("code",[e._v("asinit")]),e._v(" command automatically creates the recommended directory structure and configuration files:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("  ./assembly\n  Directory holding the AssemblyScript sources being compiled to WebAssembly.\n\n  ./assembly/tsconfig.json\n  TypeScript configuration inheriting recommended AssemblyScript settings.\n\n  ./assembly/index.ts\n  Example entry file being compiled to WebAssembly to get you started.\n\n  ./build\n  Build artifact directory where compiled WebAssembly files are stored.\n\n  ./build/.gitignore\n  Git configuration that excludes compiled binaries from source control.\n\n  ./asconfig.json\n  Configuration file defining both a 'debug' and a 'release' target.\n\n  ./package.json\n  Package info containing the necessary commands to compile to WebAssembly.\n\n  ./tests/index.js\n  Stater test to check that the module is functioning.\n\n  ./index.html\n  Starter HTML file that loads the module in a browser.\n")])])]),s("p",[e._v("For completeness, "),s("code",[e._v("asinit")]),e._v(" supports the following options:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("Sets up a new AssemblyScript project or updates an existing one.\n\nSYNTAX\n  asinit directory [options]\n\nEXAMPLES\n  asinit .\n  asinit ./newProject -y\n\nOPTIONS\n  --help, -h            Prints this help message.\n  --yes, -y             Answers all questions with their default option\n                        for non-interactive usage.\n")])])]),s("h2",{attrs:{id:"working-with-your-module"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#working-with-your-module"}},[e._v("#")]),e._v(" Working with your module")]),e._v(" "),s("p",[e._v("The example in "),s("code",[e._v("assembly/index.ts")]),e._v(" can now be compiled to WebAssembly by invoking the build command:")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" run asbuild\n")])])]),s("p",[e._v("Doing so will emit the compiled binaries, bindings and definition files to the "),s("code",[e._v("build/")]),e._v(" directory.")]),e._v(" "),s("p",[e._v("The generated test case in "),s("code",[e._v("tests/index.js")]),e._v(" can be executed with:")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("test")]),e._v("\n")])])]),s("p",[e._v("Once built, the directory contains all the bits to use the module like any other modern Node.js\nESM module:")]),e._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("import")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("as")]),e._v(" myModule "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"myModule"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),s("p",[e._v("The generated "),s("code",[e._v("index.html")]),e._v(" shows how the module can be used on the Web. A web server serving\nthe module directory, defaulting to display "),s("code",[e._v("index.html")]),e._v(", can be started with:")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" start\n")])])]),s("p",[e._v("Note that not all of the files may be required depending on the use case, and it is safe\nto delete what's not needed. If anything goes wrong, "),s("code",[e._v("asinit")]),e._v(" can be executed again, which\nwould restore the deleted default files while keeping already edited ones.")]),e._v(" "),s("h2",{attrs:{id:"the-journey-ahead"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#the-journey-ahead"}},[e._v("#")]),e._v(" The journey ahead")]),e._v(" "),s("p",[e._v("So far, so good! Now it is time to start editing the project of course, which typically involves:")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("Editing and adding source files within the "),s("code",[e._v("assembly/")]),e._v(" directory and updating the tests in "),s("code",[e._v("tests/")]),e._v(".")])]),e._v(" "),s("li",[s("p",[e._v("Tweaking "),s("RouterLink",{attrs:{to:"/compiler.html#compiler-options"}},[e._v("compiler options")]),e._v(" in "),s("RouterLink",{attrs:{to:"/compiler.html#configuration-file"}},[s("code",[e._v("asconfig.json")])]),e._v(" to fit your project's needs.")],1)]),e._v(" "),s("li",[s("p",[e._v("Realizing that WebAssembly still has a ways to go 🙂")])])]),e._v(" "),s("p",[e._v("But that's it already for a quick start. Read on to "),s("RouterLink",{attrs:{to:"/compiler.html"}},[e._v("learn more")]),e._v("!")],1)])}),[],!1,null,null,null);t.default=n.exports}}]);