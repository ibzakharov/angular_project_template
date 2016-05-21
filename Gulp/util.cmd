@echo off

if %1% == typings (
echo                     ******************************
echo                     ********** TYPINGS **********
echo                     ******************************
call typings install dt~%2% --global --save
)

goto :end
)

if %1% == install (
echo                     ******************************
echo                     ****** INSTALL PACKAGES ******
echo                     ******************************
if exist package.json (
call npm install
)
if exist bower.json (
call bower install
)
if exist typings.json (
call typings install
)
goto :end
)

:end