#!/bin/bash

echo "nameserver 8.8.8.8" | tee /etc/resolv.conf >/dev/nul

# will make actions into future plan

cd ../ 

npm run build

cd docs/dist