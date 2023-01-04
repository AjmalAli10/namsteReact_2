# Assignment

## What is `NPM` ?

### NPM is not a node package manager(this is not officially called). It is package that run on node javascript runtime environment. NPM is a world's largest registry for softwares. it is used to manages lot of other packages in thier database which is called a registry and NPM can update/ modefied/ install through CLI (Command Line interface - i.e our terminal).
---

##  What is `Parcel/Webpack`? Why do we need it?
### These are bundelers. It is a tool to package our code and it dependencies in a single file/ module/ package.
We need these bundlers in our project to minifify our code in a single file and also it is used to make our website to load faster in browser.
>1. we use bundlers to load faster in user screen.
>2. it compress assests like media file in mucch better way for performance.
>3. it also used to for development enviroment to make our work faster through many algorithm they have like - HMR(Hot module replacement), Caching while development, Faster Algorithm etc.
>4. Bundler optimize the delivery of code and also help in minimize code that are only required in production use only. 
---
## What is `.parcel-cache`?
### `.parcel-cache` is a folder created  when you start or restart your development server using `npx parcel <entry point of file code>`.
### More on, It created because of `Caching` techinque used by Parcel. What is parcel saying that `.parcel-cache` folder atomatically tracks all the `dev dependencies` / `plugin` / `Any files` that are used in your builds (means development). So when make any changes to your code.De to caching it rebuilds change since last time it ran.
---
## What is `npx` ?
### To understand npx we need to understand 2 - 3 termonalogy - 
>1. `Locally` installed package ?
>2. `Globally` installed package ?
>3. `package.json` file.
  >> `Locally` installed packages are kept in the same directory that your are working on and these installed packages kept inside `node_module` folder and specific to only that project.
  >>
  >> `Globally` installed packages intalled in your system and these packages are not only specific to that projects only. you can work with packages in any projects that are in your system.
  >>
  >> If you want to run package using npm you need to create `package.json` file or it will get created when you installed any packages using npm. it is better to creat package.json file first.
### `npx` is used to executes the installed packages that are locally or globally installed
### `npx` will check whether package exists in $PATH, or in the local project binaries, and if so it will execute it.
### `npx` is also use to execute a package that does not exists or installed in your working directort $PATH without installing it in your directory.
