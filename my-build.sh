#!/bin/bash

DESDIR=../blog-nuxt-production
cd ${DESDIR}/
rm -rf ./* ./.*
cd ../blog-nuxt/

#copy package.json
cp -r package.json ${DESDIR}

#copy package.json
cp -r nuxt.config.js ${DESDIR}

#copy package.json
cp -r static ${DESDIR}

#copy package.json
cp -r .nuxt/ ${DESDIR}/.nuxt
