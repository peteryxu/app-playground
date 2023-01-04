# Fork

A fork is a copy of a repository that you manage. Forks let you make changes to a project without affecting the original repository. You can fetch updates from or submit changes to the original repository with pull requests.

https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks


## once time: 
git remove -v

git remote add upstream https://github.com/ORIGINAL_OWNER/ORIGINAL_REPOSITORY.git

git remove -v

## sync daily befor updates
git fetch upstream
git checkout main
git merge upstream/main
