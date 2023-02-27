# Atri framework Assignment

* Atri is a full-stack web development framework.
* To know more about Atri framework visit this link: https://docs.atrilabs.com/

### Installation guide
* Refer to this doc for Prerequisites:  https://docs.atrilabs.com/getting-started/installation/install_prereqs
* To run the project: https://docs.atrilabs.com/getting-started/installation/install_with_pipenv

### Errors that can occur while installing
* Error: 
  - How to fix error ‘pipenv’ is not recognized as an internal or external command, operable program or batch file
* Solution: 
  * First, remove your current version of virtualenv: pip uninstall virtualenv
  * Then, remove your current version of pipenv: pip uninstall pipenv
  * When you are asked Proceed (y/n)? just enter y. This will give you a clean slate.
  * Finally, you can once again install pipenv and its dependencies: pip install pipenv
  * Check installation with pipenv --version
