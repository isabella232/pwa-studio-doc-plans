(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[7491],{81406:function(e,t,n){"use strict";n.r(t),n.d(t,{_frontmatter:function(){return m},default:function(){return c}});var o,a=n(22122),r=n(19756),d=(n(15007),n(64983)),l=n(99536),i=["components"],m={},p=(o="InlineAlert",function(e){return console.warn("Component "+o+" was not imported, exported, or provided by MDXProvider as global scope"),(0,d.mdx)("div",e)}),s={_frontmatter:m},u=l.Z;function c(e){var t=e.components,n=(0,r.Z)(e,i);return(0,d.mdx)(u,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,d.mdx)("h1",{id:"magento-cloud-deployment"},"Magento Cloud deployment"),(0,d.mdx)("p",null,(0,d.mdx)("a",{parentName:"p",href:"https://devdocs.magento.com/cloud/bk-cloud.html"},"Magento Commerce Cloud")," is a managed, automated hosting platform for the Magento Commerce software.\nYou can use this platform to host your storefront code by installing packages developed specifically to connect your storefront with Magento on the same server."),(0,d.mdx)("h2",{id:"overview"},"Overview"),(0,d.mdx)("p",null,"This tutorial provides the general steps for adding your storefront onto your Magento Commerce Cloud project and setting it as the front end application.\nBy the end of this tutorial, you will have a Cloud project setup that includes your storefront project's code bundles.\nYou can use this setup to update and deploy your storefront project in Magento Commerce Cloud."),(0,d.mdx)("h2",{id:"prerequisites"},"Prerequisites"),(0,d.mdx)("p",null,"Before you follow this tutorial, you should be familiar with Cloud's ",(0,d.mdx)("a",{parentName:"p",href:"https://devdocs.magento.com/cloud/architecture/starter-develop-deploy-workflow.html"},"Starter workflow")," or ",(0,d.mdx)("a",{parentName:"p",href:"https://devdocs.magento.com/cloud/architecture/pro-develop-deploy-workflow.html"},"Pro workflow")," depending on your plan.\nMake sure you complete the ",(0,d.mdx)("a",{parentName:"p",href:"https://devdocs.magento.com/cloud/onboarding/onboarding-tasks.html"},"Cloud onboarding tasks")," to avoid account or access issues."),(0,d.mdx)("p",null,"Verify that your Magento instance is ",(0,d.mdx)("a",{parentName:"p",href:"/pwa-docs-plan/integrations/magento/version-compatibility/"},"compatible")," with the PWA Studio version you use in your storefront project."),(0,d.mdx)("p",null,"This tutorial requires the following tools:"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"https://devdocs.magento.com/cloud/reference/cli-ref-topic.html"},"Magento Cloud CLI")),(0,d.mdx)("li",{parentName:"ul"},"Git"),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"https://getcomposer.org/"},"Composer")),(0,d.mdx)("li",{parentName:"ul"},"Yarn or NPM (depends on your storefront project configuration)")),(0,d.mdx)("p",null,"If you need to do more advanced Cloud tasks, see the ",(0,d.mdx)("a",{parentName:"p",href:"https://devdocs.magento.com/cloud/requirements/cloud-requirements.html"},"Cloud technologies and requirements")," for the full list of tools you need to fully manage the rest of your Cloud project."),(0,d.mdx)("p",null,"You also need an existing storefront project to do this tutorial.\nFollow the instructions on the ",(0,d.mdx)("a",{parentName:"p",href:"/pwa-docs-plan/tutorials/setup-storefront/"},"Project setup")," page to set up your storefront project using the scaffolding tool."),(0,d.mdx)("h2",{id:"tasks-overview"},"Tasks overview"),(0,d.mdx)("ol",null,(0,d.mdx)("li",{parentName:"ol"},"Clone your Cloud project"),(0,d.mdx)("li",{parentName:"ol"},"Add required Magento extensions"),(0,d.mdx)("li",{parentName:"ol"},"Set environment variables"),(0,d.mdx)("li",{parentName:"ol"},"Build your storefront application"),(0,d.mdx)("li",{parentName:"ol"},"Add your storefront project code"),(0,d.mdx)("li",{parentName:"ol"},"Deploy changes")),(0,d.mdx)("h2",{id:"clone-your-cloud-project"},"Clone your Cloud project"),(0,d.mdx)("p",null,"Use the Magento Cloud CLI tool to login and clone your Cloud project."),(0,d.mdx)("p",null,"Run the following command:"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-sh"},"magento-cloud\n")),(0,d.mdx)("p",null,"If this is your first time running this command, the tool takes you through the login process.\nAfter you login or when you run this command again, it presents a table of all the projects you have permission to access."),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-sh"},"Your projects are:\n+---------------+------------------+---------------------------------------------------+\n| ID            | Title            | URL                                               |\n+---------------+------------------+---------------------------------------------------+\n| yswqmrbknvqjz | My Magento Store | https://us-4.magento.cloud/projects/yswqmrbknvqjz |\n+---------------+------------------+---------------------------------------------------+\n")),(0,d.mdx)("p",null,"Find the Cloud project you want to add your storefront to and use the Magento Cloud CLI to clone the project by specifying its ID."),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-sh"},"magento-cloud get yswqmrbknvqjz\n")),(0,d.mdx)("p",null,"This command creates a project directory and initializes the Git repository associated with your Cloud project.\nDepending on your access permissions for the default environment, this directory may appear empty."),(0,d.mdx)("p",null,"Navigate to the project directory and use the Magento Cloud CLI to list the environments for this project."),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-sh"},"magento-cloud environment:list\n")),(0,d.mdx)("p",null,"This command displays a table of environments which lists their ID, Title, and Status."),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-sh"},"Your environments are:\n+----------------------+----------------------+-------------+\n| ID                   | Title                | Status      |\n+----------------------+----------------------+-------------+\n| production*          | Production           | Active      |\n| staging              | Staging              | Active      |\n| myStorefront-develop | myStorefront-develop | In progress |\n|    myStorefront-cicd | myStorefront-cicd    | Active      |\n+----------------------+----------------------+-------------+\n* - Indicates the current environment\n")),(0,d.mdx)("p",null,"Use the Magento Cloud CLI to checkout the environment where you want to add your storefront code, such as the ",(0,d.mdx)("inlineCode",{parentName:"p"},"staging")," environment."),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-sh"},"magento-cloud checkout staging\n")),(0,d.mdx)("h2",{id:"add-required-magento-extensions"},"Add required Magento extensions"),(0,d.mdx)("p",null,"Magento Cloud does not support node processes, so you cannot use UPWARD-JS to serve your storefront project.\nYou must use the ",(0,d.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2-upward-connector"},"magento2-upward-connector")," module with ",(0,d.mdx)("a",{parentName:"p",href:"https://github.com/magento/upward-php"},"UPWARD-PHP")," to deploy your storefront in Magento Cloud."),(0,d.mdx)("p",null,"Use the ",(0,d.mdx)("inlineCode",{parentName:"p"},"composer")," CLI command to add the magento2-upward-connector module to the Magento installation:"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-sh"},"composer require magento/module-upward-connector\n")),(0,d.mdx)("p",null,"This command modifies the ",(0,d.mdx)("inlineCode",{parentName:"p"},"composer.json")," file and adds the package entry to the ",(0,d.mdx)("inlineCode",{parentName:"p"},"require")," section of the ",(0,d.mdx)("inlineCode",{parentName:"p"},"composer.json")," file."),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-text"},'"magento/module-upward-connector": "^1.1.2"\n')),(0,d.mdx)(p,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,d.mdx)("p",null,"UPWARD-PHP is a dependency of the magento2-upward-connector, so\nyou do not need to add it manually to your project."),(0,d.mdx)("h2",{id:"set-environment-variables"},"Set environment variables"),(0,d.mdx)("p",null,"PWA Studio storefronts require you to set specific ",(0,d.mdx)("a",{parentName:"p",href:"/pwa-docs-plan/api/buildpack/environment/variables/"},"environment variables")," in your project for the build and runtime processes."),(0,d.mdx)("h3",{id:"runtime-variables"},"Runtime variables"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Name"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"CONFIG__DEFAULT__WEB__UPWARD__PATH")),(0,d.mdx)("td",{parentName:"tr",align:null},"Absolute path to UPWARD YAML configuration")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"NODE_ENV")),(0,d.mdx)("td",{parentName:"tr",align:null},"Specifies the node environment type")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"MAGENTO_BACKEND_URL")),(0,d.mdx)("td",{parentName:"tr",align:null},"URL of your Magento backend")))),(0,d.mdx)("p",null,"To set your Cloud project's runtime variables, edit the ",(0,d.mdx)("a",{parentName:"p",href:"https://devdocs.magento.com/cloud/project/magento-env-yaml.html"},(0,d.mdx)("inlineCode",{parentName:"a"},".magento.app.yaml"))," file and add entries to the ",(0,d.mdx)("inlineCode",{parentName:"p"},"variables.env")," section."),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-text"},'variables:\n    env:\n        CONFIG__DEFAULT__WEB__UPWARD__PATH: "/app/pmu35riuj7btw_stg/pwa/upward.yml"\n        NODE_ENV: "production"\n        MAGENTO_BACKEND_URL: "https://[your-cloud-url-here]/"\n')),(0,d.mdx)("h3",{id:"buildtime-variables"},"Buildtime variables"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Name"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"NODE_ENV")),(0,d.mdx)("td",{parentName:"tr",align:null},"Specifies the node environment type")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"MAGENTO_BACKEND_URL")),(0,d.mdx)("td",{parentName:"tr",align:null},"URL of your Magento backend")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"CHECKOUT_BRAINTREE_TOKEN")),(0,d.mdx)("td",{parentName:"tr",align:null},"Braintree token associated with your Magento backend")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"MAGENTO_BACKEND_EDITION")),(0,d.mdx)("td",{parentName:"tr",align:null},"Must be ",(0,d.mdx)("inlineCode",{parentName:"td"},"EE")," since Cloud only supports Magento Enterprise Edition")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"IMAGE_OPTIMIZING_ORIGIN")),(0,d.mdx)("td",{parentName:"tr",align:null},"Origin to use for images in the UI")))),(0,d.mdx)("p",null,"To set your environment variables for buildtime, navigate or open a new terminal to ",(0,d.mdx)("em",{parentName:"p"},"your storefront project")," and edit the ",(0,d.mdx)("inlineCode",{parentName:"p"},".env")," file.\nYour ",(0,d.mdx)("inlineCode",{parentName:"p"},".env")," file should have entries that look like the following:"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-text"},"NODE_ENV=production\nMAGENTO_BACKEND_URL=https://[your-cloud-url-here]/\nCHECKOUT_BRAINTREE_TOKEN=<generated token from Braintree>\nMAGENTO_BACKEND_EDITION=EE\nIMAGE_OPTIMIZING_ORIGIN=backend\nENABLE_EXPRESS_SERVER_COMPRESSION=false\n")),(0,d.mdx)("h3",{id:"finding-the-correct-upward-path-value"},"Finding the correct UPWARD path value"),(0,d.mdx)("p",null,"The ",(0,d.mdx)("inlineCode",{parentName:"p"},"CONFIG_DEFAULT_WEB_UPWARD_PATH")," variable specifies the ",(0,d.mdx)("em",{parentName:"p"},"absolute")," path to the UPWARD configuration file in the deployed Cloud instance.\nIf this value is incorrect or not set, the Magento 2 UPWARD connector extension cannot serve your storefront application and your frontend appears broken."),(0,d.mdx)("p",null,"In the previous example, ",(0,d.mdx)("inlineCode",{parentName:"p"},"/app/pmu35riuj7btw_stg/")," is the Magento application root directory on the deployed instance.\nThis value is different for each environment in your Cloud project, so you must configure each of your project environments with the path specific to each instance.\nTo find the correct root directory path for an environment, ",(0,d.mdx)("a",{parentName:"p",href:"https://devdocs.magento.com/cloud/env/environments-ssh.html"},"SSH")," into the remote server and use the ",(0,d.mdx)("inlineCode",{parentName:"p"},"pwd")," command to find the Magento application root directory."),(0,d.mdx)("h2",{id:"build-your-storefront-application"},"Build your storefront application"),(0,d.mdx)("p",null,"In ",(0,d.mdx)("em",{parentName:"p"},"your storefront project")," directory, use ",(0,d.mdx)("inlineCode",{parentName:"p"},"yarn")," or ",(0,d.mdx)("inlineCode",{parentName:"p"},"npm")," to install project dependencies and run the project's build command."),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-sh"},"yarn install &&\nyarn build\n")),(0,d.mdx)("p",null,"These commands install project dependencies and runs the build process, which creates a ",(0,d.mdx)("inlineCode",{parentName:"p"},"dist")," folder that contains code bundles for your storefront application.\nIt also copies over the static assets your application needs from your project into this folder."),(0,d.mdx)("h2",{id:"add-your-storefront-project-code"},"Add your storefront project code"),(0,d.mdx)("p",null,(0,d.mdx)("em",{parentName:"p"},"In your Cloud project"),", create a ",(0,d.mdx)("inlineCode",{parentName:"p"},"pwa")," folder and copy into it the content inside your storefront project's ",(0,d.mdx)("inlineCode",{parentName:"p"},"dist")," folder."),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-sh"},"mkdir pwa && cp -r <path to your storefront project>/dist/* pwa\n")),(0,d.mdx)("p",null,"If you are updating your existing storefront code, you must delete the content inside the ",(0,d.mdx)("inlineCode",{parentName:"p"},"pwa")," directory before you copy the new ",(0,d.mdx)("inlineCode",{parentName:"p"},"dist")," content to avoid keeping the old bundles the application no longer uses."),(0,d.mdx)("h2",{id:"deploy-changes"},"Deploy changes"),(0,d.mdx)("p",null,"At this point in the tutorial, your Cloud project should have changes in the following files and directories:"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("inlineCode",{parentName:"li"},".magento.app.yaml")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("inlineCode",{parentName:"li"},"composer.json")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("inlineCode",{parentName:"li"},"composer.lock")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("inlineCode",{parentName:"li"},"pwa"))),(0,d.mdx)("p",null,"Edit your Cloud project's ",(0,d.mdx)("inlineCode",{parentName:"p"},".gitignore")," file and add the following entries to track the ",(0,d.mdx)("inlineCode",{parentName:"p"},"pwa")," directory in git:"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-text"},"!/pwa\n!/pwa/**\n")),(0,d.mdx)("p",null,"Use the Git CLI tool to stage, commit, and push these changes to your Cloud project."),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-sh"},'git add . &&\ngit commit -m "Added storefront file bundles" &&\ngit push origin\n')),(0,d.mdx)("p",null,"After you push changes to your Cloud project, the remote build process runs and deploys a live instance of your site to the Magento Commerce Cloud service."),(0,d.mdx)("h3",{id:"merging-environments"},"Merging environments"),(0,d.mdx)("p",null,"The Cloud topic on how to ",(0,d.mdx)("a",{parentName:"p",href:"https://devdocs.magento.com/cloud/live/stage-prod-live.html"},"Deploy your store")," provides more details on the deployment process.\nIt also includes instructions for merging environment branches, such as integration to staging or staging to production."),(0,d.mdx)("p",null,"If your workflow involves merging environment branches,\nyou must rebuild your application bundle with the correct environment variables before you push your changes to the Magento Cloud service because\nvariables, such as ",(0,d.mdx)("inlineCode",{parentName:"p"},"CONFIG__DEFAULT__WEB__UPWARD__PATH")," and ",(0,d.mdx)("inlineCode",{parentName:"p"},"MAGENTO_BACKEND_URL"),", can vary between these environments."))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-tutorials-production-deployment-magento-cloud-index-md-92e62a9526eb6e2102f5.js.map