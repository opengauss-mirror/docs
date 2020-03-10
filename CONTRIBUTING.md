# How to contribute

### Brief Introduction

Before you start, NOTICE that ```master``` branch is development version. ```stable``` branch
provided for customers and users. So all code modifications SHOULD be submitted to
```master``` branch, ```stable``` branch won't accept any commits.

This repository is integrated by website which will provide the final outline, so please only maintain docs in this repository.
anything others like styles, js are maintained in website as a combined hugo theme.

Contents oranganized by hugo book  which is a framework helping build our own book.
please refer to hugo book [website](https://github.com/alex-shpak/hugo-book) for more detailed information.

All files are written with MarkDown syntax, please note: If you want to add internal links,
be careful to point to the .html pages corresponding to the .md pages of the folder.

### Debug local

This doc only provides running test on linux, please prepare linux server before running 
following commands.

1. Install hugo on server

hugo can be installed easily after nodejs is ready.

```
curl -L https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_extended_0.56.3_Linux-64bit.tar.gz | tar -xz && \
    mv hugo /usr/local/bin/
```

2. Running this repository locally

```
hugo serve --bind 0.0.0.0 --port 80 --baseUrl /
```

The website will serving on http://your-server-ip:80


### Debug with docker

1. Build Image

```
docker build -t docs:v0.0.1 .
```

note: here ```docs``` is the image name, you can change it as you need.

2. Running in container

```
docker run -p 80:80 -d docs:v0.0.1 > docs.pid
```

The website will serving on http://your-server-ip:80

3. Stopping the container

```
docker rm -f `cat docs.pid` && rm -f docs.pid
```

***Note***: 
The defalut language(en) will serving on http://your-server-ip/
Other language(zh) will serving on http://your-server-ip/zh

### Add/Modify file

Before openning a PR, running locally and have a check would be good step that will help
your commits be merged quickly.

There are two kinds of Markdown file, one is the content files which locates in ```content/docs``` folder.
the other one is the menu file which locates in ```content/menu``` folder. please remember to update menu if
adding new file.

Note: menu file home file name must be named ```home.md```.

## Getting help

- IRC: TODO 
- Mail: TODO  

## Report issues

A great way to contribute to the project is to send a detailed report when you encounter an issue. We always appreciate a well-written, thorough bug report and feature propose, and will thank you for it!

### Issues format

When reporting issues, refer to this format:

- Is this a BUG REPORT or FEATURE REQUEST?
- What happened?
- What you expected to happen?
- What happened?
- How to reproduce it (as minimally and precisely as possible)
- Anything else we need to know?
- Environment

See more about [ISSUE_TEMPLATE](.github/ISSUE_TEMPLATE.md).

## Submit pull requests

If you are a beginner and expect this project as the gate to open source world, this tutorial is one of the best
choices for you. Just follow the guidance and you will find the pleasure to becoming a contributor.

### Step 1: Fork repository

Before making modifications of this project, you need to make sure that this project have been forked to your own
repository. It means that there will be parallel development between this repo and your own repo, so be careful
to avoid the inconsistency between these two repos.

### Step 2: Clone the remote repository

If you want to download the code to the local machine, ```git``` is the best way:
```
git clone https://your_repo_url/projectname.git
```

### Step 3: Develop code locally

To avoid inconsistency between multiple branches, we SUGGEST checking out to a new branch:
```
git checkout -b new_branch_name origin/master
```
Then you can change the code arbitrarily.

### Step 4: Push the code to the remote repository

After updating the code, you should push the update in the formal way:
```
git add .
git status (Check the update status)
git commit -m "Your commit title"
git commit --amend (Add the concrete description of your commit)
git push origin new_branch_name
```

### Step 5: Pull a request to repository

In the last step, your need to pull a compare request between your new branch and development branch. After
finishing the pull request, the CI will be automatically set up for building test.

### Pull requests format

When submitting pull requests, refer to this format:

- What this PR does / why we need it?
- Which issue this PR fixes?
- Special notes for your reviewer
- Release note

See more about [PULL_REQUEST_TEMPLATE](.github/PULL_REQUEST_TEMPLATE.md).

### Code style

```TO BE DEFINED```







