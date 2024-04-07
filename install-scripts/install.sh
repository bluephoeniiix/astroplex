#!/bin/bash

echo "nameserver 8.8.8.8" | tee /etc/resolv.conf >/dev/null

apt-get update -y &&
    apt-get install wget curl git nano zsh -y &&
    rm -rf /var/lib/apt/lists/*

apt-get upgrade -y

# echo "n" | sh -c "$(wget https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh -O -)"

wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash

echo 'export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"' | tee -a ~/.bashrc >/dev/null
echo '[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm' | tee -a ~/.bashrc >/dev/null

export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

if [ -n "$NVM_DIR" ] && [ -s "$NVM_DIR/nvm.sh" ]; then
    echo -e "\e[34m nvm installations complete \e[0m"
else
    echo -e "\e[31m nvm failed \e[0m"
    exec bash
fi

nvm install node && npm install pnpm -g

git clone https://github.com/bluephoeniiix/astroplex.git