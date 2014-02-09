#! /bin/bash

set -e
FILE="presentation/script.vim"

sed -i'' -e '1s/^/set norelativenumber\
/' $FILE

sed -i'' -e '1s/^/set nolist\
/' $FILE
