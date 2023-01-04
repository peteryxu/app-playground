#

## Fork

A fork is a copy of a repository that you manage. Forks let you make changes to a project without affecting the original repository. You can fetch updates from or submit changes to the original repository with pull requests.
https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks

### once time:

git remove -v

git remote add upstream https://github.com/ORIGINAL_OWNER/ORIGINAL_REPOSITORY.git

git remove -v

### sync daily befor updates

git fetch upstream
git checkout main
git merge upstream/main

##

### .js: JavaScript, plain and simple

const Foo = () => {
return React.createElement("div", null, "Hello World!");
};

### .ts: is TypeScript, Microsoft's way of adding "concrete" types to JavaScript

const Foo: FunctionalComponent = () => {
return React.createElement("div", null, "Hello World!");
};

### .jsx: is JavaScript but with JSX enabled which is React's language extension to allow you to write markup directly in code which is then compiled to plain JavaScript with the JSX replaced with direct API calls to React.createElement or whatever API is targeted

const Foo = () => {
return <div>Hello World!</div>;
};

### .tsx: is similar to jsx except it's TypeScript with the JSX language extension.

const Foo: FunctionalComponent = () => {
return <div>Hello World!</div>;
};
